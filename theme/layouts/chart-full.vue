<!--
  Layout: chart-full — диаграмма во всё окно.
  Правило из ТЗ: слайды с графиками остаются чистыми. Только рамка окна,
  спокойный фон и современная диаграмма — никакой текстуры и мемов.
-->
<script setup lang="ts">
import OsTitleBar from '../components/OsTitleBar.vue'
import OsStatusBar from '../components/OsStatusBar.vue'
import { useWindowTitle } from '../composables/windowTitle'
import FigCaption from '../components/FigCaption.vue'

const props = defineProps<{
  title?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
  status?: string
  tone?: 'platform' | 'legacy' | 'agent' | 'muted'
  figNumber?: string | number
  figLabel?: string
  windowTitle?: string
  frontmatter?: Record<string, any>
}>()

const barText = useWindowTitle(props)
</script>

<template>
  <div class="slidev-layout layout-window layout-chart-full">
    <div class="os-window">
      <OsTitleBar :text="barText" :tone="tone" />

      <div class="cf-body">
        <div class="cf-stage">
          <slot name="chart">
            <slot />
          </slot>
        </div>

        <FigCaption :fig-number="figNumber" :fig-label="figLabel" />

        <div class="cf-source">
          <slot name="source" />
        </div>
      </div>

      <OsStatusBar
        :section-number="sectionNumber"
        :doc-number="docNumber"
        :unit="unit"
        :status="status"
      />
    </div>
  </div>
</template>

<style scoped>
.cf-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-5) var(--space-3);
}

.cf-stage {
  flex: 1;
  min-height: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.cf-stage :deep(svg),
.cf-stage :deep(.mermaid) {
  max-width: 100%;
  max-height: 100%;
}

.cf-source:not(:empty) {
  flex-shrink: 0;
  padding-top: var(--space-1);
  font-size: var(--text-xs);
  line-height: 1.4;
  color: var(--muted);
}

.cf-source :deep(p) {
  margin: 0;
}
</style>

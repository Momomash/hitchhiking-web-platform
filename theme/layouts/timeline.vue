<!--
  Layout: timeline — хронология внутри окна.
  Разметку .tl-entry слайд передаёт сам (см. 2-12), стили для неё лежат
  в глобальном styles/index.css: до слот-контента scoped-правила не доезжают.
-->
<script setup lang="ts">
import OsTitleBar from '../components/OsTitleBar.vue'
import OsStatusBar from '../components/OsStatusBar.vue'
import { useWindowTitle } from '../composables/windowTitle'

const props = defineProps<{
  title?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
  status?: string
  tone?: 'platform' | 'legacy' | 'agent' | 'muted'
  direction?: 'horizontal' | 'vertical'
  windowTitle?: string
  frontmatter?: Record<string, any>
}>()

const barText = useWindowTitle(props)
</script>

<template>
  <div class="slidev-layout layout-window layout-timeline">
    <div class="os-window">
      <OsTitleBar :text="barText" :tone="tone" />

      <div class="tl-body">
        <div
          class="tl-track"
          :class="direction === 'vertical' ? 'tl-track--vertical' : 'tl-track--horizontal'"
        >
          <slot />
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
.tl-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-5) var(--space-5);
  overflow: hidden;
}
</style>

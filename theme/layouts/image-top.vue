<!-- Layout: image-top — иллюстрация сверху, текст под ней. -->
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
  <div class="slidev-layout layout-window layout-image-top">
    <div class="os-window">
      <OsTitleBar :text="barText" :tone="tone" />

      <div class="os-window__body os-window__body--top it-body">
        <figure class="it-figure">
          <div class="it-figure__frame">
            <slot name="image" />
          </div>
          <FigCaption :fig-number="figNumber" :fig-label="figLabel" />
        </figure>

        <div class="it-text">
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
.it-body {
  padding: var(--space-3) var(--space-5) var(--space-4);
  gap: var(--space-3);
}

.it-figure {
  margin: 0;
  flex: 1 1 52%;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.it-figure__frame {
  flex: 1;
  min-height: 0;
  display: grid;
  place-items: center;
  padding: 4px;
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.14);
  overflow: hidden;
}

.it-figure__frame :deep(img) {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.it-text {
  flex-shrink: 0;
  min-height: 0;
  overflow: hidden;
}
</style>

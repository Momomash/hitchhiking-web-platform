<!-- Layout: image-left — иллюстрация слева, текст справа. -->
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
  <div class="slidev-layout layout-window layout-image-left">
    <div class="os-window">
      <OsTitleBar :text="barText" :tone="tone" />

      <div class="os-window__body os-window__body--top ir-body">
        <div class="ir-grid">
          <figure class="ir-figure">
            <div class="ir-figure__frame">
              <slot name="image" />
            </div>
            <FigCaption :fig-number="figNumber" :fig-label="figLabel" />
            <div class="ir-figure__caption">
              <slot name="caption" />
            </div>
          </figure>
          <div class="ir-text">
            <slot />
          </div>
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
.ir-body {
  padding: var(--space-4) var(--space-5);
}

.ir-grid {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
  gap: var(--space-5);
  align-items: center;
}

.ir-text {
  min-width: 0;
}

.ir-figure {
  margin: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
  max-height: 100%;
}

/* «Вдавленная» рамка вокруг картинки — так выглядели превью в старых панелях */
.ir-figure__frame {
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

.ir-figure__frame :deep(img) {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.ir-figure__caption:not(:empty) {
  font-size: var(--text-xs);
  color: var(--muted);
  padding-top: var(--space-1);
}
</style>

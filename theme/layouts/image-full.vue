<!--
  Layout: image-full — картинка во всё окно, подпись поверх.
  Используется для полноэкранных скриншотов и мемов: Space Jam, Million Dollar
  Homepage, «нельзя», библиотека, Chrome vs Firefox.
-->
<script setup lang="ts">
import OsTitleBar from '../components/OsTitleBar.vue'
import OsStatusBar from '../components/OsStatusBar.vue'
import { useWindowTitle } from '../composables/windowTitle'

const props = defineProps<{
  title?: string
  classification?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
  status?: string
  tone?: 'platform' | 'legacy' | 'agent' | 'muted'
  windowTitle?: string
  frontmatter?: Record<string, any>
}>()

const barText = useWindowTitle(props)
</script>

<template>
  <div class="slidev-layout layout-window layout-image-full">
    <div class="os-window">
      <OsTitleBar :text="barText" :tone="tone" />

      <div class="if-stage">
        <div class="if-image">
          <slot name="image" />
        </div>

        <div class="if-overlay">
          <slot />
          <div class="if-subtitle">
            <slot name="subtitle" />
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
.if-stage {
  position: relative;
  flex: 1;
  min-height: 0;
  background: var(--paper);
  overflow: hidden;
}

.if-image {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}

.if-image :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Подпись лежит поверх картинки на «плашке» — читается на любом скриншоте */
.if-overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: var(--space-3) var(--space-5);
  background: linear-gradient(
    180deg,
    rgba(16, 24, 32, 0) 0%,
    rgba(16, 24, 32, 0.72) 45%,
    rgba(16, 24, 32, 0.86) 100%
  );
  color: #fff;
}

.if-overlay:not(:has(> *:not(.if-subtitle):not(:empty))) {
  background: none;
}

.if-overlay :deep(h1),
.if-overlay :deep(h2),
.if-overlay :deep(h3),
.if-overlay :deep(p) {
  color: #fff;
  border: none;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.55);
}

.if-overlay :deep(h1) {
  font-size: var(--text-lg);
}

.if-subtitle:not(:empty) {
  font-size: var(--text-sm);
  color: #cfdae4;
  padding-top: var(--space-1);
}
</style>

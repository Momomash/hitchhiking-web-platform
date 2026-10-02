<!--
  Layout: image-full — картинка во всё окно, подпись поверх.
  Используется для полноэкранных скриншотов и мемов: Space Jam, Million Dollar
  Homepage, «нельзя», библиотека, Chrome vs Firefox.
-->
<script setup lang="ts">
import OsTitleBar from '../components/OsTitleBar.vue'
import OsStatusBar from '../components/OsStatusBar.vue'
import OsUrlBar from '../components/OsUrlBar.vue'
import { useWindowTitle } from '../composables/windowTitle'

const props = defineProps<{
  title?: string
  classification?: string
  sectionNumber?: string
  docNumber?: string
  unit?: string
  status?: string
  tone?: 'origin' | 'growth' | 'craft' | 'standards' | 'legacy' | 'agent' | 'muted'
  windowTitle?: string
  /* Если слайд показывает сайт, а не изображение, — во фронтматтере задаётся
     url (и обычно year), и окно получает адресную строку браузера. */
  url?: string
  year?: string
  frontmatter?: Record<string, any>
}>()

const barText = useWindowTitle(props)
</script>

<template>
  <div class="slidev-layout layout-window layout-image-full" :class="tone && `tone-${tone}`">
    <div class="os-window">
      <OsTitleBar :text="barText" :tone="tone" :icon="url ? '◱' : '▤'" />

      <OsUrlBar v-if="url" :url="url" :year="year" />

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
/* Сцена — вдавленная область просмотра, а не «дырка» в слайде.
   Светлое поле по краям нужно не для красоты: половина картинок здесь тёмные
   (nelzy, library, Space Jam, A2UI), и без поля они растекались до рамки —
   на проекторе это давало перепад яркости на каждом входе и выходе. */
.if-stage {
  position: relative;
  flex: 1;
  min-height: 0;
  margin: var(--space-3);
  background: var(--chrome-deep);
  border: 1px solid var(--field-line);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}

.if-image {
  position: absolute;
  inset: 3px;
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

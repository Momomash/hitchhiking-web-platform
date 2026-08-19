<!--
  Layout: two-column — два окна одной системы рядом.
  Поддерживает и слоты left/right, и синтаксис `::right::`, и default-слот
  как заголовок над колонками — всё это встречается в деке.
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
  leftHeader?: string
  rightHeader?: string
  windowTitle?: string
  frontmatter?: Record<string, any>
}>()

const barText = useWindowTitle(props)
</script>

<template>
  <div class="slidev-layout layout-window layout-two-column">
    <div class="os-window">
      <OsTitleBar :text="barText" :tone="tone" />

      <div class="os-window__body os-window__body--top tc-body">
        <!--
          В деке две разновидности двухколоночных слайдов:
          1) явные слоты left/right — тогда default-слот идёт лидом над колонками;
          2) default-слот + `::right::` — тогда default И ЕСТЬ левая колонка
             (так работает встроенный two-cols в Slidev).
          Без этой развилки второй вариант разъезжался: текст сверху, картинка под ним.
        -->
        <div v-if="$slots.left && $slots.default" class="tc-lead">
          <slot />
        </div>

        <div class="tc-grid">
          <div class="tc-col">
            <div v-if="leftHeader" class="tc-col__header">{{ leftHeader }}</div>
            <slot v-if="$slots.left" name="left" />
            <slot v-else />
          </div>
          <div class="tc-col">
            <div v-if="rightHeader" class="tc-col__header">{{ rightHeader }}</div>
            <slot name="right" />
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
.tc-body {
  padding: var(--space-4) var(--space-5);
}

.tc-lead:empty {
  display: none;
}

.tc-grid {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-5);
  align-items: start;
}

.tc-col {
  min-width: 0;
  min-height: 0;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

/* Картинка в колонке не должна выдавливать колонку за пределы окна */
.tc-col :deep(img),
.tc-col :deep(video) {
  min-height: 0;
  max-height: 100%;
  object-fit: contain;
}

/* Длинные листинги (например JSON у A2UI) сами подгоняются по высоте колонки:
   иначе конец блока обрезается нижней границей окна. */
.tc-col :deep(.slidev-code) {
  font-size: clamp(0.50rem, 0.80vw, 0.64rem);
  line-height: 1.34;
  max-height: 100%;
  overflow: hidden;
}

.tc-col__header {
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--muted);
  border-bottom: 1px solid var(--chrome-line);
  padding-bottom: var(--space-1);
  margin-bottom: var(--space-3);
}
</style>

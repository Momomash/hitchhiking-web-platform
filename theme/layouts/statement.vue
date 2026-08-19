<!--
  Layout: statement — системное сообщение по центру рабочего стола.
  Хрома минимум: у сильной фразы не должно быть визуальных конкурентов.
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
  windowTitle?: string
  frontmatter?: Record<string, any>
}>()

const barText = useWindowTitle(props, 'SYSTEM MESSAGE')
</script>

<template>
  <div class="slidev-layout layout-window layout-statement">
    <div class="os-window">
      <OsTitleBar :text="barText" :tone="tone" />
      <div class="os-window__body st-body">
        <div class="st-inner">
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
.st-body {
  align-items: center;
  padding: var(--space-5) var(--space-7);
}

.st-inner {
  width: 100%;
  max-width: 46rem;
  text-align: center;
}
</style>

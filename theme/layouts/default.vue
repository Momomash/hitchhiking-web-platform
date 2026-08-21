<!-- Layout: default — контентное окно системы. Основная рабочая лошадка дека. -->
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

const barText = useWindowTitle(props)
</script>

<template>
  <div class="slidev-layout layout-window layout-default">
    <div class="os-window">
      <OsTitleBar :text="barText" :tone="tone" />
      <div class="os-window__body os-window__body--top">
        <slot />
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

<!--
  SystemWindow — самостоятельное окно внутри слайда.
  Ставится прямо в markdown там, где нужно показать «ещё одно окно системы»
  (например DESIGN.EXE и BACKEND.SVC рядом).

  <SystemWindow title="WEB PLATFORM — REQUIREMENTS.LOG" status="UPTIME: 36+ YEARS">
    контент
  </SystemWindow>
-->
<script setup lang="ts">
import OsTitleBar from './OsTitleBar.vue'

defineProps<{
  title?: string
  icon?: string
  tone?: 'platform' | 'legacy' | 'agent' | 'muted'
  status?: string
  align?: 'top' | 'center'
}>()
</script>

<template>
  <div class="os-window system-window">
    <OsTitleBar :text="title" :icon="icon" :tone="tone" />
    <div class="os-window__body" :class="{ 'os-window__body--top': align !== 'center' }">
      <slot />
    </div>
    <div v-if="status" class="os-statusbar">
      <span class="os-statusbar__cell">{{ status }}</span>
    </div>
  </div>
</template>

<style scoped>
.system-window {
  margin-bottom: var(--space-3);
}

.system-window :deep(.os-window__body) {
  padding: var(--space-3) var(--space-4);
}
</style>

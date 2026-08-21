<!--
  Layout: end — финальное окно. Система не выключается: uptime продолжает идти.
  Это последний визуальный аргумент доклада, поэтому «завершения» здесь нет.
-->
<script setup lang="ts">
import OsTitleBar from '../components/OsTitleBar.vue'

defineProps<{
  classification?: string
  docNumber?: string
  unit?: string
  contact?: string
  photo?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-window layout-end">
    <div class="os-window end-win">
      <OsTitleBar text="WEB PLATFORM.EXE — STILL RUNNING" />

      <div class="end-body">
        <div class="end-main">
          <h1 class="end-title">
            <slot name="title">Спасибо</slot>
          </h1>
          <div class="end-meta">
            <span>{{ classification ?? docNumber }}</span>
            <span v-if="unit" class="end-unit">{{ unit }}</span>
          </div>
        </div>

        <div class="end-contact">
          <slot name="contact" />
        </div>
      </div>

      <div class="os-statusbar">
        <span class="os-statusbar__cell">STATUS: RUNNING</span>
        <span class="os-statusbar__cell">UPTIME: 36+ YEARS</span>
        <span class="os-statusbar__spacer" />
        <span class="os-statusbar__cell">SHUTDOWN: NOT AVAILABLE</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.end-win {
  flex: 1;
  min-height: 0;
}

.end-body {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-5) var(--space-7);
}

.end-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.4vw, 3.4rem);
  font-weight: 700;
  line-height: 1.05;
  color: var(--ink);
  margin: 0 0 var(--space-3);
  border: none;
  padding: 0;
}

.end-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--muted);
}

.end-unit {
  color: var(--platform);
}

.end-contact {
  flex-shrink: 0;
  padding: 6px;
  background: var(--window);
  border: 1px solid var(--line);
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.end-contact :deep(img) {
  display: block;
  border-radius: 0;
}
</style>

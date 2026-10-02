<!--
  OsGroupBox — группа с легендой из системного диалога.
  Базовая замена «карточке»: рамка с подписью, сидящей верхом на кромке.

  Тон кодирует смысл теми же цветами, что и весь дек:
  danger — прошлое/сломано, success — настоящее/работает, legacy — режим
  совместимости, platform — стандарт, agent — эксперименты.

  <OsGroupBox legend="До 2004" tone="danger">
    - Каждое действие — новая страница
  </OsGroupBox>
-->
<script setup lang="ts">
defineProps<{
  legend?: string
  tone?: 'danger' | 'success' | 'legacy' | 'platform' | 'agent'
}>()
</script>

<template>
  <div class="os-groupbox" :class="tone ? `os-groupbox--${tone}` : undefined">
    <span v-if="legend" class="os-groupbox__legend">{{ legend }}</span>
    <slot />
  </div>
</template>

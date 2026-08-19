<!--
  OsTitleBar — заголовок окна.
  Тон окна кодирует смысл: platform (синий) / legacy (янтарный) / agent (фиолетовый)
  / muted (неактивное окно).
-->
<script setup lang="ts">
// withDefaults обязателен: Vue приводит отсутствующий Boolean-проп к false,
// поэтому без явного дефолта кнопки окна не отрисовались бы никогда.
withDefaults(
  defineProps<{
    text?: string
    icon?: string
    tone?: 'platform' | 'legacy' | 'agent' | 'muted'
    controls?: boolean
  }>(),
  { controls: true },
)
</script>

<template>
  <div
    class="os-titlebar"
    :class="{
      'os-titlebar--legacy': tone === 'legacy',
      'os-titlebar--agent': tone === 'agent',
      'os-titlebar--muted': tone === 'muted',
    }"
  >
    <span class="os-titlebar__icon">{{ icon ?? '◈' }}</span>
    <span class="os-titlebar__text">{{ text }}</span>
    <span class="os-titlebar__spacer" />
    <span v-if="controls" class="os-titlebar__controls">
      <span class="os-titlebar__btn">_</span>
      <span class="os-titlebar__btn">□</span>
      <span class="os-titlebar__btn">×</span>
    </span>
  </div>
</template>

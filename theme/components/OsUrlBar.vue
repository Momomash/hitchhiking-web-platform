<!--
  OsUrlBar — панель навигации браузера: кнопки «назад/вперёд/обновить»,
  вдавленная адресная строка и год.

  Вынесена отдельным компонентом, потому что ею пользуются двое: <BrowserFrame>
  и лейаут image-full. Год в рамке — рабочая деталь доклада: зал по нему
  считывает эпоху, не дожидаясь, пока спикер её назовёт.
-->
<script setup lang="ts">
defineProps<{
  url?: string
  year?: string
}>()
</script>

<template>
  <div class="os-urlbar">
    <span class="os-urlbar__nav">◀</span>
    <span class="os-urlbar__nav">▶</span>
    <span class="os-urlbar__nav">⟳</span>
    <span class="os-urlbar__url">{{ url ?? 'about:blank' }}</span>
    <span v-if="year" class="os-urlbar__year">{{ year }}</span>
  </div>
</template>

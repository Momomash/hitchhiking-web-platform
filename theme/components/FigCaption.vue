<!--
  FigCaption — подпись к иллюстрации/диаграмме. Заменяет figNumber/figLabel
  прежней темы, чтобы существующий frontmatter слайдов продолжал работать.
-->
<script setup lang="ts">
defineProps<{
  figNumber?: string | number
  figLabel?: string
}>()
</script>

<template>
  <div v-if="figNumber || figLabel" class="figcap">
    <span v-if="figNumber" class="figcap__num">FIG. {{ figNumber }}</span>
    <span v-if="figLabel" class="figcap__label">{{ figLabel }}</span>
  </div>
</template>

<style scoped>
.figcap {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  flex-shrink: 0;
  padding-top: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  color: var(--muted);
  text-transform: uppercase;
}

.figcap__num {
  color: var(--platform);
  font-weight: 600;
  flex-shrink: 0;
}

.figcap__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

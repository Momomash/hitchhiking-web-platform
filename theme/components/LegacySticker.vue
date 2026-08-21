<!--
  LegacySticker — редкий акцент: «DO NOT DELETE», «deprecated but supported».
  Максимум один на слайд, иначе перестаёт читаться как акцент.

  <LegacySticker>DO NOT DELETE</LegacySticker>
-->
<script setup lang="ts">
defineProps<{
  tone?: 'legacy' | 'danger' | 'success'
  rotate?: boolean
}>()
</script>

<template>
  <span
    class="ls"
    :class="[`ls--${tone ?? 'legacy'}`, { 'ls--rotate': rotate !== false }]"
  >
    <slot />
  </span>
</template>

<style scoped>
.ls {
  display: inline-block;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  padding: 3px 10px;
  border: 2px solid var(--legacy);
  color: var(--legacy);
  background: var(--legacy-pale);
}

.ls--rotate {
  transform: rotate(-3deg);
}

.ls--danger {
  border-color: var(--danger);
  color: var(--danger);
  background: var(--danger-pale);
}

.ls--success {
  border-color: var(--success);
  color: var(--success);
  background: var(--success-pale);
}
</style>

<!--
  RequirementCard — «пользователи захотели X → платформа ответила Y».
  Ровно та пара, на которой держится вся глава 2, поэтому у неё свой компонент.

  <RequirementCard demand="частичные обновления" response="AJAX" effect="ручное состояние" year="2004" />
-->
<script setup lang="ts">
defineProps<{
  demand?: string
  response?: string
  effect?: string
  year?: string
  label?: string
}>()
</script>

<template>
  <div class="rc">
    <div class="os-titlebar">
      <span class="os-titlebar__icon">!</span>
      <span class="os-titlebar__text">{{ label ?? 'NEW REQUIREMENT DETECTED' }}</span>
      <span class="os-titlebar__spacer" />
      <span v-if="year" class="rc__year">{{ year }}</span>
    </div>

    <dl class="rc__rows">
      <div class="rc__row">
        <dt>User demand</dt>
        <dd>{{ demand }}</dd>
      </div>
      <div class="rc__row rc__row--response">
        <dt>Platform response</dt>
        <dd>{{ response }}</dd>
      </div>
      <div v-if="effect" class="rc__row rc__row--effect">
        <dt>Side effect</dt>
        <dd>{{ effect }}</dd>
      </div>
    </dl>

    <div class="rc__extra">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.rc {
  background: var(--window);
  border: 1px solid var(--title-edge);
  border-radius: var(--win-radius);
  box-shadow: 2px 2px 0 rgba(45, 63, 79, 0.14);
  overflow: hidden;
}

.rc__year {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  padding: 1px 6px;
  background: rgba(255, 255, 255, 0.22);
}

.rc__rows {
  margin: 0;
  padding: 0;
}

.rc__row {
  display: grid;
  grid-template-columns: 148px 1fr;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px solid rgba(183, 196, 207, 0.6);
}

.rc__row:last-child {
  border-bottom: none;
}

.rc__row dt {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--muted);
  align-self: center;
}

.rc__row dd {
  margin: 0;
  font-family: var(--font-display);
  font-size: var(--text-md);
  font-weight: 600;
  color: var(--ink);
}

.rc__row--response {
  background: var(--success-pale);
}

.rc__row--response dd {
  color: var(--success);
}

.rc__row--effect {
  background: var(--legacy-pale);
}

.rc__row--effect dd {
  color: var(--legacy);
  font-size: var(--text-base);
  font-weight: 500;
}

.rc__extra:not(:empty) {
  padding: var(--space-2) var(--space-4);
  border-top: 1px solid var(--chrome-line);
  background: var(--chrome);
  font-size: var(--text-sm);
}
</style>

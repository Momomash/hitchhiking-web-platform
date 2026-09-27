<!--
  AgentPrompt — диалог запроса разрешений, но пользователь в нём не человек.
  Ключ финала: новый пользователь приходит не в новый интернет, а в тот же
  старый продукт — поэтому окно остаётся системным, меняется только тон.

  <AgentPrompt user="AGENT" :permissions="['Read page semantics', 'Call declared actions']" />
-->
<script setup lang="ts">
defineProps<{
  user?: string
  title?: string
  permissions?: string[]
  allow?: string
  deny?: string
}>()
</script>

<template>
  <div class="ap">
    <!-- Тон берётся от слайда (класс tone-* на корне лейаута), как у всех
         окон дека: глава агентов и так идёт в фиолетовом. -->
    <div class="os-titlebar">
      <span class="os-titlebar__icon">◆</span>
      <span class="os-titlebar__text">{{ title ?? 'NEW USER DETECTED' }}</span>
      <span class="os-titlebar__spacer" />
      <span class="os-titlebar__controls">
        <span class="os-titlebar__btn">×</span>
      </span>
    </div>

    <div class="ap__body">
      <div class="ap__user">{{ user ?? 'AGENT' }}</div>

      <div v-if="permissions?.length" class="ap__perms">
        <div class="ap__perms-label">Permissions requested</div>
        <div v-for="p in permissions" :key="p" class="ap__perm">
          <span class="ap__box" />
          <span>{{ p }}</span>
        </div>
      </div>

      <div class="ap__extra">
        <slot />
      </div>
    </div>

    <div v-if="allow || deny" class="ap__buttons">
      <span v-if="allow" class="os-btn ap__btn--primary">{{ allow }}</span>
      <span v-if="deny" class="os-btn">{{ deny }}</span>
    </div>
  </div>
</template>

<style scoped>
.ap {
  background: var(--chrome);
  border: 1px solid #55407f;
  border-radius: var(--win-radius);
  box-shadow:
    2px 2px 0 rgba(85, 64, 127, 0.20),
    10px 14px 26px rgba(50, 35, 80, 0.18);
  overflow: hidden;
}

.ap__body {
  padding: var(--space-4) var(--space-5);
}

.ap__user {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 700;
  letter-spacing: var(--tracking-wider);
  color: var(--purple);
  margin-bottom: var(--space-3);
}

.ap__perms-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--muted);
  margin-bottom: var(--space-2);
}

.ap__perm {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-base);
  margin-bottom: var(--space-1);
  color: var(--ink);
}

/* Чекбокс запроса прав — тот же, что у списков дека, но НЕ отмеченный:
   разрешения ещё не выданы, решение принимает зал. */
.ap__box {
  flex-shrink: 0;
  width: 13px;
  height: 13px;
  background: var(--window);
  border: 1px solid var(--field-line);
  box-shadow:
    inset 1px 1px 0 rgba(0, 0, 0, 0.13),
    inset -1px -1px 0 rgba(255, 255, 255, 0.9);
}

.ap__extra:not(:empty) {
  margin-top: var(--space-3);
  font-size: var(--text-sm);
  color: var(--ink-soft);
}

.ap__buttons {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: 0 var(--space-5) var(--space-4);
}

/* «Разрешить» — кнопка по умолчанию этого диалога, но в тоне агента,
   а не платформы: решение про нового пользователя, а не про стандарт. */
.ap__btn--primary {
  border-color: var(--purple);
  color: var(--purple);
  font-weight: 700;
}
</style>

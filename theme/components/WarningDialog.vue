<!--
  WarningDialog — модальный диалог системы.
  Только для действительно смысловых мест: «нельзя удалить», document.all,
  браузерные войны, конфликт вендоров. Если он появится на каждом слайде,
  он перестанет работать.

  <WarningDialog title="COMPATIBILITY MODE ENABLED" reason="Someone depends on this." since="1999" />
-->
<script setup lang="ts">
defineProps<{
  title?: string
  tone?: 'legacy' | 'danger' | 'platform'
  icon?: string
  ok?: string
  cancel?: string
  okDisabled?: boolean
}>()
</script>

<template>
  <div class="wd" :class="`wd--${tone ?? 'legacy'}`">
    <div class="os-titlebar" :class="tone === 'platform' ? '' : 'os-titlebar--legacy'">
      <span class="os-titlebar__icon">⚠</span>
      <span class="os-titlebar__text">{{ title ?? 'WARNING' }}</span>
      <span class="os-titlebar__spacer" />
      <span class="os-titlebar__controls">
        <span class="os-titlebar__btn">×</span>
      </span>
    </div>

    <div class="wd__body">
      <div class="wd__icon">{{ icon ?? '⚠' }}</div>
      <div class="wd__text">
        <slot />
      </div>
    </div>

    <div v-if="ok || cancel" class="wd__buttons">
      <span v-if="ok" class="wd__btn" :class="{ 'wd__btn--disabled': okDisabled }">
        {{ ok }}
      </span>
      <span v-if="cancel" class="wd__btn">{{ cancel }}</span>
    </div>
  </div>
</template>

<style scoped>
.wd {
  background: var(--chrome);
  border: 1px solid var(--title-edge);
  border-radius: var(--win-radius);
  box-shadow:
    2px 2px 0 rgba(45, 63, 79, 0.18),
    10px 14px 26px rgba(20, 35, 50, 0.18);
  overflow: hidden;
  max-width: 100%;
}

.wd__body {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background: var(--chrome);
}

.wd__icon {
  flex-shrink: 0;
  font-size: 30px;
  line-height: 1;
  color: var(--legacy);
}

.wd--danger .wd__icon {
  color: var(--danger);
}

.wd--platform .wd__icon {
  color: var(--platform);
}

.wd__text {
  min-width: 0;
  font-size: var(--text-base);
  color: var(--ink);
}

.wd__text :deep(p:last-child) {
  margin-bottom: 0;
}

.wd__buttons {
  display: flex;
  justify-content: center;
  gap: var(--space-3);
  padding: 0 var(--space-5) var(--space-4);
  background: var(--chrome);
}

.wd__btn {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 600;
  padding: 3px 18px;
  background: var(--chrome-deep);
  border: 1px solid #fff;
  border-right-color: var(--os-face-dark);
  border-bottom-color: var(--os-face-dark);
  color: var(--ink);
}

/* Задизейбленная кнопка — «ни у кого нет права нажать Merge» */
.wd__btn--disabled {
  color: #9aa6b1;
  text-shadow: 1px 1px 0 #fff;
  border-color: #cfd7de;
  border-right-color: #aab5bf;
  border-bottom-color: #aab5bf;
}
</style>

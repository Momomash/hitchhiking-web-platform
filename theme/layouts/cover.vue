<!--
  Layout: cover — окно web-platform.exe поверх рабочего стола.
  Строки Status / Uptime / Users / Rollback подают главную мысль доклада
  до первого произнесённого слова: продукт всё ещё работает, откатить нельзя.

  Слот image поддержан специально: в прежней теме его не было, и аватар
  на титуле не рендерился вообще.
-->
<script setup lang="ts">
import OsTitleBar from '../components/OsTitleBar.vue'

defineProps<{
  classification?: string
  docNumber?: string
  date?: string
  unit?: string
  uptime?: string
  users?: string
  rollback?: string
  appName?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-window layout-cover">
    <div class="os-window cover-win">
      <OsTitleBar :text="appName ?? 'WEB PLATFORM.EXE'" />

      <div class="cover-body">
        <div class="cover-main">
          <div class="cover-conf">{{ classification ?? docNumber }}</div>

          <slot name="title">
            <slot />
          </slot>

          <div class="cover-subtitle">
            <slot name="subtitle" />
          </div>

          <dl class="cover-spec">
            <div><dt>Status</dt><dd class="ok">still running</dd></div>
            <div><dt>Uptime</dt><dd>{{ uptime ?? '36+ years' }}</dd></div>
            <div><dt>Users</dt><dd>{{ users ?? 'billions' }}</dd></div>
            <div><dt>Rollback</dt><dd class="bad">{{ rollback ?? 'unavailable' }}</dd></div>
          </dl>
        </div>

        <div class="cover-side">
          <slot name="image" />
          <slot name="meta" />
        </div>
      </div>

      <div class="cover-foot">
        <span class="cover-btn">Start presentation</span>
        <span class="cover-spacer" />
        <span class="cover-ver">v{{ date ?? '2026' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover-win {
  flex: 1;
  min-height: 0;
}

.cover-body {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-6);
  align-items: center;
  padding: var(--space-5) var(--space-6);
}

.cover-main {
  min-width: 0;
}

.cover-conf {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--platform);
  margin-bottom: var(--space-3);
}

.cover-subtitle {
  font-size: var(--text-base);
  color: var(--ink-soft);
  margin-bottom: var(--space-4);
}

.cover-subtitle :deep(p) {
  margin: 0;
}

/* Спека продукта — та же таблица, что в любом about-окне */
.cover-spec {
  margin: 0;
  padding: var(--space-3) var(--space-4);
  background: var(--paper);
  border: 1px solid var(--chrome-line);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2px var(--space-5);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  width: fit-content;
}

.cover-spec > div {
  display: flex;
  gap: var(--space-2);
}

.cover-spec dt {
  color: var(--muted);
  min-width: 68px;
}

.cover-spec dd {
  margin: 0;
  color: var(--ink);
  font-weight: 600;
}

.cover-spec dd.ok {
  color: var(--success);
}

.cover-spec dd.bad {
  color: var(--danger);
}

.cover-side {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.cover-side :deep(img) {
  border: 1px solid var(--chrome-line);
  box-shadow: 2px 2px 0 rgba(45, 63, 79, 0.14);
}

.cover-foot {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-shrink: 0;
  padding: var(--space-2) var(--space-4);
  background: var(--chrome);
  border-top: 1px solid var(--chrome-line);
}

.cover-btn {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 600;
  padding: 3px 16px;
  background: var(--chrome-deep);
  border: 1px solid #fff;
  border-right-color: var(--os-face-dark);
  border-bottom-color: var(--os-face-dark);
  /* Пунктирная рамка фокуса — деталь, по которой эпоха читается мгновенно */
  outline: 1px dotted var(--ink-soft);
  outline-offset: 2px;
  color: var(--ink);
}

.cover-spacer {
  flex: 1;
}

.cover-ver {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--muted);
}
</style>

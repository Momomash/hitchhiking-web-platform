<!--
  BrowserFrame — окно браузера с табами и адресной строкой.
  Для слайдов, где показываем сам веб: первый сайт, Space Jam, UA-строка,
  скриншоты спеки. Год в статус-баре — чтобы зал сразу считывал эпоху.

  <BrowserFrame url="http://info.cern.ch/hypertext/WWW/TheProject.html" year="1991">
    контент
  </BrowserFrame>
-->
<script setup lang="ts">
defineProps<{
  url?: string
  tab?: string
  year?: string
  status?: string
  tone?: 'platform' | 'legacy'
}>()
</script>

<template>
  <div class="os-window browser-frame">
    <div
      class="os-titlebar"
      :class="{ 'os-titlebar--legacy': tone === 'legacy' }"
    >
      <span class="os-titlebar__icon">◱</span>
      <span class="os-titlebar__text">{{ tab ?? 'Web Browser' }}</span>
      <span class="os-titlebar__spacer" />
      <span class="os-titlebar__controls">
        <span class="os-titlebar__btn">_</span>
        <span class="os-titlebar__btn">□</span>
        <span class="os-titlebar__btn">×</span>
      </span>
    </div>

    <div class="bf-toolbar">
      <span class="bf-nav">◀</span>
      <span class="bf-nav">▶</span>
      <span class="bf-nav">⟳</span>
      <span class="bf-url">{{ url ?? 'about:blank' }}</span>
      <span v-if="year" class="bf-year">{{ year }}</span>
    </div>

    <div class="os-window__body os-window__body--top bf-body">
      <slot />
    </div>

    <div v-if="status !== ''" class="os-statusbar">
      <span class="os-statusbar__cell">{{ status ?? 'Done' }}</span>
    </div>
  </div>
</template>

<style scoped>
/* Хром окна всегда выровнен по левому краю, даже если рамка стоит внутри
   центрированного statement-лейаута: адресная строка по центру читается как ошибка. */
.browser-frame {
  min-height: 0;
  text-align: left;
}

.bf-toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding: 4px 8px;
  background: var(--chrome);
  border-bottom: 1px solid var(--chrome-line);
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--muted);
}

.bf-nav {
  width: 15px;
  height: 14px;
  display: grid;
  place-items: center;
  font-size: 8px;
  background: var(--chrome-deep);
  border: 1px solid #fff;
  border-right-color: var(--os-face-dark);
  border-bottom-color: var(--os-face-dark);
  color: var(--ink-soft);
  flex-shrink: 0;
}

.bf-url {
  flex: 1;
  min-width: 0;
  padding: 2px 6px;
  background: var(--window);
  border: 1px solid var(--line);
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.14);
  color: var(--ink);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bf-year {
  flex-shrink: 0;
  padding: 2px 6px;
  background: var(--legacy-pale);
  border: 1px solid var(--legacy);
  color: var(--legacy);
  font-weight: 600;
}

.bf-body {
  padding: var(--space-3) var(--space-4);
}
</style>

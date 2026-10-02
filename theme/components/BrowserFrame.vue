<!--
  BrowserFrame — окно браузера с табами и адресной строкой.
  Для слайдов, где показываем сам веб: первый сайт, Space Jam, UA-строка,
  скриншоты спеки. Год в статус-баре — чтобы зал сразу считывал эпоху.

  <BrowserFrame url="http://info.cern.ch/hypertext/WWW/TheProject.html" year="1991">
    контент
  </BrowserFrame>
-->
<script setup lang="ts">
import OsUrlBar from './OsUrlBar.vue'

defineProps<{
  url?: string
  tab?: string
  year?: string
  status?: string
  tone?: 'origin' | 'growth' | 'craft' | 'standards' | 'legacy' | 'agent'
  /* media — содержимое занимает всю область просмотра без внутренних полей.
     Для видео и скриншотов «во весь экран браузера»: со стандартными полями
     видео сидело бы в белой рамке, которой в настоящем браузере нет. */
  media?: boolean
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

    <OsUrlBar :url="url" :year="year" />

    <div v-if="media" class="bf-stage">
      <slot />
    </div>

    <div v-else class="os-window__body os-window__body--top bf-body">
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

.bf-body {
  padding: var(--space-3) var(--space-4);
}

/* Область просмотра для медиа — та же вдавленная сцена, что у <Screenshot>
   и <MediaPlayer>, чтобы все три окна читались как одна система. */
/* flex, а НЕ grid: у grid-строки размер авто, и проценты у медиа внутри
   резолвились против неопределённой высоты — видео вылезало в натуральную
   величину и обрезалось рамкой окна. */
.bf-stage {
  flex: 1;
  min-height: 0;
  display: flex;
  padding: 3px;
  background: var(--chrome-deep);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}

.bf-stage :deep(video),
.bf-stage :deep(img) {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  margin: auto;
  object-fit: contain;
  display: block;
  /* рамку даёт сцена — своя у медиа дала бы двойной кант */
  border: none;
  box-shadow: none;
}
</style>

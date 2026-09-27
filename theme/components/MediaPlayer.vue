<!--
  MediaPlayer — видео в окне системного проигрывателя.
  Для картинок эту роль играет <Screenshot>, для сайтов — <BrowserFrame>;
  здесь то же самое для видео, которое показывает само себя, а не сайт.
  Если на видео происходящее В БРАУЗЕРЕ (демо сайта, прокрутка MDN) —
  нужен <BrowserFrame>, иначе зал теряет «это открыто в вебе».

  <MediaPlayer title="early-web.mov">
    <SlidevVideo autoplay autoreset="slide">
      <source src="./assets/mov/cameron1.mov" />
    </SlidevVideo>
  </MediaPlayer>

  Полоса воспроизведения живая — декоративная полоса в окне проигрывателя
  читается как поломка, глаз ждёт, что она поедет. Слушаем timeupdate на сцене
  в фазе ПЕРЕХВАТА: событие не всплывает, но захватывается предком, и поэтому
  полоса работает и со своим <video> (проп src), и с вложенным <SlidevVideo>.
-->
<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    src?: string
    title?: string
    app?: string
    status?: string
    tone?: 'origin' | 'growth' | 'craft' | 'standards' | 'legacy' | 'agent' | 'muted'
    autoplay?: boolean
    loop?: boolean
    muted?: boolean
    controls?: boolean
  }>(),
  {
    app: 'Проигрыватель',
    autoplay: true,
    loop: true,
    muted: true,
    controls: false,
  },
)

const current = ref(0)
const duration = ref(0)

function onTime(e: Event) {
  const v = e.target as HTMLVideoElement
  current.value = v.currentTime
  duration.value = v.duration || 0
}

const progress = computed(() =>
  duration.value ? `${(current.value / duration.value) * 100}%` : '0%',
)

function clock(sec: number) {
  if (!Number.isFinite(sec)) return '0:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

const elapsed = computed(() => clock(current.value))
const total = computed(() => clock(duration.value))
</script>

<template>
  <div class="os-window player">
    <div
      class="os-titlebar"
      :class="{
        'os-titlebar--legacy': tone === 'legacy',
        'os-titlebar--agent': tone === 'agent',
        'os-titlebar--muted': tone === 'muted',
      }"
    >
      <span class="os-titlebar__icon">▶</span>
      <span class="os-titlebar__text">
        <template v-if="title">{{ title }} — </template>{{ app }}
      </span>
      <span class="os-titlebar__spacer" />
      <span class="os-titlebar__controls">
        <span class="os-titlebar__btn">_</span>
        <span class="os-titlebar__btn">□</span>
        <span class="os-titlebar__btn">×</span>
      </span>
    </div>

    <div
      class="player__stage"
      @timeupdate.capture="onTime"
      @loadedmetadata.capture="onTime"
    >
      <video
        v-if="src"
        :src="src"
        :autoplay="autoplay"
        :loop="loop"
        :muted="muted"
        :controls="controls"
        playsinline
      />
      <slot />
    </div>

    <div class="player__transport">
      <span class="os-btn player__key">▶</span>
      <span class="os-btn player__key">❚❚</span>
      <span class="os-btn player__key">■</span>

      <div class="player__seek">
        <div class="player__seek-fill" :style="{ width: progress }" />
      </div>

      <span class="player__time">{{ elapsed }} / {{ total }}</span>
    </div>

    <div v-if="status" class="os-statusbar">
      <span class="os-statusbar__cell">{{ status }}</span>
    </div>
  </div>
</template>

<style scoped>
/* text-align: left — проигрыватель может стоять внутри центрированного
   statement, но транспорт по центру читается как ошибка вёрстки. */
.player {
  min-height: 0;
  text-align: left;
}

/* Та же вдавленная сцена, что у <Screenshot>: тёмное видео не должно
   растекаться до рамки окна и бить по глазам на проекторе. */
/* flex, а НЕ grid: у grid-строки размер авто, и проценты у видео резолвились
   против неопределённой высоты — ролик вылезал в натуральную величину. */
.player__stage {
  flex: 1;
  min-height: 0;
  display: flex;
  padding: 3px;
  background: var(--chrome-deep);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}

.player__stage video,
.player__stage :deep(video) {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  margin: auto;
  object-fit: contain;
  display: block;
  /* рамку даёт сцена — своя у видео дала бы двойной кант */
  border: none;
  box-shadow: none;
}

.player__transport {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding: 4px 8px;
  background: linear-gradient(180deg, var(--chrome) 0%, var(--chrome-deep) 100%);
  border-top: 1px solid var(--chrome-line);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

/* Кнопки транспорта — обычные .os-btn, только квадратные */
.player__key {
  min-width: 0;
  width: 20px;
  padding: 2px 0;
  font-size: 9px;
  line-height: 1.2;
}

.player__seek {
  flex: 1;
  min-width: 0;
  height: 10px;
  padding: 1px;
  background: var(--window);
  border: 1px solid var(--field-line);
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.14);
}

.player__seek-fill {
  height: 100%;
  background:
    repeating-linear-gradient(
      90deg,
      var(--platform) 0 6px,
      transparent 6px 8px
    );
}

.player__time {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--muted);
}
</style>

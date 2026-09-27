<!--
  Screenshot — картинка в окне системы, а не «картинка на слайде».
  Для фотографий, мемов, схем и скриншотов спек: всё, что не является самим
  вебом. Сайты показываем через <BrowserFrame> — у них должна быть адресная
  строка, иначе теряется разница «это сайт» / «это изображение».

  <Screenshot src="./assets/tim.png" title="tim.png" meta="1994 · CERN" />

  Рамка решает и вторую задачу: тёмные полноэкранные картинки больше не
  растекаются до края слайда, поэтому перепад яркости на проекторе гасится
  светлым полем окна.
-->
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

withDefaults(
  defineProps<{
    src?: string
    title?: string
    app?: string
    meta?: string
    tone?: 'origin' | 'growth' | 'craft' | 'standards' | 'legacy' | 'agent' | 'muted'
    alt?: string
    /** высота окна: любое валидное CSS-значение, например '260px' или '60%' */
    height?: string
    /** картинка заполняет окно целиком (cover) вместо вписывания (contain) */
    fill?: boolean
  }>(),
  // «Просмотр», а не «Просмотр изображений»: в узкой колонке двухколоночного
  // слайда длинная подпись окна упиралась в кнопки и уезжала в многоточие.
  { app: 'Просмотр' },
)

/*
 * Пропорции картинки снимаются с неё самой при загрузке и отдаются сцене.
 * Иначе окно не может их узнать: `width: fit-content` считает по НАТУРАЛЬНОЙ
 * ширине картинки, а не по той, до которой её ужмёт ограничение по высоте, —
 * поэтому окно растягивалось во всю ширину, а картинка сидела в нём узкой
 * полосой с широкими серыми полями по бокам.
 *
 * Проп для этого заводить не стали: 14 слайдов пришлось бы размечать руками,
 * и любая замена картинки молча ломала бы пропорцию.
 */
const ratio = ref<number | null>(null)

function onLoad(e: Event) {
  const img = e.target as HTMLImageElement
  if (img.naturalWidth && img.naturalHeight)
    ratio.value = img.naturalWidth / img.naturalHeight
}

/*
 * Окно должно быть ровно по картинке, иначе по краям остаются серые поля.
 * Одним CSS это не решается: `width: fit-content` смотрит на НАТУРАЛЬНУЮ ширину
 * картинки, а не на ту, до которой её ужмёт ограничение по высоте, — окно
 * растягивалось во всю доступную ширину. Вывести ширину из высоты CSS не умеет.
 *
 * Поэтому ширину считаем сами: высота сцены × пропорции картинки.
 *
 * Обязательное условие: у контейнера окна ДОЛЖНА быть определённая высота.
 * Тогда высота сцены от ширины не зависит, и обратной связи нет — наблюдатель
 * срабатывает второй раз, получает ту же высоту и останавливается. Если
 * высоты нет, высота начинает зависеть от ширины, а окно — border-box, то есть
 * сцена на 2px уже окна: каждый проход ужимал окно, и картинка уезжала по
 * спирали в точку. Ровно это и случилось на слайде 1-1.
 *
 * Определять «а есть ли высота» замерами пробовали — ненадёжно: результат
 * зависит от промежуточных состояний вёрстки. Поэтому высоту гарантируют
 * контейнеры (см. theme/README.md), а здесь остался только предохранитель:
 * высоты нет — ширину не трогаем.
 */
const stageEl = ref<HTMLElement | null>(null)
const boxWidth = ref<string | null>(null)
const boxHeight = ref<string | null>(null)
let observer: ResizeObserver | null = null

function measure() {
  const el = stageEl.value
  const win = el?.parentElement
  if (!el || !win || !ratio.value) {
    boxWidth.value = null
    boxHeight.value = null
    return
  }

  const h = el.clientHeight
  const w = el.clientWidth
  // Предохранитель: высоты нет — подгонять нечего, окно остаётся во всю ширину
  if (h <= 8 || w <= 8) {
    boxWidth.value = null
    boxHeight.value = null
    return
  }

  // Рамка и хром: размеры задаём окну, а меряем сцену — она уже на толщину
  // рамок и ниже на тайтлбар со статус-баром. Без поправки окно теряло бы
  // по паре пикселей на каждом проходе.
  const frame = win.offsetWidth - w
  const chrome = win.offsetHeight - h

  // Доступную ширину меряем, а не берём у родителя: окно может лежать в ячейке
  // грида, у которой нет своего элемента, и clientWidth родителя тогда равен
  // всей сетке. Разворачиваем окно на 100% и смотрим, сколько ему дали.
  const savedWidth = win.style.width
  win.style.width = '100%'
  const availW = win.offsetWidth
  win.style.width = savedWidth

  let stageW = h * ratio.value
  let stageH = h

  // Картинка шире, чем позволяет колонка: упираемся в ширину, а высоту
  // сокращаем — иначе поля просто переезжают с боков наверх и вниз.
  if (stageW + frame > availW) {
    stageW = availW - frame
    stageH = stageW / ratio.value
  }

  boxWidth.value = `${Math.round(stageW + frame)}px`
  boxHeight.value = `${Math.round(stageH + chrome)}px`
}

onMounted(() => {
  if (typeof ResizeObserver === 'undefined' || !stageEl.value) return
  observer = new ResizeObserver(measure)
  observer.observe(stageEl.value)
})

onBeforeUnmount(() => observer?.disconnect())

watch(ratio, measure)
</script>

<template>
  <div
    class="os-window shot"
    :style="{
      ...(boxWidth ? { width: boxWidth } : {}),
      ...(height ? { height } : boxHeight ? { height: boxHeight } : {}),
    }"
  >
    <div
      class="os-titlebar"
      :class="{
        'os-titlebar--legacy': tone === 'legacy',
        'os-titlebar--agent': tone === 'agent',
        'os-titlebar--muted': tone === 'muted',
      }"
    >
      <span class="os-titlebar__icon">▤</span>
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
      ref="stageEl"
      class="shot__stage"
      :class="{ 'shot__stage--fill': fill, 'shot__stage--ratio': ratio }"
    >
      <img v-if="src" :src="src" :alt="alt ?? title ?? ''" @load="onLoad" />
      <slot />
    </div>

    <div v-if="meta" class="os-statusbar">
      <span class="os-statusbar__cell">{{ meta }}</span>
    </div>
  </div>
</template>

<style scoped>
/* Окно занимает отведённую высоту целиком, а ширину получает из скрипта —
   ровно по картинке, чтобы по бокам не оставалось серых полей. Пока
   пропорции не измерены (картинка ещё грузится), работает fit-content.

   text-align: left — окно может стоять внутри центрированного statement,
   но подпись окна по центру читается как ошибка вёрстки. */
.shot {
  height: 100%;
  min-height: 0;
  max-height: 100%;
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;
  text-align: left;
}

/* Сцена под картинкой — вдавленная область просмотра. Серое поле вокруг
   изображения и есть то, что гасит перепад яркости на тёмных картинках.
   flex, а НЕ grid: у grid-строки размер авто, и `max-height: 100%` у картинки
   резолвился против неопределённой высоты, то есть просто игнорировался —
   картинка вылезала в натуральную величину и обрезалась рамкой окна. */
.shot__stage {
  flex: 1;
  min-height: 0;
  align-self: stretch;
  display: flex;
  padding: 3px;
  background: var(--chrome-deep);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}

.shot__stage :deep(img) {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  margin: auto;
  object-fit: contain;
}

/* Пропорции известны: сцена их принимает. Картинка позиционируется абсолютно,
   иначе она вносила бы свою натуральную ширину в расчёт ширины окна. */
.shot__stage--ratio {
  position: relative;
}


.shot__stage--ratio :deep(img) {
  position: absolute;
  inset: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  max-width: none;
  max-height: none;
  margin: 0;
}

.shot__stage--fill :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

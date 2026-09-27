<!--
  Layout: section — разделитель главы как панель установки старой ОС.

  Сознательно СВЕТЛЫЙ: тёмный вариант давал перепад яркости на каждом переходе
  (белое окно → тёмный слайд → белое окно) и слепил бы зал через проектор.
  Отличие от контентных слайдов держится не яркостью, а формой: вместо белого
  окна с тайтлбаром — серая «3D face» панель с утопленным полем и прогрессом.
-->
<script setup lang="ts">
defineProps<{
  sectionNumber?: string
  docNumber?: string
  unit?: string
  status?: string
  /* Разделитель объявляет тон главы: зал видит цвет здесь, а дальше в нём
     идут все окна главы. Сам разделитель остаётся светлым — цвет уходит
     только в номер главы, полосу загрузки и заголовок панели. */
  tone?: 'origin' | 'growth' | 'craft' | 'standards' | 'legacy' | 'agent' | 'muted'
}>()

/*
 * Полоса показывает, сколько доклада уже позади: доля текущей страницы от
 * общего числа. Раньше ширина была прибита к 72% и на каждой главе выглядела
 * одинаково — то есть врала.
 *
 * `$nav` берём из шаблона, а не импортом: так же делает OsStatusBar, и тема
 * не завязывается на внутренние пути @slidev/client. В печати и экспорте
 * навигации может не быть — тогда полоса просто остаётся пустой.
 */
function loaded(nav?: { currentPage?: number, total?: number }) {
  if (!nav?.total) return '0%'
  return `${Math.round(((nav.currentPage ?? 0) / nav.total) * 100)}%`
}
</script>

<template>
  <div class="slidev-layout layout-section" :class="tone && `tone-${tone}`">
    <div class="sec-panel">
      <div class="sec-panel__bar">
        <span class="sec-panel__icon">◈</span>
        <span>web://legacy</span>
        <span class="sec-spacer" />
        <span>{{ docNumber }}</span>
      </div>

      <div class="sec-panel__body">
        <div class="sec-mod">
          <span class="sec-mod__bracket">[</span>
          <span class="sec-mod__num">{{ sectionNumber }}</span>
          <span class="sec-mod__bracket">]</span>
          <span class="sec-mod__loading">loading module</span>
        </div>

        <slot />

        <div class="sec-descriptor">
          <slot name="descriptor" />
        </div>
      </div>

      <div class="sec-panel__foot">
        <div class="sec-bar">
          <div class="sec-bar__fill" :style="{ width: loaded($nav) }" />
        </div>
        <span class="sec-status">{{ status ?? 'не выключайте компьютер' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-section {
  padding: var(--win-inset);
}

/* Приподнятая панель: светлая рамка сверху/слева, тёмная снизу/справа —
   базовый приём объёма в интерфейсах Win9x/2000. */
.sec-panel {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: var(--os-face);
  border: 1px solid var(--os-face-deep);
  border-top-color: var(--os-face-light);
  border-left-color: var(--os-face-light);
  box-shadow:
    inset 1px 1px 0 rgba(255, 255, 255, 0.85),
    inset -1px -1px 0 var(--os-face-dark),
    2px 2px 0 rgba(45, 63, 79, 0.14),
    10px 14px 26px rgba(20, 35, 50, 0.12);
}

.sec-panel__bar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-shrink: 0;
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px solid var(--os-face-dark);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--muted);
}

.sec-panel__icon {
  color: var(--platform);
}

.sec-spacer {
  flex: 1;
}

.sec-panel__body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 var(--space-7);
}

.sec-mod {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  margin-bottom: var(--space-4);
}

.sec-mod__bracket {
  color: var(--os-face-dark);
}

.sec-mod__num {
  /* Цвет главы: разделитель объявляет тон, в котором дальше пойдут её окна */
  color: var(--tb-from, var(--success));
  font-weight: 700;
}

.sec-mod__loading {
  color: var(--muted);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  font-size: 10px;
}

.sec-descriptor {
  font-size: var(--text-base);
  color: var(--ink-soft);
  max-width: 44rem;
}

.sec-descriptor :deep(p) {
  margin: 0;
}

.sec-panel__foot {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-shrink: 0;
  padding: var(--space-2) var(--space-4);
  border-top: 1px solid var(--os-face-light);
}

/* Утопленный «колодец» с блоками прогресса. Заполнение задаёт скрипт по
   номеру текущей страницы — см. loaded() выше. */
.sec-bar {
  flex: 1;
  height: 11px;
  background: var(--os-face-light);
  border: 1px solid var(--os-face-dark);
  border-top-color: var(--os-face-deep);
  border-left-color: var(--os-face-deep);
  padding: 1px;
}

.sec-bar__fill {
  height: 100%;
  width: 0;
  transition: width 0.3s ease;
  background: repeating-linear-gradient(
    90deg,
    var(--tb-from, var(--platform)) 0 7px,
    transparent 7px 10px
  );
}

/* Разрядка уже, чем у остальных статусов: строка длинная и при
   --tracking-wider упиралась в правый край панели. */
.sec-status {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
}
</style>

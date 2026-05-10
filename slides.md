---
theme: slidev-theme-field-manual
highlighter: shiki
lineNumbers: false
layout: center

# aspect ratio for the slides
aspectRatio: 16/9
# real width of the canvas, unit in px
canvasWidth: 960

info: |
  Автостопом по веб-платформе
  Мария Кондаурова, BIOCAD

# Theme-specific props
docNumber: "Автостопом по веб-платформе"
date: 2026
unit: CodeFest ’16
classification: UNCLASSIFIED
---

# Автостопом по веб-платформе

<div style="display: flex; flex-direction: row; align-items:center; margin-top: 2rem">
  <img src="./img/me.jpg" w-30 rounded-full border-5 border-white />
  <div ml-4 style="display: flex; flex-direction: column; align-items: start">
    <p>Мария Кондаурова</p>
    <p style="color: #44b882">BIOCAD</p>
  </div>
</div>

---
layout: section
sectionNumber: '1'
docNumber: "Автостопом по веб-платформе"
---

# Глава 1

## Что такое веб-платформа?

<template v-slot:descriptor>
Или как зарождался веб
</template>

---

<img src="./img/web.png" width="300" style="margin: 0 auto" />

<p v-click style="margin: 0 auto">Веб-платформа = Браузер + API + стандарты + тесты + комитеты</p>

---
layout: statement
---

# Но с чего всё начиналось?
---
layout: image-full
---
<template v-slot:image>
<img src="./img/first_comp.png"  />
</template>

# Первый в мире компьютер Eniac
---
layout: image-full
---
<template v-slot:image>
<img src="./img/actual_comp.png"/>
</template>

# Современный компьютер
---

| Параметр            | ENIAC (1945)                                | iPhone 17 Pro (2025)                      |
|:--------------------|:--------------------------------------------|:------------------------------------------|
| Операций в секунду  | ≈5 000 сложений/сек<br>≈357 умножений/сек   | ≥6 000 000 000 000 операций/сек           |
| Память              | **20 слов** (10‑разрядные десятичные числа) | **6–8 ГБ** ОЗУ, до 1 ТБ постоянной памяти |
| Потребление энергии | ≈174 кВт                                    | ~10 Вт (пиковая нагрузка SoC)             |

---
layout: statement
---
## World Wide Web
---
layout: image-right
figNumber: 1-1
figLabel: BRIEFING ROOM — STANDARD CONFIGURATION
---

# Тим Бернерс-Ли

## Создал первый браузер в **1990 году**

<template v-slot:image>
<img src="./img/tim.png"  />
</template>

---

<img src="./img/first_brows.png" height="500"/>
## Первый в мире сайт

---
layout: statement
---
## Изначальная идея веба как **гипертекстовой системы** для обмена знаниями
---
layout: image-right
figNumber: 1-1
figLabel: BRIEFING ROOM — STANDARD CONFIGURATION
---

## Эра «Невинного» веба

- Статичные HTML-страницы
- Документы, ссылки, немного картинок
- Табличная вёрстка

<template v-slot:image>
<img src="./img/tablelayout.png"  />
</template>

---

<img src="./img/mac.png" height="80%"/>

## ПК —> Веб стал доступен каждому

---
layout: statement
---

## Люди стали генерировать контент и самовыражаться

---

<SlidevVideo autoplay>
  <source src="./mov/cameron1.mov"  />
</SlidevVideo>

---
layout: image-full
---
<template v-slot:image>
<img src="./img/jam.png"  />
</template>

# Сайт — как пиар компания фильма: Space Jam(1996)

---
layout: image-full
---

<template v-slot:image>
<img src="./img/one_million.png"/>
</template>

# Сайт — как заработок: The million dollars homepage (2005)

---
layout: statement
---

## Интернет взрослеет

---

# Самовыражение → сервис

- Почта в браузере (Gmail)
- Карты и навигация (Google Maps)
- Соцсети, мессенджеры, онлайн-документы

---
layout: statement
---

### Веб перестаёт быть просто страницами и становится средой для жизни

<v-click>

## Браузер уже не тянет «старым» способом

</v-click>

---

### Появляется запрос на

- Быструю реакцию без полной перезагрузки
- Сложные интерфейсы (как в десктопных приложениях)
- Работу с большим количеством данных прямо в браузере

---
layout: section
sectionNumber: '2'
---

# Глава 2

## Эволюция веб-платформы

<template v-slot:descriptor>
Или как веб пытался догнать ожидания пользователей
</template>

---
layout: statement
---

### "Фронтенд развивается скачкообразно"

---

## Скачок 1:  Статичный HTML → Динамический веб

<div class="grid grid-cols-2 gap-8 mt-10 items-stretch">
  <div
    v-click
    class="rounded-2xl border border-red-200/60 bg-red-50/40 px-6 py-5"
  >
    <div class="text-sm uppercase tracking-widest text-red-500 font-bold mb-4">
      До 2004
    </div>

      - Каждое действие — новая страница
      - Обновить статус — рефреш

  </div>
  <div
    v-click
    class="rounded-2xl border border-teal-200/60 bg-teal-50/40 px-6 py-5"
  >
    <div class="text-sm uppercase tracking-widest text-teal-600 font-bold mb-4">
      Gmail + AJAX
    </div>

      - Частичное обновление страницы
      - Мгновенные ответы

  </div>
</div>
---
sectionNumber: '2'
---

## AJAX принес скорость,<br>но создал новые проблемы

<v-clicks>

- Управление состоянием вручную
- "Спагетти‑код" повсюду  **(привет, jquery!)**
- Каждый разработчик делает свой велосипед
  
</v-clicks>

<v-click>

### Нужна реиспользуемость

</v-click>


---
sectionNumber: '2'
---

## Скачок 2: Страницы → SPA и фреймворки

<div class="grid grid-cols-2 gap-8 mt-10 items-stretch">
  <div
    v-click
    class="rounded-2xl border border-red-200/60 bg-red-50/40 px-6 py-5"
  >
    <div class="text-sm uppercase tracking-widest text-red-500 font-bold mb-4">
      Было (MPA)
    </div>

      - Каждый экран — отдельный HTML
      - Сервер рендерит всю страницу
      - Ограниченная интерактивность
      - Много кода

  </div>
  <div
    v-click
    class="rounded-2xl border border-teal-200/60 bg-teal-50/40 px-6 py-5"
  >
    <div class="text-sm uppercase tracking-widest text-teal-600 font-bold mb-4">
      Стало (SPA)
    </div>

      - Angular/React/Vue/Svelte
      - Клиент — UI-машина
      - Сервер — только API

  </div>
</div>

---
sectionNumber: '2'
---

## Но телефоны не стоят на месте

<div class="grid grid-cols-2 gap-10 mt-10 items-center">
  <div v-click class="rounded-2xl border border-red-200/60 bg-red-50/40 px-6 py-5">
    <div class="text-sm uppercase tracking-widest text-red-500 font-bold mb-4">
      Кнопочные (2000–2007)
    </div>

    <div class="grid grid-cols-2 gap-5 mt-4">
      <img src="./img/nokia.png" class="rounded-xl" />
      <img src="./img/moto.png" class="rounded-xl" />
      <img src="./img/sams.png" class="rounded-xl" />
      <img src="./img/burb.png" class="rounded-xl" />
    </div>
  </div>

  <div v-click class="rounded-2xl border border-teal-200/60 bg-teal-50/40 px-6 py-5">
    <div class="text-sm uppercase tracking-widest text-teal-600 font-bold mb-4">
      Сенсорные (2007+)
    </div>

    <div class="grid grid-cols-2 gap-5 mt-4">
      <img src="./img/experia.png" class="rounded-xl" />
      <img src="./img/iphone.png" class="rounded-xl" />
      <img src="./img/lg.png" class="rounded-xl" />
      <img src="./img/galaxy.png" class="rounded-xl" />
    </div>
  </div>
</div>

---
sectionNumber: '2'
---

## Контекст: Мобильные телефоны развиваются

<div class="max-w-[600px] mx-auto mt-6">
  <div v-click class="rounded-xl border border-amber-200/60 bg-amber-50/40 px-6 py-4">
    <ul class="space-y-2 text-sm">
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span><strong>Тяжёлый JS</strong> тормозит на слабых устройствах</span>
      </li>
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span><strong>Touch UI</strong> вместо hover/click</span>
      </li>
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span><strong>3G/4G</strong> вместо оптоволокна</span>
      </li>
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span>Экраны <strong>от 320px до 4K</strong></span>
      </li>
    </ul>
  </div>
</div>

---
sectionNumber: '2'
---

## Скачок 4: Десктоп → Mobile-first

<div class="grid grid-cols-2 gap-8 mt-10 items-stretch">
  <div
    v-click
    class="rounded-2xl border border-red-200/60 bg-red-50/40 px-6 py-5"
  >
    <div class="text-sm uppercase tracking-widest text-red-500 font-bold mb-4">
      Десктоп-first (2010)
    </div>

      - Фиксированная ширина 1024px
      - Hover и курсор мыши
      - Быстрый интернет (DSL)
      - Мощные ПК

  </div>
  <div
    v-click
    class="rounded-2xl border border-teal-200/60 bg-teal-50/40 px-6 py-5"
  >
    <div class="text-sm uppercase tracking-widest text-teal-600 font-bold mb-4">
      Mobile-first (2012+)
    </div>

      - **Адаптивность** 320px–4K
      - **Touch** интерфейсы
      - **Производительность** (lazy load)
      - Сети **3G/4G**

  </div>
</div>

---
sectionNumber: '2'
---

## Mobile-first решили адаптивность, но...

<div class="max-w-[600px] mx-auto mt-6">
  <div v-click class="rounded-xl border border-amber-200/60 bg-amber-50/40 px-6 py-4">
    <div class="text-sm uppercase tracking-widest text-amber-600 font-bold mb-3">
      Боли нативных приложений
    </div>
    <ul class="space-y-2 text-sm">
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span><strong>App Store</strong> модерация (недели)</span>
      </li>
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span><strong>Обновления</strong> только через стор</span>
      </li>
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span><strong>Офлайн</strong> недоступен</span>
      </li>
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span>Push только <strong>через натив</strong></span>
      </li>
    </ul>
  </div>
</div>

---
sectionNumber: '2'
---

## Скачок 5: Веб → PWA

<div class="grid grid-cols-2 gap-8 mt-10 items-stretch">
  <div
    v-click
    class="rounded-2xl border border-red-200/60 bg-red-50/40 px-6 py-5"
  >
    <div class="text-sm uppercase tracking-widest text-red-500 font-bold mb-4">
      Обычный веб
    </div>

      - Только онлайн
      - Не устанавливается
      - Нет push
      - Зависит от сети

  </div>
  <div
    v-click
    class="rounded-2xl border border-teal-200/60 bg-teal-50/40 px-6 py-5"
  >
    <div class="text-sm uppercase tracking-widest text-teal-600 font-bold mb-4">
      PWA
    </div>

      - **Offline-first**
      - **Установка** без стора
      - **Push** уведомления
      - Кэш + Service Workers

  </div>
</div>

<v-click>

<div class="mt-8 text-center text-sm text-gray-400">
Service Worker = прокси между сетью и кэшем
</div>

</v-click>

---
sectionNumber: '2'
---

## ...но вылезли рендерные боли (опять)

<div class="max-w-[600px] mx-auto mt-6">
  <div v-click class="rounded-xl border border-amber-200/60 bg-amber-50/40 px-6 py-4">
    <ul class="space-y-2 text-sm">
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span><strong>Тяжёлый JS</strong> на клиенте</span>
      </li>
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span><strong>SEO</strong> страдает (SPA)</span>
      </li>
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span><strong>TTFB</strong> медленный</span>
      </li>
      <li class="flex items-start">
        <span class="mr-2 text-amber-600">•</span>
        <span>Сложно <strong>гибрид</strong> сервер/клиент</span>
      </li>
    </ul>
  </div>
</div>

---
sectionNumber: '2'
---

## Скачок 6: Клиент/Сервер → Server Components

<div class="grid grid-cols-2 gap-8 mt-10 items-stretch">
  <div
    v-click
    class="rounded-2xl border border-red-200/60 bg-red-50/40 px-6 py-5"
  >
    <div class="text-sm uppercase tracking-widest text-red-500 font-bold mb-4">
      Классика
    </div>

      - Всё на **клиенте** (SPA)
      - Или всё на **сервере** (MPA)
      - Два **кода**
      - SEO или **скорость**

  </div>
  <div
    v-click
    class="rounded-2xl border border-teal-200/60 bg-teal-50/40 px-6 py-5"
  >
    <div class="text-sm uppercase tracking-widest text-teal-600 font-bold mb-4">
      RSC (React Server Components)
    </div>

      - **Серверный** рендер статичного
      - **Клиентский** только интерактив
      - **Один код** (async/await)
      - SEO + **скорость** + PWA

  </div>
</div>

<v-click>

<div class="mt-8 text-center text-sm text-gray-400">
Сервер рендерит → Streaming → Клиент "оживляет"
</div>

</v-click>

---
layout: timeline
title: ЭВОЛЮЦИЯ ВЕБА — ХРОНОЛОГИЯ
sectionNumber: '2'
docNumber: "Автостопом по веб-платформе"
direction: horizontal
---

<div class="tl-entry">
  <div class="tl-entry-marker"><div class="tl-entry-dot"></div></div>
  <div class="tl-entry-body">
    <div class="tl-entry-date fm-label">2007</div>
    <div class="tl-entry-title">iPhone</div>
    <div class="tl-entry-desc">Мобильные боли: 320px, touch, 3G</div>
  </div>
</div>
<div class="tl-entry">
  <div class="tl-entry-marker"><div class="tl-entry-dot"></div></div>
  <div class="tl-entry-body">
    <div class="tl-entry-date fm-label">2007-2012</div>
    <div class="tl-entry-title">Mobile-first</div>
    <div class="tl-entry-desc">Адаптив, responsive дизайн</div>
  </div>
</div>
<div class="tl-entry">
  <div class="tl-entry-marker"><div class="tl-entry-dot"></div></div>
  <div class="tl-entry-body">
    <div class="tl-entry-date fm-label">2010-2013</div>
    <div class="tl-entry-title">SPA бум</div>
    <div class="tl-entry-desc">AngularJS, React —> PWA —> RSC</div>
  </div>
</div>

---
layout: section
sectionNumber: '3'
docNumber: FM 00-0
---

# Глава 3

## Современная Web Platform

<template v-slot:descriptor>
Или зоопарк комитетов
</template>

---


[//]: # (sectionNumber: '2')

[//]: # (---)

[//]: # ()

[//]: # (### **150** Web API в браузере)

[//]: # ()

[//]: # (Это полноценная **платформа** с доступом к железу, офлайну, пушам.)

[//]: # ()

[//]: # (<video src="./mov/mdn.mov" autoplay loop muted rounded-xl/>)

[//]: # ()

[//]: # (---)

[//]: # (sectionNumber: '2')

[//]: # (---)

[//]: # ()

[//]: # (### **3D музей** в браузере &#40;React и Three.js&#41;)

[//]: # ()

[//]: # (<video src="./mov/samokat.mov" autoplay loop muted rounded-xl/>)

[//]: # ()

[//]: # ([https://museum.samokat.ru/]&#40;https://museum.samokat.ru/&#41;)

[//]: # ()

[//]: # (---)

[//]: # (sectionNumber: '2')

[//]: # (---)

[//]: # ()

[//]: # (### Многопользовательская игра в браузере &#40;webGL&#41;)

[//]: # ()

[//]: # (<video src="./mov/messanger.mov" autoplay loop muted rounded-xl/>)

[//]: # ([https://messenger.abeto.co/]&#40;https://messenger.abeto.co/&#41;)


[//]: # (# Глава 4)

[//]: # ()

[//]: # (## Будущее)

[//]: # ()

[//]: # (<i>&#40;никто точно не знает&#41;</i>)

[//]: # ()

[//]: # (---)

[//]: # ()

[//]: # (### Итоги эволюции)

[//]: # ()

[//]: # (<br>)

[//]: # ()

[//]: # (`HTML → Динамика → SPA → Мобильный → PWA → Гибриды`)

[//]: # ()

[//]: # (<br><br>)

[//]: # ()

[//]: # (Таймлайн эволюции веба<br>)

[//]: # (от 1990 до наших дней)

[//]: # ()

[//]: # (---)

[//]: # ()

[//]: # (### A2UI — AI-Adaptative UI)

[//]: # ()

[//]: # (<br>)

[//]: # ()

[//]: # (- Интерфейсы, которые строятся и адаптируются<br>)

[//]: # (  с участием **ИИ-моделей**)

[//]: # (- Браузер как фронтенд для **ИИ-агентов**)

[//]: # (- Новый слой абстракции)

[//]: # ()

[//]: # (<br>)

[//]: # ()

[//]: # (Концепт A2UI<br>)

[//]: # (или схема взаимодействия ИИ-агента с браузером)

[//]: # ()

[//]: # (---)

[//]: # ()

[//]: # (### Вопросы для размышления)

[//]: # ()

[//]: # (<br>)

[//]: # ()

[//]: # (- Какие новые **Web API** понадобятся?)

[//]: # (- Как снова поменяется роль браузера?)

[//]: # (- Как изменится фронтенд?)

[//]: # ()

[//]: # (---)

[//]: # (layout: section)

[//]: # (sectionNumber: '5')

[//]: # (docNumber: "Автостопом по веб-платформе")

[//]: # (---)

[//]: # ()

[//]: # (# Эпилог)

[//]: # ()

[//]: # (---)

[//]: # ()

[//]: # (### Ключевые мысли)

[//]: # ()

[//]: # (<br>)

[//]: # ()

[//]: # (- Веб давно перестал быть **«просто сайтами»**)

[//]: # (- Браузер — одна из самых **сложных** и<br>)

[//]: # (  самых **согласованных** систем)

[//]: # (- Каждый новый слой добавляет сложность,<br>)

[//]: # (  но остаётся в том же окне — вкладке браузера)

[//]: # ()

[//]: # (---)

[//]: # ()

[//]: # (### Напоследок)

[//]: # ()

[//]: # (<br>)

[//]: # ()

[//]: # (Если вы в какой-то момент поймаете себя на рефлексии<br>)

[//]: # (типа «мне скучно»,<br><br>)

[//]: # (вспомните, с какой **ахренительно сложной системой**<br>)

[//]: # (вы работаете :&#41;)

[//]: # ()

[//]: # (---)

[//]: # (layout: end)

[//]: # (docNumber: "Автостопом по веб-платформе")

[//]: # (classification: UNCLASSIFIED)

[//]: # (photo: ./img/me.jpg)

[//]: # (---)

[//]: # ()

[//]: # (<template v-slot:title>Вопросы?</template>)

[//]: # ()

[//]: # (<template v-slot:contact>)

[//]: # (Мария Кондаурова<br>)

[//]: # (BIOCAD)

[//]: # (</template>)

---
layout: end
docNumber: FM 24-SLIDE
classification: FOR TRAINING USE ONLY
unit: HQ, DEPT OF THE PRESENTATION
photo: ./img/me.jpg
---

<template v-slot:title>Спасибо</template>

<template v-slot:contact>

**Мария Кондаурова**

BIOCAD

t.me/Momomash

</template>
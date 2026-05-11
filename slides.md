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

---
layout: default
---

## Но телефоны не стояли на месте

<div class="grid grid-cols-2 gap-12 mt-10 items-start">

  <div
    v-click
    class="flex flex-col gap-1"
  >
    <h2 class="text-2xl font-bold text-rose-400">
      Кнопочные <span class="opacity-70">(2000–2007)</span>
    </h2>
    <div class="grid grid-cols-2 gap-1">
      <img style="width: 100px; height: 100px"
        src="./img/nokia.png"
        alt="Nokia 3310"
        class="shadow-lg rounded-2xl"
      />
      <img
        src="./img/moto.png" style="width: 100px; height: 100px"
        alt="Motorola Razr"
        class="shadow-lg rounded-2xl"
      />
      <img
        src="./img/sams.png" style="width: 100px; height: 100px"
        alt="Samsung clamshell phone"
        class="shadow-lg rounded-2xl"
      />
      <img
        src="./img/burb.png" style="width: 100px; height: 100px"
        alt="BlackBerry phone"
        class="shadow-lg rounded-2xl"
      />
    </div>
  </div>

  <div
    v-click
    class="flex flex-col gap-1"
  >
    <h2 class="text-2xl font-bold text-cyan-300">
      Сенсорные <span class="opacity-70">(2007+)</span>
    </h2>
    <div class="grid grid-cols-2 gap-1">
      <img
        src="./img/experia.png" style="width: 100px; height: 100px"
        alt="Sony Ericsson Xperia"
        class="shadow-lg rounded-2xl"
      />
      <img
        src="./img/iphone.png" style="width: 100px; height: 100px"
        alt="iPhone"
        class="shadow-lg rounded-2xl"
      />
      <img
        src="./img/lg.png" style="width: 100px; height: 100px"
        alt="LG Android phone"
        class="shadow-lg rounded-2xl"
      />
      <img
        src="./img/galaxy.png" style="width: 100px; height: 100px"
        alt="Samsung Galaxy"
        class="shadow-lg rounded-2xl"
      />
    </div>
  </div>
</div>

---
sectionNumber: '2'
---

## С мобильностью пришли новые вызовы

<v-clicks>

- Тяжёлый JS тормозит на слабых устройствах
- Touch UI вместо hover/click
- 3G/4G вместо оптоволокна
- Экраны от 320px до 4K

</v-clicks>

---
sectionNumber: '2'
---

## Скачок 3: Десктоп → Mobile-first

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

      - Адаптивность 320px–4K
      - Touch интерфейсы
      - Производительность (lazy load)
      - Сети 3G/4G

  </div>
</div>

---
sectionNumber: '2'
---

## Mobile-first решили адаптивность, но наследство нативных приложений

<v-clicks>

- App Store модерация (недели)
- Обновления только через стор
- Офлайн недоступен
- Push только через натив

</v-clicks>

---
sectionNumber: '2'
---

## Скачок 4: Веб → PWA

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

      - Offline-first
      - Установка без стора
      - Push уведомления
      - Кэш + Service Workers

  </div>
</div>

<v-click>

<p class="text-center pt-5">
Service Worker = прокси между сетью и кэшем
</p>

</v-click>

---
sectionNumber: '2'
---

## ...но вылезли рендерные боли (опять)

<v-clicks>

- Тяжёлый JS на клиенте
- SEO страдает (SPA)
- TTFB медленный
- Сложно гибрид сервер/клиент

</v-clicks>

---
sectionNumber: '2'
---

## Скачок 5: Клиент/Сервер → Server Components

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

<p class="mt-16 text-center">
Сервер рендерит → Streaming → Клиент "оживляет"
</p>

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
    <div class="tl-entry-date fm-label">1990</div>
    <div class="tl-entry-title">Статичный веб</div>
  </div>
</div>

<div class="tl-entry">
  <div class="tl-entry-marker"><div class="tl-entry-dot"></div></div>
  <div class="tl-entry-body">
    <div class="tl-entry-date fm-label">2004</div>
    <div class="tl-entry-title">Ajax</div>
    <div class="tl-entry-desc">Gmail заложил тренд веба как сервиса</div>
  </div>
</div>

<div class="tl-entry">
  <div class="tl-entry-marker"><div class="tl-entry-dot"></div></div>
  <div class="tl-entry-body">
    <div class="tl-entry-date fm-label">2010</div>
    <div class="tl-entry-title">SPA‑бум</div>
    <div class="tl-entry-desc">AngularJS (2010), React(2013), Vue(2014)</div>
  </div>
</div>

<div class="tl-entry">
  <div class="tl-entry-marker"><div class="tl-entry-dot"></div></div>
  <div class="tl-entry-body">
    <div class="tl-entry-date fm-label">2010</div>
    <div class="tl-entry-title">First-mobile</div>
    <div class="tl-entry-desc">Развитие смартфонов</div>
  </div>
</div>

<div class="tl-entry">
  <div class="tl-entry-marker"><div class="tl-entry-dot"></div></div>
  <div class="tl-entry-body">
    <div class="tl-entry-date fm-label">2015+</div>
    <div class="tl-entry-title">PWA</div>
    <div class="tl-entry-desc">Офлайн, установка, пуш‑уведомления</div>
  </div>
</div>

<div class="tl-entry">
  <div class="tl-entry-marker"><div class="tl-entry-dot"></div></div>
  <div class="tl-entry-body">
    <div class="tl-entry-date fm-label">2020-2023</div>
    <div class="tl-entry-title">Server Components</div>
    <div class="tl-entry-desc">Гибрид сервер/клиент</div>
  </div>
</div>

---
layout: statement
---

# Всего за 20 лет

---
layout: two-column
title: "Web API в действии"
sectionNumber: "3-4"
docNumber: FM 00-0
---

<template v-slot:left>

### 150+ браузерных Web API с доступом к

<v-clicks>

- телефону (контакты, вибрация, bluetooth, уведомления)
- железу (GPU)
- AI (конец 2025-го)
- и тд

</v-clicks>

</template>

<template v-slot:right>

<div style="width: 100%;">
  <video
    src="./mov/mdn.mov"
    autoplay
    muted
    loop
    playsinline
    controls={false}
    style="width: 100%; height: auto; display: block;"
  ></video>
</div>

</template>

---
layout: statement
---
# Это уже полноценная платформа
---

<div style="width: 100%; border-radius: 12px; overflow: hidden;">
  <video
    src="./mov/samokat.mov"
    autoplay
    muted
    loop
    playsinline
    controls={false}
    style="width: 100%; height: auto; display: block;"
  ></video>
</div>
<p class="text-center">3D музей в браузере &#40;React и Three.js) <a href="https://museum.samokat.ru">https://museum.samokat.ru</a></p>

---

<div style="width: 100%; border-radius: 12px; overflow: hidden;">
  <video
    src="./mov/messanger.mov"
    autoplay
    muted
    loop
    playsinline
    controls={false}
    style="width: 100%; height: auto; display: block;"
  ></video>
</div>
<p class="text-center">Многопользовательская игра в браузере (webGL) <a href="https://messenger.abeto.co">https://messenger.abeto.co</a></p>

---
layout: section
sectionNumber: '3'
docNumber: FM 00-0

---

# Глава 3

## Кто делает веб? 

<template v-slot:descriptor>
Или зоопарк комитетов
</template>

---
layout: chart-full
title: КАРТА ВЛИЯНИЯ
sectionNumber: "3-1"
docNumber: FM 00-0
figNumber: 3-1
figLabel: КТО КОНТРИБЬЮТИТ В WEB PLATFORM
transition: fade
---
<template v-slot:chart>

```mermaid
%%{init: {'flowchart': {'curve': 'basis', 'nodeSpacing': 10, 'rankSpacing': 45}}}%%

flowchart TD

  WEB["WEB PLATFORM"]

  subgraph STDS["СТАНДАРТЫ И СПЕЦИФИКАЦИИ"]
    W3C["W3C"]
    WHATWG["WHATWG"]
    TC39["TC39 / Ecma"]
    IETF["IETF"]
    KHR["Khronos Group"]
    WINTER["WinterCG / WinterTC"]
  end

  subgraph IMPL["РЕАЛИЗАЦИИ"]
    CHROME["Google / Chromium / Chrome"]
    WEBKIT["Apple / WebKit / Safari"]
    MOZ["Mozilla / Gecko / Firefox"]
    EDGE["Microsoft / Edge"]
    NODE["Node.js"]
    DENO["Deno"]
    CF["Cloudflare Workers"]
    BUN["Bun"]
  end

  subgraph TESTS["ТЕСТЫ И ИНТЕРОП"]
    WPT["Web Platform Tests"]
    TEST262["Test262"]
    INTEROP["Interop"]
    MDNBCD["MDN BCD"]
  end

  subgraph ECO["ЭКОСИСТЕМА И ДАВЛЕНИЕ"]
    WICG["WICG"]
    VERCEL["Vercel / Next.js"]
    META["Meta / React"]
    OSS["Open source / community"]
    DEVS["Разработчики"]
    ANTH["Anthropic / AI use-cases"]
  end

  WEB --> W3C
  WEB --> WHATWG
  WEB --> TC39
  WEB --> IETF
  WEB --> KHR
  WEB --> WINTER

  W3C --> CHROME
  W3C --> WEBKIT
  W3C --> MOZ
  W3C --> EDGE

  WHATWG --> CHROME
  WHATWG --> WEBKIT
  WHATWG --> MOZ
  WHATWG --> EDGE

  TC39 --> CHROME
  TC39 --> WEBKIT
  TC39 --> MOZ
  TC39 --> EDGE

  W3C --> WPT
  WHATWG --> WPT
  TC39 --> TEST262
  WPT --> INTEROP
  TEST262 --> INTEROP

  WICG --> W3C
  DEVS --> OSS
  OSS --> WICG
  META --> TC39
  VERCEL --> WEB
  ANTH --> WEB
  WINTER --> NODE
  WINTER --> DENO
  WINTER --> CF
  WINTER --> BUN

  classDef main fill:#3d4a22,stroke:#bf2020,color:#fff,stroke-width:2px;
  classDef standards fill:#ede8d0,stroke:#8a7a50,color:#1a1a14;
  classDef impl fill:#f5f0e0,stroke:#7a7a45,color:#1a1a14;
  classDef tests fill:#c8b87a,stroke:#8a7a50,color:#1a1a14;
  classDef eco fill:#e0d8be,stroke:#b05e10,color:#1a1a14;

  class WEB main;
  class W3C,WHATWG,TC39,IETF,KHR,WINTER standards;
  class CHROME,WEBKIT,MOZ,EDGE,NODE,DENO,CF,BUN impl;
  class WPT,TEST262,INTEROP,MDNBCD tests;
  class WICG,VERCEL,META,OSS,DEVS,ANTH eco;
```

</template>

<template v-slot:source>
ОБЗОР: стандарты, реализации, тесты и экосистема на одной карте. [web:423][web:429][web:424][web:353]
</template>

---
layout: chart-full
title: СЛОЙ 1 — СТАНДАРТЫ
sectionNumber: "3-2"
docNumber: FM 00-0
figNumber: 3-2
figLabel: ОСНОВНЫЕ ПЛОЩАДКИ СТАНДАРТИЗАЦИИ
transition: fade-out
---

<template v-slot:chart>

```mermaid
%%{init: {'flowchart': {'curve': 'basis', 'nodeSpacing': 10, 'rankSpacing': 10}}}%%
flowchart LR

  W3C["W3C"] -->|CSS, WebAuthn, WebRTC,\nWeb Apps| WEB["WEB PLATFORM"]
  WHATWG["WHATWG"] -->|HTML, DOM, Fetch| WEB
  TC39["TC39 / Ecma"] -->|ECMAScript, Temporal| WEB
  IETF["IETF"] -->|HTTP, QUIC, Transport| WEB
  WINTER["WinterCG"] -->|server runtimes| WEB

  classDef web fill:#3d4a22,stroke:#bf2020,color:#fff,stroke-width:2px;
  classDef org fill:#ede8d0,stroke:#8a7a50,color:#1a1a14;

  class WEB web;
  class W3C,WHATWG,TC39,IETF,WINTER org;
```

</template>

<template v-slot:source>
WHATWG ведёт HTML Living Standard; TC39 отвечает за JavaScript; W3C и IETF покрывают значительную часть веб-платформы и сетевого стека. [web:429][web:421][web:424]
</template>

---
layout: chart-full
title: СЛОЙ 2 — W3C И ИНКУБАЦИЯ
sectionNumber: "3-3"
docNumber: FM 00-0
figNumber: 3-3
figLabel: ВНУТРЕННЯЯ СТРУКТУРА W3C
transition: slide-left
---

<template v-slot:chart>

```mermaid
%%{init: {'flowchart': {'curve': 'basis', 'nodeSpacing': 15, 'rankSpacing': 15}}}%%

flowchart TD

  W3C["W3C"]

  TAG["TAG"]
  WEBAPPS["Web Applications WG"]
  CSSWG["CSS WG"]
  BTT["Browser Testing and Tools WG"]
  DAS["Devices and Sensors WG"]
  WEBRTCWG["WebRTC WG"]
  APA["Accessible Platform Architectures WG"]
  WAI["WAI"]
  PATWG["Privacy / PING"]
  MEIG["Media & Entertainment IG"]
  WICG["WICG"]
  WASMCG["WebAssembly CG"]

  W3C --> TAG
  W3C --> WEBAPPS
  W3C --> CSSWG
  W3C --> BTT
  W3C --> DAS
  W3C --> WEBRTCWG
  W3C --> APA
  W3C --> WAI
  W3C --> PATWG
  W3C --> MEIG
  W3C --> WICG
  W3C --> WASMCG

  WICG -->|инкубация новых идей| WEBAPPS
  WICG --> CSSWG
  WICG --> DAS
  WICG --> WEBRTCWG

  classDef core fill:#3d4a22,stroke:#bf2020,color:#fff,stroke-width:2px;
  classDef group fill:#ede8d0,stroke:#8a7a50,color:#1a1a14;
  classDef incubator fill:#c8b87a,stroke:#b05e10,color:#1a1a14,stroke-width:2px;

  class W3C core;
  class TAG,WEBAPPS,CSSWG,BTT,DAS,WEBRTCWG,APA,WAI,PATWG,MEIG,WASMCG group;
  class WICG incubator;
```

</template>

<template v-slot:source>
WICG — инкубатор новых веб-идей; внутри W3C множество рабочих и community groups с разной ответственностью. [web:423][web:422][web:421]
</template>

---
layout: chart-full
title: СЛОЙ 3 — ТЕСТЫ И INTEROP
sectionNumber: "3-4"
docNumber: FM 00-0
figNumber: 3-4
figLabel: КАК ПРОВЕРЯЮТ СОВМЕСТИМОСТЬ
transition: slide-up
---

<template v-slot:chart>

```mermaid
%%{init: {'flowchart': {'curve': 'basis', 'nodeSpacing': 15, 'rankSpacing': 15}}}%%

flowchart TD

  SPECS["СПЕЦИФИКАЦИИ"]
  WPT["Web Platform Tests"]
  TEST262["Test262"]
  INTEROP["Interop"]
  CHROME["Chromium"]
  SAFARI["WebKit / Safari"]
  FIREFOX["Gecko / Firefox"]
  EDGE["Edge"]
  DEVS["Разработчики"]
  MDN["MDN compat data"]

  SPECS --> WPT
  SPECS --> TEST262
  WPT --> INTEROP
  TEST262 --> INTEROP

  CHROME --> WPT
  SAFARI --> WPT
  FIREFOX --> WPT
  EDGE --> WPT

  INTEROP --> CHROME
  INTEROP --> SAFARI
  INTEROP --> FIREFOX
  INTEROP --> EDGE

  MDN --> DEVS

  classDef spec fill:#ede8d0,stroke:#8a7a50,color:#1a1a14;
  classDef tests fill:#c8b87a,stroke:#bf2020,color:#1a1a14,stroke-width:2px;
  classDef impl fill:#f5f0e0,stroke:#7a7a45,color:#1a1a14;
  classDef dev fill:#e0d8be,stroke:#b05e10,color:#1a1a14;

  class SPECS spec;
  class WPT,TEST262,INTEROP tests;
  class CHROME,SAFARI,FIREFOX,EDGE impl;
  class DEVS,MDN dev;
```

</template>

<template v-slot:source>
Interop использует WPT как измеримую основу для совместимости браузеров; TC39-экосистема использует Test262 для ECMAScript. [web:352][web:353][web:362]
</template>

---
layout: chart-full
title: СЛОЙ 4 — ДАВЛЕНИЕ ЭКОСИСТЕМЫ
sectionNumber: "3-5"
docNumber: FM 00-0
figNumber: 3-5
figLabel: КОМПАНИИ, ФРЕЙМВОРКИ И РАНТАЙМЫ
transition: slide-right
---

<template v-slot:chart>

```mermaid
%%{init: {'flowchart': {'curve': 'basis', 'nodeSpacing': 1, 'rankSpacing': 3}}}%%
flowchart LR

  DEVS["Разработчики"]
  OSS["Open source"]
  META["Meta / React"]
  VERCEL["Vercel / Next.js"]
  CF["Cloudflare"]
  NODE["Node.js"]
  DENO["Deno"]
  BUN["Bun"]
  WINTER["WinterCG / WinterTC"]
  ANTH["Anthropic"]
  OPENAI["OpenAI"]
  AI["AI SDKs / browser AI use-cases"]
  WEB["WEB PLATFORM"]

  DEVS --> OSS
  OSS --> META
  OSS --> VERCEL
  OSS --> WEB

  META --> WEB
  VERCEL --> WEB
  CF --> WEB

  NODE --> WINTER
  DENO --> WINTER
  BUN --> WINTER
  CF --> WINTER
  WINTER --> WEB

  ANTH --> AI
  OPENAI --> AI
  AI --> WEB
  AI --> VERCEL

  classDef dev fill:#ede8d0,stroke:#8a7a50,color:#1a1a14;
  classDef product fill:#c8b87a,stroke:#b05e10,color:#1a1a14,stroke-width:2px;
  classDef runtime fill:#e0d8be,stroke:#7a7a45,color:#1a1a14;
  classDef web fill:#3d4a22,stroke:#bf2020,color:#fff,stroke-width:2px;

  class DEVS,OSS dev;
  class META,VERCEL,CF,ANTH,OPENAI,AI product;
  class NODE,DENO,BUN,WINTER runtime;
  class WEB web;
```

</template>

<template v-slot:source>
Компании и рантаймы влияют на ожидания от платформы; WinterCG/WinterTC работает над web-interoperable runtimes за пределами браузера. [web:424][web:427][web:425]
</template>

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
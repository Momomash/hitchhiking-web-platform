---
theme: slidev-theme-field-manual
highlighter: shiki
lineNumbers: false
style: |
  @import url('./styles/index.css');

# aspect ratio for the slides
aspectRatio: 16/9
# real width of the canvas, unit in px
canvasWidth: 960

layout: cover
title: Автостопом по веб-платформе
author: Мария Кондаурова, BIOCAD
docNumber: "CODE FEST"
date: 2026
unit: CodeFest '16
classification: CODEFEST
---

# Автостопом по веб-платформе

<template v-slot:subtitle>
Мария Кондаурова · BIOCAD
</template>

<template v-slot:image>
<img src="./img/me.jpg" w-30 rounded-full border-5 border-white />
</template>

---
layout: two-column
title: Обо мне
sectionNumber: 0-1
docNumber: "CODE FEST"
transition: fade
---

## Обо мне

<v-clicks>

- FrontLead в Департаменте Вычислительной Биологии в BIOCAD
- Член программного комитета HolyJS
- Соорганизовывала SPB Frontend
- Живу в Питере, крашу Warhammer и занимаюсь фехтованием

</v-clicks>

::right::

  <img src="./img/llama.png"/>

---
layout: section
docNumber: "Автостопом по веб-платформе"
---

# Глава 1

## Что такое веб-платформа?

<template v-slot:descriptor>
Или как зарождался веб
</template>

---
sectionNumber: 1-1
docNumber: "CODE FEST"

---

<img src="./img/web.png" width="300" style="margin: 0 auto" />

<p v-click style="margin: 0 auto">Веб-платформа = Браузер + API + стандарты + тесты + комитеты</p>

---
layout: statement
sectionNumber: 1-2
docNumber: "CODE FEST"
---

# Но с чего всё начиналось?
---
layout: image-full
sectionNumber: 1-2
docNumber: "CODE FEST"
---
<template v-slot:image>
<img src="./img/first_comp.png"  />
</template>

# Первый в мире компьютер Eniac (1945)

---
title: ENIAC
sectionNumber: 1-4
docNumber: "CODE FEST"
---

## ENIAC: фан-факты

<v-clicks>

- Содержал около 18 000 вакуумных трубок.
- Занимал целую комнату и весил около 30 тонн.
- Новая задача -> перекоммутировать проводами и переключателями.

</v-clicks>

---
layout: image-full
sectionNumber: 1-5
docNumber: "CODE FEST"
---
<template v-slot:image>
<img src="./img/actual_comp.png"/>
</template>

# Современный компьютер
---
sectionNumber: 1-6
docNumber: "CODE FEST"
---

| Параметр            | ENIAC (1946)                                | iPhone 17 Pro (2025)                      |
|:--------------------|:--------------------------------------------|:------------------------------------------|
| Операций в секунду  | ≈5 000 сложений/сек<br>≈357 умножений/сек   | ≥6 000 000 000 000 операций/сек           |
| Память              | **20 слов** (10‑разрядные десятичные числа) | **6–8 ГБ** ОЗУ, до 1 ТБ постоянной памяти |
| Потребление энергии | ≈174 кВт                                    | ~10 Вт (пиковая нагрузка SoC)             |

---
layout: statement
sectionNumber: 1-7
docNumber: "CODE FEST"
---
## World Wide Web
---
layout: image-right
sectionNumber: 1-8
docNumber: "CODE FEST"
figNumber: 1-1
figLabel: TIM BERNERS-LEE — CREATOR OF THE WORLD WIDE WEB
---

# Тим Бернерс-Ли

## Создал первый браузер в **1990 году**

<template v-slot:image>
<img src="./img/tim.png"  />
</template>

---
docNumber: "CODE FEST"
sectionNumber: 1-9
---

<img src="./img/first_brows.png" height="500"/>
## Первый в мире сайт

---
layout: statement
sectionNumber: 1-10
docNumber: "CODE FEST"
---
## Изначальная идея веба как **гипертекстовой системы** для обмена знаниями
---
layout: image-right
sectionNumber: 1-11
docNumber: "CODE FEST"
figNumber: 1-2
figLabel: EARLY WEB — TABLE-BASED LAYOUTS
---

## Эра «Невинного» веба

<v-clicks>

- Статичные HTML-страницы
- Документы, ссылки, немного картинок
- Табличная вёрстка

</v-clicks>

<template v-slot:image>
<img src="./img/tablelayout.png"  />
</template>

---
sectionNumber: 1-12
docNumber: "CODE FEST"
---

<img src="./img/mac.png" height="80%"/>

## ПК —> Веб стал доступен каждому

---
layout: statement
sectionNumber: 1-13
docNumber: "CODE FEST"
---

## Люди стали генерировать контент и самовыражаться

---
sectionNumber: 1-14
---

<SlidevVideo autoplay>
  <source src="./mov/cameron1.mov"  />
</SlidevVideo>

---
layout: image-full
sectionNumber: 1-15
docNumber: "CODE FEST"
---
<template v-slot:image>
<img src="./img/jam.png"  />
</template>

# Сайт — как пиар компания фильма: Space Jam(1996)

---
layout: image-full
sectionNumber: 1-16
docNumber: "CODE FEST"
---

<template v-slot:image>
<img src="./img/one_million.png"/>
</template>

# Сайт — как заработок: The million dollars homepage (2005)

---
layout: statement
sectionNumber: 1-17
docNumber: "CODE FEST"
---

## Интернет взрослеет

### Самовыражение → сервис

---
layout: statement
sectionNumber: 1-18
docNumber: "CODE FEST"
---

## Веб перестаёт быть просто страницами и становится средой для жизни

<v-click>

### Браузер уже не тянет «старым» способом

</v-click>

---
layout: section
sectionNumber: '2'
docNumber: "Автостопом по веб-платформе"
---

# Глава 2

## Эволюция веб-платформы

<template v-slot:descriptor>
Или как веб пытался догнать ожидания пользователей
</template>

---
layout: statement
sectionNumber: 2-1
docNumber: "CODE FEST"
---

### "Фронтенд развивается скачкообразно"

---
layout: image-full
---

<template v-slot:image>
<img src="./img/./since.png">
</template>

---
sectionNumber: 2-2
docNumber: "CODE FEST"
---

## Скачок 1:  Статичный HTML → Динамический веб

[//]: # (TODO: добавить анимацию клика для всего)

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
sectionNumber: 2-3
docNumber: "CODE FEST"
---

## AJAX дал скорость,<br>но создал свои проблемы

<v-clicks>

- Управление состоянием вручную
- "Спагетти‑код" повсюду  **(привет, jquery!)**
- Каждый разработчик делает свой велосипед

</v-clicks>

<v-click>

### Нужна реиспользуемость

</v-click>


---
sectionNumber: 2-4
docNumber: "CODE FEST"
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

      - Angular/React/Vue
      - Клиент — UI-машина
      - Сервер — только API

  </div>
</div>

---
layout: default
sectionNumber: 2-5
docNumber: "CODE FEST"
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
sectionNumber: 2-6
docNumber: "CODE FEST"
---

## С мобильностью пришли новые вызовы

<v-clicks>

- Тяжёлый JS тормозит на слабых устройствах
- Touch UI вместо hover/click
- 3G/4G вместо оптоволокна
- Экраны от 320px до 4K

</v-clicks>

---
sectionNumber: 2-7

---

## Скачок 3: Десктоп → Mobile-first

sectionNumber: 2-7
docNumber: "CODE FEST"

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
      - Touch интерфейсы (Material UI)
      - Производительность (lazy load)
      - Сети 3G/4G

  </div>
</div>

---
sectionNumber: 2-8
docNumber: "CODE FEST"
---

[//]: # (TODO: добавить про развитие мобильных приложений &#40;бизнес хочет приложение для всего, есть стереотип что приложение стабильнее и тд)

## Mobile-first дал адаптивность, но хотелось нативности

<v-clicks>

- App Store модерация (недели)
- Обновления только через стор
- Офлайн недоступен
- Push только через натив

</v-clicks>

---
sectionNumber: 2-9
docNumber: "CODE FEST"
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
sectionNumber: 2-10
docNumber: "CODE FEST"
---

## ...но вылезли рендерные боли (опять)

<v-clicks>

- Тяжёлый JS на клиенте
- SEO страдает (SPA)
- TTFB (Time to First Byte) медленный
- Размытая ответственность между сервером и клиентом

</v-clicks>

---
sectionNumber: 2-11
docNumber: "CODE FEST"
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

      - Всё на клиенте (SPA)
      - Или всё на сервере (MPA)
      - Два кода
      - SEO или скорость

  </div>
  <div
    v-click
    class="rounded-2xl border border-teal-200/60 bg-teal-50/40 px-6 py-5"
  >
    <div class="text-sm uppercase tracking-widest text-teal-600 font-bold mb-4">
      RSC (React Server Components)
    </div>

      - Серверный рендер статичного
      - Клиентский только интерактив
      - Один код (async/await)
      - SEO + скорость + PWA

  </div>
</div>

<v-click>

<p class="mt-16 text-center">
Сервер рендерит → Streaming → Клиент "оживляет"
</p>

</v-click>

---
layout: timeline
sectionNumber: 2-12
docNumber: "CODE FEST"
title: ЭВОЛЮЦИЯ ВЕБА — ХРОНОЛОГИЯ
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
sectionNumber: 2-13
docNumber: "CODE FEST"
---

# Всего за 20 лет

---
sectionNumber: 2-14
docNumber: "CODE FEST"
---

<img src="./img/vk.png" />

---
sectionNumber: 2-15
docNumber: "CODE FEST"
---

<img src="./img/gonki.png" />

---
sectionNumber: 2-16
docNumber: "CODE FEST"
---

<img src="./img/zaycev.png" />

---
sectionNumber: 2-17
docNumber: "CODE FEST"
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
sectionNumber: 2-18
docNumber: "CODE FEST"
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
sectionNumber: 2-19
docNumber: "CODE FEST"
---


<div style="width: 100%; border-radius: 12px; overflow: hidden;">
  <video
    src="./mov/doom.mov"
    autoplay
    muted
    loop
    playsinline
    controls={false}
    style="width: 100%; height: auto; display: block;"
  ></video>
</div>
<p class="text-center">DOOM на CSS и JS <a href="https://cssdoom.wtf/">https://cssdoom.wtf/</a></p>


---
layout: two-column
sectionNumber: 2-20
docNumber: "CODE FEST"
title: "Web API в действии"
---

<template v-slot:left>

### 150+ браузерных Web API с доступом к

<v-clicks>

- телефону (контакты, вибрация, bluetooth, уведомления)
- железу (GPU)
- AI (конец 2025-го)
- ..и много чему еще

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
sectionNumber: 2-21
docNumber: "CODE FEST"
---

# Это уже полноценная платформа

---
layout: section
sectionNumber: '3'
docNumber: "Автостопом по веб-платформе"
---

# Глава 3

## Кто делает веб?

<template v-slot:descriptor>
Или зоопарк комитетов
</template>

---
layout: chart-full
sectionNumber: 3-1
docNumber: "CODE FEST"
title: КАРТА ВЛИЯНИЯ
figNumber: 3-1
figLabel: КТО КОНТРИБЬЮТИТ В WEB PLATFORM
transition: slide-left
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

  subgraph ECO["ВЛИЯНИЕ РАЗРАБОТЧИКОВ"]
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
ОБЗОР: стандарты, реализации, тесты и экосистема на одной карте. 
</template>

---
layout: chart-full
sectionNumber: 3-2
docNumber: "CODE FEST"
title: СЛОЙ 1 — СТАНДАРТЫ
figNumber: 3-2
figLabel: ОСНОВНЫЕ ПЛОЩАДКИ СТАНДАРТИЗАЦИИ
transition: slide-left
---

<template v-slot:chart>

```mermaid
%%{init: {'flowchart': {'curve': 'basis', 'nodeSpacing': 10, 'rankSpacing': 10}}}%%
flowchart LR

  W3C["W3C"] -->|CSS, WebAuthn, WebRTC,\nWeb Apps| WEB["WEB PLATFORM"]
  WHATWG["WHATWG"] -->|HTML, DOM, Fetch| WEB
  TC39["TC39 / Ecma"] -->|Javascript| WEB
  IETF["IETF"] -->|HTTP, QUIC, Transport| WEB
  WINTER["WinterCG"] -->|server runtimes| WEB

  classDef web fill:#3d4a22,stroke:#bf2020,color:#fff,stroke-width:2px;
  classDef org fill:#ede8d0,stroke:#8a7a50,color:#1a1a14;

  class WEB web;
  class W3C,WHATWG,TC39,IETF,WINTER org;
```

</template>

<template v-slot:source>
WHATWG ведёт HTML Living Standard; TC39 отвечает за JavaScript; W3C и IETF покрывают значительную часть веб-платформы и сетевого стека. 
</template>

---
layout: chart-full
sectionNumber: 3-3
docNumber: "CODE FEST"
title: СЛОЙ 2 — W3C И ИНКУБАЦИЯ
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
WICG — инкубатор новых веб-идей; внутри W3C множество рабочих и community groups с разной ответственностью. 
</template>

---
transition: slide-left
sectionNumber: 3-4
docNumber: "CODE FEST"
---

<img src="./img/pepe.png">

---
layout: two-column
sectionNumber: 3-5
docNumber: "CODE FEST"
title: История HTML как стандарта
transition: fade
---

<template v-slot:left>

# Если кратко

<v-clicks>

- очень много комитетов и рабочих групп
- в том числе поставщики браузеров
- не всегда прозрачные обязанности
- внутренняя "кухня" и политика

</v-clicks>

</template>

<template v-slot:right>
<img src="./img/game_of.png">
</template>

---
layout: statement
sectionNumber: 3-6
docNumber: "CODE FEST"
---

# Спецификации

---
layout: statement
sectionNumber: 3-6
docNumber: "CODE FEST"
---

Кто из вас читал спецификации по JS/HTML/CSS?

<v-click>

### ...и не сбежал через минуту?

</v-click>

---
layout: two-column
sectionNumber: 3-7
docNumber: "CODE FEST"
title: История HTML как стандарта
transition: fade
---

<template v-slot:left>

### Краткая история спеки

<v-clicks>

- **1989–1991** — HTML рождается в CERN вместе с Web.
- **1994–1999** — W3C формализует HTML как набор версий и рекомендаций.
- **2004** — **реализация опередила стандарт** и появился комитет WHATWG — как реакция браузерных вендоров.
- **2012** — у индустрии **две версии** HTML: W3C и WHATWG.
- **2019** — W3C и WHATWG договариваются о единой версии HTML и DOM, HTML как **living standard**.

</v-clicks>

</template>

<template v-slot:right>
<img src="./img/html.png">
</template>

---
sectionNumber: 3-8
docNumber: "CODE FEST"
---

<img src="./img/html_spec_1.png">

---
sectionNumber: 3-9
docNumber: "CODE FEST"
---

<img src="./img/html_spec_2.png">

---
sectionNumber: 3-10
docNumber: "CODE FEST"
---

<img src="./img/html_spec_3.png">

---
sectionNumber: 3-11
docNumber: "CODE FEST"
---

## HTML Living Standard (Last Updated 11 May 2026)

<img v-click src="./img/html_spec.png" class="mb-8">

<v-clicks>

- **Эту спецификацию следует читать так же, как и все другие спецификации.**
- Сначала — **от корки до корки**, несколько раз.
- Потом — в **обратном** направлении, как минимум один раз.
- Затем — выбирая случайные разделы в оглавлении и переходя по всем перекрёстным ссылкам.

</v-clicks>

---
sectionNumber: 3-12
docNumber: "CODE FEST"
---

## Раскол CSS

<v-click>

```mermaid
flowchart TD
    A["CSS1<br/>1996"] --> B["CSS2<br/>1998"]
    B --> C["CSS2.1"]

    C --> D["Модульная модель CSS"]

    D --> S1

    subgraph S1["Layout"]
        direction TB
        I["Flexbox<br/>Level 1"]
        J["Grid<br/>Level 1 → 2"]
        K["Multi-column<br/>Level 1"]
    end

    D --> S2

    subgraph S2["Styling"]
        direction TB
        E["Selectors<br/>Level 3 → 4"]
        F["Color<br/>Level 3 → 4 → 5"]
        G["Backgrounds & Borders<br/>Level 3 → 4"]
    end

    D --> S3

    subgraph S3["Behavior"]
        direction TB
        H["Media Queries<br/>Level 3 → 4 → 5"]
        L["Animations<br/>Level 1"]
        M["Transforms<br/>Level 1"]
    end

    S1 --> N["CSS Snapshot"]
    S2 --> N
    S3 --> N

    style D fill:#2563eb,stroke:#1d4ed8,color:#fff
    style N fill:#16a34a,stroke:#15803d,color:#fff
```

</v-click>

---
layout: two-column
sectionNumber: 3-13
docNumber: "CODE FEST"
title: TC39 и proposal-driven JavaScript
---

<template v-slot:left>  

### Javascript

<v-clicks>

- **ECMAScript 6** — последняя большая версия (2015)
- Новые фичи теперь проходят через **proposal stages**
- Cовременный JavaScript —  **непрерывный поток улучшений** c ежегодными мини-релизами
- Почти **10 лет** понадобилось чтобы "починить время" в вебе

</v-clicks>
</template>

<template v-slot:right>
  <img src="./img/js_logo.png" height="70%" >
</template>

---
layout: statement
sectionNumber: 3-14
docNumber: "CODE FEST"
---
Все спецификации пришли к философии микрорелизов

---
layout: statement
sectionNumber: 3-15
docNumber: "CODE FEST"
---

Браузерные войны

---
layout: two-column
sectionNumber: 3-16
docNumber: "CODE FEST"
---
<template v-slot:left>

## Браузерные войны

### Анархия и отсутствие стандартов между браузерами

</template>

<template v-slot:right>
<img src="./img/war.png">
</template>

---
layout: image-top
sectionNumber: 3-17
docNumber: "CODE FEST"
---

<template v-slot:image>
<img src="./img/canI.png" />
</template>

<v-clicks>

- Узнаешь из статьи/доклада про новую крутую фичу
- Пробуешь внедрить — не работает
- Плачешь в подушку / пишешь полифилл / загоняешь юзеров в один браузер
- ...Хорошо если года через 3 станет доступно везде

</v-clicks>

---
layout: statement
sectionNumber: 3-18
docNumber: "CODE FEST"
---

# Прошло **32** года

---
layout: two-column
sectionNumber: 3-19
docNumber: "CODE FEST"
---

<template v-slot:left>

# Interop

#### Google, Mozilla, Microsoft, Apple, Bocoup и Igalia — объединились для борьбы с проблемами несовместимости браузеров и стандартизации

<v-click>
<img src="./img/inter_progress.png">
</v-click>

</template>

<template v-slot:right>
<img src="./img/interop.png">
</template>

---
layout: statement
sectionNumber: 3-20
docNumber: "CODE FEST"
---

# но почему так сложно?

---
layout: image-full
sectionNumber: 3-21
docNumber: "CODE FEST"
---

<template v-slot:image>

<img src="./img/nelzy.png"  />

</template>

---
layout: statement
sectionNumber: 3-22
docNumber: "CODE FEST"
---

# Для чего создавался веб?

---
layout: image-full
sectionNumber: 3-23
docNumber: "CODE FEST"
---

<template v-slot:image>

<img src="./img/library.png"  />

</template>

---
sectionNumber: 3-24
---

### Принципы развития веб-платформы

<v-clicks>

- **Не ломай веб.**
- **Интероперабельность** — должно работать везде и одинаково.
- **Расширяй**, а не заменяй.
- **Безопасность по умолчанию.**
- **Доступность по умолчанию.**
- Патентная политика без роялти.

</v-clicks>

---
layout: section
sectionNumber: '4'
docNumber: "Автостопом по веб-платформе"
---

# Глава 4

## Немного будущих API

<template v-slot:descriptor>

~~Заменит ли нас ИИ~~

</template>

---
layout: statement
sectionNumber: 4-1
docNumber: "CODE FEST"
---

## web MCP

### (не путать с MCP)

---
layout: two-column
sectionNumber: 4-2
docNumber: "CODE FEST"
title: WebMCP
---

### WebMCP (не путать просто с MCP)

<template v-slot:left>

#### без WebMCP

<v-clicks>

- Робот/агент идет на сайт
- парсит его
- протыкивает все кнопки и добивается результата "стучась в каждую дверь"
-
- ... хорошо если еще верстка семантическая

</v-clicks>

</template>

<template v-slot:right>

#### WebMCP

<v-clicks>

- Мы описываем декларативно/императивно агенту как пользоваться сайтом
- Убираем хрупкую автоматизацию кликов
- AI — как новый "потребитель" веб-интерфейсов
- экономия токенов (профит)

</v-clicks>

</template>

---
layout: statement
sectionNumber: 4-3
docNumber: "CODE FEST"
---

## A2UI

---
layout: image-full
sectionNumber: 4-4
docNumber: "CODE FEST"
---

<template v-slot:image>
<img src="./img/A2UI.jpg"  />
</template>

---
layout: statement
sectionNumber: 4-5
docNumber: "CODE FEST"
---

JSON — как описание интерфейса

---
sectionNumber: 4-6
---

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center">
<div style="flex-grow: 1; width: 40%">
<img src="./img/msk_vue.jpg" class="rounded-xl shadow-lg" style="height: 250px" />
<a href="https://youtu.be/2btBC99seK4?si=jtrum7BTqGnK_E-K">Запись</a>
</div>

<div style="flex-grow: 1; width: 40%">
<img src="./img/holy.png" class="rounded-xl shadow-lg" style="height: 250px"  />
<a href="https://holyjs.ru/archive/2026%20Spring/talks/20009814-ai-driven-ui-how-the-ui-will-look-like-in-the-age-of-agents/" target="_blank" rel="noreferrer">Доклад</a>
</div>
</div>

---
layout: statement
sectionNumber: 4-7
docNumber: "CODE FEST"
---

# Prompt API

<v-clicks>

- предложен Google весной
- возможность вызвать модель прямо на сайте при помощи js
- быстродействие, одно "окно входа"
- ...
- можно использовать **только** Gemini Nano

</v-clicks>

---
layout: statement
sectionNumber: 4-8
---

## position: **negative**

<v-click>

# concerns: **interoperability**

</v-click>

---
layout: image-full
sectionNumber: 4-9
docNumber: "CODE FEST"
---
<template v-slot:image>
<img src="./img/chrome_vs_fire.png"  />
</template>

---
sectionNumber: 4-10
---

### Совсем кратко

<v-clicks>

- **WebMCP** — сайт становится удобным для AI-агента
- **A2UI** — интерфейс можно генерировать динамически под задачу на основе json
- **Prompt API** — возможность вызова модели из браузера/js

</v-clicks>

---
sectionNumber: 4-11
docNumber: "CODE FEST"
---

### Выводы

<v-clicks>

- веб-платформа — это **зеркало**. Отражает то, как мы хотим жить, работать и взаимодействовать с интернетом.
- веб платформа — это самое большое **легаси** интернета
- в веб-платформе много хаоса — зоопарк комитетов и технологий
- нормально **договариваться** браузеры и комитеты начали только лет **7 назад** (условно)
- Chrome всё равно "грешит" и **проталкивает** своё влияние при помощи API
- Но эта система существует более **36 лет** и развивается

</v-clicks>

---
layout: statement
sectionNumber: 4-12
docNumber: "CODE FEST"
---

## Послесловие

---
layout: end
sectionNumber: 5
docNumber: "CODE FEST"
classification: CODEFEST
unit: HQ, DEPT OF THE PRESENTATION
photo: ./img/qr.png

---

<template v-slot:title>Спасибо</template>

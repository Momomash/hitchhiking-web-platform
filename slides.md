---
theme: slidev-theme-field-manual
highlighter: shiki
lineNumbers: false

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

### Но с чего всё началось?

---

<img src="./img/first_comp.png"/>

Первый в мире компьютер ENIAC (1945 год)

---

<img src="./img/actual_comp.png"/>

Современный компьютер

---

| Параметр            | ENIAC (1945)                                | iPhone 17 Pro (2025)                      |
|:--------------------|:--------------------------------------------|:------------------------------------------|
| Операций в секунду  | ≈5 000 сложений/сек<br>≈357 умножений/сек   | ≥6 000 000 000 000 операций/сек           |
| Память              | **20 слов** (10‑разрядные десятичные числа) | **6–8 ГБ** ОЗУ, до 1 ТБ постоянной памяти |
| Потребление энергии | ≈174 кВт                                    | ~10 Вт (пиковая нагрузка SoC)             |

---

### Интернет (World Wide Web)

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

<img src="./img/first_brows.png"/>

Первый в мире сайт

---

Изначальная идея веба как **гипертекстовой системы**<br>
для обмена знаниями

---

<img src="./img/mac.png"/>

ПК —> Веб стал доступен каждому

---

### Эра «Невинного» веба

<div flex="row items-center">

<ul font-size="0.9em">
  <li>Статичные HTML-страницы</li>
  <li>Документы, ссылки, немного картинок</li>
  <li>Табличная вёрстка</li>
</ul>

<br>

<img src="./img/tablelayout.png" w-150/>

</div>

---

### Люди стали генерировать контент и самовыражаться

---

<video src="./mov/cameron1.mov" autoplay playbackRate="3"/>

---

#### Сайт — как пиар компания фильма:<br/> Space Jam(1996)

<img src="./img/jam.png"/>

---

#### Сайт — как заработок: <br/> The million dollars homepage (2005)

<img src="./img/one_million.png"/>

---

# Интернет взрослеет

---

#### Самовыражение → сервис

- Почта в браузере (Gmail)
- Карты и навигация (Google Maps)
- Соцсети, мессенджеры, онлайн-документы

---

### Веб перестаёт быть просто страницами и становится средой для жизни

### ↓

### Браузер уже не тянет «старым способом»

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
sectionNumber: '2'
---

### Фронтенд развивается **скачкообразно**

---
sectionNumber: '2'
---

#### Скачок 1

### Статичный HTML → Динамический веб

<br>

<div grid="cols-2 gap-8" items-start>

<div v-click>

<h5 style="color: #ff6b6b">До (2004)</h5>

- Каждое действие — новая страница
- Обновить статус — рефреш

</div>

<div v-click>

<h5 style="color: #4ecdc4">Gmail + AJAX</h5>

- Частичное обновление страницы
- **Мгновенные ответы**

</div>

</div>

---
sectionNumber: '2'
---

### AJAX решил скорость,<br>но создал новые проблемы

- **"Спагетти"‑код** повсюду **(привет, jquery!)***
- Состояние вручную
- Каждый разработчик делает свой велосипед

<p v-click text-center text="1.2em" color="#6ee7ff" font-weight="500" mt-8>
**Нужна реиспользуемость**
</p>

---
sectionNumber: '2'
---

#### Скачок 2

### Страницы → SPA и фреймворки

<br>

<div grid="cols-2 gap-8" items-start>

<div v-click>

<h5 style="color: #ff6b6b">Было (MPA)</h5>

- Каждый экран — отдельный HTML
- Сервер рендерит всю страницу
- Ограниченная интерактивность
- Много кода

</div>

<div v-click>

<h5 style="color: #4ecdc4">Стало (SPA)</h5>

- **Angular/React/Vue/Svelte**
- Клиент — **UI-машина**
- Сервер — **только API**

</div>

</div>

---
sectionNumber: '2'
background: #0f0f23
---

### Но телефоны не стояли на месте

<div grid="cols-2 gap-10" items-center>

<div v-click>

<h4 style="color: #ff6b6b">Кнопочные (2000–2007)</h4>

<div grid="cols-2 gap-5">
  <img src="./img/nokia.png" w-40 h-40 rounded-xl/>
  <img src="./img/moto.png" w-40 h-40 rounded-xl/>
  <img src="./img/sams.png" w-40 h-40 rounded-xl/>
  <img src="./img/burb.png" w-40 h-40 rounded-xl/>
</div>

</div>

<div v-click>

<h4 style="color: #4ecdc4">Сенсорные (2007+)</h4>

<div grid="cols-2 gap-5">
  <img src="./img/experia.png" w-40 h-40 rounded-xl/>
  <img src="./img/iphone.png" w-40 h-40 rounded-xl/>
  <img src="./img/lg.png" w-40 h-40 rounded-xl/>
  <img src="./img/galaxy.png" w-40 h-40 rounded-xl/>
</div>

</div>

</div>

---
sectionNumber: '2'
---

### Мобильные телефоны развиваются

<div max-w-200 mx-auto>

<div v-click>

- **Тяжёлый JS** тормозит на слабых устройствах
- **Touch UI** вместо hover/click
- **3G/4G** вместо оптоволокна
- Экраны **от 320px до 4K**

</div>

</div>

---
sectionNumber: '2'
---

#### Скачок 3

### Десктопный веб → Mobile-first

<br>

<div grid="cols-2 gap-8" items-start>

<div v-click>

<h5 style="color: #ff6b6b">Десктоп‑first (2010)</h5>

- Фиксированная ширина 1024px
- Hover и курсор мыши
- Быстрый интернет (DSL)
- Мощные ПК

</div>

<div v-click>

<h5 style="color: #4ecdc4">Mobile-first (2012+)</h5>

- **Адаптивность** 320px–4K
- **Touch** интерфейсы
- **Производительность** (lazy load)
- Сети **3G/4G**

</div>

</div>

---
sectionNumber: '2'
---

### Mobile-first решили адаптивность,<br>но..

<div max-w-200 mx-auto>

<div v-click>

#### Боли нативных приложений

- **App Store** модерация (недели)
- **Обновления** только через стор
- **Офлайн** недоступен
- Push только **через натив**

</div>

</div>

---
sectionNumber: '2'
---

#### Скачок 4

### Веб → PWA

<br>

<div grid="cols-2 gap-8" items-start>

<div v-click>

<h5 style="color: #ff6b6b">Обычный веб</h5>

- Только онлайн
- Не устанавливается
- Нет push
- Зависит от сети

</div>

<div v-click>

<h5 style="color: #4ecdc4">PWA</h5>

- **Offline-first**
- **Установка** без стора
- **Push** нативные
- Кэш + Service Workers

</div>

</div>

<br/>

<div v-click text-center mt-6>
<p text="0.8em" color="#aaa" mt-2>
Service Worker = прокси между сетью и кэшем
</p>
</div>

---
sectionNumber: '2'
---

### ...но вылезли рендерные боли (опять)

<div max-w-200 mx-auto>

<div v-click>

- **Тяжёлый JS** на клиенте
- **SEO** страдает (SPA)
- **TTFB** медленный
- Сложно **гибрид** сервер/клиент

</div>

</div>

---
sectionNumber: '2'
---

#### Скачок 5

### Классический клиент/сервер → serverComponents

<div grid="cols-2 gap-8" items-start>

<div v-click>

<h5 style="color: #ff6b6b">Классика</h5>

- Всё на **клиенте** (SPA)
- Или всё на **сервере** (MPA)
- Два **кода**
- SEO или **скорость**

</div>

<div v-click>

<h5 style="color: #4ecdc4">RSC (React Server Components)</h5>

- **Серверный** рендер статичного
- **Клиентский** только интерактив
- **Один код** (async/await)
- SEO + **скорость** + PWA

</div>

</div>

<div v-click text-center mt-6>
<p text="0.8em" color="#aaa">
Сервер рендерит → Streaming → Клиент "оживляет"
</p>
</div>

---
sectionNumber: '2'
background: #0f0f23
---

### За **20 лет** 5 скачков

<div text-left>

2007: iPhone → мобильные боли (320px, touch, 3G)<br/>
├ 2007-2012: Mobile-first подход (адаптив, responsive)<br/>
└ 2010-2013: SPA бум (AngularJS 2010, React 2013) →<br/>
<span ml-6>├ SPA + мобильные боли</span><br/>
<span ml-6>├ → PWA (2015+)</span><br/>
<span ml-6>└ → RSC (2023+)</span>

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

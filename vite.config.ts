import { defineConfig } from 'vite'

/*
 * Картинки, переданные пропом в компонент (<Screenshot src="./assets/x.png" />),
 * Vue по умолчанию не считает ассетами: его transformAssetUrls знает только
 * список тегов — img, video, source, image, use. Поэтому такой путь оставался
 * в бандле строкой «./assets/x.png», файл в dist не попадал, а браузер
 * дорезолвливал строку относительно текущего адреса. На дев-сервере в корне
 * это случайно совпадало с рабочим путём, а на GitHub Pages (база
 * /hitchhiking-web-platform/) и в presenter mode (/presenter/N) — уже нет,
 * и картинки отваливались.
 *
 * '*' включает разбор src у любого тега, в том числе у наших компонентов.
 * Поимённо (Screenshot: ['src']) не работает: до трансформа доезжает не то имя
 * тега, под которым компонент записан в слайде. Остальные ключи — дефолты
 * Vue: свой объект tags их заменяет целиком, без них перестаёт бандлиться
 * даже обычный <img>.
 */
export default defineConfig({
  slidev: {
    vue: {
      template: {
        transformAssetUrls: {
          video: ['src', 'poster'],
          source: ['src'],
          img: ['src'],
          image: ['xlink:href', 'href'],
          use: ['xlink:href', 'href'],
          '*': ['src'],
        },
      },
    },
  },
})

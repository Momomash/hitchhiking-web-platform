import { defineMermaidSetup } from '@slidev/types'

/**
 * Mermaid по умолчанию рисует subgraph жёлтой подложкой и своим шрифтом —
 * на слайдах это читалось как чужой элемент. Приводим диаграммы к палитре темы:
 * подложка группы = «бумага», узлы = панели интерфейса, линии = рамки окон.
 *
 * Просьба прогонного комитета: текст крупнее, стрелки жирнее, фоны контрастнее.
 * Поэтому узлы здесь заметно насыщеннее «хрома» темы: на диаграммах фон несёт
 * категорию блока, и пастельной версии с проектора было не отличить.
 */
export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    background: '#ffffff',

    // Узлы по умолчанию — как панели системного интерфейса
    primaryColor: '#c8d7e5',
    primaryTextColor: '#17212b',
    primaryBorderColor: '#5a6b7a',
    secondaryColor: '#e6dfc8',
    secondaryBorderColor: '#748596',
    tertiaryColor: '#b5d2ea',
    tertiaryBorderColor: '#3f6f9f',

    // Группы (subgraph)
    clusterBkg: '#eef2f6',
    clusterBorder: '#9fb0bf',

    lineColor: '#4d6172',
    textColor: '#17212b',
    nodeTextColor: '#17212b',
    titleColor: '#17212b',

    fontFamily: "'IBM Plex Sans', 'Segoe UI', Tahoma, Verdana, sans-serif",
    fontSize: '17px',

    // Толщина рёбер flowchart; стрелки (marker) масштабируются от неё же
    'line-width': 3,
  },
}))

import { defineMermaidSetup } from '@slidev/types'

/**
 * Mermaid по умолчанию рисует subgraph жёлтой подложкой и своим шрифтом —
 * на слайдах это читалось как чужой элемент. Приводим диаграммы к палитре темы:
 * подложка группы = «бумага», узлы = панели интерфейса, линии = рамки окон.
 */
export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    background: '#ffffff',

    // Узлы по умолчанию — как панели системного интерфейса
    primaryColor: '#e8edf2',
    primaryTextColor: '#17212b',
    primaryBorderColor: '#7d8b99',
    secondaryColor: '#f7f4ed',
    secondaryBorderColor: '#98a8b6',
    tertiaryColor: '#d8e6f4',
    tertiaryBorderColor: '#5d84ad',

    // Группы (subgraph)
    clusterBkg: '#f4f6f9',
    clusterBorder: '#b7c4cf',

    lineColor: '#6b7c8c',
    textColor: '#17212b',
    nodeTextColor: '#17212b',
    titleColor: '#17212b',

    fontFamily: "'IBM Plex Sans', 'Segoe UI', Tahoma, Verdana, sans-serif",
    fontSize: '14px',
  },
}))

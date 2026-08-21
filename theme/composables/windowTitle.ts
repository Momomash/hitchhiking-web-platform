import { computed } from 'vue'
import type { ComputedRef } from 'vue'

/**
 * Имя окна для тайтлбара.
 *
 * `title` слайда нельзя получить пропом: Slidev держит его в FRONTMATTER_FIELDS
 * и вырезает перед передачей в лейаут (см. frontmatterToProps в @slidev/client).
 * Зато полный frontmatter приезжает отдельным пропом `frontmatter` — берём title
 * оттуда. Благодаря этому существующие `title:` в slides.md начинают работать
 * как имена окон, и править 138 слайдов не нужно.
 */
export interface WindowTitleProps {
  windowTitle?: string
  docNumber?: string
  classification?: string
  frontmatter?: Record<string, any>
}

export function useWindowTitle(
  props: WindowTitleProps,
  fallback = 'WEB PLATFORM',
): ComputedRef<string> {
  return computed(
    () =>
      props.windowTitle
      ?? props.frontmatter?.title
      ?? props.classification
      ?? props.docNumber
      ?? fallback,
  )
}

import { useCallback, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { OTHER_LANG, getLangFromPath } from './helpers'
import {
  categoryPath,
  getLocalizedRoute,
  homeHashPath,
  pagePath,
  schoolPath,
} from './routes'
import { translate } from './translate'
import type { Lang } from './types'

export const useI18n = () => {
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)
  const otherLang: Lang = OTHER_LANG[lang]

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => translate(lang, key, vars),
    [lang]
  )

  const path = useMemo(
    () => ({
      home: pagePath('home', lang),
      about: pagePath('about', lang),
      contact: pagePath('contact', lang),
      privacy: pagePath('privacy', lang),
      search: pagePath('search', lang),
      map: pagePath('map', lang),
      homeCategories: homeHashPath(lang),
      category: (slug: string) => categoryPath(lang, slug),
      school: (slug: string, categoryId?: string) => schoolPath(lang, slug, categoryId),
      forLang: {
        sr: getLocalizedRoute(location.pathname, 'sr', location.search, location.hash),
        en: getLocalizedRoute(location.pathname, 'en', location.search, location.hash),
      },
      switchLanguage: getLocalizedRoute(
        location.pathname,
        otherLang,
        location.search,
        location.hash
      ),
    }),
    [lang, otherLang, location.pathname, location.search, location.hash]
  )

  return { lang, otherLang, t, path }
}

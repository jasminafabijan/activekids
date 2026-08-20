import { getLocalizedText, interpolate, warnMissingEnglish, warnMissingTranslation } from './helpers'
import { translations } from './translations'
import type { Lang, LocalizedText } from './types'

type TranslationGroup = Record<string, LocalizedText>

const dictionary = translations as unknown as Record<string, TranslationGroup>

if (import.meta.env.DEV) {
  for (const [group, bag] of Object.entries(dictionary)) {
    for (const [name, value] of Object.entries(bag)) {
      if (!value?.en?.trim()) {
        warnMissingEnglish(`ui:${group}.${name}`, 'en is missing or empty')
      }
    }
  }
}

export const translate = (lang: Lang, key: string, vars?: Record<string, string | number>): string => {
  const [group, name] = key.split('.')
  const value = group && name ? dictionary[group]?.[name] : undefined

  if (!value) {
    warnMissingTranslation(key, lang)
    return key
  }

  return interpolate(getLocalizedText(value, lang, `ui:${key}`), vars)
}

export type Translate = typeof translate

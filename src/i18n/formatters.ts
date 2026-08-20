import { getCityLocative } from '../data/cities'
import { translate } from './translate'
import type { Lang } from './types'

export const formatSchoolCountLabel = (count: number, lang: Lang): string => {
  if (lang === 'en') {
    return translate(lang, count === 1 ? 'search.schoolOne' : 'search.schoolMany', { n: count })
  }

  const mod10 = count % 10
  const mod100 = count % 100

  if (mod10 === 1 && mod100 !== 11) {
    return translate(lang, 'search.schoolOne', { n: count })
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return translate(lang, 'search.schoolFew', { n: count })
  }

  return translate(lang, 'search.schoolMany', { n: count })
}

export const formatSearchSubtitle = (
  count: number,
  hasAge: boolean,
  hasLocation: boolean,
  lang: Lang,
  hasActivity = false
): string => {
  const label = formatSchoolCountLabel(count, lang)

  if (hasAge && hasLocation) {
    return translate(lang, 'search.foundAgeLocation', { count: label })
  }

  if (hasAge) {
    if (lang === 'en') {
      return translate(lang, 'search.foundAge', { count: label })
    }

    const agreement = count === 1 ? 'koja odgovara' : 'koje odgovaraju'
    return translate(lang, 'search.foundAge', { count: label, agreement })
  }

  if (hasLocation) {
    return translate(lang, 'search.foundLocation', { count: label })
  }

  if (hasActivity) {
    return translate(lang, 'search.foundActivity', { count: label })
  }

  return translate(lang, 'search.found', { count: label })
}

export const formatMapCountLabel = (count: number, cityName: string, lang: Lang): string => {
  const remainder10 = count % 10
  const remainder100 = count % 100
  const word =
    lang === 'en'
      ? translate(lang, count === 1 ? 'map.locationOne' : 'map.locationMany')
      : remainder100 >= 11 && remainder100 <= 14
        ? translate(lang, 'map.locationMany')
        : remainder10 === 1
          ? translate(lang, 'map.locationOne')
          : remainder10 >= 2 && remainder10 <= 4
            ? translate(lang, 'map.locationFew')
            : translate(lang, 'map.locationMany')

  const city = lang === 'en' ? cityName : getCityLocative(cityName)
  return translate(lang, 'map.count', { count, word, city })
}

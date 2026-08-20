export { addActivityFormUrl, CONTACT_EMAIL, VIBER_PHONE } from './config'
export { formatMapCountLabel, formatSchoolCountLabel, formatSearchSubtitle } from './formatters'
export {
  DEFAULT_LANG,
  OTHER_LANG,
  formatAgeLabel,
  formatAgeOptionLabel,
  formatPopupAge,
  schoolAgeLabel,
  getLangFromPath,
  getLocalizedParagraphs,
  getLocalizedText,
  interpolate,
  warnMissingEnglish,
} from './helpers'
export {
  CATEGORY_ROUTE_PATH,
  HASH,
  PAGE_PATHS,
  PATH_SEGMENT,
  QUERY,
  SCHOOL_ROUTE_PATH,
  categoryPath,
  getCategoryQueryValue,
  getCategorySlug,
  getLocalizedRoute,
  homeHashPath,
  isCategoriesHash,
  isCategoryPath,
  isHomePath,
  localizeCategorySlug,
  matchCategorySlug,
  matchSchoolSlug,
  pagePath,
  schoolPath,
} from './routes'
export { translate } from './translate'
export { translations } from './translations'
export type { Lang, LocalizedParagraphs, LocalizedText } from './types'
export { useI18n } from './useI18n'

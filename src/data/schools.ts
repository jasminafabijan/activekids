import { getCategoryBySlug, getCategoryName, getCategoryNameBySlug } from './categories'
import { getDistrictName, DISTRICT_LABELS } from './districts'
import { getStreetName } from './streets'
import { formatAgeLabel, formatAgeOptionLabel, getLocalizedText, warnMissingEnglish } from '../i18n/helpers'
import type { Lang } from '../i18n/types'
import { balletSchools } from './schoolCategories/ballet'
import { jazzBalletSchools } from './schoolCategories/jazz-ballet'
import { footballSchools } from './schoolCategories/football'
import { actingSchools } from './schoolCategories/acting'
import { tennisSchools } from './schoolCategories/tennis'
import { tableTennisSchools } from './schoolCategories/table-tennis'
import { basketballSchools } from './schoolCategories/basketball'
import { karateSchools } from './schoolCategories/karate'
import { boxingSchools } from './schoolCategories/boxing'
import { aikidoSchools } from './schoolCategories/aikido'
import { chessSchools } from './schoolCategories/chess'
import { ridingSchools } from './schoolCategories/riding'
import { folkloreSchools } from './schoolCategories/folklore'
import { volleyballSchools } from './schoolCategories/volleyball'
import { danceSportSchools } from './schoolCategories/dance-sport'
import { swimmingSchools } from './schoolCategories/swimming'
import { miniSportsSchools } from './schoolCategories/mini-sports'
import { athleticsSchools } from './schoolCategories/athletics'
import { developmentalGymnasticsSchools } from './schoolCategories/developmental-gymnastics'
import { capoeiraSchools } from './schoolCategories/capoeira'
import { languagesSchools } from './schoolCategories/languages'
import type { School, SchoolAddress, SchoolFilters } from './schoolCategories/types'

export type { School, SchoolAddress, SchoolContact, SchoolFilters } from './schoolCategories/types'

export const schools: School[] = [
    ...balletSchools,
    ...jazzBalletSchools,
    ...danceSportSchools,
    ...footballSchools,
    ...actingSchools,
    ...tennisSchools,
    ...tableTennisSchools,
    ...basketballSchools,
    ...volleyballSchools,
    ...karateSchools,
    ...boxingSchools,
    ...aikidoSchools,
    ...capoeiraSchools,
    ...chessSchools,
    ...swimmingSchools,
    ...miniSportsSchools,
    ...athleticsSchools,
    ...developmentalGymnasticsSchools,
    ...ridingSchools,
    ...folkloreSchools,
    ...languagesSchools,
]

export const formatSchoolAddress = (address: SchoolAddress, lang: Lang = 'sr') =>
    `${getStreetName(address.street, lang)}, ${address.city}`

export const getContactPhones = (phone?: string | string[]) => {
    if (!phone) {
        return []
    }

    return Array.isArray(phone) ? phone : [phone]
}

export const formatPhoneHref = (phone: string) => {
    const digits = phone.replace(/\D/g, '')

    if (digits.startsWith('0')) {
        return `tel:+381${digits.slice(1)}`
    }

    if (digits.startsWith('381')) {
        return `tel:+${digits}`
    }

    return `tel:${digits}`
}

export const getMapsHref = (address: SchoolAddress) => {
    const query =
        address.lat != null && address.lng != null
            ? `${address.lat},${address.lng}`
            : `${address.street}, ${address.city}`

    return `https://maps.google.com/maps?q=${encodeURIComponent(query)}`
}

export const getGoogleMapsOpenHref = (addresses: SchoolAddress[]) => {
    const withCoords = addresses.filter(
        (address): address is SchoolAddress & { lat: number; lng: number } =>
            address.lat != null && address.lng != null
    )

    if (withCoords.length === 1) {
        const { lat, lng } = withCoords[0]
        return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    }

    if (withCoords.length > 1) {
        const centerLat =
            withCoords.reduce((sum, address) => sum + address.lat, 0) / withCoords.length
        const centerLng =
            withCoords.reduce((sum, address) => sum + address.lng, 0) / withCoords.length
        return `https://www.google.com/maps/@${centerLat},${centerLng},14z`
    }

    if (addresses.length > 0) {
        return getMapsHref(addresses[0])
    }

    return 'https://www.google.com/maps'
}

export const getSchoolNameSr = (school: Pick<School, 'name'>): string => school.name.sr

export const getSchoolName = (school: Pick<School, 'id' | 'name'>, lang: Lang): string =>
    getLocalizedText(school.name, lang, `school:${school.id}:name`)

export const getSchoolsByCategory = (categorySlug: string, lang: Lang = 'sr') => {
    const categoryId = getCategoryBySlug(categorySlug)?.id ?? categorySlug

    return schools
        .filter((school) => school.categorySlugs.includes(categoryId))
        .sort((a, b) => getSchoolName(a, lang).localeCompare(getSchoolName(b, lang), lang === 'en' ? 'en' : 'sr'))
}

/** Newest first — prepend the school id here when adding a new school. */
const RECENTLY_ADDED_SCHOOL_IDS = [
    'plivanje-spens',
    'eltisi',
    'veliko-kolo',
] as const

export const getRecentlyAddedSchools = (count = 3) =>
    RECENTLY_ADDED_SCHOOL_IDS.slice(0, count)
        .map((id) => schools.find((school) => school.id === id))
        .filter((school): school is School => school != null)

export const formatSchoolCategoryNames = (school: School, lang: Lang = 'sr') =>
    school.categorySlugs
        .map((slug) => getCategoryNameBySlug(slug, lang))
        .join(', ')

export const getSchoolBySlug = (slug: string) =>
    schools.find((school) => school.slug === slug)

export const getSchoolDistricts = (school: School) => {
    const fromAddresses =
        school.addresses
            ?.map((address) => address.district)
            .filter((district): district is string => district != null && district.length > 0) ?? []

    if (fromAddresses.length > 0) {
        return [...new Set(fromAddresses)]
    }

    return [school.district]
}

export const formatSchoolDistricts = (school: School, lang: Lang = 'sr') =>
    getSchoolDistricts(school)
        .map((district) => getDistrictName(district, lang))
        .join(', ')

export const getDistrictOptions = (lang: Lang = 'sr') =>
    [...new Set(schools.flatMap((school) => getSchoolDistricts(school)))].sort((a, b) =>
        getDistrictName(a, lang).localeCompare(getDistrictName(b, lang), lang === 'en' ? 'en' : 'sr')
    )

if (import.meta.env.DEV) {
    for (const district of getDistrictOptions('sr')) {
        if (!(district in DISTRICT_LABELS)) {
            warnMissingEnglish(`district:${district}`, 'not in DISTRICT_LABELS')
        }
    }

    for (const school of schools) {
        for (const address of school.addresses ?? []) {
            getStreetName(address.street, 'en')
        }
    }
}

export const getAgeOptions = (lang: Lang = 'sr') => {
    const minAge = Math.min(...schools.map((school) => school.minAge))
    const finiteMaxAges = schools
        .map((school) => school.maxAge)
        .filter((age): age is number => age != null)
    const maxFiniteAge = Math.max(...finiteMaxAges)
    const hasOpenEndedRange = schools.some((school) => school.maxAge == null)
    const finalAge = hasOpenEndedRange ? maxFiniteAge + 1 : maxFiniteAge

    return Array.from({ length: finalAge - minAge + 1 }, (_, index) => {
        const value = minAge + index
        const isOpenEnded = hasOpenEndedRange && value === finalAge
        const label = isOpenEnded ? formatAgeLabel(value, null, lang) : formatAgeOptionLabel(value, lang)
        return { value, label }
    })
}

export const getActivityOptions = (lang: Lang = 'sr') =>
    [...new Set(schools.flatMap((school) => school.categorySlugs))]
        .map((slug) => {
            const category = getCategoryBySlug(slug)
            return category ? { slug, name: getCategoryName(category, lang) } : null
        })
        .filter((option): option is { slug: string; name: string } => option != null)
        .sort((a, b) => a.name.localeCompare(b.name, lang === 'en' ? 'en' : 'sr'))

export const filterSchools = (filters: SchoolFilters) =>
    schools.filter((school) => {
        if (filters.city && school.city !== filters.city) {
            return false
        }

        if (
            filters.activities.length > 0 &&
            !filters.activities.some((activity) => school.categorySlugs.includes(activity))
        ) {
            return false
        }

        if (
            filters.age != null &&
            (filters.age < school.minAge || (school.maxAge != null && filters.age > school.maxAge))
        ) {
            return false
        }

        if (filters.partsOfCity.length > 0) {
            const schoolDistricts = getSchoolDistricts(school)
            const matchesDistrict = filters.partsOfCity.some((part) =>
                schoolDistricts.includes(part)
            )

            if (!matchesDistrict) {
                return false
            }
        }

        return true
    })


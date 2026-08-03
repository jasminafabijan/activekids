import { getCategoryBySlug } from './categories'
import { balletSchools } from './schoolCategories/ballet'
import { jazzBalletSchools } from './schoolCategories/jazz-ballet'
import { footballSchools } from './schoolCategories/football'
import { actingSchools } from './schoolCategories/acting'
import { tennisSchools } from './schoolCategories/tennis'
import { basketballSchools } from './schoolCategories/basketball'
import { karateSchools } from './schoolCategories/karate'
import { ridingSchools } from './schoolCategories/riding'
import { folkloreSchools } from './schoolCategories/folklore'
import { volleyballSchools } from './schoolCategories/volleyball'
import type { School, SchoolAddress, SchoolFilters } from './schoolCategories/types'

export type { School, SchoolAddress, SchoolContact, SchoolFilters } from './schoolCategories/types'

export const schools: School[] = [
    ...balletSchools,
    ...jazzBalletSchools,
    ...footballSchools,
    ...actingSchools,
    ...tennisSchools,
    ...basketballSchools,
    ...volleyballSchools,
    ...karateSchools,
    ...ridingSchools,
    ...folkloreSchools,
]

export const formatSchoolAddress = (address: SchoolAddress) =>
    `${address.street}, ${address.city}`

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
            : formatSchoolAddress(address)

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

export const getSchoolsByCategory = (categorySlug: string) =>
    schools
        .filter((school) => school.categorySlugs.includes(categorySlug))
        .sort((a, b) => a.name.localeCompare(b.name, 'sr'))

/** Newest first — prepend the school id here when adding a new school. */
const RECENTLY_ADDED_SCHOOL_IDS = [
    'champ-07-odbojka',
    'dobrila-novkov',
    'champ-07-fudbal',
] as const

export const getRecentlyAddedSchools = (count = 3) =>
    RECENTLY_ADDED_SCHOOL_IDS.slice(0, count)
        .map((id) => schools.find((school) => school.id === id))
        .filter((school): school is School => school != null)

export const formatSchoolCategoryNames = (school: School) =>
    school.categorySlugs
        .map((slug) => getCategoryBySlug(slug)?.name ?? slug)
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

export const formatSchoolDistricts = (school: School) => getSchoolDistricts(school).join(', ')

export const getDistrictOptions = () =>
    [...new Set(schools.flatMap((school) => getSchoolDistricts(school)))].sort((a, b) =>
        a.localeCompare(b, 'sr')
    )

const formatAgeOptionLabel = (age: number) => {
    const remainder = age % 10
    const isTeen = age >= 10 && age <= 20

    if (remainder >= 2 && remainder <= 4 && !isTeen) {
        return `${age} godine`
    }

    return `${age} godina`
}

export const getAgeOptions = () => {
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
        const label = isOpenEnded ? `${value}+ godina` : formatAgeOptionLabel(value)
        return { value, label }
    })
}

export const getActivityOptions = () =>
    [...new Set(schools.flatMap((school) => school.categorySlugs))]
        .map((slug) => {
            const category = getCategoryBySlug(slug)
            return category ? { slug, name: category.name } : null
        })
        .filter((option): option is { slug: string; name: string } => option != null)
        .sort((a, b) => a.name.localeCompare(b.name, 'sr'))

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


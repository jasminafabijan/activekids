import ntcBaletWebp from '../assets/images/schools/ntc-balet.webp'
import ntcBaletPng from '../assets/images/schools/ntc-balet.png'
import reveransWebp from '../assets/images/schools/reverans.webp'
import reveransJpg from '../assets/images/schools/reverans.jpg'
import { getCategoryBySlug } from './categories'

export type SchoolFilters = {
    city: string
    partsOfCity: string[]
    ages: string[]
    activity: string
}

export type SchoolContact = {
    phone?: string
    email?: string
    website?: string
    facebook?: string
    instagram?: string
}

export type SchoolAddress = {
    street: string
    city: string
    district?: string
    lat?: number
    lng?: number
}

export type School = {
    id: string
    slug: string
    name: string
    categorySlug: string
    city: string
    district: string
    ageRange: string
    imageWebp: string
    imageFallback: string
    description?: string[]
    addresses?: SchoolAddress[]
    contact?: SchoolContact
}

export const schools: School[] = [
    {
        id: '1',
        slug: 'ntc-balet',
        name: 'NTC balet',
        categorySlug: 'balet',
        city: 'Novi Sad',
        district: 'Centar',
        ageRange: '3-7 godina',
        imageWebp: ntcBaletWebp,
        imageFallback: ntcBaletPng,
        description: [
            'NTC program baleta predstavlja inovativni pristup razvoju dece koji spaja elemente klasičnog baleta sa principima NTC sistema učenja.',
            'Program je osmišljen od strane dr Ranka Rajovića i balerine Sare Đurakić, sa ciljem da deca kroz pokret razvijaju koordinaciju, motoriku i samopouzdanje.',
            'Deca uče osnovne baletne pozicije, ritam i muzikalnost kroz igru, pri čemu se posebna pažnja posvećuje individualnom razvoju svakog deteta.',
            'Grupe su manje, što omogućava nastavnicima da svakom detetu posvete dovoljno pažnje i podrške tokom časa.',
        ],
        addresses: [
            {
                street: 'Augusta Cesarca 18',
                city: 'Novi Sad',
                district: 'Centar',
                lat: 45.2506936,
                lng: 19.8383143,
            },
            {
                street: 'Zlatne Grede 25',
                city: 'Novi Sad',
                district: 'Podbara',
                lat: 45.2592145,
                lng: 19.847808,
            },
        ],
        contact: {
            phone: '065 2451 405',
            website: 'https://ntcucenje.com/ntc-balet/',
            facebook: 'https://www.facebook.com/ntcsistemucenja',
            instagram: 'https://www.instagram.com/ntcucenje/',
        },
    },
    {
        id: '2',
        slug: 'reverans',
        name: 'Baletski studio "Reverans"',
        categorySlug: 'balet',
        city: 'Novi Sad',
        district: 'Rotkvarija',
        ageRange: '3-7 godina',
        imageWebp: reveransWebp,
        imageFallback: reveransJpg,
    },
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
    schools.filter((school) => school.categorySlug === categorySlug)

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

export const getCityOptions = () =>
    [...new Set(schools.map((school) => school.city))].sort((a, b) => a.localeCompare(b, 'sr'))

export const getAgeOptions = () =>
    [...new Set(schools.map((school) => school.ageRange))].sort((a, b) => a.localeCompare(b, 'sr'))

export const getActivityOptions = () =>
    [...new Set(schools.map((school) => school.categorySlug))]
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

        if (filters.activity && school.categorySlug !== filters.activity) {
            return false
        }

        if (filters.ages.length > 0 && !filters.ages.includes(school.ageRange)) {
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

import type { LocalizedParagraphs, LocalizedText } from '../../i18n/types'

export type SchoolFilters = {
    city: string
    partsOfCity: string[]
    age: number | null
    activities: string[]
}

export type SchoolContact = {
    phone?: string | string[]
    email?: string
    website?: string
    facebook?: string
    facebookLabel?: string
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
    name: LocalizedText
    categorySlugs: string[]
    city: string
    district: string
    minAge: number
    maxAge: number | null
    ageLabel: string
    imageWebp: string
    imageFallback: string
    description?: LocalizedParagraphs
    addresses?: SchoolAddress[]
    contact?: SchoolContact
}

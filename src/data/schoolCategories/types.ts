export type SchoolFilters = {
    city: string
    partsOfCity: string[]
    age: number | null
    activities: string[]
}

export type SchoolContact = {
    phone?: string
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
    name: string
    categorySlugs: string[]
    city: string
    district: string
    minAge: number
    maxAge: number | null
    ageLabel: string
    imageWebp: string
    imageFallback: string
    description?: string[]
    addresses?: SchoolAddress[]
    contact?: SchoolContact
}

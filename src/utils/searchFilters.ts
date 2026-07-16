import { getCityOptions } from '../data/cities'
import type { SchoolFilters } from '../data/schools'

const DEFAULT_CITY = getCityOptions()[0] ?? ''

const getArrayParam = (value: string | null) => {
  if (!value) {
    return []
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
}

export const getDefaultFilters = (): SchoolFilters => ({
  city: DEFAULT_CITY,
  partsOfCity: [],
  age: null,
  activities: [],
})

export const getFiltersFromSearchParams = (searchParams: URLSearchParams): SchoolFilters => {
  const ageParam = searchParams.get('age')
  const parsedAge = ageParam ? Number(ageParam) : NaN
  const city = searchParams.get('city')

  return {
    city: city ?? DEFAULT_CITY,
    partsOfCity: getArrayParam(searchParams.get('partsOfCity')),
    age: Number.isFinite(parsedAge) ? parsedAge : null,
    activities: getArrayParam(searchParams.get('activities')),
  }
}

export const filtersToSearchParams = (filters: SchoolFilters) => {
  const searchParams = new URLSearchParams()

  if (filters.city) {
    searchParams.set('city', filters.city)
  }

  if (filters.partsOfCity.length > 0) {
    searchParams.set('partsOfCity', filters.partsOfCity.join(','))
  }

  if (filters.age != null) {
    searchParams.set('age', String(filters.age))
  }

  if (filters.activities.length > 0) {
    searchParams.set('activities', filters.activities.join(','))
  }

  return searchParams
}

let pendingHomeFilters: SchoolFilters | null = null

export const stashHomeFilters = (filters: SchoolFilters) => {
  pendingHomeFilters = filters
}

export const getPendingHomeFilters = (): SchoolFilters => {
  if (!pendingHomeFilters) {
    return getDefaultFilters()
  }

  return {
    ...getDefaultFilters(),
    ...pendingHomeFilters,
    partsOfCity: [...pendingHomeFilters.partsOfCity],
    activities: [...pendingHomeFilters.activities],
  }
}

export const clearPendingHomeFilters = () => {
  pendingHomeFilters = null
}

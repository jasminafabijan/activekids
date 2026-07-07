import { useEffect, useRef, useState } from 'react'
import {
  getActivityOptions,
  getAgeOptions,
  getDistrictOptions,
  type SchoolFilters,
} from '../data/schools'
import { getCityOptions } from '../data/cities'

export type FilterValues = SchoolFilters

interface FiltersBarProps {
  onFilterChange?: (filters: FilterValues) => void
}

const partsOfCityOptions = getDistrictOptions()
const ageOptions = getAgeOptions()
const activityOptions = getActivityOptions()
const cities = getCityOptions()
const DEFAULT_CITY = cities[0] ?? ''

const LocationIcon = () => (
  <svg
    aria-hidden="true"
    className="search-field-icon h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const MapIcon = () => (
  <svg
    aria-hidden="true"
    className="search-field-icon h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" />
    <path d="M9 4v14" />
    <path d="M15 6v14" />
  </svg>
)

const UsersIcon = () => (
  <svg
    aria-hidden="true"
    className="search-field-icon h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const SparklesIcon = () => (
  <svg
    aria-hidden="true"
    className="search-field-icon h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.94 15.5 11 19l1.06-3.5L15.5 14l-3.44-1.06L11 9.5 9.94 13 6.5 14l3.44 1.5Z" />
    <path d="M18 4 18.8 6.2 21 7l-2.2.8L18 10l-.8-2.2L15 7l2.2-.8L18 4Z" />
    <path d="M5 3 5.4 4.2 6.6 4.6 5.4 5 5 6.2 4.6 5 3.4 4.6 4.6 4.2 5 3Z" />
  </svg>
)

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)

const FiltersBar = ({ onFilterChange }: FiltersBarProps) => {
  const [filters, setFilters] = useState<FilterValues>({
    city: DEFAULT_CITY,
    partsOfCity: [],
    ages: [],
    activity: '',
  })
  const [isPartsOpen, setIsPartsOpen] = useState(false)
  const [isAgeOpen, setIsAgeOpen] = useState(false)
  const partsDropdownRef = useRef<HTMLDivElement>(null)
  const ageDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isPartsOpen && !isAgeOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      if (isPartsOpen && partsDropdownRef.current && !partsDropdownRef.current.contains(target)) {
        setIsPartsOpen(false)
      }

      if (isAgeOpen && ageDropdownRef.current && !ageDropdownRef.current.contains(target)) {
        setIsAgeOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPartsOpen(false)
        setIsAgeOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isPartsOpen, isAgeOpen])

  const handleChange = (field: 'city' | 'activity', value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  const togglePartOfCity = (part: string) => {
    setFilters((prev) => {
      const isSelected = prev.partsOfCity.includes(part)
      const partsOfCity = isSelected
        ? prev.partsOfCity.filter((item) => item !== part)
        : [...prev.partsOfCity, part]

      return { ...prev, partsOfCity }
    })
  }

  const toggleAge = (age: string) => {
    setFilters((prev) => {
      const isSelected = prev.ages.includes(age)
      const ages = isSelected ? prev.ages.filter((item) => item !== age) : [...prev.ages, age]

      return { ...prev, ages }
    })
  }

  const partsLabel =
    filters.partsOfCity.length === 0
      ? 'Izaberite deo grada'
      : filters.partsOfCity.join(', ')

  const agesLabel =
    filters.ages.length === 0 ? 'Izaberite uzrast' : filters.ages.join(', ')

  const handleSearch = () => {
    setIsPartsOpen(false)
    setIsAgeOpen(false)
    onFilterChange?.(filters)
  }

  return (
    <section className="search-bar" aria-label="Pretraga aktivnosti">
      <div className="search-bar-panel">
        <div className="search-bar-grid">
          <div className="search-field">
            <LocationIcon />
            <div className="search-field-content">
              <label htmlFor="city" className="search-field-label">
                Grad
              </label>
              <select
                id="city"
                value={filters.city}
                onChange={(e) => handleChange('city', e.target.value)}
                className="search-field-select"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            ref={partsDropdownRef}
            className={`search-field search-field-dropdown ${isPartsOpen ? 'search-field-dropdown-open' : ''}`}
          >
            <MapIcon />
            <div className="search-field-content">
              <span id="partsOfCity-label" className="search-field-label">
                Deo grada
              </span>
              <button
                type="button"
                id="partsOfCity"
                aria-labelledby="partsOfCity-label"
                aria-expanded={isPartsOpen}
                aria-controls="partsOfCity-menu"
                onClick={() => setIsPartsOpen((open) => !open)}
                className="search-field-trigger"
              >
                {partsLabel}
              </button>

              {isPartsOpen && (
                <div id="partsOfCity-menu" className="search-field-menu" aria-labelledby="partsOfCity-label">
                  {partsOfCityOptions.map((part) => {
                    const isChecked = filters.partsOfCity.includes(part)

                    return (
                      <label key={part} className="search-field-option">
                        <input
                          type="checkbox"
                          className="search-field-checkbox"
                          checked={isChecked}
                          onChange={() => togglePartOfCity(part)}
                        />
                        <span>{part}</span>
                      </label>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          <div
            ref={ageDropdownRef}
            className={`search-field search-field-dropdown ${isAgeOpen ? 'search-field-dropdown-open' : ''}`}
          >
            <UsersIcon />
            <div className="search-field-content">
              <span id="age-label" className="search-field-label">
                Uzrast
              </span>
              <button
                type="button"
                id="age"
                aria-labelledby="age-label"
                aria-expanded={isAgeOpen}
                aria-controls="age-menu"
                onClick={() => setIsAgeOpen((open) => !open)}
                className="search-field-trigger"
              >
                {agesLabel}
              </button>

              {isAgeOpen && (
                <div id="age-menu" className="search-field-menu" aria-labelledby="age-label">
                  {ageOptions.map((age) => {
                    const isChecked = filters.ages.includes(age)

                    return (
                      <label key={age} className="search-field-option">
                        <input
                          type="checkbox"
                          className="search-field-checkbox"
                          checked={isChecked}
                          onChange={() => toggleAge(age)}
                        />
                        <span>{age}</span>
                      </label>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="search-field">
            <SparklesIcon />
            <div className="search-field-content">
              <label htmlFor="activity" className="search-field-label">
                Aktivnost
              </label>
              <select
                id="activity"
                value={filters.activity}
                onChange={(e) => handleChange('activity', e.target.value)}
                className="search-field-select"
              >
                <option value="">Izaberite aktivnost</option>
                {activityOptions.map((activity) => (
                  <option key={activity.slug} value={activity.slug}>
                    {activity.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="button" onClick={handleSearch} className="search-submit md:col-span-2">
            <SearchIcon />
            Pronađi
          </button>
        </div>
      </div>
    </section>
  )
}

export default FiltersBar

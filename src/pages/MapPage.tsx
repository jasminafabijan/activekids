import { useCallback, useMemo, useRef, useState } from 'react'
import CatalogMap from '../components/CatalogMap'
import FiltersBar, { type FilterValues } from '../components/FiltersBar'
import MapActivityCard from '../components/MapActivityCard'
import Navbar from '../components/Navbar'
import { filterSchools, getSchoolName } from '../data/schools'
import { formatMapCountLabel } from '../i18n/formatters'
import { useI18n } from '../i18n/useI18n'
import { getMapLocations } from '../utils/mapLocation'
import { getDefaultFilters } from '../utils/searchFilters'

const MapPage = () => {
  const { lang, t } = useI18n()
  const [filters, setFilters] = useState<FilterValues>(getDefaultFilters)
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null)
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map())
  const visibleSchools = useMemo(() => filterSchools(filters), [filters])
  const mappedLocations = useMemo(() => {
    const schools = visibleSchools
      .filter((school) => school.addresses?.some((address) => address.lat != null && address.lng != null))
      .sort((a, b) => getSchoolName(a, lang).localeCompare(getSchoolName(b, lang), lang === 'en' ? 'en' : 'sr'))

    return getMapLocations(schools)
  }, [lang, visibleSchools])

  const handleFilterChange = useCallback((next: FilterValues) => {
    setFilters(next)
    setSelectedLocationId(null)
  }, [])

  const handleSelectLocation = (locationId: string) => {
    setSelectedLocationId(locationId)
    cardRefs.current.get(locationId)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }

  return (
    <div className="page-shell map-page">
      <Navbar />

      <div className="map-page-intro">
        <header className="category-page-header map-page-header">
          <h1 className="category-page-title">{t('map.title')}</h1>
        </header>

        <FiltersBar hideDistrict applyOnChange onFilterChange={handleFilterChange} />
      </div>

      {mappedLocations.length > 0 ? (
        <div className="map-page-body">
          <aside className="map-page-list" aria-label={t('map.listAria')}>
            <h2 className="map-page-list-title">
              {formatMapCountLabel(mappedLocations.length, filters.city, lang)}
            </h2>
            <div className="map-page-list-cards">
              {mappedLocations.map((location) => (
                <div
                  key={location.locationId}
                  ref={(node) => {
                    if (node) {
                      cardRefs.current.set(location.locationId, node)
                    } else {
                      cardRefs.current.delete(location.locationId)
                    }
                  }}
                >
                  <MapActivityCard
                    location={location}
                    selected={selectedLocationId === location.locationId}
                    onSelect={handleSelectLocation}
                  />
                </div>
              ))}
            </div>
          </aside>
          <div className="map-page-map">
            <CatalogMap
              locations={mappedLocations}
              selectedLocationId={selectedLocationId}
              onSelectLocation={handleSelectLocation}
            />
          </div>
        </div>
      ) : (
        <p className="map-page-empty">
          {t('map.empty')}
        </p>
      )}
    </div>
  )
}

export default MapPage

import { useCallback, useMemo, useRef, useState } from 'react'
import CatalogMap from '../components/CatalogMap'
import FiltersBar, { type FilterValues } from '../components/FiltersBar'
import MapActivityCard from '../components/MapActivityCard'
import Navbar from '../components/Navbar'
import { getCityLocative } from '../data/cities'
import { filterSchools } from '../data/schools'
import { getMapLocations } from '../utils/mapLocation'
import { getDefaultFilters } from '../utils/searchFilters'

const formatActivityCountLabel = (count: number, city: string) => {
  const locative = getCityLocative(city)
  const remainder10 = count % 10
  const remainder100 = count % 100
  const word =
    remainder100 >= 11 && remainder100 <= 14
      ? 'aktivnosti'
      : remainder10 === 1
        ? 'aktivnost'
        : 'lokacija'

  return `${count} ${word} u ${locative}`
}

const MapPage = () => {
  const [filters, setFilters] = useState<FilterValues>(getDefaultFilters)
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null)
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map())
  const visibleSchools = useMemo(() => filterSchools(filters), [filters])
  const mappedLocations = useMemo(() => {
    const schools = visibleSchools
      .filter((school) => school.addresses?.some((address) => address.lat != null && address.lng != null))
      .sort((a, b) => a.name.localeCompare(b.name, 'sr'))

    return getMapLocations(schools)
  }, [visibleSchools])

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
          <h1 className="category-page-title">Mapa aktivnosti</h1>
        </header>

        <FiltersBar hideDistrict applyOnChange onFilterChange={handleFilterChange} />
      </div>

      {mappedLocations.length > 0 ? (
        <div className="map-page-body">
          <aside className="map-page-list" aria-label="Lista aktivnosti">
            <h2 className="map-page-list-title">
              {formatActivityCountLabel(mappedLocations.length, filters.city)}
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
          Nema rezultata za izabrane kriterijume. Pokušajte da izmenite uzrast ili aktivnost.
        </p>
      )}
    </div>
  )
}

export default MapPage

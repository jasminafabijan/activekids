import { Link, useLocation } from 'react-router-dom'
import { getCategoryBySlug } from '../data/categories'
import { formatPopupAge, schoolMapHref } from '../utils/mapPopup'
import { getMapCategoryStyle } from '../utils/mapCategoryStyle'
import type { MapLocation } from '../utils/mapLocation'

const LocationIcon = () => (
  <svg
    aria-hidden="true"
    className="map-activity-card-pin-icon"
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

const getLocationLabel = (item: MapLocation) => {
  const { address, school } = item

  return [address.street, address.district].filter(Boolean).join(', ') || school.city
}

interface MapActivityCardProps {
  location: MapLocation
  selected: boolean
  onSelect: (locationId: string) => void
}

const MapActivityCard = ({ location, selected, onSelect }: MapActivityCardProps) => {
  const routeLocation = useLocation()
  const { school } = location
  const categorySlug = school.categorySlugs[0]
  const categoryName = getCategoryBySlug(categorySlug)?.name ?? categorySlug
  const { color, svg } = getMapCategoryStyle(categorySlug)
  const href = schoolMapHref(school)
  const from = `${routeLocation.pathname}${routeLocation.search}${routeLocation.hash}`

  return (
    <article className={`map-activity-card${selected ? ' is-selected' : ''}`}>
      <button
        type="button"
        className="map-activity-card-main"
        onClick={() => onSelect(location.locationId)}
      >
        <span className="map-activity-card-icon" style={{ backgroundColor: color }} aria-hidden="true">
          <span dangerouslySetInnerHTML={{ __html: svg }} />
        </span>
        <span className="map-activity-card-copy">
          <span className="map-activity-card-title">{school.name}</span>
          <span className="map-activity-card-meta">
            {categoryName} · {formatPopupAge(school.ageLabel)}
          </span>
        </span>
      </button>
      <p className="map-activity-card-location">
        <LocationIcon />
        <span>{getLocationLabel(location)}</span>
      </p>
      <div className="map-activity-card-footer">
        <Link
          to={href}
          state={{ from }}
          className="school-map-popup-button"
          onClick={(event) => event.stopPropagation()}
        >
          Vidi detalje
        </Link>
      </div>
    </article>
  )
}

export default MapActivityCard

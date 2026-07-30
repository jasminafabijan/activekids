import { Link } from 'react-router-dom'
import { formatSchoolDistricts, type School } from '../data/schools'

const LocationIcon = () => (
  <svg
    aria-hidden="true"
    className="school-card-meta-icon"
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

const UsersIcon = () => (
  <svg
    aria-hidden="true"
    className="school-card-meta-icon"
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

interface SchoolCardProps {
  school: School
  categoryLabel?: string
  categoryContext?: string
}

const SchoolCard = ({ school, categoryLabel, categoryContext }: SchoolCardProps) => {
  const schoolHref =
    categoryContext != null
      ? `/skola/${school.slug}?kategorija=${categoryContext}`
      : `/skola/${school.slug}`

  const locationLabel = [formatSchoolDistricts(school), school.city]
    .filter((part) => part.length > 0)
    .join(', ')

  return (
    <Link to={schoolHref} className="school-card">
      <div className="school-card-image-wrap">
        {categoryLabel && (
          <span className="school-card-category-tag">{categoryLabel}</span>
        )}
        <picture>
          <source srcSet={school.imageWebp} type="image/webp" />
          <img
            src={school.imageFallback}
            alt={school.name}
            loading="lazy"
            decoding="async"
            width={288}
            height={180}
            className="school-card-image"
          />
        </picture>
      </div>

      <div className="school-card-body">
        <h3 className="school-card-title">{school.name}</h3>

        <ul className="school-card-meta">
          <li className="school-card-meta-item">
            <LocationIcon />
            <span>{locationLabel}</span>
          </li>
          <li className="school-card-meta-item">
            <UsersIcon />
            <span>{school.ageLabel}</span>
          </li>
        </ul>
      </div>
    </Link>
  )
}

export default SchoolCard

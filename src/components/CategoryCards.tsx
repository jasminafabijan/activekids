import { Link } from 'react-router-dom'
import actingIcon from '../assets/icons/acting.svg'
import balletIcon from '../assets/icons/ballet.svg'
import basketballIcon from '../assets/icons/basketball.svg'
import footballIcon from '../assets/icons/football.svg'
import jazzDanceIcon from '../assets/icons/jazz-dance.svg'
import tennisIcon from '../assets/icons/tennis.svg'

type CategoryIconBg = 'mint' | 'peach'

interface CategoryDisplay {
  id: string
  name: string
  slug: string
  iconBg: CategoryIconBg
  iconSrc?: string
}

const categoryDisplay: CategoryDisplay[] = [
  { id: 'ballet', name: 'Balet', slug: 'ballet', iconBg: 'mint', iconSrc: balletIcon },
  { id: 'jazz-ballet', name: 'Džez balet', slug: 'jazz-ballet', iconBg: 'peach', iconSrc: jazzDanceIcon },
  { id: 'football', name: 'Fudbal', slug: 'football', iconBg: 'mint', iconSrc: footballIcon },
  { id: 'acting', name: 'Gluma', slug: 'acting', iconBg: 'peach', iconSrc: actingIcon },
  { id: 'basketball', name: 'Košarka', slug: 'basketball', iconBg: 'mint', iconSrc: basketballIcon },
  { id: 'tennis', name: 'Tenis', slug: 'tennis', iconBg: 'peach', iconSrc: tennisIcon },
]

const LocationPinIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
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

const CategoryCards = () => {
  return (
    <section className="categories-section" aria-labelledby="categories-title">
      <div className="categories-header">
        <span className="tag tag--pill tag--peach mb-4">Kategorije</span>
        <h2 id="categories-title" className="categories-title">
          Istražite po interesovanjima
        </h2>
        <p className="categories-subtitle">
          Odaberite oblast koja najviše odgovara vašem detetu i otkrijte programe u vašem kraju.
        </p>
      </div>

      <div className="categories-grid">
        {categoryDisplay.map((category) => (
          <Link
            key={category.id}
            to={`/kategorija/${category.slug}`}
            className="category-card"
          >
            <span className={`category-card-icon category-card-icon--${category.iconBg}`}>
              <img src={category.iconSrc} alt="" className="category-card-icon-image" />
            </span>
            <span className="category-card-label">{category.name}</span>
          </Link>
        ))}
      </div>

      <div className="categories-footer">
        <p className="categories-footer-note">
          <LocationPinIcon />
          Aktivnosti dostupne širom Srbije
        </p>
        <p className="categories-footer-copy">© 2026 ActiveKids. Sva prava zadržana.</p>
      </div>
    </section>
  )
}

export default CategoryCards

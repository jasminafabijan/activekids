import { Link } from 'react-router-dom'
import balletIcon from '../assets/icons/ballet.svg'
import { categories } from '../data/categories'

type CategoryIconBg = 'mint' | 'peach'

interface CategoryDisplay {
  id: string
  name: string
  slug: string
  iconBg: CategoryIconBg
  emoji?: string
  iconSrc?: string
}

const categoryDisplay: CategoryDisplay[] = [
  { id: '1', name: 'Balet', slug: 'balet', iconBg: 'mint', iconSrc: balletIcon },
  { id: '2', name: 'Ples', slug: 'ples', iconBg: 'peach', emoji: '💃' },
  { id: '3', name: 'Muzika', slug: 'muzika', iconBg: 'mint', emoji: '🎵' },
  { id: '4', name: 'Umetnost', slug: 'umetnost', iconBg: 'peach', emoji: '🎨' },
  { id: '5', name: 'Jezici', slug: 'jezici', iconBg: 'peach', emoji: '🌍' },
  { id: '6', name: 'Nauka', slug: 'nauka', iconBg: 'mint', emoji: '🔬' },
  { id: '7', name: 'Tehnologija', slug: 'tehnologija', iconBg: 'peach', emoji: '💻' },
  { id: '8', name: 'Priroda', slug: 'priroda', iconBg: 'mint', emoji: '🌳' },
]

const categorySlugs = new Set(categories.map((category) => category.slug))

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
        {categoryDisplay.map((category) => {
          const content = (
            <>
              <span className={`category-card-icon category-card-icon--${category.iconBg}`}>
                {category.iconSrc ? (
                  <img src={category.iconSrc} alt="" className="category-card-icon-image" />
                ) : (
                  <span className="category-card-emoji" aria-hidden="true">
                    {category.emoji}
                  </span>
                )}
              </span>
              <span className="category-card-label">{category.name}</span>
            </>
          )

          if (categorySlugs.has(category.slug)) {
            return (
              <Link
                key={category.id}
                to={`/kategorija/${category.slug}`}
                className="category-card"
              >
                {content}
              </Link>
            )
          }

          return (
            <div key={category.id} className="category-card category-card--static">
              {content}
            </div>
          )
        })}
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

import balletIcon from '../assets/icons/ballet.svg'

interface CategoryCardsProps {
  onCategorySelect: (category: string) => void
}

type CategoryIconBg = 'mint' | 'peach'

interface Category {
  id: string
  name: string
  iconBg: CategoryIconBg
  emoji?: string
  iconSrc?: string
}

const categories: Category[] = [
  { id: '1', name: 'Balet', iconBg: 'mint', iconSrc: balletIcon },
  { id: '2', name: 'Ples', iconBg: 'peach', emoji: '💃' },
  { id: '3', name: 'Muzika', iconBg: 'mint', emoji: '🎵' },
  { id: '4', name: 'Umetnost', iconBg: 'peach', emoji: '🎨' },
  { id: '5', name: 'Jezici', iconBg: 'peach', emoji: '🌍' },
  { id: '6', name: 'Nauka', iconBg: 'mint', emoji: '🔬' },
  { id: '7', name: 'Tehnologija', iconBg: 'peach', emoji: '💻' },
  { id: '8', name: 'Priroda', iconBg: 'mint', emoji: '🌳' },
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

const CategoryCards = ({ onCategorySelect }: CategoryCardsProps) => {
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
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategorySelect(category.name)}
            className="category-card"
          >
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
          </button>
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

import { Link } from 'react-router-dom'
import actingIcon from '../assets/icons/acting.svg'
import balletIcon from '../assets/icons/ballet.svg'
import basketballIcon from '../assets/icons/basketball.svg'
import boxingIcon from '../assets/icons/boxing.svg'
import footballIcon from '../assets/icons/football.svg'
import jazzDanceIcon from '../assets/icons/jazz-dance.svg'
import karateIcon from '../assets/icons/karate.svg'
import ridingIcon from '../assets/icons/riding.svg'
import folkloreIcon from '../assets/icons/folklore.svg'
import tennisIcon from '../assets/icons/tennis.svg'
import volleyballIcon from '../assets/icons/volleyball.webp'
import danceSportIcon from '../assets/icons/dance-sport.svg'
import swimmingIcon from '../assets/icons/swimming.svg'

type CategoryIconBg = 'mint' | 'peach'

const CATEGORY_ICON_BASE_SIZE_PX = 64

interface CategoryDisplay {
  id: string
  name: string
  slug: string
  iconBg: CategoryIconBg
  iconSrc?: string
  /** Extra pixels added to the base icon height (64px). */
  iconSizeAdjustPx?: number
}

const categoryDisplay: CategoryDisplay[] = [
  { id: 'football', name: 'Fudbal', slug: 'football', iconBg: 'mint', iconSrc: footballIcon, iconSizeAdjustPx: -12 },
  { id: 'basketball', name: 'Košarka', slug: 'basketball', iconBg: 'mint', iconSrc: basketballIcon, iconSizeAdjustPx: -4 },
  { id: 'volleyball', name: 'Odbojka', slug: 'volleyball', iconBg: 'peach', iconSrc: volleyballIcon, iconSizeAdjustPx: -10 },
  { id: 'tennis', name: 'Tenis', slug: 'tennis', iconBg: 'peach', iconSrc: tennisIcon },
  { id: 'karate', name: 'Karate', slug: 'karate', iconBg: 'mint', iconSrc: karateIcon },
  { id: 'boxing', name: 'Boks', slug: 'boxing', iconBg: 'peach', iconSrc: boxingIcon },
  { id: 'swimming', name: 'Plivanje', slug: 'swimming', iconBg: 'mint', iconSrc: swimmingIcon, iconSizeAdjustPx: -1 },
  { id: 'riding', name: 'Jahanje', slug: 'riding', iconBg: 'peach', iconSrc: ridingIcon },
  { id: 'ballet', name: 'Balet', slug: 'ballet', iconBg: 'mint', iconSrc: balletIcon, iconSizeAdjustPx: 4 },
  { id: 'jazz-ballet', name: 'Moderan ples', slug: 'jazz-ballet', iconBg: 'peach', iconSrc: jazzDanceIcon, iconSizeAdjustPx: 4 },
  { id: 'dance-sport', name: 'Sportski ples', slug: 'dance-sport', iconBg: 'mint', iconSrc: danceSportIcon, iconSizeAdjustPx: 4 },
  { id: 'folklore', name: 'Folklor', slug: 'folklore', iconBg: 'mint', iconSrc: folkloreIcon, iconSizeAdjustPx: 2 },
  { id: 'acting', name: 'Gluma', slug: 'acting', iconBg: 'peach', iconSrc: actingIcon, iconSizeAdjustPx: -6 },
]

const CategoryCards = () => {
  return (
    <section id="kategorije" className="categories-section" aria-labelledby="categories-title">
      <div className="categories-header">
        <span className="tag tag--pill tag--peach">Kategorije</span>
        <h2 id="categories-title" className="categories-title">
          Istražite po interesovanjima
        </h2>
        <p className="categories-subtitle">
          Odaberite oblast koja najviše odgovara vašem detetu i otkrijte programe u vašem kraju
        </p>
      </div>

      <div className="categories-grid">
        {categoryDisplay.map((category) => {
          const iconSizePx = CATEGORY_ICON_BASE_SIZE_PX + (category.iconSizeAdjustPx ?? 0)

          return (
            <Link
              key={category.id}
              to={`/kategorija/${category.slug}`}
              className="category-card"
            >
              <span className={`category-card-icon category-card-icon--${category.iconBg}`}>
                <img
                  src={category.iconSrc}
                  alt=""
                  className="category-card-icon-image"
                  style={{ height: iconSizePx, maxHeight: iconSizePx }}
                />
              </span>
              <span className="category-card-label">{category.name}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default CategoryCards

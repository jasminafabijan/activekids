import { Link } from 'react-router-dom'
import { getCategoryNameBySlug } from '../data/categories'
import { CATEGORIES_SECTION_ID } from '../i18n/routes'
import { useI18n } from '../i18n/useI18n'
import actingIcon from '../assets/icons/acting.svg'
import balletIcon from '../assets/icons/ballet.svg'
import basketballIcon from '../assets/icons/basketball.svg'
import boxingIcon from '../assets/icons/boxing.svg'
import chessIcon from '../assets/icons/chess.svg'
import footballIcon from '../assets/icons/football.svg'
import jazzDanceIcon from '../assets/icons/jazz-dance.svg'
import karateIcon from '../assets/icons/karate.svg'
import ridingIcon from '../assets/icons/riding.svg'
import folkloreIcon from '../assets/icons/folklore.svg'
import tennisIcon from '../assets/icons/tennis.svg'
import tableTennisIcon from '../assets/icons/table-tennis.svg'
import volleyballIcon from '../assets/icons/volleyball.webp'
import danceSportIcon from '../assets/icons/dance-sport.svg'
import swimmingIcon from '../assets/icons/swimming.svg'
import miniSportsIcon from '../assets/icons/mini-sports.svg'
import developmentalGymnasticsIcon from '../assets/icons/developmental-gymnastics.svg'

type CategoryIconBg = 'mint' | 'peach'

const CATEGORY_ICON_BASE_SIZE_PX = 64

interface CategoryDisplay {
  id: string
  iconBg: CategoryIconBg
  iconSrc?: string
  /** Extra pixels added to the base icon height (64px). */
  iconSizeAdjustPx?: number
}

const categoryDisplay: CategoryDisplay[] = [
  { id: 'football', iconBg: 'mint', iconSrc: footballIcon, iconSizeAdjustPx: -12 },
  { id: 'basketball', iconBg: 'mint', iconSrc: basketballIcon, iconSizeAdjustPx: -4 },
  { id: 'volleyball', iconBg: 'peach', iconSrc: volleyballIcon, iconSizeAdjustPx: -10 },
  { id: 'tennis', iconBg: 'peach', iconSrc: tennisIcon },
  { id: 'table-tennis', iconBg: 'mint', iconSrc: tableTennisIcon, iconSizeAdjustPx: -6 },
  { id: 'karate', iconBg: 'mint', iconSrc: karateIcon },
  { id: 'boxing', iconBg: 'peach', iconSrc: boxingIcon },
  { id: 'chess', iconBg: 'mint', iconSrc: chessIcon, iconSizeAdjustPx: -4 },
  { id: 'swimming', iconBg: 'mint', iconSrc: swimmingIcon, iconSizeAdjustPx: -18 },
  { id: 'mini-sports', iconBg: 'peach', iconSrc: miniSportsIcon },
  { id: 'developmental-gymnastics', iconBg: 'peach', iconSrc: developmentalGymnasticsIcon, iconSizeAdjustPx: -6 },
  { id: 'riding', iconBg: 'peach', iconSrc: ridingIcon },
  { id: 'ballet', iconBg: 'mint', iconSrc: balletIcon, iconSizeAdjustPx: 4 },
  { id: 'jazz-ballet', iconBg: 'peach', iconSrc: jazzDanceIcon, iconSizeAdjustPx: 4 },
  { id: 'dance-sport', iconBg: 'mint', iconSrc: danceSportIcon, iconSizeAdjustPx: 4 },
  { id: 'folklore', iconBg: 'mint', iconSrc: folkloreIcon, iconSizeAdjustPx: 2 },
  { id: 'acting', iconBg: 'peach', iconSrc: actingIcon, iconSizeAdjustPx: -6 },
]

const CategoryCards = () => {
  const { lang, path, t } = useI18n()

  return (
    <section id={CATEGORIES_SECTION_ID} className="categories-section" aria-labelledby="categories-title">
      <div className="categories-header">
        <span className="tag tag--pill tag--peach">{t('categories.tag')}</span>
        <h2 id="categories-title" className="categories-title">
          {t('categories.title')}
        </h2>
        <p className="categories-subtitle">
          {t('categories.subtitle')}
        </p>
      </div>

      <div className="categories-grid">
        {categoryDisplay.map((category) => {
          const iconSizePx = CATEGORY_ICON_BASE_SIZE_PX + (category.iconSizeAdjustPx ?? 0)

          return (
            <Link
              key={category.id}
              to={path.category(category.id)}
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
              <span className="category-card-label">{getCategoryNameBySlug(category.id, lang)}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default CategoryCards

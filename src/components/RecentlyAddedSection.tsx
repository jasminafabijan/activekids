import {
  formatSchoolCategoryNames,
  getRecentlyAddedSchools,
} from '../data/schools'
import SchoolCard from './SchoolCard'

const RecentlyAddedSection = () => {
  const recentSchools = getRecentlyAddedSchools(3)

  if (recentSchools.length === 0) {
    return null
  }

  return (
    <section
      className="recently-added-section"
      aria-labelledby="recently-added-title"
    >
      <div className="categories-header">
        <span className="tag tag--pill tag--mint mb-4">Rastemo</span>
        <h2 id="recently-added-title" className="categories-title">
            Novo na KiddoKompasu
        </h2>
        <p className="categories-subtitle">
            Pogledajte škole i klubove koje smo nedavno dodali
        </p>
      </div>

      <div className="schools-grid">
        {recentSchools.map((school) => (
          <SchoolCard
            key={school.id}
            school={school}
            categoryLabel={formatSchoolCategoryNames(school)}
            categoryContext={school.categorySlugs[0]}
          />
        ))}
      </div>
    </section>
  )
}

export default RecentlyAddedSection

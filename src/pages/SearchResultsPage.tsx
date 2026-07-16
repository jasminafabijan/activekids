import { Link, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SchoolCard from '../components/SchoolCard'
import { filterSchools, formatSchoolCategoryNames, type SchoolFilters } from '../data/schools'
import { getFiltersFromSearchParams, stashHomeFilters } from '../utils/searchFilters'

const formatSchoolCountLabel = (count: number) => {
  const mod10 = count % 10
  const mod100 = count % 100

  if (mod10 === 1 && mod100 !== 11) {
    return `${count} školu`
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} škole`
  }

  return `${count} škola`
}

const getResultsSubtitle = (count: number, filters: SchoolFilters) => {
  const hasAge = filters.age != null
  const hasLocation = filters.partsOfCity.length > 0
  const label = formatSchoolCountLabel(count)

  if (hasAge && hasLocation) {
    return `Pronašli smo ${label} prema izabranom uzrastu i lokaciji.`
  }

  if (hasAge) {
    const agreement = count === 1 ? 'koja odgovara' : 'koje odgovaraju'
    return `Pronašli smo ${label} ${agreement} izabranom uzrastu.`
  }

  if (hasLocation) {
    return `Pronašli smo ${label} na izabranoj lokaciji.`
  }

  return `Pronašli smo ${label}.`
}

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams()
  const filters = getFiltersFromSearchParams(searchParams)
  const results = filterSchools(filters)
  const showCategoryTag = filters.activities.length === 0

  return (
    <div className="page-shell">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Link
          to="/"
          className="category-page-back"
          onClick={() => stashHomeFilters(filters)}
        >
          ← Nazad na pretragu
        </Link>

        <header className="category-page-header">
          <h1 className="category-page-title">Rezultati pretrage</h1>
          <p className="category-page-subtitle">
            {getResultsSubtitle(results.length, filters)}
          </p>
        </header>

        {results.length > 0 && (
          <div className="schools-grid">
            {results.map((school) => (
              <SchoolCard
                key={school.id}
                school={school}
                categoryLabel={
                  showCategoryTag ? formatSchoolCategoryNames(school) : undefined
                }
                categoryContext={
                  filters.activities.find((activity) => school.categorySlugs.includes(activity)) ??
                  school.categorySlugs[0]
                }
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default SearchResultsPage

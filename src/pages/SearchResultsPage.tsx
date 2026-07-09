import { Link, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SchoolCard from '../components/SchoolCard'
import { getCategoryBySlug } from '../data/categories'
import { filterSchools, type SchoolFilters } from '../data/schools'

const getArrayParam = (value: string | null) => {
  if (!value) {
    return []
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
}

const getFiltersFromSearchParams = (searchParams: URLSearchParams): SchoolFilters => {
  const ageParam = searchParams.get('age')
  const parsedAge = ageParam ? Number(ageParam) : NaN

  return {
    city: searchParams.get('city') ?? '',
    partsOfCity: getArrayParam(searchParams.get('partsOfCity')),
    age: Number.isFinite(parsedAge) ? parsedAge : null,
    activities: getArrayParam(searchParams.get('activities')),
  }
}

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams()
  const filters = getFiltersFromSearchParams(searchParams)
  const results = filterSchools(filters)
  const showCategoryTag = filters.activities.length === 0

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Link to="/" className="category-page-back">
          ← Nazad na pretragu
        </Link>

        <header className="category-page-header">
          <h1 className="category-page-title">Rezultati pretrage</h1>
          <p className="category-page-subtitle">
            {results.length > 0
              ? `Pronađeno škola: ${results.length}`
              : 'Nema škola koje odgovaraju izabranim filterima.'}
          </p>
        </header>

        {results.length > 0 && (
          <div className="schools-grid">
            {results.map((school) => (
              <SchoolCard
                key={school.id}
                school={school}
                categoryLabel={
                  showCategoryTag
                    ? getCategoryBySlug(school.categorySlug)?.name
                    : undefined
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

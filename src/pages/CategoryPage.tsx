import { Link, useParams, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SchoolCard from '../components/SchoolCard'
import { getCityOptions } from '../data/cities'
import { formatCategorySubtitle, getCategoryBySlug } from '../data/categories'
import { getSchoolsByCategory } from '../data/schools'

const getSelectedCity = (
  searchParams: URLSearchParams,
  categoryCities: string[]
) => {
  const cityFromQuery = searchParams.get('grad') ?? searchParams.get('city')

  if (cityFromQuery) {
    return cityFromQuery
  }

  if (categoryCities.length === 1) {
    return categoryCities[0]
  }

  return getCityOptions()[0] ?? 'Novi Sad'
}

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const [searchParams] = useSearchParams()
  const category = slug ? getCategoryBySlug(slug) : undefined
  const categorySchools = slug ? getSchoolsByCategory(slug) : []
  const categoryCities = [...new Set(categorySchools.map((school) => school.city))]
  const selectedCity = getSelectedCity(searchParams, categoryCities)
  const visibleSchools = categorySchools.filter((school) => school.city === selectedCity)

  if (!category) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <p className="text-muted">Kategorija nije pronađena.</p>
          <Link to="/" className="mt-4 inline-block text-sm font-semibold text-primary">
            ← Nazad na početnu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Link to="/" className="category-page-back">
          ← Nazad na početnu
        </Link>

        <header className="category-page-header">
          <h1 className="category-page-title">{category.name}</h1>
          <p className="category-page-subtitle">
            {formatCategorySubtitle(category, selectedCity)}
          </p>
        </header>

        {visibleSchools.length > 0 ? (
          <div className="schools-grid">
            {visibleSchools.map((school) => (
              <SchoolCard key={school.id} school={school} categoryContext={slug} />
            ))}
          </div>
        ) : (
          <p className="text-muted">Trenutno nema dostupnih škola u ovoj kategoriji.</p>
        )}
      </main>
    </div>
  )
}

export default CategoryPage

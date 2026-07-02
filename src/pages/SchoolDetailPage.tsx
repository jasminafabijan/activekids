import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getCategoryBySlug } from '../data/categories'
import { getSchoolBySlug } from '../data/schools'

const SchoolDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const school = slug ? getSchoolBySlug(slug) : undefined
  const category = school ? getCategoryBySlug(school.categorySlug) : undefined

  if (!school) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <p className="text-muted">Škola nije pronađena.</p>
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
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        {category && (
          <Link to={`/kategorija/${category.slug}`} className="category-page-back">
            ← Nazad na {category.name}
          </Link>
        )}

        <h1 className="category-page-title mt-4">{school.name}</h1>
        <p className="text-muted mt-2">Stranica sa detaljima uskoro.</p>
      </main>
    </div>
  )
}

export default SchoolDetailPage

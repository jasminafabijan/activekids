import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SchoolCard from '../components/SchoolCard'
import { getCategoryBySlug } from '../data/categories'
import { getSchoolsByCategory } from '../data/schools'

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const category = slug ? getCategoryBySlug(slug) : undefined
  const categorySchools = slug ? getSchoolsByCategory(slug) : []

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
            Pronađite škole i programe za decu u kategoriji {category.name.toLowerCase()}.
          </p>
        </header>

        {categorySchools.length > 0 ? (
          <div className="schools-grid">
            {categorySchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
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

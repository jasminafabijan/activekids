import { useState } from 'react'
import type { School } from '../data/schools'
import { filterSchools } from '../data/schools'
import CategoryCards from './CategoryCards'
import FiltersBar, { type FilterValues } from './FiltersBar'
import Hero from './Hero'
import Navbar from './Navbar'
import SchoolCard from './SchoolCard'

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<School[] | null>(null)

  const handleFilterChange = (filters: FilterValues) => {
    setSearchResults(filterSchools(filters))
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <FiltersBar onFilterChange={handleFilterChange} />

        {searchResults !== null && (
          <section className="mb-12" aria-labelledby="search-results-title">
            <h2 id="search-results-title" className="sr-only">
              Rezultati pretrage
            </h2>

            {searchResults.length > 0 ? (
              <div className="schools-grid">
                {searchResults.map((school) => (
                  <SchoolCard key={school.id} school={school} />
                ))}
              </div>
            ) : (
              <p className="text-muted">Nema škola koje odgovaraju izabranim filterima.</p>
            )}
          </section>
        )}

        <CategoryCards />
      </div>
    </div>
  )
}

export default HomePage

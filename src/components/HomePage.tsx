import { useNavigate } from 'react-router-dom'
import CategoryCards from './CategoryCards'
import FiltersBar, { type FilterValues } from './FiltersBar'
import Hero from './Hero'
import Navbar from './Navbar'

const HomePage = () => {
  const navigate = useNavigate()

  const handleFilterChange = (filters: FilterValues) => {
    const searchParams = new URLSearchParams()

    if (filters.city) {
      searchParams.set('city', filters.city)
    }

    if (filters.partsOfCity.length > 0) {
      searchParams.set('partsOfCity', filters.partsOfCity.join(','))
    }

    if (filters.age != null) {
      searchParams.set('age', String(filters.age))
    }

    if (filters.activities.length > 0) {
      searchParams.set('activities', filters.activities.join(','))
    }

    navigate(`/pretraga?${searchParams.toString()}`)
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <FiltersBar onFilterChange={handleFilterChange} />

        <CategoryCards />
      </div>
    </div>
  )
}

export default HomePage

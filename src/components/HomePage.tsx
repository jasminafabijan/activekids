import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { jumpToCategories } from '../utils/scrollToElement'
import {
  clearPendingHomeFilters,
  filtersToSearchParams,
  getInitialHomeFilters,
} from '../utils/searchFilters'
import CategoryCards from './CategoryCards'
import FiltersBar, { type FilterValues } from './FiltersBar'
import Hero from './Hero'
import Navbar from './Navbar'
import RecentlyAddedSection from './RecentlyAddedSection'

const HomePage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [initialFilters] = useState(() => getInitialHomeFilters(location.state))

  useLayoutEffect(() => {
    if (location.hash !== '#kategorije') {
      return
    }

    jumpToCategories()
  }, [location.pathname, location.hash])

  // Clear after mount so refresh does not restore filters.
  // Timeout + cleanup keeps React Strict Mode double-mount from wiping them early.
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      clearPendingHomeFilters()

      if (location.state) {
        navigate('.', { replace: true, state: null })
      }
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [location.state, navigate])

  const handleFilterChange = (filters: FilterValues) => {
    const params = filtersToSearchParams(filters).toString()
    navigate(`/pretraga${params ? `?${params}` : ''}`)
  }

  return (
    <div className="page-shell">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <FiltersBar initialFilters={initialFilters} onFilterChange={handleFilterChange} />

        <CategoryCards />
        <RecentlyAddedSection />
      </div>
    </div>
  )
}

export default HomePage

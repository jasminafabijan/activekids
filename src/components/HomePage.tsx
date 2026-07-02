import Hero from './Hero'
import FiltersBar from './FiltersBar'
import CategoryCards from './CategoryCards'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <FiltersBar />
        <CategoryCards />
      </div>
    </div>
  )
}

export default HomePage

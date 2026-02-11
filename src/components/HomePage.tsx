import { useState } from 'react'
import Hero from './Hero'
import FiltersBar from './FiltersBar'
import CategoryCards from './CategoryCards'

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    console.log('Selected category:', category)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <FiltersBar />
        <CategoryCards onCategorySelect={handleCategorySelect} />
      </div>
    </div>
  )
}

export default HomePage

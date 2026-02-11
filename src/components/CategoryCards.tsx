interface CategoryCardsProps {
  onCategorySelect: (category: string) => void
}

interface Category {
  id: string
  name: string
  icon: string
}

const categories: Category[] = [
  { id: '1', name: 'Sport', icon: '⚽' },
  { id: '2', name: 'Ples', icon: '💃' },
  { id: '3', name: 'Muzika', icon: '🎵' },
  { id: '4', name: 'Umetnost', icon: '🎨' },
  { id: '5', name: 'Jezici', icon: '🌍' },
  { id: '6', name: 'Nauka', icon: '🔬' },
  { id: '7', name: 'Tehnologija', icon: '💻' },
  { id: '8', name: 'Priroda', icon: '🌳' },
]

const CategoryCards = ({ onCategorySelect }: CategoryCardsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategorySelect(category.name)}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex flex-col items-center justify-center gap-3 min-h-[120px]"
        >
          <span className="text-4xl">{category.icon}</span>
          <span className="text-lg font-semibold text-gray-800">{category.name}</span>
        </button>
      ))}
    </div>
  )
}

export default CategoryCards

import { useState } from 'react'

interface FiltersBarProps {
  onFilterChange?: (filters: FilterValues) => void
}

interface FilterValues {
  city: string
  partOfCity: string
  activity: string
}

const FiltersBar = ({ onFilterChange }: FiltersBarProps) => {
  const [filters, setFilters] = useState<FilterValues>({
    city: '',
    partOfCity: '',
    activity: '',
  })

  const cities = ['Novi Sad']
  const partsOfCity = ['Liman', 'Grbavica', 'Detelinara']
  const activities = ['Sport', 'Ples', 'Muzika', 'Umetnost', 'Jezici', 'Nauka', 'Tehnologija', 'Priroda']

  const handleChange = (field: keyof FilterValues, value: string) => {
    const newFilters = { ...filters, [field]: value }
    setFilters(newFilters)
  }

  const handleSearch = () => {
    console.log('Search filters:', filters)
    onFilterChange?.(filters)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            Grad
          </label>
          <select
            id="city"
            value={filters.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          >
            <option value="">Izaberite grad</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 w-full">
          <label htmlFor="partOfCity" className="block text-sm font-medium text-gray-700 mb-2">
            Deo grada
          </label>
          <select
            id="partOfCity"
            value={filters.partOfCity}
            onChange={(e) => handleChange('partOfCity', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          >
            <option value="">Izaberite deo grada</option>
            {partsOfCity.map((part) => (
              <option key={part} value={part}>
                {part}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 w-full">
          <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-2">
            Aktivnost
          </label>
          <select
            id="activity"
            value={filters.activity}
            onChange={(e) => handleChange('activity', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          >
            <option value="">Izaberite aktivnost</option>
            {activities.map((activity) => (
              <option key={activity} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="btn-primary w-full md:w-auto px-8 py-2 font-semibold rounded-lg focus:outline-none transition-all shadow-md hover:shadow-lg"
        >
          Pronađi
        </button>
      </div>
    </div>
  )
}

export default FiltersBar

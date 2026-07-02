export type Category = {
  id: string
  name: string
  slug: string
}

export const categories: Category[] = [
  { id: '1', name: 'Balet', slug: 'balet' },
  { id: '2', name: 'Ples', slug: 'ples' },
  { id: '3', name: 'Muzika', slug: 'muzika' },
  { id: '4', name: 'Umetnost', slug: 'umetnost' },
  { id: '5', name: 'Jezici', slug: 'jezici' },
  { id: '6', name: 'Nauka', slug: 'nauka' },
  { id: '7', name: 'Tehnologija', slug: 'tehnologija' },
  { id: '8', name: 'Priroda', slug: 'priroda' },
]

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug)

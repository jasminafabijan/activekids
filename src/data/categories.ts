export type Category = {
  id: string
  name: string
  slug: string
}

export const categories: Category[] = [
  { id: 'balet', name: 'Balet', slug: 'balet' },
  { id: 'ples', name: 'Ples', slug: 'ples' },
  { id: 'muzika', name: 'Muzika', slug: 'muzika' },
  { id: 'umetnost', name: 'Umetnost', slug: 'umetnost' },
  { id: 'jezici', name: 'Jezici', slug: 'jezici' },
  { id: 'nauka', name: 'Nauka', slug: 'nauka' },
  { id: 'tehnologija', name: 'Tehnologija', slug: 'tehnologija' },
  { id: 'priroda', name: 'Priroda', slug: 'priroda' },
]

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug)

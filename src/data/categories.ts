import { getCityLocative } from './cities'

export type Category = {
  id: string
  name: string
  slug: string
  subtitle: string
}

export const categories: Category[] = [
  {
    id: 'ballet',
    name: 'Balet',
    slug: 'ballet',
    subtitle: 'Škole klasičnog baleta',
  },
  {
    id: 'jazz-ballet',
    name: 'Džez balet',
    slug: 'jazz-ballet',
    subtitle: 'Škole džez baleta i modernog plesa',
  },
  {
    id: 'football',
    name: 'Fudbal',
    slug: 'football',
    subtitle: 'Škole fudbala',
  },
  { id: 'dance', name: 'Ples', slug: 'dance', subtitle: 'Škole plesa' },
  { id: 'music', name: 'Muzika', slug: 'music', subtitle: 'Muzičke škole' },
  { id: 'art', name: 'Umetnost', slug: 'art', subtitle: 'Umetničke škole' },
  { id: 'languages', name: 'Jezici', slug: 'languages', subtitle: 'Škole stranih jezika' },
  { id: 'science', name: 'Nauka', slug: 'science', subtitle: 'Naučni programi za decu' },
  {
    id: 'technology',
    name: 'Tehnologija',
    slug: 'technology',
    subtitle: 'Tehnološki programi za decu',
  },
  { id: 'nature', name: 'Priroda', slug: 'nature', subtitle: 'Programi na otvorenom' },
]

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug)

export const formatCategorySubtitle = (category: Category, city: string) =>
  `${category.subtitle} u ${getCityLocative(city)}`

import { getCityLocative } from './cities'

export type Category = {
  id: string
  name: string
  slug: string
  subtitle: string
  pageSubtitle?: string
}

export const categories: Category[] = [
  {
    id: 'ballet',
    name: 'Balet',
    slug: 'ballet',
    subtitle: 'Škole klasičnog baleta',
    pageSubtitle:
      'Istražite škole klasičnog baleta u {city} — za gracioznost, držanje i ljubav prema sceni.',
  },
  {
    id: 'jazz-ballet',
    name: 'Džez balet',
    slug: 'jazz-ballet',
    subtitle: 'Škole džez baleta i modernog plesa',
    pageSubtitle:
      'Istražite škole džez baleta i modernog plesa u {city} — za energiju, ritam i slobodniji plesni izraz.',
  },
  {
    id: 'football',
    name: 'Fudbal',
    slug: 'football',
    subtitle: 'Škole fudbala',
    pageSubtitle:
      'Istražite škole fudbala u {city} — za igru, timski duh i sportsku energiju.',
  },
  {
    id: 'acting',
    name: 'Gluma',
    slug: 'acting',
    subtitle: 'Škole glume',
    pageSubtitle:
      'Istražite škole glume u {city} — za maštu, govor, pokret i više samopouzdanja.',
  },
  {
    id: 'basketball',
    name: 'Košarka',
    slug: 'basketball',
    subtitle: 'Škole košarke',
    pageSubtitle:
      'Istražite košarkaške škole u {city} — za decu koja vole igru, pokret i izazov pod obručima.',
  },
  {
    id: 'tennis',
    name: 'Tenis',
    slug: 'tennis',
    subtitle: 'Škole tenisa',
    pageSubtitle:
      'Istražite škole tenisa u {city} — za fokus, koordinaciju i sigurnost u svakom udarcu.',
  },
  {
    id: 'karate',
    name: 'Karate',
    slug: 'karate',
    subtitle: 'Škole karatea',
    pageSubtitle:
      'Istražite karate klubove u {city} — za fokus, disciplinu i sigurnost u pokretu.',
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

export const formatCategorySubtitle = (category: Category, city: string) => {
  const cityLocative = getCityLocative(city)

  if (category.pageSubtitle) {
    return category.pageSubtitle.replace('{city}', cityLocative)
  }

  return `${category.subtitle} u ${cityLocative}`
}

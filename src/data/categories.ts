import { getCityLocative } from './cities'

export type Category = {
  id: string
  name: string
  slug: string
  subtitle: string
  pageSubtitle?: string
  /** Accusative form for phrases like „Nazad na …”. Defaults to `name`. */
  nameAccusative?: string
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
    name: 'Moderan ples',
    slug: 'jazz-ballet',
    subtitle: 'Škole modernog plesa',
    pageSubtitle:
      'Istražite škole modernog plesa u {city} — za energiju, ritam i slobodniji plesni izraz.',
  },
  {
    id: 'dance-sport',
    name: 'Sportski ples',
    slug: 'dance-sport',
    subtitle: 'Škole sportskog plesa',
    pageSubtitle:
      'Istražite škole sportskog plesa u {city} — za ritam, gracioznost i sigurnost u svakom koraku.',
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
    nameAccusative: 'košarku',
    slug: 'basketball',
    subtitle: 'Škole košarke',
    pageSubtitle:
      'Istražite košarkaške škole u {city} — za decu koja vole igru, pokret i izazov pod obručima.',
  },
  {
    id: 'volleyball',
    name: 'Odbojka',
    nameAccusative: 'odbojku',
    slug: 'volleyball',
    subtitle: 'Škole odbojke',
    pageSubtitle:
      'Istražite škole odbojke u {city} — za razvoj koordinacije i timskog duha u igri preko mreže.',
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
  {
    id: 'boxing',
    name: 'Boks',
    slug: 'boxing',
    subtitle: 'Škole boksa',
    pageSubtitle:
      'Istražite škole boksa u {city} — za disciplinu, koordinaciju i zdrav sportski duh.',
  },
  {
    id: 'swimming',
    name: 'Plivanje',
    slug: 'swimming',
    subtitle: 'Škole plivanja',
    pageSubtitle:
      'Istražite škole plivanja u {city} — za decu koja vole vodu ili tek treba da je zavole.',
  },
  {
    id: 'riding',
    name: 'Jahanje',
    slug: 'riding',
    subtitle: 'Škole jahanja',
    pageSubtitle:
      'Istražite škole jahanja u {city} — za prirodu, povezanost sa konjima i miran ritam van grada.',
  },
  {
    id: 'folklore',
    name: 'Folklor',
    slug: 'folklore',
    subtitle: 'Škole folklora',
    pageSubtitle:
      'Istražite škole folklora u {city} — za tradiciju, igru, pesmu i druženje kroz narodne običaje.',
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

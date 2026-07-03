import ntcBaletWebp from '../assets/images/schools/ntc-balet.webp'
import ntcBaletPng from '../assets/images/schools/ntc-balet.png'
import reveransWebp from '../assets/images/schools/reverans.webp'
import reveransJpg from '../assets/images/schools/reverans.jpg'

export type School = {
  id: string
  slug: string
  name: string
  categorySlug: string
  district: string
  ageRange: string
  imageWebp: string
  imagePng: string
}

export const schools: School[] = [
  {
    id: '1',
    slug: 'ntc-balet',
    name: 'NTC balet',
    categorySlug: 'balet',
    district: 'Centar',
    ageRange: '3-7 godina',
    imageWebp: ntcBaletWebp,
    imagePng: ntcBaletPng,
  },
  {
    id: '2',
    slug: 'reverans',
    name: 'Baletski studio "Reverans"',
    categorySlug: 'balet',
    district: 'Rotkvarija',
    ageRange: '3-7 godina',
    imageWebp: reveransWebp,
    imagePng: reveransJpg,
  },
]

export const getSchoolsByCategory = (categorySlug: string) =>
  schools.filter((school) => school.categorySlug === categorySlug)

export const getSchoolBySlug = (slug: string) =>
  schools.find((school) => school.slug === slug)

export const getDistrictOptions = () =>
  [...new Set(schools.map((school) => school.district))].sort((a, b) =>
    a.localeCompare(b, 'sr')
  )

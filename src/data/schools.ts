import ntcBaletWebp from '../assets/images/schools/ntc-balet.webp'
import ntcBaletPng from '../assets/images/schools/ntc-balet.png'
import reveransWebp from '../assets/images/schools/reverans.webp'
import reveransJpg from '../assets/images/schools/reverans.jpg'

export type SchoolContact = {
  website?: string
  facebook?: string
  instagram?: string
}

export type School = {
  id: string
  slug: string
  name: string
  categorySlug: string
  city: string
  district: string
  ageRange: string
  imageWebp: string
  imagePng: string
  description?: string[]
  mapEmbedUrl?: string
  contact?: SchoolContact
}

export const schools: School[] = [
  {
    id: '1',
    slug: 'ntc-balet',
    name: 'NTC balet',
    categorySlug: 'balet',
    city: 'Novi Sad',
    district: 'Centar',
    ageRange: '3-7 godina',
    imageWebp: ntcBaletWebp,
    imagePng: ntcBaletPng,
    description: [
      'NTC program baleta predstavlja inovativni pristup razvoju dece koji spaja elemente klasičnog baleta sa principima NTC sistema učenja.',
      'Program je osmišljen od strane dr Ranka Rajovića i balerine Sare Đurakić, sa ciljem da deca kroz pokret razvijaju koordinaciju, motoriku i samopouzdanje.',
      'Radionice su prilagođene uzrastu od 3 do 7 godina i održavaju se u prijatnom i podsticajnom okruženju u centru Novog Sada.',
      'Deca uče osnovne baletne pozicije, ritam i muzikalnost kroz igru, pri čemu se posebna pažnja posvećuje individualnom razvoju svakog deteta.',
      'Program podstiče kreativnost, koncentraciju i socijalne veštine, a roditelji redovno dobijaju informacije o napretku svog deteta.',
      'Grupe su manje, što omogućava nastavnicima da svakom detetu posvete dovoljno pažnje i podrške tokom časa.',
      'NTC balet je odličan izbor za decu koja tek otkrivaju svet plesa i žele da na zabavan način steknu ljubav prema pokretu i muzici.',
    ],
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Centar,+Novi+Sad,+Serbia&z=15&hl=sr&output=embed',
    contact: {
      website: 'https://ntcucenje.com/ntc-balet/',
      facebook: 'https://www.facebook.com/ntcsistemucenja',
      instagram: 'https://www.instagram.com/ntcucenje/',
    },
  },
  {
    id: '2',
    slug: 'reverans',
    name: 'Baletski studio "Reverans"',
    categorySlug: 'balet',
    city: 'Novi Sad',
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

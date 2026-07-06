import ntcBaletWebp from '../assets/images/schools/ntc-balet.webp'
import ntcBaletPng from '../assets/images/schools/ntc-balet.png'
import reveransWebp from '../assets/images/schools/reverans.webp'
import reveransJpg from '../assets/images/schools/reverans.jpg'

export type SchoolContact = {
  website?: string
  facebook?: string
  instagram?: string
}

export type SchoolAddress = {
  street: string
  city: string
  lat?: number
  lng?: number
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
  addresses?: SchoolAddress[]
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
    addresses: [
      { street: 'Augusta Cesarca 18', city: 'Novi Sad', lat: 45.2506936, lng: 19.8383143 },
      { street: 'Zlatne Grede 25', city: 'Novi Sad', lat: 45.2592145, lng: 19.847808 },
    ],
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

export const formatSchoolAddress = (address: SchoolAddress) =>
  `${address.street}, ${address.city}`

export const getMapsHref = (address: SchoolAddress) => {
  const query =
    address.lat != null && address.lng != null
      ? `${address.lat},${address.lng}`
      : formatSchoolAddress(address)

  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}`
}

export const getGoogleMapsOpenHref = (addresses: SchoolAddress[]) => {
  const withCoords = addresses.filter(
    (address): address is SchoolAddress & { lat: number; lng: number } =>
      address.lat != null && address.lng != null
  )

  if (withCoords.length === 1) {
    const { lat, lng } = withCoords[0]
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  }

  if (withCoords.length > 1) {
    const centerLat =
      withCoords.reduce((sum, address) => sum + address.lat, 0) / withCoords.length
    const centerLng =
      withCoords.reduce((sum, address) => sum + address.lng, 0) / withCoords.length
    return `https://www.google.com/maps/@${centerLat},${centerLng},14z`
  }

  if (addresses.length > 0) {
    return getMapsHref(addresses[0])
  }

  return 'https://www.google.com/maps'
}

export const getSchoolsByCategory = (categorySlug: string) =>
  schools.filter((school) => school.categorySlug === categorySlug)

export const getSchoolBySlug = (slug: string) =>
  schools.find((school) => school.slug === slug)

export const getDistrictOptions = () =>
  [...new Set(schools.map((school) => school.district))].sort((a, b) =>
    a.localeCompare(b, 'sr')
  )

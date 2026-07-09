import ntcBaletWebp from '../assets/images/schools/ntc-balet.webp'
import ntcBaletPng from '../assets/images/schools/ntc-balet.png'
import reveransWebp from '../assets/images/schools/reverans.webp'
import reveransJpg from '../assets/images/schools/reverans.jpg'
import masterDanceWebp from '../assets/images/schools/master-dance.webp'
import masterDanceJpg from '../assets/images/schools/master-dance.jpg'
import soccerTeamWebp from '../assets/images/schools/soccerteam.webp'
import soccerTeamJpeg from '../assets/images/schools/soccerteam.jpeg'
import dramaStudioWebp from '../assets/images/schools/drama-studio.webp'
import dramaStudioJpg from '../assets/images/schools/drama-studio.jpg'
import sinisaMihajlovicWebp from '../assets/images/schools/fk-sinisa-mihajlovic.webp'
import sinisaMihajlovicJpg from '../assets/images/schools/fk-sinisa-mihajlovic.jpg'
import conkicAcademyWebp from '../assets/images/schools/conkic-academy.webp'
import conkicAcademyJpg from '../assets/images/schools/conkic-academy.jpg'
import { getCategoryBySlug } from './categories'

export type SchoolFilters = {
    city: string
    partsOfCity: string[]
    age: number | null
    activities: string[]
}

export type SchoolContact = {
    phone?: string
    email?: string
    website?: string
    facebook?: string
    facebookLabel?: string
    instagram?: string
}

export type SchoolAddress = {
    street: string
    city: string
    district?: string
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
    minAge: number
    maxAge: number | null
    ageLabel: string
    imageWebp: string
    imageFallback: string
    description?: string[]
    addresses?: SchoolAddress[]
    contact?: SchoolContact
}

export const schools: School[] = [
    {
        id: 'ntc-balet',
        slug: 'ntc-balet',
        name: 'NTC balet',
        categorySlug: 'ballet',
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: 7,
        ageLabel: '3–7 godina',
        imageWebp: ntcBaletWebp,
        imageFallback: ntcBaletPng,
        description: [
            'NTC program baleta predstavlja inovativni pristup razvoju dece koji spaja elemente klasičnog baleta sa principima NTC sistema učenja.',
            'Program je osmišljen od strane dr Ranka Rajovića i balerine Sare Đurakić, sa ciljem da deca kroz pokret razvijaju koordinaciju, motoriku i samopouzdanje.',
            'Deca uče osnovne baletne pozicije, ritam i muzikalnost kroz igru, pri čemu se posebna pažnja posvećuje individualnom razvoju svakog deteta.',
            'Grupe su manje, što omogućava nastavnicima da svakom detetu posvete dovoljno pažnje i podrške tokom časa.',
            'Kroz kombinaciju igre, muzike i strukturisanih zadataka, deca uče da pokret povezuju sa emocijama i maštom.',
            'Program podstiče samostalnost i radoznalost, uz okruženje u kojem je istraživanje pokreta podržano i svakom koraku dozvoljeno vreme.',
        ],
        addresses: [
            {
                street: 'Augusta Cesarca 18',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2506936,
                lng: 19.8383143,
            },
            {
                street: 'Zlatne Grede 25',
                city: 'Novi Sad',
                district: 'Podbara',
                lat: 45.2592145,
                lng: 19.847808,
            },
        ],
        contact: {
            phone: '065 2451 405',
            website: 'https://ntcucenje.com/ntc-balet/',
            facebook: 'https://www.facebook.com/ntcsistemucenja',
            instagram: 'https://www.instagram.com/ntcucenje/',
        },
    },
    {
        id: 'reverans',
        slug: 'reverans',
        name: 'Baletski studio "Reverans"',
        categorySlug: 'ballet',
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 3,
        maxAge: 7,
        ageLabel: '3–7 godina',
        imageWebp: reveransWebp,
        imageFallback: reveransJpg,
        description: [
            'Baletski studio "Reverans" osnovan je 2017. godine i posluje u Novom Sadu i Kikindi.',
            'Studio vodi diplomirana balerina Jovana Banić, koja kroz igru uči decu osnovama baleta, muzikalnosti i koordinacije.',
            'Program razvija osećaj za ritam, gipkost i pravilno držanje, uz vežbe na parteru i u sredini sale.',
            'Roditelji mogu da prate napredak dece na javnim nastupima i javnim časovima na kraju svakog polugodišta.',
            'Kreativni deo programa uključuje improvizacije koje pomažu deci da otkriju sopstveni izraz i povežu ples sa pričom i muzikom.',
            'Kroz igru deca uče disciplinu i koncentraciju, u toploj atmosferi koja neguje sigurnost i radoznalost.',
        ],
        addresses: [
            {
                street: 'Dostojevskog 11',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.2576083,
                lng: 19.8368714,
            },
        ],
        contact: {
            phone: '064 299 63 83',
            email: 'reverans.rs@gmail.com',
            website: 'https://decijisvetbaleta.weebly.com',
            facebook: 'https://www.facebook.com/reveransnovisad/',
            instagram: 'https://www.instagram.com/baletski_studio_reverans/',
        },
    },
    {
        id: 'master-dance',
        slug: 'master-dance',
        name: 'Plesni klub "Master dance"',
        categorySlug: 'jazz-ballet',
        city: 'Novi Sad',
        district: 'Grbavica',
        minAge: 3,
        maxAge: 15,
        ageLabel: '3–15 godina',
        imageWebp: masterDanceWebp,
        imageFallback: masterDanceJpg,
        description: [
            'Plesni klub "Master dance" okuplja decu koja kroz ples razvijaju talent, samopouzdanje i ljubav prema pokretu.',
            'Klub je započeo rad 2005. godine sa osnivačicom Dubravkom Demić, a danas uz nju vredno rade i drugi treneri.',
            'Naglasak je na džez plesu, uz učenje osnova baletske tehnike koja je neophodna za pravilan razvoj plesača.',
            'Deca uče kroz koreografije, pažljivo odabranu muziku i kreativne pokrete koji podstiču rad, zajedništvo i radoznalost.',
            'Polaznici pamte druženja, putovanja i takmičenja, uče organizovanosti i neodustajanju od svojih snova.',
            'Javne predstave i nastupi daju priliku da roditelji vide koliko deca uživaju u plesu i koliko im klub znači.',
        ],
        addresses: [
            {
                street: 'Tolstojeva 51',
                city: 'Novi Sad',
                district: 'Grbavica',
                lat: 45.2425798,
                lng: 19.8317812,
            },
        ],
        contact: {
            phone: '069 524 59 05',
            email: 'masterdancens@hotmail.com',
            facebook: 'https://www.facebook.com/MasterdanceNS/',
            instagram: 'https://www.instagram.com/masterdance_ns/',
        },
    },
    {
        id: 'soccer-team',
        slug: 'soccer-team',
        name: 'Škola fudbala "Soccer Team"',
        categorySlug: 'football',
        city: 'Novi Sad',
        district: 'Kamenjar',
        minAge: 6,
        maxAge: 14,
        ageLabel: '6–14 godina',
        imageWebp: soccerTeamWebp,
        imageFallback: soccerTeamJpeg,
        description: [
            'Škola fudbala „Soccer Team” osnovana je 2013. godine i sa velikim uspehom funkcioniše na izuzetno visokom nivou.',
            'Misija kluba je stručno-pedagoški rad sa decom, uz primenu NTC metode kroz koju se kroz igru razvija intelekt i motorika.',
            'Treninzi se održavaju u savremenim uslovima na sportsko-rekreativnom kompleksu Sport Magic, po najvišim evropskim standardima.',
            'Program je zabavno-edukativnog karaktera i usmeren je ka uvođenju sporta u svakodnevicu deteta kroz fizičku aktivnost.',
            'Deca učestvuju u gradskoj ligi i NAUR ligi, gde kroz takmičenja stiču nova prijateljstva, veštine i samopouzdanje.',
            'Osnivač i vlasnik kluba je diplomirani trener fudbala Stevan Vukomanović, uz stručan kadar koji vodi individualni i timski rad sa igračima.',
        ],
        addresses: [
            {
                street: 'Podunavska 12',
                city: 'Novi Sad',
                district: 'Kamenjar',
                lat: 45.229195,
                lng: 19.7970415,
            },
            {
                street: 'Branka Ćopića 259',
                city: 'Novi Sad',
                district: 'Adice',
                lat: 45.2300552,
                lng: 19.7772718,
            },
        ],
        contact: {
            phone: '063 768 5080',
            email: 'soccer.team84@yahoo.com',
            website: 'https://www.soccerteam.rs',
            facebook: 'https://www.facebook.com/soccerteamns',
            instagram: 'https://www.instagram.com/skola_fudbala_soker_tim',
        },
    },
    {
        id: 'sinisa-mihajlovic',
        slug: 'sinisa-mihajlovic',
        name: 'Škola fudbala "Siniša Mihajlović"',
        categorySlug: 'football',
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 5,
        maxAge: 14,
        ageLabel: '5–14 godina',
        imageWebp: sinisaMihajlovicWebp,
        imageFallback: sinisaMihajlovicJpg,
        description: [
            'Škola fudbala „Siniša Mihajlović” nalazi se na SPENS-u i bavi se sportskom edukacijom dece koja žele da se amaterski ili profesionalno bave fudbalom.',
            'Program vode visoko stručno obrazovani treneri — diplomirani treneri fudbala i licencirani treneri Fudbalskog saveza Srbije, osposobljeni za rad sa mlađim kategorijama.',
            'Škola učestvuje u takmičenjima Fudbalskog saveza Srbije, Fudbalskog saveza Grada Novog Sada i Dečije fudbalske asocijacije, kao i na međunarodnim turnirima.',
            'Dva puta godišnje organizuju se edukativna putovanja i kampovi u inostranstvu, gde deca kroz treninge i utakmice usavršavaju svoja fudbalska znanja.',
        ],
        addresses: [
            {
                street: 'Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
        ],
        contact: {
            phone: '064 241 00 19',
            email: 'fcsmihajlovic.ns@gmail.com',
            website: 'https://fcsinisamihajlovic.com',
            facebook: 'https://www.facebook.com/profile.php?id=100063768183474',
            facebookLabel: 'Skola-Fudbala-Sinisa-Mihajlovic',
            instagram: 'https://www.instagram.com/skolafudbala_sinisamihajlovic/',
        },
    },
    {
        id: 'drama-studio',
        slug: 'drama-studio',
        name: 'Drama Studio',
        categorySlug: 'acting',
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 7,
        maxAge: null,
        ageLabel: '7+ godina',
        imageWebp: dramaStudioWebp,
        imageFallback: dramaStudioJpg,
        description: [
            'Drama Studio je najtraženija škola glume u Srbiji, sa timom vrhunskih predavača i mentora iz sveta pozorišta i filma.',
            'Škola radi po Sistemu Stanislavskog i nudi individualan pristup svakom polazniku, uz podršku u razvoju samopouzdanja i scenskog izraza.',
            'Standardni program namenjen je uzrastu od 7 do 23 godine, sa grupama formiranim prema starosti: osnovna škola, srednja škola i stariji uzrast.',
            'Polaznici pohađaju pet predmeta: glumu, ples, pevanje, scenski pokret i dikciju, kroz osam mesečnih blokova po 2×45 minuta.',
            'Program pomaže deci da se oslobode treme, nauče pravilno da govore i steknu kulturno ponašanje u sigurnom i podržavajućem okruženju.',
        ],
        addresses: [
            {
                street: 'Kralja Aleksandra 12',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2541374,
                lng: 19.8435541,
            },
        ],
        contact: {
            phone: '061 46 000 47',
            email: 'info@dramastudio.rs',
            website: 'https://www.dramastudio.rs/skola-glume-novi-sad/',
            facebook: 'https://www.facebook.com/dramastudio.rs/',
            instagram: 'https://www.instagram.com/dramastudio.rs/',
        },
    },
    {
        id: 'conkic-academy',
        slug: 'conkic-academy',
        name: 'Čonkić Tennis Academy',
        categorySlug: 'tennis',
        city: 'Novi Sad',
        district: 'Adice',
        minAge: 4,
        maxAge: 10,
        ageLabel: '4–10 godina',
        imageWebp: conkicAcademyWebp,
        imageFallback: conkicAcademyJpg,
        description: [
            'Čonkić Tennis Academy je porodična akademija sa gotovo pola veka iskustva u igri i treniranju profesionalnih tenisera, osnovana 1970. godine.',
            'Škola tenisa vodi decu kroz zabavu, izazove i prijateljska takmičenja, uz razvoj tehničkih, taktičkih, fizičkih i mentalnih veština.',
            'Svi treneri rade po ITF programu razvoja dece — zvaničnom programu Teniskog saveza Srbije — uz individualan pristup unutar grupnih treninga.',
            'Polaznici napreduju kroz nivoe Crveni, Narandžasti i Zeleni, prema veštinama, što omogućava podršku i početnicima i deci sa takmičarskim ambicijama.',
            'Prva dva treninga su besplatna; dovoljno je doneti sportsku odeću i dobru volju.',
            'Akademija okuplja stručne teniske, kondicione i mentalne trenere, sa bogatom tradicijom rada sa juniorskim i profesionalnim igračima.',
        ],
        addresses: [
            {
                street: 'Veternička 3',
                city: 'Novi Sad',
                district: 'Adice',
                lat: 45.230497,
                lng: 19.7811422,
            },
        ],
        contact: {
            phone: '062 503 364',
            email: 'conkictennis@gmail.com',
            website: 'https://conkicacademy.com',
            facebook: 'https://www.facebook.com/conkictennisacademy/',
            instagram: 'https://www.instagram.com/conkic_tennisacademy',
        },
    },
]

export const formatSchoolAddress = (address: SchoolAddress) =>
    `${address.street}, ${address.city}`

export const formatPhoneHref = (phone: string) => {
    const digits = phone.replace(/\D/g, '')

    if (digits.startsWith('0')) {
        return `tel:+381${digits.slice(1)}`
    }

    if (digits.startsWith('381')) {
        return `tel:+${digits}`
    }

    return `tel:${digits}`
}

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

export const getSchoolDistricts = (school: School) => {
    const fromAddresses =
        school.addresses
            ?.map((address) => address.district)
            .filter((district): district is string => district != null && district.length > 0) ?? []

    if (fromAddresses.length > 0) {
        return [...new Set(fromAddresses)]
    }

    return [school.district]
}

export const formatSchoolDistricts = (school: School) => getSchoolDistricts(school).join(', ')

export const getDistrictOptions = () =>
    [...new Set(schools.flatMap((school) => getSchoolDistricts(school)))].sort((a, b) =>
        a.localeCompare(b, 'sr')
    )

const formatAgeOptionLabel = (age: number) => {
    const remainder = age % 10
    const isTeen = age >= 10 && age <= 20

    if (remainder >= 2 && remainder <= 4 && !isTeen) {
        return `${age} godine`
    }

    return `${age} godina`
}

export const getAgeOptions = () => {
    const minAge = Math.min(...schools.map((school) => school.minAge))
    const finiteMaxAges = schools
        .map((school) => school.maxAge)
        .filter((age): age is number => age != null)
    const maxFiniteAge = Math.max(...finiteMaxAges)
    const hasOpenEndedRange = schools.some((school) => school.maxAge == null)
    const finalAge = hasOpenEndedRange ? maxFiniteAge + 1 : maxFiniteAge

    return Array.from({ length: finalAge - minAge + 1 }, (_, index) => {
        const value = minAge + index
        const isOpenEnded = hasOpenEndedRange && value === finalAge
        const label = isOpenEnded ? `${value}+ godina` : formatAgeOptionLabel(value)
        return { value, label }
    })
}

export const getActivityOptions = () =>
    [...new Set(schools.map((school) => school.categorySlug))]
        .map((slug) => {
            const category = getCategoryBySlug(slug)
            return category ? { slug, name: category.name } : null
        })
        .filter((option): option is { slug: string; name: string } => option != null)
        .sort((a, b) => a.name.localeCompare(b.name, 'sr'))

export const filterSchools = (filters: SchoolFilters) =>
    schools.filter((school) => {
        if (filters.city && school.city !== filters.city) {
            return false
        }

        if (filters.activities.length > 0 && !filters.activities.includes(school.categorySlug)) {
            return false
        }

        if (
            filters.age != null &&
            (filters.age < school.minAge || (school.maxAge != null && filters.age > school.maxAge))
        ) {
            return false
        }

        if (filters.partsOfCity.length > 0) {
            const schoolDistricts = getSchoolDistricts(school)
            const matchesDistrict = filters.partsOfCity.some((part) =>
                schoolDistricts.includes(part)
            )

            if (!matchesDistrict) {
                return false
            }
        }

        return true
    })

import mawashiWebp from '../../assets/images/schools/karate/mawashi.webp'
import mawashiJpg from '../../assets/images/schools/karate/mawashi.jpg'
import sokoWebp from '../../assets/images/schools/karate/soko.webp'
import sokoJpg from '../../assets/images/schools/karate/soko.jpg'

import type { School } from './types'

export const karateSchools: School[] = [
    {
        id: 'karate-klub-mawashi',
        slug: 'karate-klub-mawashi',
        name: 'Karate klub Mawashi',
        categorySlugs: ['karate'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: mawashiWebp,
        imageFallback: mawashiJpg,
        description: [
            'Karate klub „Mawashi” osnovan je 2006. godine i danas je jedan od najmasovnijih i najuspešnijih karate kolektiva u Novom Sadu.',
            'Klub je član Karate saveza Vojvodine i Karate federacije Srbije, a treninzi se održavaju po programu olimpijskog WKF karatea.',
            'Program je prilagođen različitim uzrastima i nivoima znanja, uz naglasak na tehničku preciznost, disciplinu i poštovanje.',
            'U klubu treniraju zonski, pokrajinski i državni prvaci, kao i osvajači medalja na najvećim domaćim i međunarodnim turnirima.',
            'Kroz redovan rad deca razvijaju koordinaciju, koncentraciju i samopouzdanje u podržavajućem timskom okruženju.',
        ],
        addresses: [
            {
                street: 'SPENS, Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
            {
                street: 'OŠ "Svetozar Marković Toza", Janka Čmelika 89',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2633666,
                lng: 19.8082866,
            },
        ],
        contact: {
            phone: '063 16 14 403',
            email: 'karateklubmawashi@live.com',
            facebook: 'https://www.facebook.com/karateklubmawashi/',
            instagram: 'https://www.instagram.com/karateklubmawashi/',
        },
    },
    {
        id: 'karate-klub-soko',
        slug: 'karate-klub-soko',
        name: 'Karate klub Soko',
        categorySlugs: ['karate'],
        city: 'Novi Sad',
        district: 'Satelit',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: sokoWebp,
        imageFallback: sokoJpg,
        description: [
            'Karate klub Soko osnovan je 1978. godine i predstavlja klub sa najdužom tradicijom karatea u Novom Sadu.',
            'Član je WKF karate saveza Srbije, a kroz grupe prilagođene uzrastu i nivou pojasa vodi polaznike od prvih koraka do naprednog treninga.',
            'Prvi je u gradu organizovao karate zabavište, a danas ima i grupu Karate sportić za najmlađe.',
            'Upis je otvoren tokom cele godine, uz mogućnost probnog treninga za nove članove.',
        ],
        addresses: [
            {
                street: 'Iva Ćipika 17',
                city: 'Novi Sad',
                district: 'Satelit',
                lat: 45.2487242,
                lng: 19.8039351,
            },
        ],
        contact: {
            phone: '069 744 676',
            email: 'kksoko1978@hotmail.com',
            website: 'https://www.karateklubsokonovisad.com/',
            facebook: 'https://www.facebook.com/kksokonovisad',
        },
    },
]

import masterDanceWebp from '../../assets/images/schools/dance/master-dance.webp'
import masterDanceJpg from '../../assets/images/schools/dance/master-dance.jpg'

import type { School } from './types'

export const jazzBalletSchools: School[] = [
    {
        id: 'master-dance',
        slug: 'master-dance',
        name: 'Plesni klub "Master dance"',
        categorySlugs: ['jazz-ballet'],
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
    }
]

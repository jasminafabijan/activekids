import masterDanceWebp from '../../assets/images/schools/dance/master-dance.webp'
import masterDanceJpg from '../../assets/images/schools/dance/master-dance.jpg'
import impulsWebp from '../../assets/images/schools/dance/impuls.webp'
import impulsJpg from '../../assets/images/schools/dance/impuls.png'

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
    },
    {
        id: 'impuls',
        slug: 'impuls',
        name: 'Plesni studio Impuls',
        categorySlugs: ['jazz-ballet'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: impulsWebp,
        imageFallback: impulsJpg,
        description: [
            'Plesni studio Impuls radi više od tri decenije i poznat je po džez baletu, modernom baletu i show dance programima.',
            'Studio je višegodišnji državni prvak u džez balet formacijama, a nastupao je i na evropskim i svetskim prvenstvima.',
            'Za mlađe uzraste postoji Jazz Kids program, a stariji polaznici nastavljaju kroz jazz balet, jazz dance i srodne discipline.',
            'Pored redovnih časova, organizuju se takmičenja, putovanja, TV nastupi i završne priredbe.',
        ],
        addresses: [
            {
                street: 'Trg mladenaca 7',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2520887,
                lng: 19.8425817,
            },
            {
                street: 'Janka Veselinovića 54–56',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2619403,
                lng: 19.817073,
            },
            {
                street: 'Cvećarska 9',
                city: 'Novi Sad',
                district: 'Telep',
                lat: 45.2443515,
                lng: 19.8174658,
            },
        ],
        contact: {
            phone: '063 541 928',
            email: 'impulss@mts.rs',
            website: 'https://studioimpuls.org/',
            facebook: 'https://www.facebook.com/impulsdancens/',
            instagram: 'https://www.instagram.com/impulsdancestudio/',
        },
    },
]

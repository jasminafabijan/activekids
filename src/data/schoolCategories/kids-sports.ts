import sportisimoWebp from '../../assets/images/schools/athletics/sportisimo.webp'
import sportisimoJpg from '../../assets/images/schools/athletics/sportisimo.jpg'
import zverkoWebp from '../../assets/images/schools/kids-sports/zverko.webp'
import zverkoPng from '../../assets/images/schools/kids-sports/zverko.png'

import type { School } from './types'

export const kidsSportsSchools: School[] = [
    {
        id: 'sportisimo-skolica-sporta',
        slug: 'sportisimo-skolica-sporta',
        name: {
            sr: 'Sportisimo',
            en: 'Sportisimo',
        },
        categorySlugs: ['kids-sports'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 3,
        maxAge: 6,
        ageLabel: '3–6 godina',
        imageWebp: sportisimoWebp,
        imageFallback: sportisimoJpg,
        description: {
            sr: [
                'Školica sporta namenjena je deci od 3 do 6 godina, raspoređenoj u dve uzrasne grupe: 3–4 i 4–6 godina.',
                'Trčimo, skačemo, puzimo, provlačimo se, penjemo, bacamo i hvatamo, prelazimo različite prepreke i učimo nove pokrete. Kako deca rastu, zadaci postaju složeniji i počinjemo da povezujemo više pokreta u jednu celinu.',
                'U ovom uzrastu ne žurimo sa izborom jednog sporta. Važnije nam je da dete isproba mnogo različitih načina kretanja i napravi dobru osnovu za sport kojim će se možda kasnije baviti.',
            ],
            en: [
                'Kids’ Sports is for children from 3 to 6, split into two age groups: 3–4 and 4–6.',
                'We run, jump, crawl, squeeze through, climb, throw and catch, cross different obstacles and learn new movements. As children grow, the tasks get more complex and we start linking several movements into one whole.',
                'At this age we are not in a hurry to choose one sport. What matters more is that the child tries many different ways of moving and builds a good foundation for a sport they may take up later.',
            ],
        },
        addresses: [
            {
                street: 'Milenka Grčića 3a',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2619586,
                lng: 19.8123263,
            },
        ],
        contact: {
            phone: '064 236 15 94',
            email: 'borjanaradonic@gmail.com',
            website: 'https://sportisimo.org/deca/skolica-sporta-4-6-god/',
            facebook: 'https://www.facebook.com/sportisimosportskaporodica',
            facebookLabel: 'Sportisimo sportska porodica',
            instagram: 'https://www.instagram.com/sportisimo_sportska_porodica/',
        },
    },
    {
        id: 'zverko',
        slug: 'zverko',
        name: {
            sr: 'Školica sporta Zverko',
            en: 'Zverko Kids’ Sports',
        },
        categorySlugs: ['kids-sports'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: 7,
        ageLabel: '3–7 godina',
        imageWebp: zverkoWebp,
        imageFallback: zverkoPng,
        description: {
            sr: [
                'Školica sporta namenjena uzrastu od 3 - 7 godina. Mesto gde deca uživaju u sportu.',
            ],
            en: [
                'Kids’ sports program for ages 3–7. A place where children enjoy sport.',
            ],
        },
        addresses: [
            {
                street: 'SPENS, Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
        ],
        contact: {
            phone: '064 252 14 14',
            email: 'vlajkovicana@yahoo.com',
            instagram: 'https://www.instagram.com/zverko.trening/',
        },
    },
]

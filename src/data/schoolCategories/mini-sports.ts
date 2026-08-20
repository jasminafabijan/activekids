import sportisimoWebp from '../../assets/images/schools/mini-sports/sportisimo.webp'
import sportisimoJpg from '../../assets/images/schools/mini-sports/sportisimo.jpg'

import type { School } from './types'

export const miniSportsSchools: School[] = [
    {
        id: 'sportisimo',
        slug: 'sportisimo',
        name: {
            sr: 'Sportisimo',
            en: 'Sportisimo',
        },
        categorySlugs: ['mini-sports'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 2,
        maxAge: 6,
        ageLabel: '2–6 godina',
        imageWebp: sportisimoWebp,
        imageFallback: sportisimoJpg,
        description: {
            sr: [
                'Sportisimo vodi školice sporta kroz igru — osnovne pokrete, koordinaciju, ravnotežu i prve sportske navike, uz licencirane trenere.',
                'Program Sportić je ulaz za najmlađe, a u istoj sportskoj porodici nastavljaju Školica sporta za mlađe predškolce (https://sportisimo.org/deca/skolica-sporta-2-4-god/) i Školica sporta za starije predškolce (https://sportisimo.org/deca/skolica-sporta-4-6-god/).',
                'Sa decom rade pedagog i treneri — među njima Milana Malčić, Nenad Radonić i Borjana Radonić — sa naglaskom na pohvalu, druženje i pozitivan odnos prema kretanju.',
                'Tokom godine organizuju Sportijadu, sportske dane, kampove i posete sportskim manifestacijama, kako bi sport rano postao deo svakodnevice.',
            ],
            en: [
                'Sportisimo runs mini sports schools through play — basic movement, coordination, balance and the first sports habits, with licensed coaches.',
                'The Sportić program is the way in for the youngest children, and the same sports family continues with Školica sporta for younger preschoolers (https://sportisimo.org/deca/skolica-sporta-2-4-god/) and Školica sporta for older preschoolers (https://sportisimo.org/deca/skolica-sporta-4-6-god/).',
                'A pedagogue and coaches work with the children — among them Milana Malčić, Nenad Radonić and Borjana Radonić — with an emphasis on praise, camaraderie and a positive attitude toward movement.',
                'During the year they organize Sportijada, sports days, camps and visits to sports events, so that sport becomes part of everyday life early on.',
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
            website: 'https://sportisimo.org/deca/skolica-sporta-2-3-god/',
            facebook: 'https://www.facebook.com/sportisimosportskaporodica',
            facebookLabel: 'Sportisimo sportska porodica',
            instagram: 'https://www.instagram.com/sportisimo_sportska_porodica/',
        },
    },
]

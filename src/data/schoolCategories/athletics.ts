import sportisimoWebp from '../../assets/images/schools/athletics/sportisimo.webp'
import sportisimoJpg from '../../assets/images/schools/athletics/sportisimo.jpg'

import type { School } from './types'

export const athleticsSchools: School[] = [
    {
        id: 'sportisimo-atletika',
        slug: 'sportisimo-atletika',
        name: {
            sr: 'Sportisimo',
            en: 'Sportisimo',
        },
        categorySlugs: ['athletics'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 5,
        maxAge: 8,
        ageLabel: '5–8 godina',
        imageWebp: sportisimoWebp,
        imageFallback: sportisimoJpg,
        description: {
            sr: [
                'Atletska škola Sportisima vodi decu kroz trčanje, skokove i bacanja — pokrete koji su im već prirodni, a sada ih uče da izvode pravilnije i sigurnije.',
                'Na treninzima se radi tehnika trčanja, start i ubrzanje, trčanje preko prepreka, štafete i osnovne atletske discipline, uz licencirane trenere.',
                'Svaki pokušaj je prilika da dete potrči brže, skoči dalje ili baci preciznije, u atmosferi igre i postepenog napretka.',
                'Program daje čvrstu osnovu za kasniji izbor sporta, a tokom godine klub organizuje Sportijadu, sportske dane, kampove i posete manifestacijama.',
            ],
            en: [
                'Sportisimo’s athletics school takes children through running, jumps and throws — movements that already feel natural to them, now learned with better technique and more confidence.',
                'Training covers running technique, the start and acceleration, running over obstacles, relays and basic athletics events, with licensed coaches.',
                'Every attempt is a chance to run faster, jump farther or throw more accurately, in an atmosphere of play and gradual progress.',
                'The program gives a solid foundation for later sport choices, and during the year the club organizes Sportijada, sports days, camps and visits to events.',
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
            website: 'https://sportisimo.org/deca/atletika-5-8/',
            facebook: 'https://www.facebook.com/sportisimosportskaporodica',
            facebookLabel: 'Sportisimo sportska porodica',
            instagram: 'https://www.instagram.com/sportisimo_sportska_porodica/',
        },
    },
]

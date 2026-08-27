import sportisimoWebp from '../../assets/images/schools/athletics/sportisimo.webp'
import sportisimoJpg from '../../assets/images/schools/athletics/sportisimo.jpg'

import type { School } from './types'

export const developmentalGymnasticsSchools: School[] = [
    {
        id: 'sportisimo-razvojna-gimnastika',
        slug: 'sportisimo-razvojna-gimnastika',
        name: {
            sr: 'Sportisimo',
            en: 'Sportisimo',
        },
        categorySlugs: ['developmental-gymnastics'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 7,
        maxAge: 10,
        ageLabel: '7–10 godina',
        imageWebp: sportisimoWebp,
        imageFallback: sportisimoJpg,
        description: {
            sr: [
                'Sa polaskom u školu menja se i svakodnevica deteta — više vremena provodi sedeći, a telo nastavlja brzo da raste. Zato mu je i dalje potrebno mnogo različitog kretanja.',
                'Na Razvojnoj gimnastici radimo vežbe snage prilagođene uzrastu, skokove, preskakanja, različite gimnastičke zadatke, vežbe na spravama i sa rekvizitima. Učimo i zahtevnije pokrete, povezujemo ih i postepeno savladavamo nove izazove.',
                'Cilj je da dete kroz ovaj period nastavi da jača telo, proširuje ono što ume da uradi i stekne sigurnost i kontrolu u sve složenijim pokretima.',
            ],
            en: [
                'Starting school also changes a child’s everyday life — they spend more time sitting, while the body keeps growing fast. That is why they still need a lot of varied movement.',
                'In Developmental gymnastics we do age-appropriate strength exercises, jumps, vaults, different gymnastics tasks, work on apparatus and with props. We also learn more demanding movements, connect them and gradually take on new challenges.',
                'The goal is for the child through this period to keep strengthening the body, expand what they can do, and gain confidence and control in increasingly complex movements.',
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
            website: 'https://sportisimo.org/deca/razvojna-gimnastika-deca-7-10/',
            facebook: 'https://www.facebook.com/sportisimosportskaporodica',
            facebookLabel: 'Sportisimo sportska porodica',
            instagram: 'https://www.instagram.com/sportisimo_sportska_porodica/',
        },
    },
]

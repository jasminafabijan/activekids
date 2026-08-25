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
                'Na razvojnoj gimnastici u Sportisimu deca jačaju celo telo kroz raznovrsne vežbe, uče nove pokrete i savladavaju gimnastičke zadatke koji postepeno postaju zahtevniji.',
                'Vežbe nisu slučajne: cilj je da trening podrži telo dok dete raste, i da da osnovu za svakodnevno kretanje i druge sportske aktivnosti.',
                'Kako je sve više vremena u školi, za stolom ili uz ekran, telu treba pametniji rad — a ono što se izgradi na treningu ostaje korisno i van sale.',
                'Može se doći i na probni trening, da se program upozna pre odluke.',
            ],
            en: [
                'In developmental gymnastics at Sportisimo, children strengthen the whole body through varied exercises, learn new movements and take on gymnastics tasks that gradually become more demanding.',
                'The exercises are not random: training is meant to support the body as a child grows, and to build a foundation for everyday movement and other sports.',
                'As more time is spent at school, at a desk or at a screen, the body needs smarter work — and what is built in class stays useful outside the hall as well.',
                'A trial class is available, so the program can be tried before you decide.',
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

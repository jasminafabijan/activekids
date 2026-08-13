import champ07Webp from '../../assets/images/schools/developmental-gymnastics/champ-07.webp'
import champ07Jpg from '../../assets/images/schools/developmental-gymnastics/champ-07.jpg'

import type { School } from './types'

export const developmentalGymnasticsSchools: School[] = [
    {
        id: 'champ-07-razvojna-gimnastika',
        slug: 'champ-07-razvojna-gimnastika',
        name: 'Champ 07',
        categorySlugs: ['developmental-gymnastics'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: 9,
        ageLabel: '3–9 godina',
        imageWebp: champ07Webp,
        imageFallback: champ07Jpg,
        description: [
            'Korektivno-razvojna gimnastika u dečijem sportskom klubu Champ 07 namenjena je pravilnom rastu kroz stručno vođenu fizičku aktivnost.',
            'Kroz raznovrsne vežbe, sprave i rekvizite program deluje na celo telo, a deca kroz igru i druženje stiču radne navike i kolektivni duh.',
            'Motorički zadaci različite složenosti razvijaju koordinaciju, spretnost, hrabrost i samopouzdanje, i daju dobru osnovu za druge sportove.',
            'Rad je usmeren na osnovne oblike kretanja — hodanje, trčanje, poskoke, penjanje i puzanje — u malim, uzrasno podeljenim grupama.',
        ],
        addresses: [
            {
                street: 'Lovćenska 16, Sala na Fakultetu sporta (DIF)',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2477013,
                lng: 19.8477071,
            },
        ],
        contact: {
            phone: '064 65 21 282',
            email: 'bobanch07@yahoo.com',
            website: 'https://www.ch07.rs/sport/korektivno-razvojna-gimnastika/',
            facebook: 'https://www.facebook.com/SKLavovi07',
            facebookLabel: 'SK Lavovi 07',
            instagram: 'https://www.instagram.com/sc_champ_07/',
        },
    },
]

import champ07Webp from '../../assets/images/schools/swimming/champ-07.webp'
import champ07Jpg from '../../assets/images/schools/swimming/champ-07.jpg'

import type { School } from './types'

export const swimmingSchools: School[] = [
    {
        id: 'champ-07-plivanje',
        slug: 'champ-07-plivanje',
        name: 'Champ 07',
        categorySlugs: ['swimming'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: champ07Webp,
        imageFallback: champ07Jpg,
        description: [
            'Škola plivanja dečijeg sportskog kluba Champ 07 namenjena je pravilnom učenju plivačkih tehnika, čak i kada dete već zna da se održava na vodi.',
            'Plivanje ravnomerno angažuje veliki broj mišića, a ne opterećuje zglobove, pa se često preporučuje i kao podrška zdravom držanju i razvoju.',
            'Sa decom rade treneri Milorad Jakšić, Milan Molnar i Jelena Radojčić, u malim grupama — najviše petoro dece po treneru.',
            'Program se odvija na bazenima SPENS-a, uz jasnu organizaciju prijave i rada u malom bazenu.',
        ],
        addresses: [
            {
                street: 'Sutjeska 2, Bazeni SPENS-a',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
        ],
        contact: {
            phone: '064 65 21 282',
            email: 'bobanch07@yahoo.com',
            website: 'https://www.ch07.rs/sport/skola-plivanja/',
            facebook: 'https://www.facebook.com/SKLavovi07',
            facebookLabel: 'SK Lavovi 07',
            instagram: 'https://www.instagram.com/sc_champ_07/',
        },
    },
]

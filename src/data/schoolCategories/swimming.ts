import champ07Webp from '../../assets/images/schools/swimming/champ-07.webp'
import champ07Jpg from '../../assets/images/schools/swimming/champ-07.jpg'

import type { School } from './types'

export const swimmingSchools: School[] = [
    {
        id: 'champ-07-plivanje',
        slug: 'champ-07-plivanje',
        name: {
            sr: 'Champ 07',
            en: 'Champ 07',
        },
        categorySlugs: ['swimming'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: champ07Webp,
        imageFallback: champ07Jpg,
        description: {
            sr: [
                'Škola plivanja dečijeg sportskog kluba Champ 07 namenjena je pravilnom učenju plivačkih tehnika, čak i kada dete već zna da se održava na vodi.',
                'Plivanje ravnomerno angažuje veliki broj mišića, a ne opterećuje zglobove, pa se često preporučuje i kao podrška zdravom držanju i razvoju.',
                'Sa decom rade treneri Milorad Jakšić, Milan Molnar i Jelena Radojčić, u malim grupama — najviše petoro dece po treneru.',
                'Program se odvija na bazenima SPENS-a, uz jasnu organizaciju prijave i rada u malom bazenu.',
            ],
            en: [
                'The swimming school of children’s sports club Champ 07 is for learning swimming technique properly, even when a child can already stay afloat.',
                'Swimming works a large number of muscles evenly and does not load the joints, so it is often recommended as support for healthy posture and development.',
                'Coaches Milorad Jakšić, Milan Molnar and Jelena Radojčić work with the children, in small groups — at most five children per coach.',
                'The program takes place at the SPENS pools, with a clear enrollment process and work in the small pool.',
            ],
        },
        addresses: [
            {
                street: 'Bazeni SPENS-a, Sutjeska 2',
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

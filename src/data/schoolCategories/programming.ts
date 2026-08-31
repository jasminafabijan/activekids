import dextersWebp from '../../assets/images/schools/programming/dexters.webp'
import dextersJpg from '../../assets/images/schools/programming/dexters.jpg'

import type { School } from './types'

export const programmingSchools: School[] = [
    {
        id: 'dexters',
        slug: 'dexters',
        name: {
            sr: "Dexter's",
            en: "Dexter's",
        },
        categorySlugs: ['programming'],
        city: 'Novi Sad',
        district: 'Liman 3',
        minAge: 6,
        maxAge: 17,
        ageLabel: '6–17 godina',
        imageWebp: dextersWebp,
        imageFallback: dextersJpg,
        description: {
            sr: [
                'Dexter\'s IT Laboratorija je prva škola programiranja za decu u Srbiji, osnovana 2016. godine u Novom Sadu. Kroz 100% praktičan rad deca prave igrice, robote, aplikacije i sajtove, razvijajući logiku, kreativnost i samopouzdanje.',
                'Programi obuhvataju Scratch, Lego Mindstorms robotiku, Python, web razvoj, mobilne aplikacije, elektroniku i Arduino.',
                'Nastava je u malim grupama od 4 do 8 polaznika, uz savremenu opremu i predavače koji su aktivni IT stručnjaci. Svaki kurs traje devet meseci i završava se individualnim projektom deteta.',
                'Roditelji redovno dobijaju povratne informacije o napretku, a svako dete može da dođe na besplatan probni čas od 90 minuta. Škola je dostupna i online.',
            ],
            en: [
                "Dexter's IT Laboratorija is the first programming school for children in Serbia, founded in 2016 in Novi Sad. Through fully hands-on work, children make games, robots, apps and websites, building logic, creativity and confidence.",
                'Programs include Scratch, Lego Mindstorms robotics, Python, web development, mobile apps, electronics and Arduino.',
                'Classes are in small groups of 4 to 8 students, with modern equipment and instructors who are working IT professionals. Each course lasts nine months and ends with the child’s individual project.',
                'Parents get regular progress updates, and every child can come to a free 90-minute trial class. Classes are also available online.',
            ],
        },
        addresses: [
            {
                street: 'Narodnog fronta 25',
                city: 'Novi Sad',
                district: 'Liman 3',
                lat: 45.2390816,
                lng: 19.836052,
            },
            {
                street: 'Čitaonička 4',
                city: 'Sombor',
                lat: 45.7730342,
                lng: 19.1163763,
            },
        ],
        contact: {
            phone: '065 2211 353',
            email: 'office@dexte.rs',
            website: 'https://dexte.rs/',
            facebook: 'https://www.facebook.com/programiranjezadecu/',
            facebookLabel: "Dexter's",
            instagram: 'https://www.instagram.com/programiranjezadecu/',
        },
    },
]

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
        minAge: 7,
        maxAge: 17,
        ageLabel: '7–17 godina',
        imageWebp: dextersWebp,
        imageFallback: dextersJpg,
        description: {
            sr: [
                'Dexter\'s je škola programiranja za decu, koju je 2016. osnovala Ivana Đonović. Bavi se isključivo IT obrazovanjem dece, uz cilj da kroz igru i praktičan rad postanu kreatori, a ne samo korisnici tehnologije.',
                'Programi obuhvataju Scratch, Python i robotiku. Nastavu su pravili programeri, u malim grupama od četiri do osam polaznika, uz savremenu opremu — svako dete ima svoj računar, robota ili razvojnu ploču.',
                'Predavači se profesionalno bave programiranjem, pa polaznici mogu da postavljaju pitanja i van nastavnog programa. Materijali se pripremaju u saradnji sa psiholozima i nastavnicima srednjih škola, da budu usklađeni sa školskim gradivom.',
                'Tokom kursa škola prati zadovoljstvo deteta i izveštava roditelje o napretku. Ima više od 7.500 polaznika, a svako dete može da dođe na besplatni probni čas.',
            ],
            en: [
                "Dexter's is a programming school for children, founded in 2016 by Ivana Đonović. It focuses exclusively on IT education for kids, with the aim that through play and hands-on work they become creators, not just users of technology.",
                'Programs include Scratch, Python and robotics. The classes were designed by programmers, in small groups of four to eight students, with up-to-date equipment — each child has their own computer, robot or development board.',
                'Instructors work as professional programmers, so students can ask questions beyond the syllabus. Materials are prepared with psychologists and high school teachers so they align with what children study at school.',
                'During the course the school pays attention to whether the child is enjoying class and reports progress to parents. It has more than 7,500 students, and every child can come to a free trial class.',
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

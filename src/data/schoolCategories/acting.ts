import dramaStudioWebp from '../../assets/images/schools/acting/drama-studio.webp'
import dramaStudioJpg from '../../assets/images/schools/acting/drama-studio.jpg'

import type { School } from './types'

export const actingSchools: School[] = [
    {
        id: 'drama-studio',
        slug: 'drama-studio',
        name: {
            sr: 'Drama Studio',
            en: 'Drama Studio',
        },
        categorySlugs: ['acting'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 7,
        maxAge: null,
        ageLabel: '7+ godina',
        imageWebp: dramaStudioWebp,
        imageFallback: dramaStudioJpg,
        description: {
            sr: [
                'Drama Studio je najtraženija škola glume u Srbiji, sa timom vrhunskih predavača i mentora iz sveta pozorišta i filma.',
                'Škola radi po Sistemu Stanislavskog i nudi individualan pristup svakom polazniku, uz podršku u razvoju samopouzdanja i scenskog izraza.',
                'Standardni program namenjen je uzrastu od 7 do 23 godine, sa grupama formiranim prema starosti: osnovna škola, srednja škola i stariji uzrast.',
                'Polaznici pohađaju pet predmeta: glumu, ples, pevanje, scenski pokret i dikciju, kroz osam mesečnih blokova po 2×45 minuta.',
                'Program pomaže deci da se oslobode treme, nauče pravilno da govore i steknu kulturno ponašanje u sigurnom i podržavajućem okruženju.',
            ],
            en: [
                'Drama Studio is the most sought-after acting school in Serbia, with a team of leading teachers and mentors from theatre and film.',
                'The school works according to the Stanislavski System and offers an individual approach to each pupil, with support for confidence and stage expression.',
                'The standard program is for ages 7 to 23, with groups formed by age: primary school, secondary school and older pupils.',
                'Pupils take five subjects: acting, dance, singing, stage movement and diction, across eight monthly blocks of 2×45 minutes.',
                'The program helps children ease stage fright, learn to speak clearly and develop cultured behavior in a safe, supportive setting.',
            ],
        },
        addresses: [
            {
                street: 'TC Pariski magazin, Kralja Aleksandra 12',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2541374,
                lng: 19.8435541,
            },
        ],
        contact: {
            phone: '061 46 000 47',
            email: 'info@dramastudio.rs',
            website: 'https://www.dramastudio.rs/skola-glume-novi-sad/',
            facebook: 'https://www.facebook.com/dramastudio.rs/',
            instagram: 'https://www.instagram.com/dramastudio.rs/',
        },
    }
]

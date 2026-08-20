import bubamaraWebp from '../../assets/images/schools/chess/bubamara.webp'
import bubamaraJpg from '../../assets/images/schools/chess/bubamara.jpg'

import type { School } from './types'

export const chessSchools: School[] = [
    {
        id: 'sk-bubamara',
        slug: 'sk-bubamara',
        name: {
            sr: 'Šahovski klub „Bubamara”',
            en: 'Bubamara Chess Club',
        },
        categorySlugs: ['chess'],
        city: 'Novi Sad',
        district: 'Novo naselje',
        minAge: 5,
        maxAge: 18,
        ageLabel: '5–18 godina',
        imageWebp: bubamaraWebp,
        imageFallback: bubamaraJpg,
        description: {
            sr: [
                'Šahovski klub Bubamara od 1993. godine vodi dečiju školu šaha, sa naglaskom na strpljenje, koncentraciju i strateško razmišljanje.',
                'Program je podeljen u mlađu, srednju i stariju grupu prema predznanju, a prvi čas je besplatan kako bi dete upoznalo atmosferu kluba.',
                'Sa decom rade akreditovani treneri — među njima FIDE sudija Almir Gagić i FIDE majstor Milan Gagić.',
                'Klub redovno učestvuje na turnirima, negujući takmičarski duh, drugarstvo i fer-plej, od prvih poteza do pripreme za ozbiljnija takmičenja.',
            ],
            en: [
                'Bubamara Chess Club has run a children’s chess school since 1993, with an emphasis on patience, concentration and strategic thinking.',
                'The program is split into younger, middle and older groups by prior knowledge, and the first lesson is free so the child can get to know the club atmosphere.',
                'Accredited coaches work with the children — among them FIDE arbiter Almir Gagić and FIDE Master Milan Gagić.',
                'The club regularly takes part in tournaments, fostering a competitive spirit, camaraderie and fair play, from the first moves through to preparation for more serious events.',
            ],
        },
        addresses: [
            {
                street: 'Mesna zajednica Bistrica, Braće Dronjak 11',
                city: 'Novi Sad',
                district: 'Novo naselje',
                lat: 45.2516056,
                lng: 19.798154,
            },
        ],
        contact: {
            phone: '060 040 08 07',
            website: 'https://skbubamarans.rs/',
            facebook: 'https://www.facebook.com/sk.bubamaranovisad',
            instagram: 'https://www.instagram.com/skbubamarans/',
        },
    },
]

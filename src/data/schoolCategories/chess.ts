import bubamaraWebp from '../../assets/images/schools/chess/bubamara.webp'
import bubamaraJpg from '../../assets/images/schools/chess/bubamara.jpg'
import korifejWebp from '../../assets/images/schools/chess/korifej.webp'
import korifejJpg from '../../assets/images/schools/chess/korifej.jpg'

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
    {
        id: 'sk-korifej',
        slug: 'sk-korifej',
        name: {
            sr: 'Šahovski klub „Korifej”',
            en: 'Korifej Chess Club',
        },
        categorySlugs: ['chess'],
        city: 'Novi Sad',
        district: 'Banatić',
        minAge: 5,
        maxAge: 16,
        ageLabel: '5–16 godina',
        imageWebp: korifejWebp,
        imageFallback: korifejJpg,
        description: {
            sr: [
                'Šahovski klub Korifej nudi deci okruženje za razvoj logičkog razmišljanja, strpljenja i koncentracije kroz igru šaha.',
                'Časovi su organizovani kreativno, po grupama prema predznanju, subotom i nedeljom u prepodnevnim terminima.',
                'Školu vodi iskusni trener Branislav Šekularac, generalni sekretar Šahovskog saveza Novog Sada, poznat po pedagoškom pristupu.',
                'Kroz igru i druženje mali šahisti uče pravila i taktiku, a uz to veštine koje im koriste i van šahovske table.',
            ],
            en: [
                'Korifej Chess Club offers children an environment for developing logical thinking, patience and concentration through the game of chess.',
                'Lessons are organized creatively, in groups by prior knowledge, on Saturday and Sunday mornings.',
                'The school is led by experienced coach Branislav Šekularac, general secretary of the Chess Federation of Novi Sad, known for a pedagogical approach.',
                'Through play and camaraderie, young players learn rules and tactics, along with skills that help them away from the chessboard as well.',
            ],
        },
        addresses: [
            {
                street: 'Omladinskog pokreta 11',
                city: 'Novi Sad',
                district: 'Banatić',
                lat: 45.2625453,
                lng: 19.8229049,
            },
        ],
        contact: {
            phone: '064 431 33 99',
            website: 'http://sahovskisavezns.com/sr_rs/skola-saha-korifej/',
            facebook: 'https://www.facebook.com/sahovska.skola.korifej',
            instagram: 'https://www.instagram.com/sahovska_skola_korifej/',
        },
    },
]

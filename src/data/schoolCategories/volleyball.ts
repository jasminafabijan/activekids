import champ07VolleyballWebp from '../../assets/images/schools/volleyball/champ-07.webp'
import champ07VolleyballJpg from '../../assets/images/schools/volleyball/champ-07.jpg'

import type { School } from './types'

export const volleyballSchools: School[] = [
    {
        id: 'champ-07-odbojka',
        slug: 'champ-07-odbojka',
        name: 'Champ 07',
        categorySlugs: ['volleyball'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 7,
        maxAge: null,
        ageLabel: '7+ godina',
        imageWebp: champ07VolleyballWebp,
        imageFallback: champ07VolleyballJpg,
        description: [
            'Odbojka u dečijem sportskom klubu Champ 07 zauzima posebno mesto kao jedna od najbrojnijih zajednica u klubu, podeljenih u ženske i muške grupe — Lavove i Lavice.',
            'Program kombinuje raznovrsne metode obuke koje motivišu i dugoročno vežu za sport.',
            'Deca uče tehničke elemente koje mogu primeniti na utakmici, na plaži ili na igralištu sa drugarima iz škole.',
            'Odbojka podržava pravilan rast i razvoj, formu i telesnu građu, uz druženje, utakmice i rad sa posvećenim trenerima.',
            'Treninzi se održavaju u sali na Fakultetu sporta i fizičkog vaspitanja (DIF).',
        ],
        addresses: [
            {
                street: '(DIF) Lovćenska 16',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2477013,
                lng: 19.8477071,
            },
        ],
        contact: {
            phone: '064 65 21 282',
            email: 'bobanch07@yahoo.com',
            website: 'https://www.ch07.rs/sport/odbojka/',
            facebook: 'https://www.facebook.com/SKLavovi07',
            facebookLabel: 'SK Lavovi 07',
            instagram: 'https://www.instagram.com/sc_champ_07/',
        },
    },
]

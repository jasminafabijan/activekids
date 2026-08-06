import champ07VolleyballWebp from '../../assets/images/schools/volleyball/champ-07.webp'
import champ07VolleyballJpg from '../../assets/images/schools/volleyball/champ-07.jpg'
import okVojvodinaWebp from '../../assets/images/schools/volleyball/ok-vojvodina.webp'
import okVojvodinaJpg from '../../assets/images/schools/volleyball/ok-vojvodina.jpg'

import type { School } from './types'

export const volleyballSchools: School[] = [
    {
        id: 'ok-vojvodina-akademija',
        slug: 'ok-vojvodina-akademija',
        name: 'Akademija odbojke Vojvodina',
        categorySlugs: ['volleyball'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 8,
        maxAge: 14,
        ageLabel: '8–14 godina',
        imageWebp: okVojvodinaWebp,
        imageFallback: okVojvodinaJpg,
        description: [
            'Akademija odbojke Vojvodina radi pod okriljem Odbojkaškog kluba Vojvodina, sa ciljem da unapredi rad sa najmlađima i pripremi polaznike za starije uzrasne kategorije.',
            'Program je namenjen dečacima i devojčicama; treninzi se održavaju u SPC Vojvodina i u OŠ „Vasa Stajić“.',
            'Sa polaznicima rade provereni treneri, a glavni treneri akademije su Spasoje Milićević i Branko Roljić.',
            'Mnogi polaznici prelaze u pionirske, kadetske i juniorske selekcije kluba, a neki stižu i do prvog tima i reprezentacije.',
            'Akademija se oslanja na dugu tradiciju rada sa mlađim kategorijama OK Vojvodina i na uslove treninga u salama SPC Vojvodina.',
        ],
        addresses: [
            {
                street: 'SPC Vojvodina (SPENS), Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
            {
                street: 'OŠ „Vasa Stajić“, Pajevićeva',
                city: 'Novi Sad',
                district: 'Adamovićevo naselje',
                lat: 45.2463531,
                lng: 19.8264626,
            },
        ],
        contact: {
            phone: '064 146 4904',
            email: 'okvojvodina@mts.rs',
            website: 'https://okvojvodina.org/akademija/',
            facebook: 'https://www.facebook.com/okvojvodina',
            instagram: 'https://www.instagram.com/okvojvodina/',
        },
    },
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

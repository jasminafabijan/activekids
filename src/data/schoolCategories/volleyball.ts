import champ07VolleyballWebp from '../../assets/images/schools/volleyball/champ-07.webp'
import champ07VolleyballJpg from '../../assets/images/schools/volleyball/champ-07.jpg'
import okVojvodinaWebp from '../../assets/images/schools/volleyball/ok-vojvodina.webp'
import okVojvodinaJpg from '../../assets/images/schools/volleyball/ok-vojvodina.jpg'
import nsTimWebp from '../../assets/images/schools/volleyball/ns-tim.webp'
import nsTimJpg from '../../assets/images/schools/volleyball/ns-tim.jpg'

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
                street: 'Fakultet sporta (DIF), Lovćenska 16',
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
    {
        id: 'ns-tim',
        slug: 'ns-tim',
        name: 'OK „NS-TIM”',
        categorySlugs: ['volleyball'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 7,
        maxAge: 15,
        ageLabel: '7–15 godina',
        imageWebp: nsTimWebp,
        imageFallback: nsTimJpg,
        description: [
            'Škola odbojke „Kosta Trifković” odbojkaškog kluba NS-TIM jedna je od škola odbojke u Novom Sadu sa najdužom tradicijom — neprekidno radi više od dve decenije u istoimenoj osnovnoj školi.',
            'Vode je bivši odbojkaši i sportski stručnjaci Svetlana i Dragan Klašnić, uz edukovane trenere koji su potekli iz kluba.',
            'Program je namenjen devojčicama i obuhvata zdrav razvoj, sportsko vaspitanje, rad u kolektivu, razvoj motorike i usvajanje odbojkaških veština.',
            'Polaznice nastupaju na turnirima u mini odbojci, igraju prijateljske i prvenstvene mečeve i učestvuju na odbojkaškim kampovima.',
            'Školovanje traje pet odbojkaških godina, uz grupe podeljene prema uzrastu i nivou usvojene tehnike.',
        ],
        addresses: [
            {
                street: 'OŠ „Kosta Trifković”, Berislava Berića 2',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.2643036,
                lng: 19.8359461,
            },
            {
                street: 'Tehnička škola „Mileva Marić Anštajn”, Gagarinova 1',
                city: 'Novi Sad',
                district: 'Banatić',
                lat: 45.2618571,
                lng: 19.8280068,
            },
        ],
        contact: {
            phone: '069 477 04 74',
            email: 'odbojkaski.klub.ns.tim@gmail.com',
            website: 'https://odbojkaskiklubnsti.wixsite.com/ns-tim/about1-c1plb',
        },
    },
]

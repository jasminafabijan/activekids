import ntcBaletWebp from '../../assets/images/schools/ballet/ntc-balet.webp'
import ntcBaletPng from '../../assets/images/schools/ballet/ntc-balet.png'
import reveransWebp from '../../assets/images/schools/ballet/reverans.webp'
import reveransJpg from '../../assets/images/schools/ballet/reverans.jpg'
import pointeDanceWebp from '../../assets/images/schools/ballet/pointe-dance.webp'
import pointeDancePng from '../../assets/images/schools/ballet/pointe-dance.png'
import dobrilaNovkovWebp from '../../assets/images/schools/ballet/dobrila-novkov.webp'
import dobrilaNovkovPng from '../../assets/images/schools/ballet/dobrila-novkov.png'

import type { School } from './types'

export const balletSchools: School[] = [
    {
        id: 'dobrila-novkov',
        slug: 'dobrila-novkov',
        name: 'Baletska škola Dobrile Novkov „La Sylphide“',
        categorySlugs: ['ballet'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: dobrilaNovkovWebp,
        imageFallback: dobrilaNovkovPng,
        description: [
            'Privatna baletska škola Dobrile Novkov „La Sylphide“ u Novom Sadu više od tri decenije nudi klasično baletsko obrazovanje.',
            'Nastava se izvodi po ruskom metodu Akademije Vaganove, uz rad na gipkosti, izdržljivosti, disciplini i pažnji na detalje.',
            'Program obuhvata predškolske grupe, klase baletske osnovne škole sa verifikovanim svedočanstvima i pripremu za srednju baletsku školu.',
            'Na kraju školske godine škola priređuje gala predstavu, a učenici nastupaju i na lokalnim manifestacijama i humanitarnim koncertima.',
            'Školu je do sada pohađalo više od hiljadu učenika — od onih koji uživaju u baletu do onih koji nastavljaju profesionalni put.',
        ],
        addresses: [
            {
                street: 'Svetozara Miletića 47',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2576699,
                lng: 19.8430092,
            },
        ],
        contact: {
            phone: '063 70 36 556',
            email: 'dobrila.novkov@gmail.com',
            website: 'https://www.ballet-dobrilanovkov.com',
            facebook: 'https://www.facebook.com/klasicanbaletnovisad',
            facebookLabel: 'klasicanbaletnovisad',
            instagram: 'https://www.instagram.com/klasican_balet/',
        },
    },
    {
        id: 'reverans',
        slug: 'reverans',
        name: 'Baletski studio "Reverans"',
        categorySlugs: ['ballet'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 3,
        maxAge: 7,
        ageLabel: '3–7 godina',
        imageWebp: reveransWebp,
        imageFallback: reveransJpg,
        description: [
            'Baletski studio "Reverans" osnovan je 2017. godine i posluje u Novom Sadu i Kikindi.',
            'Studio vodi diplomirana balerina Jovana Banić, koja kroz igru uči decu osnovama baleta, muzikalnosti i koordinacije.',
            'Program razvija osećaj za ritam, gipkost i pravilno držanje, uz vežbe na parteru i u sredini sale.',
            'Roditelji mogu da prate napredak dece na javnim nastupima i javnim časovima na kraju svakog polugodišta.',
            'Kreativni deo programa uključuje improvizacije koje pomažu deci da otkriju sopstveni izraz i povežu ples sa pričom i muzikom.',
            'Kroz igru deca uče disciplinu i koncentraciju, u toploj atmosferi koja neguje sigurnost i radoznalost.',
        ],
        addresses: [
            {
                street: 'Dostojevskog 11',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.2576083,
                lng: 19.8368714,
            },
        ],
        contact: {
            phone: '064 299 63 83',
            email: 'reverans.rs@gmail.com',
            website: 'https://decijisvetbaleta.weebly.com',
            facebook: 'https://www.facebook.com/reveransnovisad/',
            instagram: 'https://www.instagram.com/baletski_studio_reverans/',
        },
    },
    {
        id: 'ntc-balet',
        slug: 'ntc-balet',
        name: 'NTC balet',
        categorySlugs: ['ballet'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: 7,
        ageLabel: '3–7 godina',
        imageWebp: ntcBaletWebp,
        imageFallback: ntcBaletPng,
        description: [
            'NTC program baleta predstavlja inovativni pristup razvoju dece koji spaja elemente klasičnog baleta sa principima NTC sistema učenja.',
            'Program je osmišljen od strane dr Ranka Rajovića i balerine Sare Đurakić, sa ciljem da deca kroz pokret razvijaju koordinaciju, motoriku i samopouzdanje.',
            'Deca uče osnovne baletne pozicije, ritam i muzikalnost kroz igru, pri čemu se posebna pažnja posvećuje individualnom razvoju svakog deteta.',
            'Grupe su manje, što omogućava nastavnicima da svakom detetu posvete dovoljno pažnje i podrške tokom časa.',
            'Kroz kombinaciju igre, muzike i strukturisanih zadataka, deca uče da pokret povezuju sa emocijama i maštom.',
            'Program podstiče samostalnost i radoznalost, uz okruženje u kojem je istraživanje pokreta podržano i svakom koraku dozvoljeno vreme.',
        ],
        addresses: [
            {
                street: 'Augusta Cesarca 18',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2506936,
                lng: 19.8383143,
            },
            {
                street: 'Zlatne Grede 25',
                city: 'Novi Sad',
                district: 'Podbara',
                lat: 45.2592145,
                lng: 19.847808,
            },
        ],
        contact: {
            phone: '065 2451 405',
            website: 'https://ntcucenje.com/ntc-balet/',
            facebook: 'https://www.facebook.com/ntcsistemucenja',
            instagram: 'https://www.instagram.com/ntcucenje/',
        },
    },
    {
        id: 'pointe-dance-serbia',
        slug: 'pointe-dance-serbia',
        name: 'Pointe Dance Serbia',
        categorySlugs: ['ballet', 'jazz-ballet'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: pointeDanceWebp,
        imageFallback: pointeDancePng,
        description: [
            'Pointe Dance Serbia okuplja decu koja kroz ples razvijaju koordinaciju, muzikalnost i samopouzdanje u podržavajućem okruženju.',
            'Program obuhvata klasičan balet i moderan ples, uz rad na tehnici, izražajnosti i kreativnom pokretu prilagođenom uzrastu.',
            'Deca uče kroz strukturisane časove, koreografije i nastupe koji podstiču disciplinu, timski duh i ljubav prema plesu.',
        ],
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
            phone: '060 30 13 332',
            email: 'mitrovicmilana@yahoo.com',
            facebook: 'https://www.facebook.com/pointedanceserbia/',
            instagram: 'https://www.instagram.com/pointedanceserbia/',
        },
    }
]

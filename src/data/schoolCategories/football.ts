import soccerTeamWebp from '../../assets/images/schools/football/soccerteam.webp'
import soccerTeamJpeg from '../../assets/images/schools/football/soccerteam.jpeg'
import sinisaMihajlovicWebp from '../../assets/images/schools/football/fk-sinisa-mihajlovic.webp'
import sinisaMihajlovicJpg from '../../assets/images/schools/football/fk-sinisa-mihajlovic.jpg'
import vojvodinaWebp from '../../assets/images/schools/football/fk-vojvodina.webp'
import vojvodinaPng from '../../assets/images/schools/football/fk-vojvodina.png'
import rfkWebp from '../../assets/images/schools/football/rfk.webp'
import rfkJpg from '../../assets/images/schools/football/rfk.jpg'
import mladostGatWebp from '../../assets/images/schools/football/fk-mladost-gat.webp'
import mladostGatJpg from '../../assets/images/schools/football/fk-mladost-gat.jpg'
import champ07FootballWebp from '../../assets/images/schools/football/champ-07.webp'
import champ07FootballPng from '../../assets/images/schools/football/champ-07.png'
import bolesnikovWebp from '../../assets/images/schools/football/bolesnikov.webp'
import bolesnikovJpg from '../../assets/images/schools/football/bolesnikov.jpg'

import type { School } from './types'

export const footballSchools: School[] = [
    {
        id: 'champ-07-fudbal',
        slug: 'champ-07-fudbal',
        name: 'Champ 07',
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Liman 1',
        minAge: 5,
        maxAge: 12,
        ageLabel: '5–12 godina',
        imageWebp: champ07FootballWebp,
        imageFallback: champ07FootballPng,
        description: [
            'Fudbalska sekcija dečijeg sportskog kluba Champ 07 u Novom Sadu namenjena je prvim fudbalskim koracima i rekreativnom sportu.',
            'U klubu nema selekcije — svako dete ima svoje mesto u timu i važno je treneru grupe kojoj pripada.',
            'Program se zasniva na igri i zabavi, bez pritiska lige, obaveznih turnira svakog vikenda i ugovora sa decom i roditeljima.',
            'Cilj je zdravo i kvalitetno okruženje trenera, saigrača i roditelja, u kojem se uče vrednosti rekreativnog sporta.',
            'Treninzi se održavaju u sali na Đačkom, a klub već godinama radi sa mladim zaljubljenicima u fudbal.',
        ],
        addresses: [
            {
                street: 'Dr Vase Savića 3, Sala na Đačkom',
                city: 'Novi Sad',
                district: 'Liman 1',
                lat: 45.2438472,
                lng: 19.8519854,
            },
        ],
        contact: {
            phone: '064 65 21 282',
            email: 'bobanch07@yahoo.com',
            website: 'https://www.ch07.rs/sport/fudbal/',
            facebook: 'https://www.facebook.com/SKLavovi07',
            facebookLabel: 'SK Lavovi 07',
            instagram: 'https://www.instagram.com/sc_champ_07/',
        },
    },
    {
        id: 'fk-mladost-gat',
        slug: 'fk-mladost-gat',
        name: 'FK Mladost GAT',
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Satelit',
        minAge: 5,
        maxAge: 10,
        ageLabel: '5–10 godina',
        imageWebp: mladostGatWebp,
        imageFallback: mladostGatJpg,
        description: [
            'Škola fudbala Mladost GAT Novi Sad je sportska akademija posvećena razvoju mladih fudbalera.',
            'Misija škole je da kroz kvalitetne treninge, stručan rad i takmičarski duh pomogne deci da razviju svoj potencijal na terenu i van njega.',
            'Klub pored škole fudbala ima i selekcije pionira, kadeta i omladinaca.',
            'Treninzi se održavaju na stadionu FK Mladost GAT — GAT Areni.',
            'Rad vode iskusni treneri koji kombinuju sportsku edukaciju sa podrškom u razvoju discipline i timskog duha.',
        ],
        addresses: [
            {
                street: 'Bulevar Jovana Dučića 39',
                city: 'Novi Sad',
                district: 'Satelit',
                lat: 45.2479549,
                lng: 19.7904004,
            },
        ],
        contact: {
            phone: '021 64 00 079',
            website: 'https://fkmladostgat.com/omladinska-skola/',
            facebook: 'https://www.facebook.com/profile.php?id=100083685032597',
            facebookLabel: 'FK-Mladost-GAT',
            instagram: 'https://www.instagram.com/fkmladostgatnovisad/',
        },
    },
    {
        id: 'fk-vojvodina',
        slug: 'fk-vojvodina',
        name: 'FK Vojvodina',
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Veternik',
        minAge: 6,
        maxAge: 18,
        ageLabel: '6–18 godina',
        imageWebp: vojvodinaWebp,
        imageFallback: vojvodinaPng,
        description: [
            'Škola fudbala FK Vojvodina deo je omladinske škole „Ilija Pantelić” i predstavlja jednu od najpoznatijih fudbalskih akademija u regionu.',
            'Cilj programa je rano otkrivanje talenata i sistematična priprema mladih igrača za višu konkurenciju.',
            'Treninzi se održavaju u Fudbalskom centru „Vujadin Boškov”, jednom od najopremljenijih fudbalskih centara u Srbiji.',
            'U sklopu omladinske škole radi i Golmanska akademija, gde specijalizovani treneri razvijaju golmanske veštine pod UEFA licencama.',
        ],
        addresses: [
            {
                street: 'Novosadski put 114',
                city: 'Veternik',
                district: 'Veternik',
                lat: 45.239919,
                lng: 19.7753537,
            },
        ],
        contact: {
            phone: '064 183 8512',
            email: 'vosiniklinci@gmail.com',
            website: 'https://www.fkvojvodina.rs/omladinska-skola/upis-u-skolu-fudbala/',
            facebook: 'https://www.facebook.com/FudbalskiKlubVojvodina/',
            instagram: 'https://www.instagram.com/fk_vojvodina/',
        },
    },
    {
        id: 'rfk-novi-sad',
        slug: 'rfk-novi-sad',
        name: 'RFK Novi Sad',
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 6,
        maxAge: 14,
        ageLabel: '6–14 godina',
        imageWebp: rfkWebp,
        imageFallback: rfkJpg,
        description: [
            'Omladinska škola RFK Novi Sad mesto je gde deca ne dolaze samo da uče fudbal, već i da rastu kao sportisti i kao ljudi.',
            'Treninzi se održavaju na terenima Sportskog centra RFK Novi Sad, uz svlačionice, opremu i stručno osoblje.',
            'Škola nudi rad sa licenciranim trenerima, stalno praćenje razvoja igrača i mogućnost napredovanja ka starijim selekcijama i prvom timu.',
            'Program pokriva kategorije od petlića do pionira, u prijateljskoj atmosferi uz fer-plej pristup.',
        ],
        addresses: [
            {
                street: 'Rumenačka 152',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2660357,
                lng: 19.8155818,
            },
        ],
        contact: {
            phone: '063 804 2298',
            email: 'cedomir.kopcanski.nfk@gmail.com',
            website: 'https://rfknovisad.com/omladinska-skola/',
            facebook: 'https://www.facebook.com/NoviSadFK/',
            instagram: 'https://www.instagram.com/rfknovisad1921/',
        },
    },
    {
        id: 'sinisa-mihajlovic',
        slug: 'sinisa-mihajlovic',
        name: 'Škola fudbala "Siniša Mihajlović"',
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 5,
        maxAge: 14,
        ageLabel: '5–14 godina',
        imageWebp: sinisaMihajlovicWebp,
        imageFallback: sinisaMihajlovicJpg,
        description: [
            'Škola fudbala „Siniša Mihajlović” nalazi se na SPENS-u i bavi se sportskom edukacijom dece koja žele da se amaterski ili profesionalno bave fudbalom.',
            'Program vode visoko stručno obrazovani treneri — diplomirani treneri fudbala i licencirani treneri Fudbalskog saveza Srbije, osposobljeni za rad sa mlađim kategorijama.',
            'Škola učestvuje u takmičenjima Fudbalskog saveza Srbije, Fudbalskog saveza Grada Novog Sada i Dečije fudbalske asocijacije, kao i na međunarodnim turnirima.',
            'Dva puta godišnje organizuju se edukativna putovanja i kampovi u inostranstvu, gde deca kroz treninge i utakmice usavršavaju svoja fudbalska znanja.',
        ],
        addresses: [
            {
                street: 'Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
        ],
        contact: {
            phone: '064 24 10 019',
            email: 'fcsmihajlovic.ns@gmail.com',
            website: 'https://fcsinisamihajlovic.com',
            facebook: 'https://www.facebook.com/profile.php?id=100063768183474',
            facebookLabel: 'Skola-Fudbala-Sinisa-Mihajlovic',
            instagram: 'https://www.instagram.com/skolafudbala_sinisamihajlovic/',
        },
    },
    {
        id: 'soccer-team',
        slug: 'soccer-team',
        name: 'Škola fudbala "Soccer Team"',
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Kamenjar',
        minAge: 6,
        maxAge: 14,
        ageLabel: '6–14 godina',
        imageWebp: soccerTeamWebp,
        imageFallback: soccerTeamJpeg,
        description: [
            'Škola fudbala „Soccer Team” osnovana je 2013. godine i sa velikim uspehom funkcioniše na izuzetno visokom nivou.',
            'Misija kluba je stručno-pedagoški rad sa decom, uz primenu NTC metode kroz koju se kroz igru razvija intelekt i motorika.',
            'Treninzi se održavaju u savremenim uslovima na sportsko-rekreativnom kompleksu Sport Magic, po najvišim evropskim standardima.',
            'Program je zabavno-edukativnog karaktera i usmeren je ka uvođenju sporta u svakodnevicu deteta kroz fizičku aktivnost.',
            'Deca učestvuju u gradskoj ligi i NAUR ligi, gde kroz takmičenja stiču nova prijateljstva, veštine i samopouzdanje.',
            'Osnivač i vlasnik kluba je diplomirani trener fudbala Stevan Vukomanović, uz stručan kadar koji vodi individualni i timski rad sa igračima.',
        ],
        addresses: [
            {
                street: 'Podunavska 12',
                city: 'Novi Sad',
                district: 'Kamenjar',
                lat: 45.229195,
                lng: 19.7970415,
            },
            {
                street: 'Branka Ćopića 259',
                city: 'Novi Sad',
                district: 'Adice',
                lat: 45.2300552,
                lng: 19.7772718,
            },
        ],
        contact: {
            phone: '063 76 85 080',
            email: 'soccer.team84@yahoo.com',
            website: 'https://www.soccerteam.rs',
            facebook: 'https://www.facebook.com/soccerteamns',
            instagram: 'https://www.instagram.com/skola_fudbala_soker_tim',
        },
    },
    {
        id: 'bolesnikov',
        slug: 'bolesnikov',
        name: 'FK „Prof. Bolesnikov”',
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Adamovićevo naselje',
        minAge: 5,
        maxAge: 13,
        ageLabel: '5–13 godina',
        imageWebp: bolesnikovWebp,
        imageFallback: bolesnikovJpg,
        description: [
            'Fudbalski klub „Prof. Bolesnikov” osnovan je 2005. godine i danas okuplja više od 200 članova — dečaka i devojčica u školi fudbala.',
            'Stručni štab čine profesionalni treneri sa igračkim iskustvom i odgovarajućim stručnim obrazovanjem.',
            'Klub trenira na sopstvenim terenima: tri terena sa veštačkom travom i jedan sa prirodnom, uz svlačionice i prateće sadržaje.',
            'Program je namenjen deci koja žele da nauče fudbal u organizovanom okruženju, kroz redovne treninge i rad sa licenciranim kadrom.',
        ],
        addresses: [
            {
                street: 'Ilije Garašanina 10',
                city: 'Novi Sad',
                district: 'Adamovićevo naselje',
                lat: 45.2311365,
                lng: 19.8047405,
            },
        ],
        contact: {
            phone: '063 520 465',
            email: 'fkprofbolesnikovnovisad@gmail.com',
            facebook: 'https://www.facebook.com/fudbalskiklubprofesorbolesnikov',
            facebookLabel: 'FK Prof. Bolesnikov',
            instagram: 'https://www.instagram.com/fk_prof_bolesnikov_novi_sad/',
        },
    },
]

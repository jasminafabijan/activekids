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
import bolesnikovJpg from '../../assets/images/schools/football/bolesnikov.jpg'

import type { School } from './types'

export const footballSchools: School[] = [
    {
        id: 'fk-mladost-gat',
        slug: 'fk-mladost-gat',
        name: {
            sr: 'FK Mladost GAT',
            en: 'Mladost GAT Football Club',
        },
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Satelit',
        minAge: 5,
        maxAge: 10,
        ageLabel: '5–10 godina',
        imageWebp: mladostGatWebp,
        imageFallback: mladostGatJpg,
        description: {
            sr: [
                'Škola fudbala Mladost GAT Novi Sad je sportska akademija posvećena razvoju mladih fudbalera.',
                'Misija škole je da kroz kvalitetne treninge, stručan rad i takmičarski duh pomogne deci da razviju svoj potencijal na terenu i van njega.',
                'Klub pored škole fudbala ima i selekcije pionira, kadeta i omladinaca.',
                'Treninzi se održavaju na stadionu FK Mladost GAT — GAT Areni.',
                'Rad vode iskusni treneri koji kombinuju sportsku edukaciju sa podrškom u razvoju discipline i timskog duha.',
            ],
            en: [
                'Mladost GAT Football Club is a sports academy dedicated to developing young footballers.',
                'The school’s mission is to help children develop their potential on and off the pitch through quality training, professional coaching and a competitive spirit.',
                'Besides the football school, the club also has pioneer, cadet and youth selections.',
                'Training is held at the FK Mladost GAT stadium — GAT Arena.',
                'Experienced coaches lead the work, combining sports education with support for discipline and team spirit.',
            ],
        },
        addresses: [
            {
                street: 'GAT Arena, Bulevar Jovana Dučića 39',
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
        name: {
            sr: 'FK Vojvodina',
            en: 'Vojvodina Football Club',
        },
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Veternik',
        minAge: 6,
        maxAge: 18,
        ageLabel: '6–18 godina',
        imageWebp: vojvodinaWebp,
        imageFallback: vojvodinaPng,
        description: {
            sr: [
                'Škola fudbala FK Vojvodina deo je omladinske škole „Ilija Pantelić” i predstavlja jednu od najpoznatijih fudbalskih akademija u regionu.',
                'Cilj programa je rano otkrivanje talenata i sistematična priprema mladih igrača za višu konkurenciju.',
                'Treninzi se održavaju u Fudbalskom centru „Vujadin Boškov”, jednom od najopremljenijih fudbalskih centara u Srbiji.',
                'U sklopu omladinske škole radi i Golmanska akademija, gde specijalizovani treneri razvijaju golmanske veštine pod UEFA licencama.',
            ],
            en: [
                'The FK Vojvodina football school is part of the “Ilija Pantelić” youth school and is one of the best-known football academies in the region.',
                'The aim of the program is early talent spotting and systematic preparation of young players for a higher level of competition.',
                'Training is held at Football Center “Vujadin Boškov”, one of the best-equipped football centers in Serbia.',
                'The youth school also includes a Goalkeeper Academy, where specialized coaches develop goalkeeping skills under UEFA licenses.',
            ],
        },
        addresses: [
            {
                street: 'Fudbalski centar „Vujadin Boškov”, Novosadski put 114',
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
        name: {
            sr: 'RFK Novi Sad',
            en: 'RFK Novi Sad',
        },
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 6,
        maxAge: 14,
        ageLabel: '6–14 godina',
        imageWebp: rfkWebp,
        imageFallback: rfkJpg,
        description: {
            sr: [
                'Omladinska škola RFK Novi Sad mesto je gde deca ne dolaze samo da uče fudbal, već i da rastu kao sportisti i kao ljudi.',
                'Treninzi se održavaju na terenima Sportskog centra RFK Novi Sad, uz svlačionice, opremu i stručno osoblje.',
                'Škola nudi rad sa licenciranim trenerima, stalno praćenje razvoja igrača i mogućnost napredovanja ka starijim selekcijama i prvom timu.',
                'Program pokriva kategorije od petlića do pionira, u prijateljskoj atmosferi uz fer-plej pristup.',
            ],
            en: [
                'The RFK Novi Sad youth school is a place where children come not only to learn football, but also to grow as athletes and as people.',
                'Training is held on the pitches of Sports Center RFK Novi Sad, with changing rooms, equipment and professional staff.',
                'The school offers work with licensed coaches, ongoing tracking of player development, and a path toward older selections and the first team.',
                'The program covers categories from the youngest age groups through pioneers, in a friendly atmosphere with a fair-play approach.',
            ],
        },
        addresses: [
            {
                street: 'Sportski centar RFK Novi Sad, Rumenačka 152',
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
        },
    },
    {
        id: 'sinisa-mihajlovic',
        slug: 'sinisa-mihajlovic',
        name: {
            sr: 'Škola fudbala "Siniša Mihajlović"',
            en: 'Siniša Mihajlović Football School',
        },
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 5,
        maxAge: 16,
        ageLabel: '5–16 godina',
        imageWebp: sinisaMihajlovicWebp,
        imageFallback: sinisaMihajlovicJpg,
        description: {
            sr: [
                'Škola fudbala „Siniša Mihajlović” nalazi se na SPENS-u i bavi se sportskom edukacijom dece koja žele da se amaterski ili profesionalno bave fudbalom.',
                'Program vode visoko stručno obrazovani treneri — diplomirani treneri fudbala i licencirani treneri Fudbalskog saveza Srbije, osposobljeni za rad sa mlađim kategorijama.',
                'Škola učestvuje u takmičenjima Fudbalskog saveza Srbije, Fudbalskog saveza Grada Novog Sada i Dečije fudbalske asocijacije, kao i na međunarodnim turnirima.',
                'Dva puta godišnje organizuju se edukativna putovanja i kampovi u inostranstvu, gde deca kroz treninge i utakmice usavršavaju svoja fudbalska znanja.',
            ],
            en: [
                'Siniša Mihajlović Football School is based at SPENS and provides sports education for children who want to play football as amateurs or professionally.',
                'The program is led by highly trained coaches — graduate football coaches and licensed Football Association of Serbia coaches, qualified to work with younger age groups.',
                'The school takes part in competitions of the Football Association of Serbia, the Football Association of the City of Novi Sad and the Children’s Football Association, as well as international tournaments.',
                'Twice a year it organizes educational trips and camps abroad, where children refine their football through training and matches.',
            ],
        },
        addresses: [
            {
                street: 'SPENS, Sutjeska 2',
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
        name: {
            sr: 'Škola fudbala "Soccer Team"',
            en: 'Soccer Team Football School',
        },
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Kamenjar',
        minAge: 6,
        maxAge: 14,
        ageLabel: '6–14 godina',
        imageWebp: soccerTeamWebp,
        imageFallback: soccerTeamJpeg,
        description: {
            sr: [
                'Škola fudbala „Soccer Team” osnovana je 2013. godine i sa velikim uspehom funkcioniše na izuzetno visokom nivou.',
                'Misija kluba je stručno-pedagoški rad sa decom, uz primenu NTC metode kroz koju se kroz igru razvija intelekt i motorika.',
                'Treninzi se održavaju u savremenim uslovima na sportsko-rekreativnom kompleksu Sport Magic, po najvišim evropskim standardima.',
                'Program je zabavno-edukativnog karaktera i usmeren je ka uvođenju sporta u svakodnevicu deteta kroz fizičku aktivnost.',
                'Deca učestvuju u gradskoj ligi i NAUR ligi, gde kroz takmičenja stiču nova prijateljstva, veštine i samopouzdanje.',
                'Osnivač i vlasnik kluba je diplomirani trener fudbala Stevan Vukomanović, uz stručan kadar koji vodi individualni i timski rad sa igračima.',
            ],
            en: [
                'Soccer Team Football School was founded in 2013 and operates successfully at a very high level.',
                'The club’s mission is professional pedagogical work with children, using the NTC method so that intellect and motor skills develop through play.',
                'Training takes place in modern conditions at the Sport Magic sports and recreation complex, to high European standards.',
                'The program is recreational and educational in character, and aims to bring sport into the child’s everyday life through physical activity.',
                'Children take part in the city league and the NAUR league, where they gain new friendships, skills and confidence through competition.',
                'The founder and owner of the club is graduate football coach Stevan Vukomanović, with specialist staff who lead individual and team work with the players.',
            ],
        },
        addresses: [
            {
                street: 'Sport Magic, Podunavska 12',
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
            website: 'https://www.soccerteam.rs',
            facebook: 'https://www.facebook.com/soccerteamns',
            instagram: 'https://www.instagram.com/skola_fudbala_soker_tim',
        },
    },
    {
        id: 'bolesnikov',
        slug: 'bolesnikov',
        name: {
            sr: 'FK „Prof. Bolesnikov”',
            en: 'Prof. Bolesnikov Football Club',
        },
        categorySlugs: ['football'],
        city: 'Novi Sad',
        district: 'Adamovićevo naselje',
        minAge: 5,
        maxAge: 13,
        ageLabel: '5–13 godina',
        imageWebp: bolesnikovJpg,
        imageFallback: bolesnikovJpg,
        description: {
            sr: [
                'Fudbalski klub „Prof. Bolesnikov” osnovan je 2005. godine i danas okuplja više od 200 članova — dečaka i devojčica u školi fudbala.',
                'Stručni štab čine profesionalni treneri sa igračkim iskustvom i odgovarajućim stručnim obrazovanjem.',
                'Klub trenira na sopstvenim terenima: tri terena sa veštačkom travom i jedan sa prirodnom, uz svlačionice i prateće sadržaje.',
                'Program je namenjen deci koja žele da nauče fudbal u organizovanom okruženju, kroz redovne treninge i rad sa licenciranim kadrom.',
            ],
            en: [
                'Prof. Bolesnikov Football Club was founded in 2005 and today brings together more than 200 members — boys and girls in the football school.',
                'The coaching staff are professional coaches with playing experience and the relevant specialist education.',
                'The club trains on its own pitches: three with artificial turf and one with natural grass, plus changing rooms and supporting facilities.',
                'The program is for children who want to learn football in an organized setting, through regular training and work with licensed staff.',
            ],
        },
        addresses: [
            {
                street: 'Ilije Garašanina 10',
                city: 'Novi Sad',
                district: 'Adamovićevo naselje',
                lat: 45.2311365,
                lng: 19.8047405,
                mapsUrl: 'https://www.google.com/maps?cid=765396299816107800',
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

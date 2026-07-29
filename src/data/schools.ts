import ntcBaletWebp from '../assets/images/schools/ballet/ntc-balet.webp'
import ntcBaletPng from '../assets/images/schools/ballet/ntc-balet.png'
import reveransWebp from '../assets/images/schools/ballet/reverans.webp'
import reveransJpg from '../assets/images/schools/ballet/reverans.jpg'
import pointeDanceWebp from '../assets/images/schools/ballet/pointe-dance.webp'
import pointeDancePng from '../assets/images/schools/ballet/pointe-dance.png'
import masterDanceWebp from '../assets/images/schools/dance/master-dance.webp'
import masterDanceJpg from '../assets/images/schools/dance/master-dance.jpg'
import soccerTeamWebp from '../assets/images/schools/football/soccerteam.webp'
import soccerTeamJpeg from '../assets/images/schools/football/soccerteam.jpeg'
import dramaStudioWebp from '../assets/images/schools/acting/drama-studio.webp'
import dramaStudioJpg from '../assets/images/schools/acting/drama-studio.jpg'
import sinisaMihajlovicWebp from '../assets/images/schools/football/fk-sinisa-mihajlovic.webp'
import sinisaMihajlovicJpg from '../assets/images/schools/football/fk-sinisa-mihajlovic.jpg'
import vojvodinaWebp from '../assets/images/schools/football/fk-vojvodina.webp'
import vojvodinaPng from '../assets/images/schools/football/fk-vojvodina.png'
import rfkWebp from '../assets/images/schools/football/rfk.webp'
import rfkJpg from '../assets/images/schools/football/rfk.jpg'
import mladostGatWebp from '../assets/images/schools/football/fk-mladost-gat.webp'
import mladostGatJpg from '../assets/images/schools/football/fk-mladost-gat.jpg'
import conkicAcademyWebp from '../assets/images/schools/tennis/conkic-academy.webp'
import conkicAcademyJpg from '../assets/images/schools/tennis/conkic-academy.jpg'
import sportsWorldWebp from '../assets/images/schools/basketball/sports-world.webp'
import sportsWorldJpg from '../assets/images/schools/basketball/sports-world.jpg'
import kkLdWebp from '../assets/images/schools/basketball/kk-ld.webp'
import kkLdJpg from '../assets/images/schools/basketball/kk-ld.jpg'
import champ07Webp from '../assets/images/schools/basketball/champ-07.webp'
import champ07Jpg from '../assets/images/schools/basketball/champ-07.jpg'
import kkStarWebp from '../assets/images/schools/basketball/kk-star.webp'
import kkStarJpg from '../assets/images/schools/basketball/kk-star.jpg'
import mawashiWebp from '../assets/images/schools/karate/mawashi.webp'
import mawashiJpg from '../assets/images/schools/karate/mawashi.jpg'
import granicarWebp from '../assets/images/schools/riding/granicar.webp'
import granicarJpg from '../assets/images/schools/riding/granicar.jpg'
import { getCategoryBySlug } from './categories'

export type SchoolFilters = {
    city: string
    partsOfCity: string[]
    age: number | null
    activities: string[]
}

export type SchoolContact = {
    phone?: string
    email?: string
    website?: string
    facebook?: string
    facebookLabel?: string
    instagram?: string
}

export type SchoolAddress = {
    street: string
    city: string
    district?: string
    lat?: number
    lng?: number
}

export type School = {
    id: string
    slug: string
    name: string
    categorySlugs: string[]
    city: string
    district: string
    minAge: number
    maxAge: number | null
    ageLabel: string
    imageWebp: string
    imageFallback: string
    description?: string[]
    addresses?: SchoolAddress[]
    contact?: SchoolContact
}

export const schools: School[] = [
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
                street: 'Kralja Aleksandra 12, TC Pariski magazin',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2541374,
                lng: 19.8435541,
            },
        ],
        contact: {
            phone: '060 301 3332',
            email: 'mitrovicmilana@yahoo.com',
            facebook: 'https://www.facebook.com/pointedanceserbia/',
            instagram: 'https://www.instagram.com/pointedanceserbia/',
        },
    },
    {
        id: 'master-dance',
        slug: 'master-dance',
        name: 'Plesni klub "Master dance"',
        categorySlugs: ['jazz-ballet'],
        city: 'Novi Sad',
        district: 'Grbavica',
        minAge: 3,
        maxAge: 15,
        ageLabel: '3–15 godina',
        imageWebp: masterDanceWebp,
        imageFallback: masterDanceJpg,
        description: [
            'Plesni klub "Master dance" okuplja decu koja kroz ples razvijaju talent, samopouzdanje i ljubav prema pokretu.',
            'Klub je započeo rad 2005. godine sa osnivačicom Dubravkom Demić, a danas uz nju vredno rade i drugi treneri.',
            'Naglasak je na džez plesu, uz učenje osnova baletske tehnike koja je neophodna za pravilan razvoj plesača.',
            'Deca uče kroz koreografije, pažljivo odabranu muziku i kreativne pokrete koji podstiču rad, zajedništvo i radoznalost.',
            'Polaznici pamte druženja, putovanja i takmičenja, uče organizovanosti i neodustajanju od svojih snova.',
            'Javne predstave i nastupi daju priliku da roditelji vide koliko deca uživaju u plesu i koliko im klub znači.',
        ],
        addresses: [
            {
                street: 'Tolstojeva 51',
                city: 'Novi Sad',
                district: 'Grbavica',
                lat: 45.2425798,
                lng: 19.8317812,
            },
        ],
        contact: {
            phone: '069 524 59 05',
            email: 'masterdancens@hotmail.com',
            facebook: 'https://www.facebook.com/MasterdanceNS/',
            instagram: 'https://www.instagram.com/masterdance_ns/',
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
            phone: '063 768 5080',
            email: 'soccer.team84@yahoo.com',
            website: 'https://www.soccerteam.rs',
            facebook: 'https://www.facebook.com/soccerteamns',
            instagram: 'https://www.instagram.com/skola_fudbala_soker_tim',
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
            phone: '064 241 00 19',
            email: 'fcsmihajlovic.ns@gmail.com',
            website: 'https://fcsinisamihajlovic.com',
            facebook: 'https://www.facebook.com/profile.php?id=100063768183474',
            facebookLabel: 'Skola-Fudbala-Sinisa-Mihajlovic',
            instagram: 'https://www.instagram.com/skolafudbala_sinisamihajlovic/',
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
            phone: '(021) 6400 079',
            website: 'https://fkmladostgat.com/omladinska-skola/',
            facebook: 'https://www.facebook.com/profile.php?id=100083685032597',
            facebookLabel: 'FK-Mladost-GAT',
            instagram: 'https://www.instagram.com/fkmladostgatnovisad/',
        },
    },
    {
        id: 'drama-studio',
        slug: 'drama-studio',
        name: 'Drama Studio',
        categorySlugs: ['acting'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 7,
        maxAge: null,
        ageLabel: '7+ godina',
        imageWebp: dramaStudioWebp,
        imageFallback: dramaStudioJpg,
        description: [
            'Drama Studio je najtraženija škola glume u Srbiji, sa timom vrhunskih predavača i mentora iz sveta pozorišta i filma.',
            'Škola radi po Sistemu Stanislavskog i nudi individualan pristup svakom polazniku, uz podršku u razvoju samopouzdanja i scenskog izraza.',
            'Standardni program namenjen je uzrastu od 7 do 23 godine, sa grupama formiranim prema starosti: osnovna škola, srednja škola i stariji uzrast.',
            'Polaznici pohađaju pet predmeta: glumu, ples, pevanje, scenski pokret i dikciju, kroz osam mesečnih blokova po 2×45 minuta.',
            'Program pomaže deci da se oslobode treme, nauče pravilno da govore i steknu kulturno ponašanje u sigurnom i podržavajućem okruženju.',
        ],
        addresses: [
            {
                street: 'Kralja Aleksandra 12',
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
    },
    {
        id: 'conkic-academy',
        slug: 'conkic-academy',
        name: 'Čonkić Tennis Academy',
        categorySlugs: ['tennis'],
        city: 'Novi Sad',
        district: 'Adice',
        minAge: 4,
        maxAge: 10,
        ageLabel: '4–10 godina',
        imageWebp: conkicAcademyWebp,
        imageFallback: conkicAcademyJpg,
        description: [
            'Čonkić Tennis Academy je porodična akademija sa gotovo pola veka iskustva u igri i treniranju profesionalnih tenisera, osnovana 1970. godine.',
            'Škola tenisa vodi decu kroz zabavu, izazove i prijateljska takmičenja, uz razvoj tehničkih, taktičkih, fizičkih i mentalnih veština.',
            'Svi treneri rade po ITF programu razvoja dece — zvaničnom programu Teniskog saveza Srbije — uz individualan pristup unutar grupnih treninga.',
            'Polaznici napreduju kroz nivoe Crveni, Narandžasti i Zeleni, prema veštinama, što omogućava podršku i početnicima i deci sa takmičarskim ambicijama.',
            'Prva dva treninga su besplatna; dovoljno je doneti sportsku odeću i dobru volju.',
            'Akademija okuplja stručne teniske, kondicione i mentalne trenere, sa bogatom tradicijom rada sa juniorskim i profesionalnim igračima.',
        ],
        addresses: [
            {
                street: 'Veternička 3',
                city: 'Novi Sad',
                district: 'Adice',
                lat: 45.230497,
                lng: 19.7811422,
            },
        ],
        contact: {
            phone: '062 503 364',
            email: 'conkictennis@gmail.com',
            website: 'https://conkicacademy.com',
            facebook: 'https://www.facebook.com/conkictennisacademy/',
            instagram: 'https://www.instagram.com/conkic_tennisacademy',
        },
    },
    {
        id: 'kk-sports-world',
        slug: 'kk-sports-world',
        name: "KK Sport's World",
        categorySlugs: ['basketball'],
        city: 'Novi Sad',
        district: 'Salajka',
        minAge: 6,
        maxAge: 16,
        ageLabel: '6–16 godina',
        imageWebp: sportsWorldWebp,
        imageFallback: sportsWorldJpg,
        description: [
            "Košarkaški klub Sport's World postoji više od 35 godina i specijalizovan je za rad sa mlađim kategorijama.",
            'U programu se naglašavaju trud, karakter i poštovanje — vrednosti koje pomažu deci da napreduju i na terenu i van njega.',
            'Klub veruje da su kvalitetne košarkaške osnove u strogom, zabavnom i negujućem okruženju najbolji put ka dugoročnom uspehu.',
            'Treninzi se održavaju po međunarodnom programu veština i evropskom kurikulumu, uz tim diplomiranih košarkaških trenera.',
            'Polaznici učestvuju u takmičenjima na nivou grada, Vojvodine i Srbije, kroz uzrasne selekcije od minibasketa do kadeta.',
        ],
        addresses: [
            {
                street: 'OŠ "Vuk Karadžić", Radoja Domanovića 24',
                city: 'Novi Sad',
                district: 'Salajka',
                lat: 45.2682668,
                lng: 19.8388342,
            },
            {
                street: 'Đačko igralište, Jirečekova 2',
                city: 'Novi Sad',
                district: 'Liman 1',
                lat: 45.2430605,
                lng: 19.8534566,
            },
        ],
        contact: {
            phone: '063 773 3365',
            email: 'dragpan@gmail.com',
            website: 'https://kksportsworld.com',
            facebook: 'https://www.facebook.com/kksportsworld',
            instagram: 'https://www.instagram.com/kksportsworld/',
        },
    },
    {
        id: 'karate-klub-mawashi',
        slug: 'karate-klub-mawashi',
        name: 'Karate klub Mawashi',
        categorySlugs: ['karate'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: mawashiWebp,
        imageFallback: mawashiJpg,
        description: [
            'Karate klub „Mawashi” osnovan je 2006. godine i danas je jedan od najmasovnijih i najuspešnijih karate kolektiva u Novom Sadu.',
            'Klub je član Karate saveza Vojvodine i Karate federacije Srbije, a treninzi se održavaju po programu olimpijskog WKF karatea.',
            'Program je prilagođen različitim uzrastima i nivoima znanja, uz naglasak na tehničku preciznost, disciplinu i poštovanje.',
            'U klubu treniraju zonski, pokrajinski i državni prvaci, kao i osvajači medalja na najvećim domaćim i međunarodnim turnirima.',
            'Kroz redovan rad deca razvijaju koordinaciju, koncentraciju i samopouzdanje u podržavajućem timskom okruženju.',
        ],
        addresses: [
            {
                street: 'SPENS, Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
            {
                street: 'OŠ "Svetozar Marković Toza", Janka Čmelika 89',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2633666,
                lng: 19.8082866,
            },
        ],
        contact: {
            phone: '063 161 4403',
            email: 'karateklubmawashi@live.com',
            facebook: 'https://www.facebook.com/karateklubmawashi/',
            instagram: 'https://www.instagram.com/karateklubmawashi/',
        },
    },
    {
        id: 'kk-granicar',
        slug: 'kk-granicar',
        name: 'Konjički klub Graničar',
        categorySlugs: ['riding'],
        city: 'Novi Sad',
        district: 'Šangaj',
        minAge: 7,
        maxAge: null,
        ageLabel: '7+ godina',
        imageWebp: granicarWebp,
        imageFallback: granicarJpg,
        description: [
            'Konjički klub Graničar osnovan je 1953. godine i jedan je od najstarijih konjičkih klubova u zemlji.',
            'Ako tražite beg od grada i buke, u klubu možete naučiti da jašete ili jednostavno provesti miran dan u prirodi uz konje.',
            'Škola jahanja se odvija uz stručni nadzor trenera, sa naglaskom na sigurnost i postepeno usvajanje tehnike.',
            'Pored škole jahanja, klub nudi i organizovane posete za predškolske ustanove i osnovne škole, sa edukativno-kreativnim programom.',
            'Na današnjoj lokaciji klub raspolaže objektima i velikim prostorom, što ga čini mestom za sport, rekreaciju i druženje ljubitelja konja.',
        ],
        addresses: [
            {
                street: 'Kod autoputa A1',
                city: 'Novi Sad',
                district: 'Šangaj',
                lat: 45.2759736,
                lng: 19.913578,
            },
        ],
        contact: {
            phone: '062 817 3512',
            email: 'granicarns@gmail.com',
            website: 'http://konjickiklubgranicar.com',
            facebook: 'https://www.facebook.com/granicar.konjicki/',
            facebookLabel: 'granicar.konjicki',
            instagram: 'https://www.instagram.com/granicarns',
        },
    },
    {
        id: 'kk-ld',
        slug: 'kk-ld',
        name: 'Košarkaški klub LD',
        categorySlugs: ['basketball'],
        city: 'Novi Sad',
        district: 'Telep',
        minAge: 6,
        maxAge: 16,
        ageLabel: '6–16 godina',
        imageWebp: kkLdWebp,
        imageFallback: kkLdJpg,
        description: [
            'Košarkaški klub LD osnovan je 2011. godine u Novom Sadu, sa ciljem da privuče i usmeri decu ka bavljenju košarkom.',
            'Osnivači kluba svoj igrački i trenerski iskustvo prenose na dečake i devojčice koji tek otkrivaju prve košarkaške korake.',
            'Rad je organizovan tako da svako dete ima priliku da ispolji talenat, druži se sa vršnjacima i uči kroz pobede i poraze.',
            'U klubu se jednako cene košarkaški napredak, školski uspeh i odnos prema drugovima u timu.',
            'Kroz treninge i takmičenja polaznici razvijaju radne navike, disciplinu, samostalnost i osećaj pripadnosti kolektivu.',
        ],
        addresses: [
            {
                street: 'OŠ "Nikola Tesla", Futoški put 25a',
                city: 'Novi Sad',
                district: 'Telep',
                lat: 45.2469675,
                lng: 19.8138278,
            },
            {
                street: 'SC Meridiana, Stojana Novakovića 2',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2548022,
                lng: 19.8069969,
            },
        ],
        contact: {
            phone: '065 55 06 526',
            email: 'kklubld@gmail.com',
            website: 'https://www.kk-ld.com',
            facebook: 'https://www.facebook.com/profile.php?id=100057053606676',
            facebookLabel: 'Košarkaški klub LD',
        },
    },
    {
        id: 'champ-07',
        slug: 'champ-07',
        name: 'Champ 07',
        categorySlugs: ['basketball'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 7,
        maxAge: 12,
        ageLabel: '7–12 godina',
        imageWebp: champ07Webp,
        imageFallback: champ07Jpg,
        description: [
            'Dečiji sportski klub Champ 07 već više od dve decenije radi sa decom kroz više sportskih programa, uključujući i košarku.',
            'Treninzi košarke zasnivaju se na humanom, pedagoškom pristupu u kojem je svako dete u fokusu — na treningu i na utakmici.',
            'Program nudi dozirano fizičko, intelektualno i emotivno opterećenje, uz naglasak na igru, radost i kvalitetno provedeno slobodno vreme.',
            'Klub okuplja trenere posvećene radu sa mlađim uzrastima i stvaranju okruženja u kojem se greške i uspesi jednako doživljavaju kao deo učenja.',
            'Pored redovnih treninga, Champ 07 decu uključuje i u šire sportske aktivnosti i druženja u okviru kluba.',
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
            website: 'https://www.ch07.rs/sport/kosarka/',
            facebook: 'https://www.facebook.com/SKLavovi07',
            facebookLabel: 'SK Lavovi 07',
            instagram: 'https://www.instagram.com/sc_champ_07/',
        },
    },
    {
        id: 'kk-star',
        slug: 'kk-star',
        name: 'Košarkaški klub Star',
        categorySlugs: ['basketball'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 6,
        maxAge: null,
        ageLabel: '6+ godina',
        imageWebp: kkStarWebp,
        imageFallback: kkStarJpg,
        description: [
            'Košarkaški klub Star iz Novog Sada osnovan je 2004. godine i okuplja decu i mlade kroz školu košarke i rad mlađih kategorija.',
            'Klub neguje ljubav prema košarci kroz redovne treninge, takmičenja i zajedničke sportske aktivnosti.',
            'Program je namenjen deci koja žele da nauče osnove igre, napreduju u timu i razvijaju sportske navike.',
            'Star je aktivan u lokalnoj košarkaškoj zajednici i redovno organizuje upise i programe za nove članove.',
        ],
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
            phone: '063 865 6949',
            email: 'kkstar.direktor@gmail.com',
            facebook: 'https://www.facebook.com/kkstarnovisad/',
            facebookLabel: 'kkstarnovisad',
            instagram: 'https://www.instagram.com/kkstarnovisad/',
        },
    },
]

export const formatSchoolAddress = (address: SchoolAddress) =>
    `${address.street}, ${address.city}`

export const formatPhoneHref = (phone: string) => {
    const digits = phone.replace(/\D/g, '')

    if (digits.startsWith('0')) {
        return `tel:+381${digits.slice(1)}`
    }

    if (digits.startsWith('381')) {
        return `tel:+${digits}`
    }

    return `tel:${digits}`
}

export const getMapsHref = (address: SchoolAddress) => {
    const query =
        address.lat != null && address.lng != null
            ? `${address.lat},${address.lng}`
            : formatSchoolAddress(address)

    return `https://maps.google.com/maps?q=${encodeURIComponent(query)}`
}

export const getGoogleMapsOpenHref = (addresses: SchoolAddress[]) => {
    const withCoords = addresses.filter(
        (address): address is SchoolAddress & { lat: number; lng: number } =>
            address.lat != null && address.lng != null
    )

    if (withCoords.length === 1) {
        const { lat, lng } = withCoords[0]
        return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    }

    if (withCoords.length > 1) {
        const centerLat =
            withCoords.reduce((sum, address) => sum + address.lat, 0) / withCoords.length
        const centerLng =
            withCoords.reduce((sum, address) => sum + address.lng, 0) / withCoords.length
        return `https://www.google.com/maps/@${centerLat},${centerLng},14z`
    }

    if (addresses.length > 0) {
        return getMapsHref(addresses[0])
    }

    return 'https://www.google.com/maps'
}

export const getSchoolsByCategory = (categorySlug: string) =>
    schools.filter((school) => school.categorySlugs.includes(categorySlug))

/** Newest schools are appended at the end of `schools`; this always returns the latest entries. */
export const getRecentlyAddedSchools = (count = 3) => schools.slice(-count).reverse()

export const formatSchoolCategoryNames = (school: School) =>
    school.categorySlugs
        .map((slug) => getCategoryBySlug(slug)?.name ?? slug)
        .join(', ')

export const getSchoolBySlug = (slug: string) =>
    schools.find((school) => school.slug === slug)

export const getSchoolDistricts = (school: School) => {
    const fromAddresses =
        school.addresses
            ?.map((address) => address.district)
            .filter((district): district is string => district != null && district.length > 0) ?? []

    if (fromAddresses.length > 0) {
        return [...new Set(fromAddresses)]
    }

    return [school.district]
}

export const formatSchoolDistricts = (school: School) => getSchoolDistricts(school).join(', ')

export const getDistrictOptions = () =>
    [...new Set(schools.flatMap((school) => getSchoolDistricts(school)))].sort((a, b) =>
        a.localeCompare(b, 'sr')
    )

const formatAgeOptionLabel = (age: number) => {
    const remainder = age % 10
    const isTeen = age >= 10 && age <= 20

    if (remainder >= 2 && remainder <= 4 && !isTeen) {
        return `${age} godine`
    }

    return `${age} godina`
}

export const getAgeOptions = () => {
    const minAge = Math.min(...schools.map((school) => school.minAge))
    const finiteMaxAges = schools
        .map((school) => school.maxAge)
        .filter((age): age is number => age != null)
    const maxFiniteAge = Math.max(...finiteMaxAges)
    const hasOpenEndedRange = schools.some((school) => school.maxAge == null)
    const finalAge = hasOpenEndedRange ? maxFiniteAge + 1 : maxFiniteAge

    return Array.from({ length: finalAge - minAge + 1 }, (_, index) => {
        const value = minAge + index
        const isOpenEnded = hasOpenEndedRange && value === finalAge
        const label = isOpenEnded ? `${value}+ godina` : formatAgeOptionLabel(value)
        return { value, label }
    })
}

export const getActivityOptions = () =>
    [...new Set(schools.flatMap((school) => school.categorySlugs))]
        .map((slug) => {
            const category = getCategoryBySlug(slug)
            return category ? { slug, name: category.name } : null
        })
        .filter((option): option is { slug: string; name: string } => option != null)
        .sort((a, b) => a.name.localeCompare(b.name, 'sr'))

export const filterSchools = (filters: SchoolFilters) =>
    schools.filter((school) => {
        if (filters.city && school.city !== filters.city) {
            return false
        }

        if (
            filters.activities.length > 0 &&
            !filters.activities.some((activity) => school.categorySlugs.includes(activity))
        ) {
            return false
        }

        if (
            filters.age != null &&
            (filters.age < school.minAge || (school.maxAge != null && filters.age > school.maxAge))
        ) {
            return false
        }

        if (filters.partsOfCity.length > 0) {
            const schoolDistricts = getSchoolDistricts(school)
            const matchesDistrict = filters.partsOfCity.some((part) =>
                schoolDistricts.includes(part)
            )

            if (!matchesDistrict) {
                return false
            }
        }

        return true
    })

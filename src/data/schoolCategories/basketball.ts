import sportsWorldWebp from '../../assets/images/schools/basketball/sports-world.webp'
import sportsWorldJpg from '../../assets/images/schools/basketball/sports-world.jpg'
import kkLdWebp from '../../assets/images/schools/basketball/kk-ld.webp'
import kkLdJpg from '../../assets/images/schools/basketball/kk-ld.jpg'
import champ07Webp from '../../assets/images/schools/basketball/champ-07.webp'
import champ07Jpg from '../../assets/images/schools/basketball/champ-07.jpg'
import kkStarWebp from '../../assets/images/schools/basketball/kk-star.webp'
import kkStarJpg from '../../assets/images/schools/basketball/kk-star.jpg'

import type { School } from './types'

export const basketballSchools: School[] = [
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
            phone: '063 77 33 365',
            email: 'dragpan@gmail.com',
            website: 'https://kksportsworld.com',
            facebook: 'https://www.facebook.com/kksportsworld',
            instagram: 'https://www.instagram.com/kksportsworld/',
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
    }
]

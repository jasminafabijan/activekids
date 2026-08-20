import kudNeraWebp from '../../assets/images/schools/folklore/kud-nera.webp'
import kudNeraJpg from '../../assets/images/schools/folklore/kud-nera.jpg'
import folklorikaWebp from '../../assets/images/schools/folklore/folklorika.webp'
import folklorikaJpg from '../../assets/images/schools/folklore/folklorika.png'

import type { School } from './types'

export const folkloreSchools: School[] = [
    {
        id: 'kud-nera',
        slug: 'kud-nera',
        name: {
            sr: 'KUD Nera',
            en: 'Nera Cultural and Artistic Society',
        },
        categorySlugs: ['folklore'],
        city: 'Novi Sad',
        district: 'Salajka',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: kudNeraWebp,
        imageFallback: kudNeraJpg,
        description: {
            sr: [
                'Kulturno-umetničko društvo Nera iz Novog Sada neguje folklor kroz dečiji, rekreativni i veteranski sastav.',
                'Dečiji folklorni sastav uči narodne igre i pesme iz raznih krajeva Srbije, uz zagrevanje, vežbe i rad na ritmu i pokretu.',
                'Kroz probe i nastupe deca razvijaju motoriku, osećaj za igru i pesmu, upoznaju vršnjake i stiču iskustvo na koncertima i festivalima.',
                'KUD Nera je poznat i po festivalu veteranskog folklora „Ravnica“, kojim promoviše tradiciju, nošnju i srpsko kolo.',
                'Probe se održavaju dva puta nedeljno, a društvo redovno prima nove članove u dečije i ostale sastave.',
            ],
            en: [
                'Nera Cultural and Artistic Society from Novi Sad nurtures folklore through children’s, recreational and veterans’ ensembles.',
                'The children’s folklore ensemble learns folk dances and songs from various parts of Serbia, with warm-up, exercises and work on rhythm and movement.',
                'Through rehearsals and performances, children develop motor skills, a feel for dance and song, meet peers and gain experience at concerts and festivals.',
                'KUD Nera is also known for the veterans’ folklore festival “Ravnica”, through which it promotes tradition, costume and Serbian kolo.',
                'Rehearsals are twice a week, and the society regularly takes new members into the children’s and other ensembles.',
            ],
        },
        addresses: [
            {
                street: 'Šajkaška 26',
                city: 'Novi Sad',
                district: 'Salajka',
                lat: 45.2727198,
                lng: 19.8381287,
            },
        ],
        contact: {
            phone: '063 82 43 794',
            email: 'kudnera@gmail.com',
            website: 'https://kudnera.rs',
            facebook: 'https://www.facebook.com/kud.nera',
            facebookLabel: 'kud.nera',
        },
    },
    {
        id: 'folklorika',
        slug: 'folklorika',
        name: {
            sr: 'Udruženje Folklorika',
            en: 'Folklorika Association',
        },
        categorySlugs: ['folklore'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: folklorikaWebp,
        imageFallback: folklorikaJpg,
        description: {
            sr: [
                'Udruženje Folklorika osnovano je 2016. godine u Novom Sadu, sa ciljem da afirmiše decu i mlade za narodno stvaralaštvo i tradiciju.',
                'Okuplja oko 150 članova u više folklornih ansambala — od Folklorne azbuke za najmlađe do reprezentativnih i rekreativnih sastava.',
                'Pored igre, organizuju radionice o starim zanatima, pripremu za muzičku školu i osnove scenskog nastupa.',
                'Udruženje je poznato i po vraćanju obreda Bačkih kraljica i festivalu „Kraljičino kolo“, kojim neguje nematerijalnu kulturnu baštinu.',
                'Članovi redovno nastupaju na koncertima, festivalima i međunarodnim gostovanjima.',
            ],
            en: [
                'Folklorika Association was founded in 2016 in Novi Sad, with the aim of introducing children and young people to folk creativity and tradition.',
                'It brings together around 150 members in several folklore ensembles — from Folklorna azbuka for the youngest to representative and recreational groups.',
                'Besides dance, it organizes workshops on traditional crafts, preparation for music school and the basics of stage performance.',
                'The association is also known for restoring the Bačke kraljice rite and for the festival “Kraljičino kolo”, through which it nurtures intangible cultural heritage.',
                'Members regularly appear at concerts, festivals and international guest performances.',
            ],
        },
        addresses: [
            {
                street: 'Kraljevića Marka 48',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.2644183,
                lng: 19.8352253,
            },
        ],
        contact: {
            phone: '060 044 67 17',
            email: 'marina.ilin1971@gmail.com',
            website: 'https://www.folklorika.rs/',
            facebook: 'https://www.facebook.com/udruzenjefolklorika/',
            instagram: 'https://www.instagram.com/_folklorika/',
        },
    },
]

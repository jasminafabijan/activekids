import kudNeraWebp from '../../assets/images/schools/folklore/kud-nera.webp'
import kudNeraJpg from '../../assets/images/schools/folklore/kud-nera.jpg'

import type { School } from './types'

export const folkloreSchools: School[] = [
    {
        id: 'kud-nera',
        slug: 'kud-nera',
        name: 'KUD Nera',
        categorySlugs: ['folklore'],
        city: 'Novi Sad',
        district: 'Salajka',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: kudNeraWebp,
        imageFallback: kudNeraJpg,
        description: [
            'Kulturno-umetničko društvo Nera iz Novog Sada neguje folklor kroz dečiji, rekreativni i veteranski sastav.',
            'Dečiji folklorni sastav uči narodne igre i pesme iz raznih krajeva Srbije, uz zagrevanje, vežbe i rad na ritmu i pokretu.',
            'Kroz probe i nastupe deca razvijaju motoriku, osećaj za igru i pesmu, upoznaju vršnjake i stiču iskustvo na koncertima i festivalima.',
            'KUD Nera je poznat i po festivalu veteranskog folklora „Ravnica“, kojim promoviše tradiciju, nošnju i srpsko kolo.',
            'Probe se održavaju dva puta nedeljno, a društvo redovno prima nove članove u dečije i ostale sastave.',
        ],
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
    }
]

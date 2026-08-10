import mementoMoriWebp from '../../assets/images/schools/boxing/memento-mori.webp'
import mementoMoriJpg from '../../assets/images/schools/boxing/memento-mori.jpg'

import type { School } from './types'

export const boxingSchools: School[] = [
    {
        id: 'memento-mori',
        slug: 'memento-mori',
        name: 'Memento Mori — Dečija škola boksa',
        categorySlugs: ['boxing'],
        city: 'Novi Sad',
        district: 'Sremska Kamenica',
        minAge: 6,
        maxAge: null,
        ageLabel: '6+ godina',
        imageWebp: mementoMoriWebp,
        imageFallback: mementoMoriJpg,
        description: [
            'Dečija škola boksa u klubu Memento Mori sportsko-pedagoški je program usmeren na fizički i mentalni razvoj kroz osnove bokserske veštine.',
            'Trening se odvija u sigurnom i kontrolisanom okruženju, uz naglasak na disciplinu, motoriku, koordinaciju i sportski duh.',
            'Kroz vežbe oblikovanja, osnove kretanja, rad na džaku i rad sa trenerom, deca razvijaju brzinu, ravnotežu i osećaj za prostor.',
            'Program podstiče samopouzdanje, poštovanje pravila i drugova, i na zdrav način usmerava energiju mališana.',
            'Klub raspolaže velikom, moderno opremljenom halom namenjenom borilačkim sportovima.',
        ],
        addresses: [
            {
                street: 'Vojvode Putnika BB',
                city: 'Novi Sad',
                district: 'Sremska Kamenica',
                lat: 45.2285795,
                lng: 19.8543537,
            },
        ],
        contact: {
            phone: '065 342 18 27',
            email: 'office@mementomori.rs',
            website: 'https://mementomori.rs/services/decija-skola-boksa/',
            facebook: 'https://www.facebook.com/Memento-mori-MMA-103335755379628',
            instagram: 'https://www.instagram.com/mementomori_mma/',
        },
    },
]

import mementoMoriWebp from '../../assets/images/schools/boxing/memento-mori.webp'
import mementoMoriJpg from '../../assets/images/schools/boxing/memento-mori.jpg'
import bkVojvodinaWebp from '../../assets/images/schools/boxing/bk-vojvodina.webp'
import bkVojvodinaJpg from '../../assets/images/schools/boxing/bk-vojvodina.jpg'

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
    {
        id: 'bk-vojvodina',
        slug: 'bk-vojvodina',
        name: 'Bokserski klub Vojvodina',
        categorySlugs: ['boxing'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 8,
        maxAge: null,
        ageLabel: '8+ godina',
        imageWebp: bkVojvodinaWebp,
        imageFallback: bkVojvodinaJpg,
        description: [
            'Bokserski klub Vojvodina jedan je od najtrofejnijih bokserskih kolektiva u Novom Sadu, sa školom boksa za početnike i radom kroz pionirske, kadetske i omladinske selekcije.',
            'Najmlađi polaznici kreću od upisne škole boksa, gde uče osnove kretanja, discipline i rada u grupi, pre prelaska u takmičarske uzraste.',
            'Klub se takmiči u nacionalnim ligama, a sa selekcijama rade iskusni treneri — među njima i dugogodišnji stručnjaci sa međunarodnim iskustvom.',
            'Program je namenjen dečacima i devojčicama koji žele da otkriju olimpijski boks u ozbiljnom, ali podržavajućem klupskom okruženju.',
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
            phone: '061 138 34 22',
            email: 'boksvojvodina@gmail.com',
            facebook: 'https://www.facebook.com/boksvojvodina',
            facebookLabel: 'BK Vojvodina',
            instagram: 'https://www.instagram.com/boks.vojvodina/',
        },
    },
]

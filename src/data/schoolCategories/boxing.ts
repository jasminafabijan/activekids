import mementoMoriWebp from '../../assets/images/schools/boxing/memento-mori.webp'
import mementoMoriJpg from '../../assets/images/schools/boxing/memento-mori.jpg'
import bkVojvodinaWebp from '../../assets/images/schools/boxing/bk-vojvodina.webp'
import bkVojvodinaJpg from '../../assets/images/schools/boxing/bk-vojvodina.jpg'

import type { School } from './types'

export const boxingSchools: School[] = [
    {
        id: 'memento-mori',
        slug: 'memento-mori',
        name: {
            sr: 'Memento Mori — Dečija škola boksa',
            en: 'Memento Mori — Children’s Boxing School',
        },
        categorySlugs: ['boxing'],
        city: 'Novi Sad',
        district: 'Sremska Kamenica',
        minAge: 6,
        maxAge: null,
        ageLabel: '6+ godina',
        imageWebp: mementoMoriWebp,
        imageFallback: mementoMoriJpg,
        description: {
            sr: [
                'Dečija škola boksa u klubu Memento Mori sportsko-pedagoški je program usmeren na fizički i mentalni razvoj kroz osnove bokserske veštine.',
                'Trening se odvija u sigurnom i kontrolisanom okruženju, uz naglasak na disciplinu, motoriku, koordinaciju i sportski duh.',
                'Kroz vežbe oblikovanja, osnove kretanja, rad na džaku i rad sa trenerom, deca razvijaju brzinu, ravnotežu i osećaj za prostor.',
                'Program podstiče samopouzdanje, poštovanje pravila i drugova, i na zdrav način usmerava energiju mališana.',
                'Klub raspolaže velikom, moderno opremljenom halom namenjenom borilačkim sportovima.',
            ],
            en: [
                'The children’s boxing school at club Memento Mori is a sports-pedagogical program aimed at physical and mental development through the basics of boxing.',
                'Training takes place in a safe, controlled setting, with an emphasis on discipline, motor skills, coordination and sporting spirit.',
                'Through shaping exercises, basic movement, bag work and work with a coach, children develop speed, balance and a sense of space.',
                'The program builds confidence, respect for rules and teammates, and channels children’s energy in a healthy way.',
                'The club has a large, modern hall dedicated to combat sports.',
            ],
        },
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
        name: {
            sr: 'Bokserski klub Vojvodina',
            en: 'Vojvodina Boxing Club',
        },
        categorySlugs: ['boxing'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 8,
        maxAge: null,
        ageLabel: '8+ godina',
        imageWebp: bkVojvodinaWebp,
        imageFallback: bkVojvodinaJpg,
        description: {
            sr: [
                'Bokserski klub Vojvodina jedan je od najtrofejnijih bokserskih kolektiva u Novom Sadu, sa školom boksa za početnike i radom kroz pionirske, kadetske i omladinske selekcije.',
                'Najmlađi polaznici kreću od upisne škole boksa, gde uče osnove kretanja, discipline i rada u grupi, pre prelaska u takmičarske uzraste.',
                'Klub se takmiči u nacionalnim ligama, a sa selekcijama rade iskusni treneri — među njima i dugogodišnji stručnjaci sa međunarodnim iskustvom.',
                'Program je namenjen dečacima i devojčicama koji žele da otkriju olimpijski boks u ozbiljnom, ali podržavajućem klupskom okruženju.',
            ],
            en: [
                'Vojvodina Boxing Club is one of the most decorated boxing clubs in Novi Sad, with a boxing school for beginners and work through pioneer, cadet and youth selections.',
                'The youngest pupils start in the enrollment boxing school, where they learn the basics of movement, discipline and group work, before moving into competitive age groups.',
                'The club competes in national leagues, and experienced coaches work with the selections — among them long-standing specialists with international experience.',
                'The program is for boys and girls who want to discover Olympic boxing in a serious but supportive club setting.',
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
            phone: '061 138 34 22',
            email: 'boksvojvodina@gmail.com',
            facebook: 'https://www.facebook.com/boksvojvodina',
            facebookLabel: 'BK Vojvodina',
            instagram: 'https://www.instagram.com/boks.vojvodina/',
        },
    },
]

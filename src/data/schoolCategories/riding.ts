import granicarWebp from '../../assets/images/schools/riding/granicar.webp'
import granicarJpg from '../../assets/images/schools/riding/granicar.jpg'

import type { School } from './types'

export const ridingSchools: School[] = [
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
    }
]

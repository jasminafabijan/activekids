import granicarWebp from '../../assets/images/schools/riding/granicar.webp'
import granicarJpg from '../../assets/images/schools/riding/granicar.jpg'

import type { School } from './types'

export const ridingSchools: School[] = [
    {
        id: 'kk-granicar',
        slug: 'kk-granicar',
        name: {
            sr: 'Konjički klub Graničar',
            en: 'Graničar Equestrian Club',
        },
        categorySlugs: ['riding'],
        city: 'Novi Sad',
        district: 'Šangaj',
        minAge: 7,
        maxAge: null,
        ageLabel: '7+ godina',
        imageWebp: granicarWebp,
        imageFallback: granicarJpg,
        description: {
            sr: [
                'Konjički klub Graničar osnovan je 1953. godine i jedan je od najstarijih konjičkih klubova u zemlji.',
                'Ako tražite beg od grada i buke, u klubu možete naučiti da jašete ili jednostavno provesti miran dan u prirodi uz konje.',
                'Škola jahanja se odvija uz stručni nadzor trenera, sa naglaskom na sigurnost i postepeno usvajanje tehnike.',
                'Pored škole jahanja, klub nudi i organizovane posete za predškolske ustanove i osnovne škole, sa edukativno-kreativnim programom.',
                'Na današnjoj lokaciji klub raspolaže objektima i velikim prostorom, što ga čini mestom za sport, rekreaciju i druženje ljubitelja konja.',
            ],
            en: [
                'Graničar Equestrian Club was founded in 1953 and is one of the oldest riding clubs in the country.',
                'If you want an escape from the city and the noise, you can learn to ride at the club or simply spend a quiet day outdoors with the horses.',
                'The riding school runs under a coach’s professional supervision, with an emphasis on safety and gradually learning technique.',
                'Alongside the riding school, the club also offers organized visits for preschool institutions and primary schools, with an educational and creative program.',
                'At its present site the club has facilities and a large outdoor area, making it a place for sport, recreation and gathering among horse lovers.',
            ],
        },
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
            phone: '062 817 35 12',
            email: 'granicarns@gmail.com',
            website: 'http://konjickiklubgranicar.com',
            facebook: 'https://www.facebook.com/granicar.konjicki/',
            facebookLabel: 'granicar.konjicki',
            instagram: 'https://www.instagram.com/granicarns',
        },
    }
]

import sportisimoWebp from '../../assets/images/schools/mini-sports/sportisimo.webp'
import sportisimoJpg from '../../assets/images/schools/mini-sports/sportisimo.jpg'

import type { School } from './types'

export const miniSportsSchools: School[] = [
    {
        id: 'sportisimo',
        slug: 'sportisimo',
        name: {
            sr: 'Sportisimo',
            en: 'Sportisimo',
        },
        categorySlugs: ['mini-sports'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 2,
        maxAge: 3,
        ageLabel: '2–3 godine',
        imageWebp: sportisimoWebp,
        imageFallback: sportisimoJpg,
        description: {
            sr: [
                'Sportić je program namenjen najmlađima i njihovim prvim samostalnim treninzima.',
                'Kroz igru i priču deca trče, puze, provlače se, penju, preskaču, kotrljaju, nose i pomeraju različite rekvizite. Koristimo različite podloge, lopte i druge rekvizite koji angažuju i šake i stopala, jer u ovom uzrastu dete mnogo toga uči upravo kroz dodir i pokret.',
                'Istovremeno se polako navikava na grupu, trenera i jednostavne zadatke. Nekome je za to potrebno vrlo malo vremena, nekome više, i zato prvim treninzima pristupamo sa dosta strpljenja.',
            ],
            en: [
                'Sportić is a program for the youngest children and their first independent training sessions.',
                'Through play and story, children run, crawl, squeeze through, climb, jump over, roll, carry and move different props. We use different surfaces, balls and other equipment that engage both the hands and the feet, because at this age a child learns a great deal through touch and movement.',
                'At the same time they slowly get used to the group, the coach and simple tasks. Some children need very little time for that, others need more, and that is why we approach the first sessions with a lot of patience.',
            ],
        },
        addresses: [
            {
                street: 'Milenka Grčića 3a',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2619586,
                lng: 19.8123263,
            },
        ],
        contact: {
            phone: '064 236 15 94',
            email: 'borjanaradonic@gmail.com',
            website: 'https://sportisimo.org/deca/skolica-sporta-2-3-god/',
            facebook: 'https://www.facebook.com/sportisimosportskaporodica',
            facebookLabel: 'Sportisimo sportska porodica',
            instagram: 'https://www.instagram.com/sportisimo_sportska_porodica/',
        },
    },
]

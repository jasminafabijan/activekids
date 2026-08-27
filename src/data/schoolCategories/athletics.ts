import sportisimoWebp from '../../assets/images/schools/athletics/sportisimo.webp'
import sportisimoJpg from '../../assets/images/schools/athletics/sportisimo.jpg'

import type { School } from './types'

export const athleticsSchools: School[] = [
    {
        id: 'sportisimo-atletika',
        slug: 'sportisimo-atletika',
        name: {
            sr: 'Sportisimo',
            en: 'Sportisimo',
        },
        categorySlugs: ['athletics'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 5,
        maxAge: 8,
        ageLabel: '5–8 godina',
        imageWebp: sportisimoWebp,
        imageFallback: sportisimoJpg,
        description: {
            sr: [
                'Na Atletici učimo ono što deca već vole da rade — da trče, skaču i bacaju — ali kroz nove zadatke i pravilnije izvođenje.',
                'Vežbamo različite načine trčanja, startove i promene pravca, skokove u dalj i vis, preskakanje prepreka i različita bacanja. Kroz trening dete otkriva kako može da bude brže, spretnije i sigurnije u pokretu.',
                'Atletika je u ovom uzrastu odlična osnova i za dete koje će je kasnije izabrati kao svoj sport, ali i za gotovo svaki drugi sport kojim će se baviti.',
            ],
            en: [
                'In Athletics we teach what children already love to do — run, jump and throw — but through new tasks and cleaner technique.',
                'We practice different ways of running, starts and changes of direction, long and high jumps, jumping over obstacles and different throws. Through training the child discovers how to be faster, more agile and more confident in movement.',
                'At this age, athletics is an excellent foundation both for a child who will later choose it as their sport, and for almost any other sport they will take up.',
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
            website: 'https://sportisimo.org/deca/atletika-5-8/',
            facebook: 'https://www.facebook.com/sportisimosportskaporodica',
            facebookLabel: 'Sportisimo sportska porodica',
            instagram: 'https://www.instagram.com/sportisimo_sportska_porodica/',
        },
    },
]

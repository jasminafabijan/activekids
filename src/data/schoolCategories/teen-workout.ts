import sportisimoWebp from '../../assets/images/schools/athletics/sportisimo.webp'
import sportisimoJpg from '../../assets/images/schools/athletics/sportisimo.jpg'

import type { School } from './types'

export const teenWorkoutSchools: School[] = [
    {
        id: 'sportisimo-teen-workout',
        slug: 'sportisimo-teen-workout',
        name: {
            sr: 'Sportisimo',
            en: 'Sportisimo',
        },
        categorySlugs: ['teen-workout'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 11,
        maxAge: 15,
        ageLabel: '11–15 godina',
        imageWebp: sportisimoWebp,
        imageFallback: sportisimoJpg,
        description: {
            sr: [
                'Trening koji ne liči na još jednu obavezu.',
                'Teen workout namenjen je tinejdžerima koji žele da budu aktivni, bez obzira na to da li se već bave nekim sportom ili tek počinju da treniraju.',
                'Radimo vežbe snage sa sopstvenom težinom i različitim rekvizitima, vežbe za pokretljivost i celo telo, ali ubacujemo i trčanje, igre, poligone i različite izazove. Treninzi se menjaju kako bi ostali zanimljivi i prilagođeni mogućnostima grupe.',
                'A pošto je mnogo lakše trenirati uz muziku koju voliš, muziku često biramo zajedno. :)',
            ],
            en: [
                'A workout that does not feel like one more obligation.',
                'Teen workout is for teenagers who want to stay active, whether they already play a sport or are just starting to train.',
                'We do strength work with body weight and different props, mobility and full-body exercises, but we also mix in running, games, obstacle courses and different challenges. The sessions change so they stay interesting and matched to what the group can do.',
                'And because it is much easier to train to music you like, we often pick the music together. :)',
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
            website: 'https://sportisimo.org/deca/teen-workout-11-15-god/',
            facebook: 'https://www.facebook.com/sportisimosportskaporodica',
            facebookLabel: 'Sportisimo sportska porodica',
            instagram: 'https://www.instagram.com/sportisimo_sportska_porodica/',
        },
    },
]

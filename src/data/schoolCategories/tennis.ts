import conkicAcademyWebp from '../../assets/images/schools/tennis/conkic-academy.webp'
import conkicAcademyJpg from '../../assets/images/schools/tennis/conkic-academy.jpg'

import type { School } from './types'

export const tennisSchools: School[] = [
    {
        id: 'conkic-academy',
        slug: 'conkic-academy',
        name: 'Čonkić Tennis Academy',
        categorySlugs: ['tennis'],
        city: 'Novi Sad',
        district: 'Adice',
        minAge: 4,
        maxAge: 10,
        ageLabel: '4–10 godina',
        imageWebp: conkicAcademyWebp,
        imageFallback: conkicAcademyJpg,
        description: [
            'Čonkić Tennis Academy je porodična akademija sa gotovo pola veka iskustva u igri i treniranju profesionalnih tenisera, osnovana 1970. godine.',
            'Škola tenisa vodi decu kroz zabavu, izazove i prijateljska takmičenja, uz razvoj tehničkih, taktičkih, fizičkih i mentalnih veština.',
            'Svi treneri rade po ITF programu razvoja dece — zvaničnom programu Teniskog saveza Srbije — uz individualan pristup unutar grupnih treninga.',
            'Polaznici napreduju kroz nivoe Crveni, Narandžasti i Zeleni, prema veštinama, što omogućava podršku i početnicima i deci sa takmičarskim ambicijama.',
            'Prva dva treninga su besplatna; dovoljno je doneti sportsku odeću i dobru volju.',
            'Akademija okuplja stručne teniske, kondicione i mentalne trenere, sa bogatom tradicijom rada sa juniorskim i profesionalnim igračima.',
        ],
        addresses: [
            {
                street: 'Veternička 3',
                city: 'Novi Sad',
                district: 'Adice',
                lat: 45.230497,
                lng: 19.7811422,
            },
        ],
        contact: {
            phone: '062 503 364',
            email: 'conkictennis@gmail.com',
            website: 'https://conkicacademy.com',
            facebook: 'https://www.facebook.com/conkictennisacademy/',
            instagram: 'https://www.instagram.com/conkic_tennisacademy',
        },
    }
]

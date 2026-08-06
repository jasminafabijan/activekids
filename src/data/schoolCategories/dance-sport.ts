import fiestaWebp from '../../assets/images/schools/dance-sport/fiesta.webp'
import fiestaJpg from '../../assets/images/schools/dance-sport/fiesta.jpg'

import type { School } from './types'

export const danceSportSchools: School[] = [
    {
        id: 'fiesta',
        slug: 'fiesta',
        name: 'Plesna škola Fiesta',
        categorySlugs: ['dance-sport'],
        city: 'Novi Sad',
        district: 'Severni Telep',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: fiestaWebp,
        imageFallback: fiestaJpg,
        description: [
            'Plesna škola Fiesta u Novom Sadu nudi programe sportskog plesa, uključujući plesni vrtić, početne i srednje dečije grupe.',
            'Na časovima deca uče osnove društvenih i latinoameričkih plesova — ča-ča-ča, valcer, rumbu, fokstrot — kroz igru, ritam i druženje.',
            'Pedagoški obučeni instruktori razvijaju osećaj za pokret i muziku, timski rad, koordinaciju i pravilno držanje.',
            'Klub ima iskustvo u vođenju dece ka takmičarskom sportskom plesu, kroz grupne i individualne časove.',
        ],
        addresses: [
            {
                street: 'Geri Karolja 5',
                city: 'Novi Sad',
                district: 'Severni Telep',
                lat: 45.2451737,
                lng: 19.8172331,
            },
        ],
        contact: {
            phone: '065 330 26 12',
            email: 'pkfiesta@gmail.com',
            website: 'http://www.fiesta.org.rs/ples-za-najmlade/',
            facebook: 'https://www.facebook.com/plesni.fiesta/',
            instagram: 'https://www.instagram.com/fiesta_plesniklub/',
        },
    },
]

import fiestaWebp from '../../assets/images/schools/dance-sport/fiesta.webp'
import fiestaJpg from '../../assets/images/schools/dance-sport/fiesta.jpg'
import neoDanceWebp from '../../assets/images/schools/dance-sport/neo-dance.webp'
import neoDanceJpg from '../../assets/images/schools/dance-sport/neo-dance.jpg'

import type { School } from './types'

export const danceSportSchools: School[] = [
    {
        id: 'fiesta',
        slug: 'fiesta',
        name: {
            sr: 'Plesna škola Fiesta',
            en: 'Fiesta Dance School',
        },
        categorySlugs: ['dance-sport'],
        city: 'Novi Sad',
        district: 'Severni Telep',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: fiestaWebp,
        imageFallback: fiestaJpg,
        description: {
            sr: [
                'Plesna škola Fiesta u Novom Sadu nudi programe sportskog plesa, uključujući plesni vrtić, početne i srednje dečije grupe.',
                'Na časovima deca uče osnove društvenih i latinoameričkih plesova — ča-ča-ča, valcer, rumbu, fokstrot — kroz igru, ritam i druženje.',
                'Pedagoški obučeni instruktori razvijaju osećaj za pokret i muziku, timski rad, koordinaciju i pravilno držanje.',
                'Klub ima iskustvo u vođenju dece ka takmičarskom sportskom plesu, kroz grupne i individualne časove.',
            ],
            en: [
                'Fiesta Dance School in Novi Sad offers DanceSport programs, including a dance kindergarten and beginner and intermediate children’s groups.',
                'In class, children learn the basics of ballroom and Latin American dances — cha-cha-cha, waltz, rumba, foxtrot — through play, rhythm and social time.',
                'Pedagogically trained instructors develop a sense of movement and music, teamwork, coordination and good posture.',
                'The club has experience guiding children toward competitive DanceSport, through group and individual lessons.',
            ],
        },
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
    {
        id: 'neo-dance',
        slug: 'neo-dance',
        name: {
            sr: 'Plesni klub Neo Dance',
            en: 'Neo Dance Club',
        },
        categorySlugs: ['dance-sport'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 4,
        maxAge: 16,
        ageLabel: '4–16 godina',
        imageWebp: neoDanceWebp,
        imageFallback: neoDanceJpg,
        description: {
            sr: [
                'Plesni klub Neo Dance osnovan je 2008. godine i član je Plesnog saveza Srbije, kao i vojvođanskog i novosadskog plesnog saveza.',
                'Dečija grupa uči takmičarske latinoameričke i standardne plesove — među njima sambu, rumbu, ča-ča-ča, engleski i bečki valcer, tango i quickstep.',
                'Stručni instruktori pripremaju decu za nastupe na plesnim festivalima i takmičenjima, uz rad i sa predškolcima i osnovcima.',
                'Klub radi u Novom Sadu i okolnim mestima, a vode ga treneri sa dugogodišnjim takmičarskim i pedagoškim iskustvom.',
            ],
            en: [
                'Neo Dance Club was founded in 2008 and is a member of the DanceSport Federation of Serbia, as well as the Vojvodina and Novi Sad dance federations.',
                'The children’s group learns competitive Latin American and standard dances — among them samba, rumba, cha-cha-cha, English and Viennese waltz, tango and quickstep.',
                'Specialist instructors prepare children for dance festivals and competitions, working with both preschoolers and primary-school pupils.',
                'The club works in Novi Sad and nearby places, and is led by coaches with long competitive and teaching experience.',
            ],
        },
        addresses: [
            {
                street: 'Vuka Karadžića 2',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.2576916,
                lng: 19.8409364,
            },
        ],
        contact: {
            phone: '069 123 11 32',
            email: 'dc.neodance@gmail.com',
            website: 'https://www.neodance.rs/za-decu/',
            facebook: 'https://www.facebook.com/pkNeoDance',
            instagram: 'https://www.instagram.com/neo.dance/',
        },
    },
]

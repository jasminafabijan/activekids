import eltisiJpg from '../../assets/images/schools/languages/eltisi.jpg'

import type { School } from './types'

export const languagesSchools: School[] = [
    {
        id: 'eltisi',
        slug: 'eltisi',
        name: {
            sr: 'Škola stranih jezika ELTISI',
            en: 'ELTISI Language School',
        },
        categorySlugs: ['languages'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 5,
        maxAge: null,
        ageLabel: '5+ godina',
        imageWebp: eltisiJpg,
        imageFallback: eltisiJpg,
        description: {
            sr: [
                'Škola stranih jezika ELTISI vodi dečije kurseve engleskog kroz igru, pesmu, priče i glumu, uz TPR metodu koja spaja govor i pokret.',
                'Profesori su posebno obučeni za rad sa decom, a nastava prati zajedničke metodološke principe, uz redovne obuke u školi i na seminarima.',
                'Časovi nisu pasivno praćenje udžbenika: deca aktivno koriste jezik, uz audio-vizuelne materijale, interaktivne programe i pametnu tablu.',
                'Saradnja sa roditeljima i praćenje napretka su deo rada, a škola ima više od dve decenije iskustva.',
            ],
            en: [
                'ELTISI Language School runs children’s English courses through play, song, stories and acting, using the TPR method that links speech and movement.',
                'Teachers are specially trained to work with children, and classes follow shared methodological principles, with regular in-school training and external seminars.',
                'Lessons are not passive textbook work: children use the language actively, with audiovisual materials, interactive programs and a smart board.',
                'Cooperation with parents and tracking progress are part of the work, and the school has more than two decades of experience.',
            ],
        },
        addresses: [
            {
                street: 'Kraljev Park, Kraljevića Marka 26, I/3',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.262871,
                lng: 19.8357055,
            },
        ],
        contact: {
            phone: '066 633 28 71',
            email: 'office@eltisi.com',
            website: 'https://eltisi.com/deciji-kursevi/',
            facebook: 'https://www.facebook.com/eltisins/',
            facebookLabel: 'ELTISI',
            instagram: 'https://www.instagram.com/el_ti_si/',
        },
    },
]

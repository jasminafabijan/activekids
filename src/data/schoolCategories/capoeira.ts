import kapueraAkademijaWebp from '../../assets/images/schools/capoeira/kapuera-akademija-ns.webp'
import kapueraAkademijaJpg from '../../assets/images/schools/capoeira/kapuera-akademija-ns.jpg'

import type { School } from './types'

export const capoeiraSchools: School[] = [
    {
        id: 'kapuera-akademija-ns',
        slug: 'kapuera-akademija-ns',
        name: {
            sr: 'Kapuera akademija',
            en: 'Kapuera Academy',
        },
        categorySlugs: ['capoeira'],
        city: 'Novi Sad',
        district: 'Grbavica',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: kapueraAkademijaWebp,
        imageFallback: kapueraAkademijaJpg,
        description: {
            sr: [
                'Kapuera akademija radi u okviru Capoeira asocijacije Srbije — uz poštovanje, disciplinu, radost i zajedništvo.',
                'Kapuera je brazilska borilačka veština koja spaja borbu, akrobatiku, igru i muziku, uz tradicionalne instrumente kao što su berimbau i atabaque.',
                'Sa decom rade treneri iz asocijacije, uključujući Professor Cantiga, kroz prilagođene programe koji grade telo, ritam i samopouzdanje.',
            ],
            en: [
                'Kapuera Academy is part of the Capoeira Association of Serbia — with respect, discipline, joy and togetherness.',
                'Capoeira is a Brazilian martial art that combines fighting, acrobatics, play and music, with traditional instruments such as the berimbau and atabaque.',
                'Children train with association coaches, including Professor Cantiga, through adapted programs that build the body, rhythm and confidence.',
            ],
        },
        addresses: [
            {
                street: 'Futoška 16',
                city: 'Novi Sad',
                district: 'Grbavica',
                lat: 45.2514259,
                lng: 19.8354898,
            },
        ],
        contact: {
            phone: '069 211 19 86',
            email: 'plancak.aljosa@gmail.com',
            facebook: 'https://www.facebook.com/kapueraakademija',
            facebookLabel: 'kapueraakademija',
            instagram: 'https://www.instagram.com/kapueranovisad/',
        },
    },
]

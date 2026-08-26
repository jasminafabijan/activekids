import petarMisicWebp from '../../assets/images/schools/tennis/petar-misic.webp'
import petarMisicJpg from '../../assets/images/schools/tennis/petar-misic.jpg'

import type { School } from './types'

export const tennisSchools: School[] = [
    {
        id: 'petar-misic',
        slug: 'petar-misic',
        name: {
            sr: 'TK Petar Mišić',
            en: 'Petar Mišić Tennis Club',
        },
        categorySlugs: ['tennis'],
        city: 'Novi Sad',
        district: 'Podbara',
        minAge: 3,
        maxAge: 14,
        ageLabel: '3,5–14 godina',
        imageWebp: petarMisicWebp,
        imageFallback: petarMisicJpg,
        description: {
            sr: [
                'Teniski klub Petar Mišić nastavlja porodičnu tenisku priču koju je započeo šampion SFRJ i dugogodišnji teniski stručnjak Petar Mišić.',
                'Škola tenisa vodi polaznike kroz razvoj motoričkih sposobnosti i osnovne elemente igre — udarce, kretanja i pravila tenisa.',
                'Klub je zvanični promoter međunarodnog programa Tennis 10s u saradnji sa Teniskim savezom Srbije, uz prilagođene rekete, lopte i manje terene.',
                'Programi uključuju bebi tenis, Tennis 10s nivoe (crveni, narandžasti i zeleni) i školu tenisa za starije osnovce, uz mogućnost prelaska na predtakmičarski rad.',
                'Treninge vode iskusni treneri; upis traje tokom cele godine.',
            ],
            en: [
                'Petar Mišić Tennis Club continues the family tennis story begun by SFRJ champion and long-time tennis specialist Petar Mišić.',
                'The tennis school takes pupils through motor-skill development and the basic elements of the game — strokes, movement and the rules of tennis.',
                'The club is an official promoter of the international Tennis 10s program in cooperation with the Tennis Federation of Serbia, with adapted rackets, balls and smaller courts.',
                'Programs include baby tennis, Tennis 10s levels (red, orange and green) and a tennis school for older primary-school children, with the option of moving into pre-competitive work.',
                'Experienced coaches lead the training; enrollment runs throughout the year.',
            ],
        },
        addresses: [
            {
                street: 'Beogradski kej 37',
                city: 'Novi Sad',
                district: 'Podbara',
                lat: 45.260439,
                lng: 19.8546991,
            },
        ],
        contact: {
            phone: '064 143 33 35',
            email: 'office@tkpetarmisic.com',
            website: 'https://www.tkpetarmisic.com/skola-tenisa/',
            facebook: 'https://www.facebook.com/TKPetarMisic',
            instagram: 'https://www.instagram.com/tkpetarmisic',
        },
    },
]

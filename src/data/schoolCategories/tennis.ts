import conkicAcademyWebp from '../../assets/images/schools/tennis/conkic-academy.webp'
import conkicAcademyJpg from '../../assets/images/schools/tennis/conkic-academy.jpg'
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
    {
        id: 'conkic-academy',
        slug: 'conkic-academy',
        name: {
            sr: 'Čonkić Tennis Academy',
            en: 'Čonkić Tennis Academy',
        },
        categorySlugs: ['tennis'],
        city: 'Novi Sad',
        district: 'Adice',
        minAge: 4,
        maxAge: 10,
        ageLabel: '4–10 godina',
        imageWebp: conkicAcademyWebp,
        imageFallback: conkicAcademyJpg,
        description: {
            sr: [
                'Čonkić Tennis Academy je porodična akademija sa gotovo pola veka iskustva u igri i treniranju profesionalnih tenisera, osnovana 1970. godine.',
                'Škola tenisa vodi decu kroz zabavu, izazove i prijateljska takmičenja, uz razvoj tehničkih, taktičkih, fizičkih i mentalnih veština.',
                'Svi treneri rade po ITF programu razvoja dece — zvaničnom programu Teniskog saveza Srbije — uz individualan pristup unutar grupnih treninga.',
                'Polaznici napreduju kroz nivoe Crveni, Narandžasti i Zeleni, prema veštinama, što omogućava podršku i početnicima i deci sa takmičarskim ambicijama.',
                'Prva dva treninga su besplatna; dovoljno je doneti sportsku odeću i dobru volju.',
                'Akademija okuplja stručne teniske, kondicione i mentalne trenere, sa bogatom tradicijom rada sa juniorskim i profesionalnim igračima.',
            ],
            en: [
                'Čonkić Tennis Academy is a family academy with almost half a century of experience in playing and coaching professional tennis players, founded in 1970.',
                'The tennis school takes children through fun, challenges and friendly competitions, developing technical, tactical, physical and mental skills.',
                'All coaches work to the ITF children’s development program — the official program of the Tennis Federation of Serbia — with an individual approach within group training.',
                'Pupils progress through Red, Orange and Green levels according to skill, which supports both beginners and children with competitive ambitions.',
                'The first two training sessions are free; it is enough to bring sports clothes and goodwill.',
                'The academy brings together specialist tennis, fitness and mental coaches, with a long tradition of work with junior and professional players.',
            ],
        },
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
    },
]

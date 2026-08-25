import ikedaDojoWebp from '../../assets/images/schools/aikido/ikeda-dojo.webp'
import ikedaDojoJpg from '../../assets/images/schools/aikido/ikeda-dojo.jpg'

import type { School } from './types'

export const aikidoSchools: School[] = [
    {
        id: 'aikido-ikeda-dojo',
        slug: 'aikido-ikeda-dojo',
        name: {
            sr: 'Aikido Ikeda Dojo',
            en: 'Aikido Ikeda Dojo',
        },
        categorySlugs: ['aikido'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 5,
        maxAge: null,
        ageLabel: '5+ godina',
        imageWebp: ikedaDojoWebp,
        imageFallback: ikedaDojoJpg,
        description: {
            sr: [
                'Aikido Ikeda Dojo u Novom Sadu radi već tri decenije. Danas klub vode učitelji Strahinja Bubulj i Damir Kostovski, obojica 3. dan.',
                'Aikido je borilačka veština bez takmičenja — cilj je da napreduje zajednica, a ne samo pojedinac, kroz disciplinu, poštovanje i lični razvoj.',
                'Deca uče kroz redovan trening i seminare, uz gostujuće instruktore iz zemlje i inostranstva.',
                'Veština gradi telo, pažnju i zdrav odnos prema kretanju, u ritmu koji ide uz današnji način života.',
            ],
            en: [
                'Aikido Ikeda Dojo in Novi Sad has been active for three decades. The club is led by instructors Strahinja Bubulj and Damir Kostovski, both 3rd dan.',
                'Aikido is a martial art without competition — the aim is for the community to grow, not only the individual, through discipline, respect and personal development.',
                'Children learn through regular training and seminars, with visiting instructors from Serbia and abroad.',
                'The practice builds the body, attention and a healthy relationship with movement, in a rhythm that fits today’s way of life.',
            ],
        },
        addresses: [
            {
                street: 'Kisačka 11',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.2613116,
                lng: 19.8412943,
            },
        ],
        contact: {
            phone: '063 726 98 85',
            email: 'aikidoikedadojonovisad@gmail.com',
            website: 'https://aikidoikedadojo.rs',
            facebook: 'https://www.facebook.com/aikidoikedadojonovisad/',
            facebookLabel: 'Aikido Ikeda Dojo',
            instagram: 'https://www.instagram.com/aikidoikedadojonovisad/',
        },
    },
]

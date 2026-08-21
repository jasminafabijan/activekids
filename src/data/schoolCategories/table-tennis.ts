import stkNoviSadWebp from '../../assets/images/schools/table-tennis/stk-novi-sad.webp'
import stkNoviSadJpg from '../../assets/images/schools/table-tennis/stk-novi-sad.jpg'

import type { School } from './types'

export const tableTennisSchools: School[] = [
    {
        id: 'stk-novi-sad',
        slug: 'stk-novi-sad',
        name: {
            sr: 'Stonoteniski klub „Novi Sad”',
            en: 'Novi Sad Table Tennis Club',
        },
        categorySlugs: ['table-tennis'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 6,
        maxAge: null,
        ageLabel: '6+ godina',
        imageWebp: stkNoviSadWebp,
        imageFallback: stkNoviSadJpg,
        description: {
            sr: [
                'Omladinska škola Stonoteniskog kluba Novi Sad zvanično je najbrojnija stonoteniska škola u Srbiji — oko sto članova i oko sedamdeset registrovanih takmičara.',
                'Pet trenera vodi grupe od najmlađih početnika do naprednih, u tri sale, sa jasnim prelaskom ka takmičenju kada dete bude spremno.',
                'Klub ima igrače u vrhu rang-lista u svim mlađim kategorijama i redovno okuplja najveći broj takmičara na turnirima u zemlji.',
                'Osim treninga, polaznici učestvuju na klupskim turnirima i u akcijama poput „Vratimo stoni tenis u škole”, uz naglasak na druženje, odgovornost i sportski duh.',
            ],
            en: [
                'The youth school of Novi Sad Table Tennis Club is officially the largest table tennis school in Serbia — about a hundred members and about seventy registered competitors.',
                'Five coaches lead groups from the youngest beginners to advanced players, in three halls, with a clear path toward competition when a child is ready.',
                'The club has players at the top of the rankings in every younger age category and regularly fields the largest number of competitors at tournaments in the country.',
                'Besides training, pupils take part in club tournaments and in actions such as “Bring Table Tennis Back to Schools,” with an emphasis on camaraderie, responsibility and sporting spirit.',
            ],
        },
        addresses: [
            {
                street: 'Sokolski dom, Ignjata Pavlasa 2-4',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2558,
                lng: 19.8427,
            },
            {
                street: 'SPENS, Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
        ],
        contact: {
            phone: '063 830 97 02',
            email: 'office@stknovisad.org.rs',
            website: 'https://stknovisad.org.rs/klub/omladinska-skola/',
            facebook: 'https://www.facebook.com/stk.novisad',
            facebookLabel: 'STK Novi Sad',
            instagram: 'https://www.instagram.com/stknovisad/',
        },
    },
]

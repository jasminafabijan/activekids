import okVojvodinaWebp from '../../assets/images/schools/volleyball/ok-vojvodina.webp'
import okVojvodinaJpg from '../../assets/images/schools/volleyball/ok-vojvodina.jpg'
import nsTimWebp from '../../assets/images/schools/volleyball/ns-tim.webp'
import nsTimJpg from '../../assets/images/schools/volleyball/ns-tim.jpg'
import zokNoviSadWebp from '../../assets/images/schools/volleyball/zok-novi-sad.webp'
import zokNoviSadJpg from '../../assets/images/schools/volleyball/zok-novi-sad.jpg'

import type { School } from './types'

export const volleyballSchools: School[] = [
    {
        id: 'ok-vojvodina-akademija',
        slug: 'ok-vojvodina-akademija',
        name: {
            sr: 'Akademija odbojke Vojvodina',
            en: 'Vojvodina Volleyball Academy',
        },
        categorySlugs: ['volleyball'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 8,
        maxAge: 14,
        ageLabel: '8–14 godina',
        imageWebp: okVojvodinaWebp,
        imageFallback: okVojvodinaJpg,
        description: {
            sr: [
                'Akademija odbojke Vojvodina radi pod okriljem Odbojkaškog kluba Vojvodina, sa ciljem da unapredi rad sa najmlađima i pripremi polaznike za starije uzrasne kategorije.',
                'Program je namenjen dečacima i devojčicama; treninzi se održavaju u SPC Vojvodina i u OŠ „Vasa Stajić“.',
                'Sa polaznicima rade provereni treneri, a glavni treneri akademije su Spasoje Milićević i Branko Roljić.',
                'Mnogi polaznici prelaze u pionirske, kadetske i juniorske selekcije kluba, a neki stižu i do prvog tima i reprezentacije.',
                'Akademija se oslanja na dugu tradiciju rada sa mlađim kategorijama OK Vojvodina i na uslove treninga u salama SPC Vojvodina.',
            ],
            en: [
                'Vojvodina Volleyball Academy works under Vojvodina Volleyball Club, with the aim of improving work with the youngest players and preparing pupils for older age categories.',
                'The program is for boys and girls; training is held at SPC Vojvodina and at Primary School “Vasa Stajić”.',
                'Proven coaches work with the pupils, and the academy’s head coaches are Spasoje Milićević and Branko Roljić.',
                'Many pupils move on to the club’s pioneer, cadet and junior selections, and some reach the first team and the national team.',
                'The academy draws on OK Vojvodina’s long tradition of work with younger age groups and on training conditions in the halls of SPC Vojvodina.',
            ],
        },
        addresses: [
            {
                street: 'SPC Vojvodina (SPENS), Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
            {
                street: 'OŠ „Vasa Stajić“, Pajevićeva',
                city: 'Novi Sad',
                district: 'Adamovićevo naselje',
                lat: 45.2463531,
                lng: 19.8264626,
            },
        ],
        contact: {
            phone: '064 146 4904',
            email: 'okvojvodina@mts.rs',
            website: 'https://okvojvodina.org/akademija/',
            facebook: 'https://www.facebook.com/okvojvodina',
            instagram: 'https://www.instagram.com/okvojvodina/',
        },
    },
    {
        id: 'ns-tim',
        slug: 'ns-tim',
        name: {
            sr: 'OK „NS-TIM”',
            en: 'NS-TIM Volleyball Club',
        },
        categorySlugs: ['volleyball'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 7,
        maxAge: 15,
        ageLabel: '7–15 godina',
        imageWebp: nsTimWebp,
        imageFallback: nsTimJpg,
        description: {
            sr: [
                'Škola odbojke „Kosta Trifković” odbojkaškog kluba NS-TIM jedna je od škola odbojke u Novom Sadu sa najdužom tradicijom — neprekidno radi više od dve decenije u istoimenoj osnovnoj školi.',
                'Vode je bivši odbojkaši i sportski stručnjaci Svetlana i Dragan Klašnić, uz edukovane trenere koji su potekli iz kluba.',
                'Program je namenjen devojčicama i obuhvata zdrav razvoj, sportsko vaspitanje, rad u kolektivu, razvoj motorike i usvajanje odbojkaških veština.',
                'Polaznice nastupaju na turnirima u mini odbojci, igraju prijateljske i prvenstvene mečeve i učestvuju na odbojkaškim kampovima.',
                'Školovanje traje pet odbojkaških godina, uz grupe podeljene prema uzrastu i nivou usvojene tehnike.',
            ],
            en: [
                'Volleyball school “Kosta Trifković” of volleyball club NS-TIM is one of the volleyball schools in Novi Sad with the longest tradition — it has run continuously for more than two decades at the primary school of the same name.',
                'It is led by former volleyball players and sports specialists Svetlana and Dragan Klašnić, together with trained coaches who came up through the club.',
                'The program is for girls and covers healthy development, sports education, working in a group, motor development and learning volleyball skills.',
                'Pupils appear at mini-volleyball tournaments, play friendly and championship matches, and take part in volleyball camps.',
                'The schooling lasts five volleyball years, with groups split by age and by the level of technique already learned.',
            ],
        },
        addresses: [
            {
                street: 'OŠ „Kosta Trifković”, Berislava Berića 2',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.2643036,
                lng: 19.8359461,
            },
            {
                street: 'Tehnička škola „Mileva Marić Anštajn”, Gagarinova 1',
                city: 'Novi Sad',
                district: 'Banatić',
                lat: 45.2618571,
                lng: 19.8280068,
            },
        ],
        contact: {
            phone: '069 477 04 74',
            email: 'odbojkaski.klub.ns.tim@gmail.com',
            website: 'https://odbojkaskiklubnsti.wixsite.com/ns-tim/about1-c1plb',
        },
    },
    {
        id: 'zok-novi-sad',
        slug: 'zok-novi-sad',
        name: {
            sr: 'ŽOK „Novi Sad”',
            en: 'Novi Sad Women’s Volleyball Club',
        },
        categorySlugs: ['volleyball'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 7,
        maxAge: null,
        ageLabel: '7+ godina',
        imageWebp: zokNoviSadWebp,
        imageFallback: zokNoviSadJpg,
        description: {
            sr: [
                'Ženski odbojkaški klub Novi Sad osnovan je 1999. i od početka je prepoznatljiv po radu sa mlađim kategorijama — kroz klub je prošlo više od 2000 devojčica.',
                'Školica odbojke prima nove članice, a zatim slede takmičarske selekcije od predpionirki i pionirki do kadetkinja, juniorki i seniorki.',
                'Program neguje tehniku, timski rad, fer-plej i zdrav razvoj, uz redovna takmičenja u vojvođanskim i nacionalnim ligama.',
                'Seniorska ekipa igra u Prvoj ligi Srbije, a mlađe ekipe čine sopstvenu bazu iz koje se biraju igračice za prvi tim.',
            ],
            en: [
                'Novi Sad Women’s Volleyball Club was founded in 1999 and from the start has been known for work with younger age groups — more than 2,000 girls have passed through the club.',
                'The volleyball school takes new members, followed by competitive selections from pre-pioneers and pioneers through cadets, juniors and seniors.',
                'The program nurtures technique, teamwork, fair play and healthy development, with regular competitions in Vojvodina and national leagues.',
                'The senior team plays in the First League of Serbia, and the younger teams form the club’s own base from which first-team players are chosen.',
            ],
        },
        addresses: [
            {
                street: 'SPC Vojvodina (SPENS), Sutjeska 3',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
        ],
        contact: {
            phone: '060 036 50 06',
            email: 'zoknovisad@yahoo.com',
            website: 'https://zoknovisad.org.rs/',
            instagram: 'https://www.instagram.com/zoknovisad/',
        },
    },
]

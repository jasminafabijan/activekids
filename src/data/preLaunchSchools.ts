export type PreLaunchSchool = {
  id: string
  name: string
  categorySlugs: string[]
  website?: string
  email?: string
  phone?: string | string[]
}

/** Schools contacted before the site existed. Not in the public catalog. */
export const preLaunchSchools: PreLaunchSchool[] = [
  {
    id: 'arte-dance',
    name: 'Studio Arte Dance',
    categorySlugs: ['dance'],
    website: 'https://www.instagram.com/artedance.novisad/',
  },
  {
    id: 'dream-dance',
    name: 'Dream Dance',
    categorySlugs: ['dance'],
    website: 'https://www.facebook.com/p/Dream-Dance-61573529607537/',
  },
  {
    id: 'hattrick',
    name: 'Škola fudbala Hattrick',
    categorySlugs: ['football'],
    email: 'hattrickdoo@gmail.com',
  },
  {
    id: 'radionice-presto',
    name: 'Radionice Presto',
    categorySlugs: ['music', 'art', 'acting', 'dance'],
    website: 'https://www.instagram.com/radionice.presto/',
  },
  {
    id: 'odgajanje-sa-muzikom',
    name: 'Odgajanje sa muzikom',
    categorySlugs: ['music'],
    website: 'https://www.instagram.com/odgajanjesamuzikom.novisad/',
  },
  {
    id: 'skolica-sporta-i-atletike',
    name: 'Školica sporta i atletike',
    categorySlugs: ['mini-sports', 'athletics'],
    website: 'https://www.facebook.com/SkolicaSportaiAtletikeNoviSad/',
  },
  {
    id: 'avalon',
    name: 'Edukativni centar Avalon',
    categorySlugs: ['languages'],
    email: 'info@avalonians.com',
  },
  {
    id: 'naucna-kuhinjica',
    name: 'Naučna kuhinjica Novi Sad',
    categorySlugs: ['science'],
    website: 'https://naucnakuhinjica.com',
    email: 'info@naucnakuhinjica.com',
  },
  {
    id: 'malac-genijalac',
    name: 'Malac Genijalac Novi Sad',
    categorySlugs: ['science'],
    website: 'https://www.facebook.com/malacnovisad',
  },
  {
    id: 'zmajolina',
    name: 'Zmajolina školica sporta',
    categorySlugs: ['kids-sports'],
    website: 'https://zmajolina.com',
    email: 'zmajolinasport@gmail.com',
  },
  {
    id: 'olimp-ladies-kids',
    name: 'Ladies & kids fitness klub Olimp',
    categorySlugs: ['developmental-gymnastics', 'kids-sports'],
    website: 'https://www.facebook.com/ladieskidsolimp/',
    email: 'teretanaolimpnovisad@gmail.com',
    phone: '064 2300 581',
  },
  {
    id: 'akademija-oxford',
    name: 'Akademija Oxford Novi Sad',
    categorySlugs: ['languages'],
    website: 'https://www.instagram.com/akademijaoxfordnovisad/',
  },
  {
    id: 'ns-pro-group',
    name: 'Centar za edukaciju NS Pro Group',
    categorySlugs: ['languages'],
    website: 'https://www.centarzaedukaciju.rs',
    email: 'info@nsprogroup.edu.rs',
  },
  {
    id: 'spartanac-ns',
    name: 'Džudo klub Spartanac NS',
    categorySlugs: ['judo'],
    website: 'https://www.facebook.com/profile.php?id=100049294727475',
  },
]

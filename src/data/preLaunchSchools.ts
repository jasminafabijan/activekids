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
]

export type PreLaunchSchool = {
  id: string
  name: string
  categorySlugs: string[]
  website?: string
  email?: string
  phone?: string | string[]
}

/** Schools contacted before the site existed. Not in the public catalog. */
export const preLaunchSchools: PreLaunchSchool[] = []

import type { School, SchoolAddress } from '../data/schools'

export type MapLocation = {
  locationId: string
  school: School
  address: SchoolAddress
  addressIndex: number
}

export const getSchoolLocationId = (schoolId: string, addressIndex: number) =>
  `${schoolId}-${addressIndex}`

export const getMapLocations = (schools: School[]): MapLocation[] =>
  schools.flatMap((school) =>
    (school.addresses ?? []).flatMap((address, addressIndex) => {
      if (address.lat == null || address.lng == null) {
        return []
      }

      return [
        {
          locationId: getSchoolLocationId(school.id, addressIndex),
          school,
          address,
          addressIndex,
        },
      ]
    })
  )

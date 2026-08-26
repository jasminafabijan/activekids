export type City = {
    name: string
    locative: string
}

export const DEFAULT_CITY = 'Novi Sad'

export const cities: City[] = [
    { name: DEFAULT_CITY, locative: 'Novom Sadu' },
    { name: 'Beočin', locative: 'Beočinu' },
]

export const getCityLocative = (cityName: string) => {
    const city = cities.find((entry) => entry.name === cityName)

    return city?.locative ?? cityName
}

export const getCityOptions = () => {
    const names = cities.map((city) => city.name)
    const rest = names
        .filter((name) => name !== DEFAULT_CITY)
        .sort((a, b) => a.localeCompare(b, 'sr'))

    return names.includes(DEFAULT_CITY) ? [DEFAULT_CITY, ...rest] : rest
}

/** Default catalog-map camera. Novi Sad stays framed on the city, not outlying settlements. */
export const CITY_MAP_VIEWS: Record<string, { center: [number, number]; zoom: number }> = {
    [DEFAULT_CITY]: { center: [45.255, 19.833], zoom: 12.5 },
}


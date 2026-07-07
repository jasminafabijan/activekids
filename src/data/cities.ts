export type City = {
    name: string
    locative: string
}

export const cities: City[] = [
    { name: 'Novi Sad', locative: 'Novom Sadu' },
]

export const getCityLocative = (cityName: string) => {
    const city = cities.find((entry) => entry.name === cityName)

    return city?.locative ?? cityName
}

export const getCityOptions = () =>
    cities.map((city) => city.name).sort((a, b) => a.localeCompare(b, 'sr'))

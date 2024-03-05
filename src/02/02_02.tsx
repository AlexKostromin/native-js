export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: governmentBuildingsType[]
    citizensNumber: number
}
type HousesType = {
    buildedAt: number
    repaired: boolean
    address: LocalAddressType
}
type LocalAddressType = {
    number?: number
    street: StreetType
}
type StreetType = {
    title: string
}
type governmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: LocalAddressType
}
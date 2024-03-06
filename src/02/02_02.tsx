export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}
export type HousesType = {
    id:number
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
export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: LocalAddressType
}
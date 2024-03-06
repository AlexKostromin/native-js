import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";

export const demolishHousesOnTheStreet = (city: CityType, Street: string) => {
    city.houses = city.houses.filter(el => el.address.street.title !== Street)
}

export const getBuildingWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], staff: number) => {
    return  buildings.filter(el => el.staffCount > staff)
}
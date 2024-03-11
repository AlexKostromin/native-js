import {GovernmentBuildingsType, HousesType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings:GovernmentBuildingsType[]) => {
    return buildings.map(el=>el.address.street.title)
}
export const getStreetsTitlesOfHouses = (houses:HousesType[]) => {
    return houses.map(el=>el.address.street.title)
}

export const createMessages = (houses:HousesType[]) => {
    return houses.map(el=>`Hello guys from ${el.address.street.title}`)
}
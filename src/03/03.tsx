import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType} from "../02/02_02";
import exp from "node:constants";
import {HousesType} from '../02/02_02'
export const AddSkill = (student: StudentType, skill: string) => {
    student.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        })
}
export const ChangeStatus = (student: StudentType) => {
    student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.address.city.title === city
}
export const addMoneyToBudget = (governmentBuildings: GovernmentBuildingsType, value: number) => {
    governmentBuildings.budget += value
}
/*
export const denolishHousesOnTheStreet = (city: CityType, street: string) => {
    return city.houses.map(el => el.address.street.title !== street)
}*/

export const repairHouse = (house: HousesType) => {
    house.repaired = true
}
export const toFireStaff = (building: GovernmentBuildingsType, staffCountFire: number) => {
    building.staffCount -= staffCountFire
}
export const toHireStaff = (building: GovernmentBuildingsType, staffCountHire: number) => {
    building.staffCount += staffCountHire
}
export const createMessage = (city:CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}
import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'White street'}
                }
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy street'}
                }
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: 'Happy street'}
                }
            }],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {street: {title: "Central str"}}
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 100,
                address: {street: {title: "South str"}}
            }],
        citizensNumber: 1000
    }
})
test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})
test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})
/*test.skip('Houses should be destroyed', () => {
    denolishHousesOnTheStreet(city, 'Happy street')
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})*/

test('House should be repaired', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})
test('staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})
test('House should be repared', () => {

    toHireStaff(city.governmentBuildings[1], 20)
    expect(city.governmentBuildings[1].staffCount).toBe(120)
})
test('Geting message should be correct for city', () => {
    const message = createMessage(city)
    expect(message).toBe('Hello New York citizens. I want you be happy. All 1000 men')
})
import {createGreetingMessage, ManType} from "./05";
import exp from "node:constants";

let people: ManType[] =
    beforeEach(() => {
        people = [
            {name: 'Andrew Ivanov', age: 33},
            {name: 'Alexandr Petrov', age: 24},
            {name: 'Dmitry Sidorov', age: 18},
        ]
    })

test('Should get array greeting messages', () => {
    const messages = createGreetingMessage(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Welcome to IT-Incubator Andrew')
    expect(messages[1]).toBe('Welcome to IT-Incubator Alexandr')
    expect(messages[2]).toBe('Welcome to IT-Incubator Dmitry')
})
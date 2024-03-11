export type ManType = {
    name: string
    age: number
}


export const people: ManType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexandr Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]


const dimychTransformator = (man: ManType) =>  ({
    stack:['css', 'html', 'js', 'react'],
    firstName:man.name.split(' ')[0],
    lastName:man.name.split(' ')[1]
})



const devs1 = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Anrew', lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Alexandr', lastName: 'Petrov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    },
];

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]
const devs3 = people.map(dimychTransformator)
const devs4 = people.map(el=>({
    stack:['css', 'html', 'js', 'react'],
    firstName:el.name.split(' ')[0],
    lastName:el.name.split(' ')[1]
}))

 const messages = people.map(el=> `Welcome to IT-Incubator ${el.name.split(' ')[0]}`)

export const createGreetingMessage = (people:ManType[]) => {
return people.map(el=> `Welcome to IT-Incubator ${el.name.split(' ')[0]}`)
}


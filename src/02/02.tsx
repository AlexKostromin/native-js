export type StudentType = {
    id:number
    name:string
    age:number
    isActive:boolean
    address: AddressType
    technologies:Technologies[]
}
export type AddressType = {
    city:string
    countryTitle:string
}
type Technologies = {
    id:number
    title:string
}

const student:StudentType = {
    id: 23,
    name: "Sanya",
    age: 27,
    isActive: false,
    address: {
        city: 'Voistrochenko',
        countryTitle: 'Russia'
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'JS'},
        {id: 13, title: 'React'}
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.isActive)
console.log(student.address.countryTitle)
console.log(student.technologies[0].title)
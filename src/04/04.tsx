const ages = [18, 20, 22, 1, 100, 90, 14]

const Predicat = (ages: number) => {
    return ages > 90
}


type Coursestype = {
    title: string
    price: number
}


export const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150},
]

export const ChipPredicate = (courses: Coursestype) => {
    return courses.price < 160
}
const chipCourses = [
    {title:"CSS" , price:110},
    {title:"REACT" , price:110}
]
import {StudentType} from "../02/02";
import {AddSkill, ChangeStatus, doesStudentLiveIn} from "./03";

let student:StudentType

beforeEach(()=> {
    student = {
        id: 23,
        name: "Sanya",
        age: 27,
        isActive: false,
        address: {
            city:
                {title:'Moscow'},
            countryTitle: 'Russia'
        },
        technologies: [
            {id: 1, title: 'HTML'},
            {id: 2, title: 'JS'},
            {id: 13, title: 'React'}
        ]
    }
})

test('new tach skill chould be added to student', () => {

    expect(student.technologies.length).toBe(3)

    AddSkill(student, 'CSS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("CSS")
    expect(student.technologies[3].id).toBeDefined()
})
test('student should be made active', () => {

    expect(student.isActive).toBe(false)

    ChangeStatus(student)

    expect(student.isActive).toBe(true)

})
test('does student live in city?', () => {

    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Minsk')

    expect(result1).toBe(true)
    expect(result2).toBe(false)

})
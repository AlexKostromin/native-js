import {ManType} from "./destructuring";

let props: ManType
beforeEach(() => {
    props = {
        name: 'Alex',
        age: 27,
        lessons: [{title: '1'}, {title: '2'}, {title:'3', name:'react'}],
        address: {
            street: {
                title: 'Voistrochenko'
            }
        }
    }
})

test('', () => {
    /*
        const age = props.age
        const lessons = props.lessons*/

    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(27)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Voistrochenko')
})

test('faas', () => {
    const l1 = props.lessons[0].title
    const l2 = props.lessons[1].title

    const [, ls2, ...restLessons] = props.lessons


    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')

    expect(l1).toBe('1')
    expect(l2).toBe('2')
    expect(restLessons[0]).toStrictEqual({title:'3', name:'react'})
})
type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType
beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '105': {id: 105, name: 'Natasha'},
        '102': {id: 102, name: 'Valera'},
        '103': {id: 103, name: 'Katya'},
    }
})


test('should update corresponding user from obj', () => {
    users['103'].name = "Ekaterina"

    expect(users['103'].name).toBe("Ekaterina")
    expect(users['103']).toEqual({id: 103, name: 'Ekaterina'})

})
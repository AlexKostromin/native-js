
type UsersType = {
    [key:string]:{id:number, name:string}
}

//export const usersArray = ['Dimych', 'Natasha', 'Valera', 'Katya']

export const userObj = {
    '0':'Dimych',
    '1':'Natasha',
    '2':'Valera',
    '3':'Katya'
}

export const users:UsersType = {
    '101': {id:101, name:'Dimych'},
    '105': {id:105, name:'Natasha'},
    '102': {id:102, name:'Valera'},
    '103': {id:103, name:'Katya'},
}
let user = {id:100500, name:'Igor'}

users[user.id] = user
export const usersArray = [
    {id:101, name:'Dimych'},
    {id:105, name:'Natasha'},
    {id:102, name:'Valera'},
    {id:103, name:'Katya'},
]
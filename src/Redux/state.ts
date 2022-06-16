export type rootStateType = {
    dialogsPage: dialogsPropsType
    profilePage: profilePagePropsType
}

export type dialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}
export type profilePagePropsType = {
    posts: Array<postsType>
}
export type messageType = {
    id: number
    message: string
}

export type dialogsType = {
    id: number
    name: string
}

export type postsType = {
    id: number
    message: string
    likeCounts: number
}


export const state: rootStateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Max'},
            {id: 3, name: 'Anthony'},
            {id: 4, name: 'Saymon'},
            {id: 5, name: 'Wayne'}
        ], messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Thanks!'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCounts: 23},
            {id: 2, message: "It's my first post", likeCounts: 50}
        ]
    }
}


/*
let dialogs = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Max'},
    {id: 3, name: 'Anthony'},
    {id: 4, name: 'Saymon'},
    {id: 5, name: 'Wayne'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Thanks!'}
]


let posts = [
    {id: 1, message: "Hi, how are you?", likeCounts: 23},
    {id: 2, message: "It's my first post", likeCounts: 50},
]*/

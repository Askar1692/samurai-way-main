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
    newPostText: string
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

export type StoreType = {
    _state: rootStateType
    changeNewText: (newPostText: string) => void
    addPost: (postText: string) => void
    _renderTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => rootStateType
    dispatch: (action: ActionTypes) => void
}

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT";


export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof ChangeNewTextAC>

export const addPostAC = (postText:string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}

export const ChangeNewTextAC = (newPostText:string)=> {
    return {
        type: CHANGE_NEW_TEXT,
        newPostText: newPostText
    } as const
}

export const store: StoreType = {
    _state: {
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
            ],

        },
        profilePage: {
            newPostText: "Hello my friend",
            posts: [
                {id: 1, message: "Hi, how are you?", likeCounts: 23},
                {id: 2, message: "It's my first post", likeCounts: 50}
            ]
        }

    },
    changeNewText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._renderTree()
    },
    addPost(postText: string) {
        const newPost: postsType = {
            id: 3,
            message: postText,
            likeCounts: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._renderTree()
    },
    _renderTree() {
        console.log('State changed')
    },
    subscribe(callback) {
        this._renderTree = callback
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if(action.type === ADD_POST){
            const newPost: postsType = {
                id: 3,
                message: action.postText,
                likeCounts: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._renderTree()
        }
        else if (action.type === CHANGE_NEW_TEXT){
            this._state.profilePage.newPostText = action.newPostText
            this._renderTree()
        }
    }
}

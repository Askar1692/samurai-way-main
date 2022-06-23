import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {addPost, changeNewText, rootStateType} from "./Redux/state";

type appPropsType = {
    state: rootStateType
    addPost:(postText:string)=>void
    newPostText:string
    changeNewText:(newPostText:string)=>void
}


export const App  = (props:appPropsType) => {

    /*let dialogs = state.dialogsPage.dialogs
    let messages = state.dialogsPage.messages
    let posts = state.profilePage.posts
*/
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                    messages={props.state.dialogsPage.messages}/>}/>
                    <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts}
                                                                    addPost={props.addPost}
                                                                    newPostText={props.state.profilePage.newPostText}
                                                                    changeNewText={props.changeNewText}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;

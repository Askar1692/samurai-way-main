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
import {ActionTypes, StoreType} from "./Redux/state";


type appPropsType = {
    store: StoreType
    dispatch: (action:ActionTypes) => void
}


export const App = (props: appPropsType) => {

    const state = props.store.getState();

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                                messages={state.dialogsPage.messages}/>}/>
                <Route path={'/profile'} render={() => <Profile posts={state.profilePage.posts}
                                                                /*addPost={props.store.addPost.bind(props.store)}*/
                                                                dispatch={props.store.dispatch.bind(props.store)}
                                                                newPostText={state.profilePage.newPostText}
                                                                /*changeNewText={props.store.changeNewText.bind(props.store)}*//>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;

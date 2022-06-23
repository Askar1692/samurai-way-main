import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewText, rootStateType, state, subscribe} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

export const renderTree = ()=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state ={state} addPost={addPost} newPostText={state.profilePage.newPostText} changeNewText={changeNewText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree()

subscribe(renderTree)
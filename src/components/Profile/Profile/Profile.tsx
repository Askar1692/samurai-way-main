import React from "react";
import s from './Profile.module.css'

import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ActionTypes, postsType} from "../../../Redux/state";
import {MyPosts} from "../MyPosts/MyPosts";

type profilePropsType = {
   /* addPost: (postText: string) => void*/
    posts: Array<postsType>
    newPostText: string
   /* changeNewText: (newPostText: string) => void*/
    dispatch: (action: ActionTypes) => void
}

export const Profile = (props: profilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            {/* <MyPosts/>*/}
            <MyPosts posts={props.posts}
                     dispatch={props.dispatch}
                     /*addPost={props.addPost}*/
                     newPostText={props.newPostText}
                     /*changeNewTextCallback={props.changeNewText}*//>
        </div>
    );
}
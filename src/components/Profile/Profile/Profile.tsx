import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {addPost, postsType, profilePagePropsType} from "../../../Redux/state";

type profilePropsType = {
    addPost:(postText:string)=>void
    posts:Array<postsType>
}

export const Profile = (props:profilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={addPost}/>
        </div>
    );
}
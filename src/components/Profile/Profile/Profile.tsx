import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {profilePagePropsType} from "../../../Redux/state";



export const Profile = (props:profilePagePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
}
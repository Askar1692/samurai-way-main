import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={"Hi, how are you?"} likeCounts={23}/>
                <Post message={"It's my first post"} likeCounts={50}/>
            </div>
        </div>
    );
}
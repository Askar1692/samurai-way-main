import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./post/Post";
import {profilePagePropsType} from "../../../Redux/state";




export const MyPosts = (props:profilePagePropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} />)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}
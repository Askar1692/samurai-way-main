import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './MyPosts.module.css'
import {Post} from "./post/Post";
import {postsType, profilePagePropsType} from "../../../Redux/state";

type myPostType = {
    addPost: (postText: string) => void
    posts: Array<postsType>
    newPostText: string
    changeNewTextCallback: (newPostText: string) => void
}


export const MyPosts = (props: myPostType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    //let newPostElement = React.createRef<HTMLTextAreaElement>() //ссылка ref
    const addPost = () => {
        props.addPost(props.newPostText)
        /*props.changeNewTextCallback('')*/
        //let text = newPostElement.current?.value
        /* alert(text)*/
       // if (newPostElement.current) {
        //    props.addPost(newPostElement.current.value)
          //  newPostElement.current.value = ''  // зачищает поле инпут
        }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        /*ref={newPostElement}*/
                              value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );

}

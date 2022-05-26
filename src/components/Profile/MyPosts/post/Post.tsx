import React from "react";
import s from './Post.module.css'

type PostMessageType={
    message: string
    likeCounts: number
}

export const Post = (props:PostMessageType) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ncY-heISk8kAf3J_MXmEi2Utnl0LsgsfQg&usqp=CAU'/>
            {props.message}
            <div>
                <span>Like</span> {props.likeCounts}
            </div>
        </div>
    );
}
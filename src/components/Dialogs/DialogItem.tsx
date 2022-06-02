import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}


export const DialogItem =(props: DialogItemType)=>{
    return (
        /*let path = '/dialogs/' + props.id*/   //вместо {'/dialogs/' + props.id} можно вставить эту переменную
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsType, messageType} from "../../Redux/state";

type dialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}

export const Dialogs = (props:dialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
    let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={`${s.messages} ${s.message}`}>
                {messagesElements}
            </div>
        </div>
    );
}

import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='John' id='1' />
                <DialogItem name='Max' id='2' />
                <DialogItem name='Anthony' id='3' />
                <DialogItem name='Saymon' id='4'/>
                <DialogItem name='Wayne' id='5' />
            </div>
            <div className={`${s.messages} ${s.message}`}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Thanks!'/>
            </div>
        </div>
    );
}
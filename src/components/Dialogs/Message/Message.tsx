import React from 'react';
import {messageType} from "../../../Redux/state";

export const Message =(props:messageType)=>{
    return (
        <div key={props.id}>
            <div >{props.message}</div>
        </div>
    )
}
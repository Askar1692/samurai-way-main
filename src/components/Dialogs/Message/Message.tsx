import React, {createRef} from 'react';
import {messageType} from "../../../Redux/state";

export const Message =(props:messageType)=>{

    let new_message = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        alert(new_message.current?.value)
    }
    return (
        <div key={props.id}>
            <textarea ref={new_message}></textarea>
            <button onClick={addMessage}>send</button>
            <div >{props.message}</div>
        </div>
    )
}
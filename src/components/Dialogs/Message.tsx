import React from 'react';

type MessageType={
    message: string
}

export const Message =(props:MessageType)=>{
    return (
        <div>
            <div>{props.message}</div>
        </div>
    )
}
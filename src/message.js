import React from 'react';
import './App.css';

function Message(props){
    return(
        <div className = 'counter'>{props.counter}</div>
    );
}
export default Message;
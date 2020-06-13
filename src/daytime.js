import React from 'react';
import './App.css';

function Daytime(props){
    return(
        <div className = {props.status ? 'morning':'night'}>
        <p>The day time is {props.status ? 'Morning' : 'Night'}</p>
        </div>
    );
}
export default Daytime;
import React from 'react';

const input = (props) => {
    return <input type='text' onChange = {props.changed} value={props.name}/>
}


export default input;
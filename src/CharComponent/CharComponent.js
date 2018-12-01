import React from 'react';


const charComponent = (props) => {


    const charComponentStyle = {
        display:'inline-block',
        padding:'16px',
        textAlign: 'center',
        margin:'16px',
        border:'1px solid black'
    }
    return (
        <span
            style={charComponentStyle}
            onClick={props.click}
            >
            {props.character}
        </span>

    );

};

export default charComponent;
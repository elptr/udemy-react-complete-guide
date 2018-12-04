import React from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) =>{



    let btn = classes.btnGreen;
    if(props.persons.length <= 1) btn = classes.btnRed;


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <button
                className={btn}
                onClick={props.clicked}
            >
                {props.buttonValue}
            </button>
        </div>

    )
}


export default Cockpit;
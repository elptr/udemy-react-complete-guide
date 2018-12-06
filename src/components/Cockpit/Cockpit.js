import React from 'react';
// import Aux from "../../hoc/Aux";
import classes from './Cockpit.css';

const Cockpit = (props) =>{



    let btn = [classes.btn, classes.btnGreen].join(' ');
    if(props.persons.length <= 1) btn = [classes.btn, classes.btnRed].join(' ');


    return (
        <>
            <h1>{props.title}</h1>
            <button
                className={btn}
                onClick={props.clicked}
            >
                {props.buttonValue}
            </button>
        </>

    )
}


export default Cockpit;
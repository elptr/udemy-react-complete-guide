
import React from 'react';
import input from "../Input/Input";
import classes from '../App.css';


const validationComponent = (props) => {
    const assignedClasses =[];





    const short = "Word is Too Short";
    const long = "Word is Too Long";
    let result = '';
    if(props.lettersLength <= 5 && props.lettersLength <= 2) {
        assignedClasses.push( classes.red );
        assignedClasses.push( classes.bold );
        result = short;
    }else if(props.lettersLength <= 5 && props.lettersLength > 2) {
        assignedClasses.push( classes.red );
        result = short;
    }else {
        result = long
        assignedClasses.push( classes.green );
    }


    return (
        <p className={assignedClasses.join(' ')}>{result}</p>
    )
}

export default validationComponent;
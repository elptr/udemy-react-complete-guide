
import React from 'react';
import input from "../Input/Input";

const validationComponent = (props) => {
    const short = "Word is Too Short";
    const long = "Word is Too Long";
    let result = '';
    if(props.lettersLength < 5) {
        result = short;
    }else {
        result = long
    }


    return (
        <p>{result}</p>
    )
}

export default validationComponent;
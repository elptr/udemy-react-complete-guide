import React from 'react';
import './Person.css';

const person = (props) => {
    // Example of throwing Error
    // const rnd = Math.random();
    // if(rnd > 0.7){
    //     throw new Error("Someth went wrong in Person.js file");
    // }


    return (
        <div className="Person">
            <p onClick = {props.click}>
                Person {props.name}, age {props.age}
            </p>

            <input
                type='text'
                onChange = {props.changed}
                value={props.name}/>
        </div>
        )

};

export default person;
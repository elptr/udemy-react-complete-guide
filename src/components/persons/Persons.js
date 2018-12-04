import React from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";


const Persons = (props) => props.persons.map( (prsn, index) => {
        return <ErrorBoundary key={prsn.id}>

            <Person
                name={prsn.name}
                age={prsn.age}
                click = {() => props.clicked(index)}
                changed = {(event) => props.changed(event, prsn.id)}
            />
        </ErrorBoundary>
    }
);


export default Persons;






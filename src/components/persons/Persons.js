import React, { Component } from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";


class Persons extends Component {
    constructor(props){
        super(props);

        this.state={}

        // console.log("People.js MOUNTING CONSTRUCTOR");
    }
    // static getDerivedStateFromProps(){
    //     console.log("People.js MOUNTING/UPDATE GET-DERIVED-STATE-FROM-PROPS");
    //     return null;
    // }
    //
    // componentDidMount(){
    //     console.log("People.js MOUNTING COMPONENT-DID-MOUNT");
    // }
    //
    // componentWillUnmount(){
    //     console.log("People.js UNMOUNT COMPONENT-WILL-UNMOUNT");
    // }



    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextProps.persons === this.props.persons ? "false" : "true",
    //         "People.js UPDATE SHOULD-COMPONENT-UPDATE",
    //         "nextProps => ", nextProps,
    //         "nextState => ", nextState
    //
    //     );
    //     return nextProps.persons === this.props.persons? false : true;
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("People.js UPDATE GET-SNAPSHOP-BEFORE-UPDATE",
    //         "prevProps => ", prevProps,
    //         "prevState => ", prevState
    //     );
    //     return null;
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot){
    //
    //     console.log("People.js UPDATE COMPONENT-DID-UPDATE",
    //         "snapshot => ", snapshot,
    //         "prevProps => ", prevProps,
    //         "prevState => ", prevState
    //     );
    //
    // }



    render(){
        // console.log("People.js MOUNTING/UPDATE RENDER");
        return this.props.persons.map( (prsn, index) =>
                <ErrorBoundary key={prsn.id}>
                    <Person
                        name={prsn.name}
                        age={prsn.age}
                        click={() => this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, prsn.id)}
                    />
                </ErrorBoundary>
        )
    }
};


export default Persons;






import React , { Component } from 'react';
import './Person.css';

class Person extends Component {

    constructor(props){
        super(props);
        this.state={}

        console.log("Person.js MOUNTING CONSTRUCTOR");
    }
    static getDerivedStateFromProps(){
        console.log("Person.js MOUNTING/UPDATE GET-DERIVED-STATE-FROM-PROPS");
        return null;
    }

    componentDidMount(){
        console.log("Person.js MOUNTING COMPONENT-DID-MOUNT");
    }
    componentWillUnmount(){
        console.log("Person.js UNMOUNT COMPONENT-WILL-UNMOUNT");
    }




    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps.name === this.props.name ? "false" : "true",
            "Person.js UPDATE SHOULD-COMPONENT-UPDATE",
            "nextProps => ", nextProps,
            "nextState => ", nextState

        );
        return nextProps.name === this.props.name? false : true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Person.js UPDATE GET-SNAPSHOP-BEFORE-UPDATE",
            "prevProps => ", prevProps,
            "prevState => ", prevState
        );
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){

        console.log("Person.js UPDATE COMPONENT-DID-UPDATE",
            "snapshot => ", snapshot,
            "prevProps => ", prevProps,
            "prevState => ", prevState
        );
    }
    render() {
        console.log("Person.js MOUNTING/UPDATE RENDER");
        return (
            <div className="Person">
                <p onClick={this.props.click}>
                    Person {this.props.name}, age {this.props.age}
                </p>

                <input
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </div>
        )
    }
};

export default Person;
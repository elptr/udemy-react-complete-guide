import React, { Component } from 'react';

import Persons from '../components/persons/Persons';
import ValidationComponent from '../components/ValidationComponent/ValidationComponent';

import CharComponent from '../components/CharComponent/CharComponent';
import Cockpit from '../components/Cockpit/Cockpit';

import classes from './App.css';
import Input from "../components/Input/Input";


class App extends Component {


    constructor (props){
        super(props);

        this.state = {
            persons:[
                {id:1, name: 'Mika', age:20},
                {id:2, name: 'Chera', age:21}
            ],
            showPersons: true,
            characterString:'',
            characterArr:[]
        }


        console.log("App.js MOUNTING CONSTRUCTOR");
    }

    static getDerivedStateFromProps(){
        console.log("App.js MOUNTING/UPDATE GET-DERIVED-STATE-FROM-PROPS");
        return null;
    }

    componentDidMount(){
        console.log("App.js MOUNTING COMPONENT-DID-MOUNT");
    }


    shouldComponentUpdate(nextProps, nextState){
        console.log("App.js UPDATE SHOULD-COMPONENT-UPDATE",
            "nextProps => ", nextProps,
            "nextState => ", nextState
        );
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("App.js UPDATE GET-SNAPSHOP-BEFORE-UPDATE",
            "prevProps => ", prevProps,
            "prevState => ", prevState
        );
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){

            console.log("App.js UPDATE COMPONENT-DID-UPDATE",
                "snapshot => ", snapshot,
                "prevProps => ", prevProps,
                "prevState => ", prevState
            );

    }

    clickSwitchNameHandler(newName){
        this.setState({
            persons: [
                {name: 'Lira'},
                {name: newName ? newName : 'Chera'}
            ]

        });
    }
    changeNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex( prsn => {
            return prsn.id === id;
        });
        // const person = {...this.state.persons[personIndex]};
        const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({ persons:persons });
        //
    }



    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons})
    }

    deletePersonHandler = (personIndex) => {
        // let imPersons = [...this.state.persons];
        let persons = this.state.persons;
        let imPersons = persons.slice();
        imPersons.splice(personIndex, 1);
        this.setState({persons:imPersons});
    }


    inputChangedHandler = (event) => {
        this.setState({characterString:event.target.value});


    }


    removeCharHandler = (index) => {
        // const str = this.state.characterString;
        // const charStringPart1 = str.substring(0, index);
        // const charStringPart2 = str.substring(index + 1, str.length);
        // const modifiedCharString = charStringPart1 + charStringPart2;
        // this.setState({characterString:modifiedCharString});



        const text = this.state.characterString.split('');
        text.splice(index,1);
        const updatedText = text.join('');
        this.setState({characterString:updatedText});




    }









    render(){
        console.log("App.js MOUNTING/UPDATE RENDER");

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <Persons
                    persons = {this.state.persons}
                    clicked = {this.deletePersonHandler}
                    changed = {this.changeNameHandler}
                />
            )
        }


        let characters = (
            this.state.characterString ?
                this.state.characterString.split('').map( (chrc, index) => {
                return <CharComponent
                    key={index+chrc}
                    character={chrc}
                    click={() => this.removeCharHandler(index)}
                />
            }) : null
        );





        return (
            <div className={classes.App}>

                <Cockpit
                    clicked = {this.togglePersonsHandler}
                    showPersons={this.state.showPersons}
                    persons = {this.state.persons}
                    buttonValue = "Toggle Names"
                    title={this.props.title}
                />

                {/*<Input*/}
                    {/*changed={this.changeNameHandler.bind(this)}*/}
                    {/*/>*/}
                <input type="text"
                       onChange = { (event) => this.inputChangedHandler(event)}
                       value={this.state.characterString}

                />

                <p>{this.state.characterString.length}</p>
                <ValidationComponent lettersLength = {this.state.characterString.length}/>

                {characters}


                {persons}



            </div>
        )
    }




    }

export default App;

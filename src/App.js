import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';

import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent'

import CharComponent from './CharComponent/CharComponent'


import Input from "./Input/Input";


class App extends Component {
    state = {
        persons:[
            {id:1, name: 'Mika', age:20},
            {id:2, name: 'Chera', age:21}
        ],
        showPersons: true,
        characterString:'',
        characterArr:[]
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



    togglePersonsHandler(){
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
        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map( (prsn, index) => {
                            return <Person
                                key={prsn.id}
                                name={prsn.name}
                                age={prsn.age}
                                click = {() => this.deletePersonHandler(index)}
                                changed = {(event) => this.changeNameHandler(event, prsn.id)}
                            />
                        }
                    )}
                </div>
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

                <button
                    onClick={() => this.togglePersonsHandler()}>
                    Toggle Names
                </button>
            </div>
        )
    }




    }

export default App;

import React, { Component } from 'react';
import './App.css';

import PersonsList from '../components/PersonsList/PersonsList';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    return state;
  } 

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      a: 123,
      b: 'asdf'
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  state = {
    persons: [
      { id: 1, name: 'Nic', age: 23 },
      { id: 2, name: 'Fer', age: 28 },
    ],
    showPersons: false,
    showCockpit: true,
  }



  switchNameHandler = () => {
    console.log("Button clicked!");
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(item => {
        return item.id === id;
    })

    let person = this.state.persons[personIndex];

    person.name = event.target.value;

    const persons = [...this.state.persons] 
    persons[personIndex] = person;

    this.setState({persons: persons});
  }


  togglePersons = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  render() {
    const { persons, showPersons, showCockpit } = this.state;

    let myPersonList = null;

    if (showPersons) { 
      myPersonList = (<PersonsList persons={persons} deletePersonHandler={this.deletePersonHandler} nameChangeHandler={this.nameChangeHandler} />);
    }

    return (
      <div className="App">
      <button onClick={() => {this.setState({showCockpit: false});}}></button>
      {showCockpit ? 
        <Cockpit 
        title="First App" 
        buttonText="Toggle Persons"
        clicked={this.togglePersons}/>
        : null
      }
        
        {myPersonList}
      </div>
    );
  }
}

export default App;

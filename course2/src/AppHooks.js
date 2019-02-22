import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const app = props => {

  const  [ personsState , setPersonsState ] = useState({
    persons: [
      {name: 'Nic', age: 23},
      {name: 'Fer', age: 28},
    ]
  });

  const [ dogsState, setDogsState ] = useState('text');
  
 
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Nic', age: 24},
        {name: 'Fer', age: 29},
      ]
    })
  }
  
  return (
    <div className="App">
      <h1>First App</h1>

      
      {personsState.persons.map((   item, index ) => { 
        return <Person key={index} name={item.name} age={item.age} />
      })}

      <button onClick={switchNameHandler}>Meu Botão rs</button>

    </div>
  );
}

export default app;
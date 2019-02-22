import React from 'react';
import Person from './Person/Person';

const personsList = props => {
    return(
        props.persons.map((item, index) => {
            return <Person
            name={item.name}
            key={item.id}
            age={item.age}
            click={() => props.deletePersonHandler(index)}
            changeName={(event) => props.nameChangeHandler(event, item.id)} />
        })
    )
}


export default personsList;
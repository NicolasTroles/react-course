import React from 'react';
import './Person.css';

const person = props => 
    <div className="Person">
        <p onClick={props.click}>
            Nome {props.name} e idade {props.age}. {props.children}
        </p>
        <input type='text' onChange={props.changeName} value={props.name} />
    </div>


export default person;
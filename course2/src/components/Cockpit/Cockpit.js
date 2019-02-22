import React, { useEffect, Fragment } from 'react';


const cockpit = props => {

    useEffect(() => {
        console.log('useEffect');

        return () => {
            console.log('Unmounting cockpit');
        }
    }, []);

    console.log('asdf');

    return (
        <Fragment>
            <h1>{props.title}</h1>
            <button onClick={props.clicked}>{props.buttonText}</button>
        </Fragment>
    )
}

export default React.memo(cockpit);
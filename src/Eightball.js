import React from 'react';
import { useState } from 'react';

import './Eightball.css'


const Eightball = ({answers}) => {
    // answers is an array of objects

    // pick a random index of the array of anwers
    const pickRandomMsg = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
    };
    const [eightball, setEightball] = useState({msg:'Think of a Question', color: 'black'})
    return (
        <div className="Eightball" style={ { backgroundColor: eightball.color } } onClick={() => setEightball(pickRandomMsg(answers))}>
            <p className="Eightball-text" style={ eightball.color === "black" ? { color: "white" } : { color: "black" } }>{eightball.msg}</p>
        </div>
    )
}

export {Eightball};
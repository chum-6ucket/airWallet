import React from 'react';
import { useState, useEffect } from "react"
import CSS from 'csstype';
import './state.css'

interface IfirstChildProps {
    name: string,
    updateName: (arg: string) => void
}

// const h1Styles: CSS.Properties = {
//     backgroundColor: 'rgba(255, 255, 255, 0.85)',
//     color: 'rgba(255, 255, 255, 0)';
//     position: 'absolute',
//     right: 0,
//     bottom: '2rem',
//     padding: '0.5rem',
//     fontFamily: 'sans-serif',
//     fontSize: '1.5rem',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
// };


export const FirstChild: React.FC = () => {
    const [firstChildName, setFirstChildName] = useState('state1')

    const change = () => {
        setFirstChildName('state2');
    }

    // useEffect(() => {
    //     setFirstChildName(name)
    // },[name])

    return (
        <section>
            <h1 className={firstChildName}> {firstChildName} </h1>
            <button onClick={change}> first child </button>
        </section>
    )
}
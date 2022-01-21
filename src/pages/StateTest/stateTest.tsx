import React from 'react';
import { useState, useEffect } from "react"
import {FirstChild} from './FirstChild';
import {SecondChild} from './SecondChild';
import '../../layout/Header/Header.module.css';
import '../../pages/StateTest/state.css'

export const StateTest:React.FC = () => {
    const [parentName, setParentName] = useState<string>('state1')
    // const [col, setCol] = useState('asd')
    const updateName = (name: string):void => {
        setParentName(name)
    }

    return (
        <div>
            <div className={parentName}>asdfdsa</div>
            <SecondChild name={parentName} updateName={updateName} />
        </div>
    )
}
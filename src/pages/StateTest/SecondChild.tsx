import React from 'react';
import { useState, useEffect } from "react"


interface IsecondChildProps {
    name: string,
    updateName: (arg: string) => void
}
export const SecondChild: React.FC<IsecondChildProps> = ({updateName}) => {
    // const [secondChildName, setSecondChildName] = useState<string>('')

    // useEffect(() => {
    //     setSecondChildName(name)
    // },[name])


    return (
        <section>

            {/*<h1 className={secondChildName}>{secondChildName}</h1>*/}

            <a onClick={() => updateName('state2')}> second child </a>
        </section>
    )
}
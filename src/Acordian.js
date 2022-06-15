import React, { useContext, useEffect, useState } from 'react'
import NoteContext from './context/NoteContext'


const Acordian = () => {
    const [show, setShow] = useState(false)

    const a = useContext(NoteContext)

    const propFun = () => {

        a.update()
    }
    // useEffect(() => {
    // }, [btn])

    return (
        <div>
            <h1> click the button to unlock Name , email </h1>
            <button onClick={() => { setShow(!show) }} > {show ? '-' : '+'} </button>
            {show ? <p> You unlocked The Name {a.s1.name} {a.s1.email} <button onClick={propFun} > Click to get another name & gmail</button> </p> : ''}

        </div>
    )
}

export default Acordian
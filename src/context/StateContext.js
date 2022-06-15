import { useState } from "react"
import NoteContext from "./NoteContext"
const StateContext = (props) => {
    const state = {
        "name": "shivam",
        "email":"shivamsingh44553@gmail.com"
    }
    const [s1, setS1] = useState(state)

    const update = () => {
        setTimeout(() => {
            setS1({
                "name":"Saurabh",
                "email":"singhs44286@gmail.com"
            })
        }, 1000)

    }
    return (
        <>
            <NoteContext.Provider value={{s1 , update}} >
                {props.children}
            </NoteContext.Provider>
        </>
    )

}
export default StateContext
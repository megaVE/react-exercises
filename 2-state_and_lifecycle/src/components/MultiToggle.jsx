import { useState } from "react"

const MultiToggle = () => {
    const [toggle, setToggle] = useState("ON")
    const [counter, setCounter] = useState(0)

    const handleToggle = () => {
        setToggle(state => state === "ON" ? "OFF" : "ON")
    }

    const handleCounter = () => {
        setCounter(state => state + 1)
    }

    return (
        <>
            <button onClick={() => {handleToggle(); handleCounter()}}>{toggle}</button>
            <p>You clicked the button {counter} times.</p>
        </>
    )
}

export default MultiToggle
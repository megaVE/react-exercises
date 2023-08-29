/* 8th Exercise*/

import { useState } from "react"

const ToggleButtonCounter = () => {
    const [btn, setBtn] = useState(true)
    const [counter, setCounter] = useState(0)

    const handleClick = (e) => {
        setBtn(!btn)
        setCounter(counter+1)
    }

    return (
        <button onClick={handleClick}>{btn ? "ON" : "OFF"} {`(x${counter})`}</button>
    )
}

export default ToggleButtonCounter
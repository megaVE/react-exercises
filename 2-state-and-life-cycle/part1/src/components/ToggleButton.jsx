/* 7th Exercise*/

import { useState } from "react"

const ToggleButton = () => {
    const [btn, setBtn] = useState(true)
    return (
        <button onClick={(e) => setBtn(!btn)}>{btn ? "ON" : "OFF"}</button>
    )
}

export default ToggleButton
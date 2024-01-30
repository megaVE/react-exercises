import { useState } from "react"

const Toggle = () => {
    const [text, setText] = useState("ON")

    const handleToggle = () => {
        setText(state => state === "ON" ? "OFF" : "ON")
    }

    return (
        <button onClick={handleToggle}>{text}</button>
    )
}

export default Toggle
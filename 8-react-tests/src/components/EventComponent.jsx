import React from "react"
import { useState } from "react"

const EventComponent = () => {
    const [text, setText] = useState("Changeable text")

    return (
        <div>
            <p data-testid="text">{text}</p>
            <button onClick={() => setText("It changed!")}>Change Text</button>
        </div>
    )
}

export default EventComponent
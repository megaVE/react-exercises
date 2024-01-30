import { useState } from "react"

const Counter = () => {
    const [number, setNumber] = useState(0)

    const handleIncrease = () => {
        setNumber(state => state + 1)
    }

    return (
        <div>
            <p>Counter: {number}</p>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default Counter
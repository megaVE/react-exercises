/* 6th Exercise */

import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    
    return (<>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter+1)}>Increase</button>
    </>)
}

export default Counter
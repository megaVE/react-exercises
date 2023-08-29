/* 9th Exercise */

import { useState, useEffect } from "react"

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {clearInterval(timer)}
    }, []);

    return (
        <p>Current time: {time.toLocaleTimeString()}</p>
    )
}

export default Clock
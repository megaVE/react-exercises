import { useState } from "react"
import { useEffect } from "react"

const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return (
        <p>Current time: {date.toString()}</p>
    )
}

export default Clock
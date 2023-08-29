/* 12th Exercise */

import { useState, useEffect } from "react"

const CheckWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWidth = () => setWidth(window.innerWidth)

        window.addEventListener("resize", handleWidth)
        
        return () => window.removeEventListener("resize", handleWidth)
    }, [])

    return (
        <p>Current Width Length: {width} px</p>
    )
}

export default CheckWidth
import styles from "./StyledButton.module.css"

import { useState } from "react"

const StyledButton = () => {
    const [theme, setTheme] = useState("Light")

    const handleTheme = () => {
        setTheme(state => state === "Light" ? "Dark" : "Light")
    }
    
    return (
        <button
            onClick={handleTheme}
            className={theme === "Light" ? styles.light : styles.dark}
        >{theme}</button>
    )
}

export default StyledButton
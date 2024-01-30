import { useState, useEffect } from "react"

const ScreenChecker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <p>Current Window Width: {windowWidth} px</p>
  )
}

export default ScreenChecker
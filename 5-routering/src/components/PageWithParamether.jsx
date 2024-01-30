import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PageWithParamether = () => {
    const navigate = useNavigate()
    
    const [parameter, setParameter] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`/custom/${parameter}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="parameter">Parameter: </label>
            <input
                type="text"
                name="parameter"
                id="parameter"
                value={parameter}
                onChange={(e) => setParameter(e.target.value)}    
            />
            <input type="submit" value="Go" />
        </form>
    )
}

export default PageWithParamether
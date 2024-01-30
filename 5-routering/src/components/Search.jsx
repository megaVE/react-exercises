import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {
    const navigate = useNavigate()

    const [query, setQuery] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`/search?query=${query}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="query">Search </label>
                <input
                    type="text"
                    name="query"
                    id="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <input type="submit" value="Search" />
        </form>
    )
}

export default Search
import { Link, useSearchParams } from "react-router-dom"

const PageSearch = () => {
    const [searchParams] = useSearchParams()

    const query = searchParams.get('query')

    return (
        <div>
            <Link to="/">Return</Link>
            <p>You are currently searching for "{query}"</p>
        </div>
    )
}

export default PageSearch
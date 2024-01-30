import { Link, useParams } from "react-router-dom"

const PageCustom = () => {
    const { parameter } = useParams()
  
    return (
        <div>
            <Link to="/">Return</Link>
            <p>{parameter} Page</p>
        </div>
    )
}

export default PageCustom
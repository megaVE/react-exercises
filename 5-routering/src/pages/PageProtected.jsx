import { Link } from "react-router-dom"

const PageProtected = () => {
  return (
    <div>
        <Link to="/">Return</Link>
        <p>This is a protected page. Only authorized users can be here.</p>
    </div>
  )
}

export default PageProtected
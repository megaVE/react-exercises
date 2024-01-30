import { Link } from "react-router-dom"

import Search from "../components/Search"

import PageNavitagion from "../components/PageNavitagion"
import PageWithParamether from "../components/PageWithParamether"

const PageDefault = ({ auth, handleAuth }) => {
  return (
    <div>
        <h2>24. Basic navigation</h2>
        <PageNavitagion />
        <h2>25. Parameterized route</h2>
        <PageWithParamether />
        <h2>28. Route with query params</h2>
        <Search />
        <h2>29. Protected route</h2>
        <button onClick={handleAuth}>Logged in? {auth ? "YES" : "NO"}</button>
        <Link to="/protected">Access</Link>        
    </div>
  )
}

export default PageDefault
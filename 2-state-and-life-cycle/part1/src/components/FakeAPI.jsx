/* 13th Exercise */

import { useState } from "react";

const FakeAPI = () => {
    const [request, setRequest] = useState("")
    const [loading, setLoading] = useState(false) 
    const [response, setResponse] = useState({status: false, request: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setResponse({status: false, request: ""})
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setResponse({status: true, request})
            setRequest("")
        }, 1000)
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="request" id="request" value={request} onChange={(e) => setRequest(e.target.value)}/>
            <input type="submit" value="Send Request"/>
        </form>
        {loading && (<p>Loading current request...</p>)}
        {response.status && (<p>{`Response received from "${response.request}" request`}</p>)}
    </div>)
}

export default FakeAPI
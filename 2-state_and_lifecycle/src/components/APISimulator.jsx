import { useState, useEffect } from "react"

const res = {
    "influence": 759255943.465141,
    "family": "strange",
    "using": "film",
    "surface": {
        "specific": "sound",
        "flew": true,
        "notice": -618581890.427454,
        "children": true
    }
}

const APISimulator = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setData(JSON.stringify(res))
        }, 2000)
    }, [])

    return (
        <div>
            {data
                ? (
                    <>
                        <h3>Server Response:</h3>
                        <p>{data}</p>
                    </>
                ) : (<p>Loading...</p>)
            }
        </div>
    )
}

export default APISimulator
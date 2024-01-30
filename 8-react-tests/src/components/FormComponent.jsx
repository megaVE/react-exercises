import React, { useState } from "react"

const FormComponent = () => {
    const [text, setText] = useState("")
    const [isSubmited, setIsSubmited] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    
        setIsSubmited(true)
        console.log(text)
    }

    return (
        <form onSubmit={handleSubmit} data-testid="form">
            <div>
                <label htmlFor="text">Input: </label>
                <input
                    type="text"
                    name="text"
                    id="text"
                    data-testid="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <input type="submit" value="Send" />
            {isSubmited && <p data-testid="output">{text}</p>}
        </form>
    )
}

export default FormComponent
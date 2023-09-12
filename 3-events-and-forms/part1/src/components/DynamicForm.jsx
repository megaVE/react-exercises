import "./FormMode.css"

import { useState } from "react"

const DynamicForm = () => {
    const[content, setContent] = useState([""])

    const handleChange = (e, x) => {
        const auxContent = [...content]
        auxContent[x] = e.target.value
        setContent(auxContent)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(content)
    }

    return (<form onSubmit={handleSubmit}>
        {content.map((field, x) => (
        <div key={x} className="form-input">
            <input type="text" name={x} id={x} value={field} onChange={(e) => handleChange(e, x)}/>
        </div>))}
        <input type="button" value="Add" onClick={() => setContent([...content, ""])}/>
        <input type="submit" value="Confirm"/>
    </form>)
}

export default DynamicForm
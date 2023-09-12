import "./FormMode.css"

import { useState } from "react"

const DynamicFormMod = () => {
    const[content, setContent] = useState([""])

    const handleChange = (e, x) => {
        const auxContent = [...content]
        auxContent[x] = e.target.value
        setContent(auxContent)
    }

    const handleSubmit = (e) => {
        let hasEmpty = false;
        e.preventDefault()        
        content.forEach(element => {
            if(element === ""){
                hasEmpty = true
                return
            }
        })
        if(!hasEmpty)
            console.log(content)
    }

    return (<form onSubmit={handleSubmit}>
        {content.map((field, x) => (
        <div key={x} className="form-input">
            <input type="text" name={x} id={x} value={field} onChange={(e) => handleChange(e, x)}/>
            {field === "" && (<p>Preencha este campo!</p>)}
        </div>))}
        <input type="button" value="Add" onClick={() => setContent([...content, ""])}/>
        <input type="submit" value="Confirm"/>
    </form>)
}

export default DynamicFormMod
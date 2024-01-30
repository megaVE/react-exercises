import { useState } from "react"

const DynamicForm = () => {
    const [fields, setFields] = useState([])

    const addNewField = (e) => {
        e.preventDefault()

        setFields(state => [...state, ""])
    }

    const changeField = (e, index) => {
        setFields(state => {
            let newState = [...state]

            newState[index] = e.target.value

            return newState
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(fields)
    }

    return (
        <form onSubmit={handleSubmit}>
            {fields && fields.map((field, index) => (
                <div key={index}>
                    <label htmlFor={`field-${index}`}>Field {index + 1} </label>
                    <input
                        type="text"
                        name={`field-${index}`}
                        id={`field-${index}`}
                        value={field}
                        onChange={(e) => changeField(e, index)}
                    />
                </div>
            ))}
            <button onClick={addNewField}>Add new field</button>
            <input type="submit" value="Submit" />
        </form>
    )
    }

export default DynamicForm
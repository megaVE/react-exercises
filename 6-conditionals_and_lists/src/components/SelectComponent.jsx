import { useState } from "react"

const SelectComponent = ({ list }) => {
    const [selected, setSelected] = useState([])

    const selectedStyle = {
        backgroundColor: "#000",
        color: "#fff",
    }

    const handleSelect = (index) => {
        if(selected.includes(index)){
            setSelected(state => state.filter(element => element !== index))
        } else {
            let newSelected = [...selected]

            newSelected.push(index)

            setSelected(newSelected)
        }
    }

    const handleSelectDeselectAll = (e) => {
        e.preventDefault()

        if(selected.length === list.length) {
            // Deselect All
            setSelected([])
        } else {
            // Select All
            let fullList = []

            for(let i = 0; i < list.length; i++){
                fullList.push(i)
            }

            setSelected(fullList)
        }
    }
    
    return (
        <div>
            <ul>
                {list.map((element, index) => (
                    <li
                        key={index}
                        style={selected.includes(index) ? selectedStyle : {listStyle: "none"}}
                        onClick={() => handleSelect(index)}
                    >
                        {element}
                    </li>
                ))}
            </ul>
            <button onClick={handleSelectDeselectAll}>{(selected.length === list.length) ? "Deselect All" : "Select All"}</button>
        </div>
    )
}

export default SelectComponent
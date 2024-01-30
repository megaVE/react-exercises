import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"

const TodoForm = () => {
    const [task, setTask] = useState("")
    const { addTask } = useContext(TodoContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        addTask(task)
        setTask("")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task">Task </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <input type="submit" value="Add" />
        </form>
    )
}

export default TodoForm
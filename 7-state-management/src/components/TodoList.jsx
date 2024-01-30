import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

const TodoList = () => {
    const { tasks, completeTask, deleteTask } = useContext(TodoContext)

    return (
        <ul>
            {tasks && tasks.map(task => (
                <li key={task.id}>
                    <p>[{task.completed ? "Complete" : "Incomplete"}] {task.name}</p>
                    <button onClick={() => completeTask(task.id)} disabled={task.completed}>Conclude</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
import { useState } from "react"

const TodoList = () => {
    const [task, setTask] = useState("")
    const [query, setQuery] = useState("")
    const [tasks, setTasks] = useState([])
  
    const handleTask = (e) => {
        e.preventDefault()

        if(task === "") {
            return
        }

        const newTask = {
            task,
            id: tasks.length + 1
        }

        setTasks(state => [...state, newTask])
        setTask("")
    }

    return (
        <div>
            <form onSubmit={handleTask}>
                <div>
                    <label htmlFor="task">Task: </label>
                    <input
                        type="text"
                        name="task"
                        placeholder="Enter a new task"
                        id="task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <input type="submit" value="Add" />
                </div>
                <div>
                    <label htmlFor="query">Filter </label>
                    <input
                        type="text"
                        name="query"
                        id="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </form>
            <ul>
                {tasks && tasks.map(task =>
                    (query === "" || task.task.includes(query)) && (<li key={task.id}>{task.id}. {task.task}</li>)
                )}
            </ul>
        </div>
    )
}

export default TodoList
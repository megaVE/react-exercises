/* 11th Exercise */

import { useState } from "react"

const TodoListUpgrade = () => {
    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState("")
    const [filter, setFilter] = useState("")
    let id = 1

    const handleSubmit = (e) => {
        e.preventDefault()
        setTaskList([...taskList, {id, task}])
        setTask("")
        id++
    }

    return (<>
        <label htmlFor="filter"> Search Filter<br/></label>
        <input type="text" name="filter" id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}/>
        <ol>
            {taskList
            .filter((taskElement) => taskElement.task.includes(filter) || filter === "")
            .map((taskElement) => (
                <li key={taskElement.id}>{taskElement.task}</li>
            ))}
        </ol>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" id="task" value={task} onChange={(e) => setTask(e.target.value)}/>
            <input type="submit" value="Add Task"/>
        </form>
    </>)
}

export default TodoListUpgrade
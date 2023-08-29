/* 10th Exercise */

import { useState } from "react"

const TodoList = () => {
    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState("")
    let id = 1

    const handleSubmit = (e) => {
        e.preventDefault()
        setTaskList([...taskList, {id, task}])
        setTask("")
        id++
    }

    return (<>
        <ol>
            {taskList.map((taskElement) => (
                <li key={taskElement.id}>{taskElement.task}</li>
            ))}
        </ol>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" id="task" value={task} onChange={(e) => setTask(e.target.value)}/>
            <input type="submit" value="Add Task"/>
        </form>
    </>)
}

export default TodoList
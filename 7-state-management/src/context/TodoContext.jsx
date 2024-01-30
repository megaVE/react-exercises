import { createContext, useState } from "react";

export const TodoContext = createContext()

export function TodoProvider({ children }) {
    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        setTasks(state => [...state, {
            id: Date.now(),
            name: task,
            completed: false,
        }])
    }

    const deleteTask = (task) => {
        setTasks(state => state.filter(element => element.id !== task))
    }

    const completeTask = (task) => {
        setTasks(state => state.map(element => element.id === task ? { ...element, completed: true } : element))
    }

    return (<TodoContext.Provider value={{ tasks, addTask, deleteTask, completeTask }}>
        {children}
    </TodoContext.Provider>)
}
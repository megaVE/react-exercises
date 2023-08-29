import './App.css'

import ToggleButton from './components/ToggleButton'
import ToggleButtonCounter from './components/ToggleButtonCounter'
import Clock from './components/Clock'
import TodoList from './components/TodoList'
import TodoListUpgrade from './components/TodoListUpgrade'
import CheckWidth from './components/CheckWidth'
import FakeAPI from './components/FakeAPI'

function App() {
  return (
    <>
    <h2>7: Using state</h2>
    <ToggleButton/>{/* Exercicio 7 */}
    <h2>8: Multiple states</h2>
    <ToggleButtonCounter/>{/* Exercicio 8 */}
    <h2>9: Real time clock</h2>
    <Clock/>{/* Exercicio 9 */}
    <h2>10: To do list</h2>
    <TodoList/>{/* Exercicio 10 */}
    <h2>11: Filter</h2>
    <TodoListUpgrade/>{/* Exercicio 11 */}
    <h2>12: Screen checker</h2>
    <CheckWidth/>{/* Exercicio 12 */}
    <h2>13: Simulating requesting to API</h2>
    <FakeAPI/>{/* Exercicio 13 */}
    </>
  )
}

export default App

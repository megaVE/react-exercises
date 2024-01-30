import './App.css'

import Toggle from './components/Toggle'
import MultiToggle from './components/MultiToggle'
import Clock from './components/Clock'
import TodoList from './components/TodoList'
import ScreenChecker from './components/ScreenChecker'
import APISimulator from './components/APISimulator'

function App() {
  return (
    <>
      <h2>7. Using state</h2>
      <Toggle />
      <h2>8. Multiple states</h2>
      <MultiToggle />
      <h2>9. Real time clock</h2>
      <Clock />
      <h2>10. Task List</h2>
      <h2>11. Filter</h2>
      <TodoList />
      <h2>12. Screen width checker</h2>
      <ScreenChecker />
      <h2>13. API Simulator</h2>
      <APISimulator />
    </>
  )
}

export default App

import './App.css'

import DateTimeComponent from './components/DateTimeComponent'
import SwitchComponent from './components/SwitchComponent'
import NestedComponent from './components/NestedComponent'
import TernariumComponent from './components/TernariumComponent'
import SelectComponent from './components/SelectComponent'

function App() {
  return (
    <>
      <h2>30. Rendering with ternarium</h2>
      <TernariumComponent isFooter={true} />
      <h2>31. Rendering with switch</h2>
      <SwitchComponent verb={"POST"} />
      <h2>32. Nested lists</h2>
      <NestedComponent list={[["11", "12", "13"], ["21", "22", "23"], ["31", "32", "33"]]} />
      <h2>33. Time based component</h2>
      <DateTimeComponent />
      <h2>34. Multi selection</h2>
      <SelectComponent list={["one", "two", "three", "four"]} />
    </>
  )
}

export default App

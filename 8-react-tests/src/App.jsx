import './App.css'

import TestComponent from './components/TestComponent'
import EventComponent from './components/EventComponent'
import FormComponent from './components/FormComponent'

function App() {

  return (
    <>
      <h2>39. Testing a component</h2>
      <TestComponent input="Lend me some money" />
      <h2>40. Testing an event simulation</h2>
      <EventComponent />
      <h2>41. Testing a form</h2>
      <FormComponent />
    </>
  )
}

export default App

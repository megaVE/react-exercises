import './App.css'

import HelloWorld from './components/HelloWorld'
import MultiPropsUsage from './components/MultiPropsUsage'
import PropsUsage from './components/PropsUsage'
import ComposingComponent from './components/ComposingComponent'
import Counter from './components/Counter'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <>
      <h2>1. Create a simple component</h2>
      <HelloWorld />
      <h2>2. Using props</h2>
      <PropsUsage name="megaVE" />
      <h2>3. Multiple props</h2>
      <MultiPropsUsage
        name="megaVE"
        age={20}
        city="Alfenas"
      />
      <h2>4. Components composition</h2>
      <ComposingComponent
        members={[
          {
            name: "megaVE",
            age: 20,
            city: "Alfenas",
          },
          {
            name: "Żoakim",
            age: 19,
            city: "Kielce",
          },
          {
            name: "Roxxane",
            age: 19,
            city: "Barcelona",
          }
        ]}
      />
      <h2>5. Class component</h2>
      <ClassComponent
        name="megaVE"
        age={20}
        city="Alfenas"
      />
      <h2>6. Component with state</h2>
      <Counter />
    </>
  )
}

export default App

import './App.css'

import HelloWorld from '../components/HelloWorld'
import NameReceiver from '../components/NameReceiver'
import DataReceiver from '../components/DataReceiver'
import MultiDataReceiver from '../components/MultiDataReceiver'
import ClassDataReceiver from '../components/ClassDataReceiver'
import Counter from '../components/Counter'

function App() {
  const memberList = [
  {place: "Xique-Xique", age: 10, sunglasses: false},
  {place: "Kielce", age: 40, sunglasses: true}]

  return (
    <>
      <h2>1: Creating a Component</h2>
      <HelloWorld/> {/* Exercicio 1 */}
      <h2>2: Using Props</h2>
      <NameReceiver name="Ednaldo Pereira"/> {/* Exercicio 2 */}
      <h2>3: Multiple Props</h2>
      <DataReceiver place="Guarabira" age={50} sunglasses={true}/> {/* Exercicio 3 */}
      <h2>4: Composing Components</h2>
      <MultiDataReceiver members={memberList}/> {/* Exercicio 4 */}
      <h2>5: Class Component</h2>
      <ClassDataReceiver place="Dove Valley" age={20} sunglasses={false}/> {/* Exercicio 5 */}
      <h2>6: Component with State</h2>
      <Counter/> {/* Exercicio 6 */}
    </>
  )
}

export default App

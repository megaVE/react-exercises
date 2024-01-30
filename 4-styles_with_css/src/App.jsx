import './App.css'

import HelloWithStyles from './components/HelloWithStyles'
import SASSComponent from './components/SASSComponent'
import StyledButton from './components/StyledButton'
import StyledComponent from './components/StyledComponent'
import StyledComponentLib from './components/StyledComponentLib'

function App() {
  return (
    <>
      <h2>19. HelloWorld with styles</h2>
      <HelloWithStyles />
      <h2>20. Style with external CSS</h2>
      <StyledComponent />
      <h2>21. Light and dark theme</h2>
      <StyledButton />
      <h2>22. Styled components</h2>
      <StyledComponentLib />
      <h2>23. SASS with React</h2>
      <SASSComponent />
    </>
  )
}

export default App

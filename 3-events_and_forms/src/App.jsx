import './App.css'

import RegisterForm from './components/RegisterForm'
import DynamicForm from './components/DynamicForm'
import ValidationForm from './components/ValidationForm'
import FileUploads from './components/FileUploads'
import MultiStepForm from './components/MultiStepForm'

function App() {
  return (
    <>
      <h2>14. Register form</h2>
      <RegisterForm />
      <h2>15. Dynamic form</h2>
      <DynamicForm />
      <h2>16. Form validation</h2>
      <ValidationForm />
      <h2>17. File upload</h2>
      <FileUploads />
      <h2>18. Multi step form</h2>
      <MultiStepForm />
    </>
  )
}

export default App

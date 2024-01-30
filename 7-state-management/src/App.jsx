import './App.css'

import store from './store'

import { Provider } from 'react-redux'

import { TodoProvider } from './context/TodoContext'

import postStore from './context/posts/store'

import ReduxCounter from './components/ReduxCounter'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import ReduxPage from './components/ReduxPage'
import ReactFinalForm from './components/ReactFinalForm'

function App() {
  return (
    <>
      <h2>35. Counter with Redux</h2>
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
      <h2>36. Todo with Context API</h2>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
      <h2>37. Pagination with Redux</h2>
      <Provider store={postStore}>
        <ReduxPage />
      </Provider>
      <h2>38. Form with React Final Form</h2>
      <ReactFinalForm />
    </>
  )
}

export default App

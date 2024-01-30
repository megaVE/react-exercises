import './App.css'

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import PageDefault from './pages/PageDefault'
import PageCustom from './pages/PageCustom'
import PageError from './pages/PageError'
import PageProtected from './pages/PageProtected'
import PageSearch from './pages/PageSearch'

function App() {
  const [auth, setAuth] = useState(false)

  const handleAuth = () => {
    setAuth(state => !state)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/custom/:parameter" element={<PageCustom />}/>
          <Route path="/search" element={<PageSearch />} />
          <Route path="/protected" element={auth ? <PageProtected/> : <PageError />} />
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
          <Route path="/3" element={<Page3 />} />
          <Route path="/" element={<PageDefault auth={auth} handleAuth={handleAuth}/>}/>
          <Route path="*" element={<PageError />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

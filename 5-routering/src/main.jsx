import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import PageDefault from './pages/PageDefault.jsx'
// import Page1 from './pages/Page1.jsx'
// import Page2 from './pages/Page2.jsx'
// import Page3 from './pages/Page3.jsx'
// import PageSearch from './pages/PageSearch.jsx'
// import PageProtected from './pages/PageProtected.jsx'
// import PageCustom from './pages/PageCustom.jsx'
// import PageError from './pages/PageError.jsx'
// import PageOutlet from './components/PageOutlet.jsx'

// const auth = true
// // const auth = false

// const handleAuth = () => null

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PageOutlet />,
//     errorElement: <PageError />,
//     children: [
//       {
//         path: "/",
//         element: <PageDefault auth={auth} handleAuth={handleAuth} />,
//       },
//       {
//         path: "1",
//         element: <Page1 />,
//       },
//       {
//         path: "/2",
//         element: <Page2 />,
//       },
//       {
//         path: "/3",
//         element: <Page3 />,
//       },
//       {
//         path: "/search",
//         element: <PageSearch />,
//       },
//       {
//         path: "/protected",
//         element: auth ? <PageProtected/> : <PageError />,
//       },
//       {
//         path: "/custom/:parameter",
//         element: <PageCustom />,
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)

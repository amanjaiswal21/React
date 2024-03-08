import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import Github from './component/Github/Github.jsx'
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     childern:[
//       {
        
//     path:"home",
//     element:<Home/>,
//       },
//       { 
//     path:"about",
//     element:<About/>,
//       },
//       {
//     path:'contact',
//     element:<Contact/>,
//       },

//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='github' element={<Github />} />

      <Route path='user/:userId' element={<User />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

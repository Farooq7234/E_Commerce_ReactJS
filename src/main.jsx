import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/Home/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Contact from './component/Contact/Contact.jsx'
import About from './component/About/About.jsx'
import Groceries from './component/Groceries/Groceries.jsx'
import Juice from './component/Juice/Juice.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/groceries' element={<Groceries />} />
      <Route path='/juice' element={<Juice />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
      <Route path='/about' element={<About/>} />
      
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Contact from './pages/Contact'
import About from './pages/About'
import Groceries from './pages/Groceries'
import Juice from './pages/Juice'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/groceries' element={<Groceries />} />
      <Route path='/juice' element={<Juice />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import Home from './component/Home/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { store } from './redux/store/store.js'
import { Provider } from 'react-redux'
import About from './component/About/About.jsx'
import Groceries from './component/Groceries/Groceries.jsx'
import Juice from './component/Juice/Juice.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'
import NotFoundPage from './component/NotFoundPage/NotFoundPage.jsx'
import { Toaster } from 'react-hot-toast'
import Everthing from './component/Everthing/Everything.jsx'
import ProductPage from './component/ProductPage.jsx'
import Login from './component/Login.jsx'
import Signup from './component/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/everything' element={<Everthing />} />
      <Route path='/groceries' element={<Groceries />} />
      <Route path='/juice' element={<Juice />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
      <Route path='/products/:productDetails' Component={ProductPage} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </React.StrictMode>,
)
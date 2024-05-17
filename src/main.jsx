import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/Home/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import { store } from './redux/store/store.js'
import { Provider } from 'react-redux'
import About from './component/About/About.jsx'
import Groceries from './component/Groceries/Groceries.jsx'
import Juice from './component/Juice/Juice.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'
import ProductPage from './component/ProductPage.jsx'
import NotFoundPage from './component/NotFoundPage/NotFoundPage.jsx'
import Cart from './component/Cart/Cart.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/groceries' element={<Groceries />} />
      <Route path='/juice' element={<Juice />} />
      <Route path='/cart' element={<Cart/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
      <Route path='/about' element={<About/>} />
      <Route path='/products/:productDetails' Component={ProductPage} />
      <Route path='*' element={<NotFoundPage />} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
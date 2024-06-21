import React, { useEffect, useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Groceries from './component/Groceries/Groceries.jsx'
import Juice from './component/Juice/Juice.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'
import NotFoundPage from './component/NotFoundPage/NotFoundPage.jsx'
import Everything from './component/Everthing/Everything.jsx'
import ProductPage from './component/ProductPage.jsx'
import Login from './component/Login.jsx'
import Signup from './component/Signup.jsx'
import Cart from './component/Cart/Cart.jsx'
import { Toaster, toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth.js'
import { login as authLogin, logout } from './redux/slice/authSlice.js'
import ClipLoader from 'react-spinners/ClipLoader'

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/everything' element={<Everything />} />
      <Route path='/groceries' element={<Groceries />} />
      <Route path='/juice' element={<Juice />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
      <Route path='/products/:productDetails' Component={ProductPage} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
)

const App = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const loginStatus = async () => {
    setError("")
    try {
      const session = await authService.getCurrentUser()
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(authLogin(userData))
        } else {
          dispatch(logout())
        }
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loginStatus()
  }, [dispatch])

  if (loading) {
    return (
      <div style={styles.loaderContainer}>
        <ClipLoader color="#36d7b7" loading={loading} size={150} />
      </div>
    )
  }


  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App

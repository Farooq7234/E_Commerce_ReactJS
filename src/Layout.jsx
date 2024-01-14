import React from 'react'
import { useState,useEffect } from 'react';
import { ThemeProvider } from './context/theme';
import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import ThemeBtn from './component/ThemeBtn'

function Layout() {
  
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <>
 <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <Header/>
    <ThemeBtn />
    <Outlet />
    <Footer/>
    </ThemeProvider>
    </>
  )
}

export default Layout

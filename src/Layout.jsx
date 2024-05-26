import React from 'react'
import { useState,useEffect } from 'react';
import { ThemeProvider } from './context/theme';
import { Outlet } from 'react-router-dom'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import ThemeBtn from './component/ThemeBtn'
import ScrollToTop from './component/ScrollToTop.jsx'
import './index.css'

function Layout() {
  
  const [themeMode, setThemeMode] = useState("light")

  
const LOGO_URL_DARK = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg';
const LOGO_URL_WHITE = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png';

const logoSrc = (themeMode) === "light" ? LOGO_URL_DARK : LOGO_URL_WHITE;
// const logo ='logo'

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
 <ThemeProvider value={{ themeMode, lightTheme, darkTheme }} >
    <Header image={logoSrc}/>
    <Outlet />
    <ScrollToTop/>
    <Footer/>
    </ThemeProvider>
    </>
  )
}

export default Layout

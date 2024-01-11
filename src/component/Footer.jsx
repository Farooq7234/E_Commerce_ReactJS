import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='h-auto w-full bg-black p-3 mt-7'>
       <h2 className='text-xl text-center font-serif font-semibold text-white'>Download Our Mobile App</h2>
       <div className='flex justify-evenly items-center py-2'>
        <img className='h-7 w-24 text-white' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png" alt="Google Play Store" />
        <img className='h-7 w-24 ' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png" alt="Apple Store" />
       </div>
    </div>
    <div className='py-2 bg-black border-teal-50 h-auto w-full flex justify-center items-center max-sm:flex-col '>
      <p className='text-white ml-2 text-sm max-sm:mt-2'>&copy; Copyright 2024 -  Created using</p>
      <FaReact className='text-blue-400 ml-2 text-3xl animate-bounce mt-2' />
      <p className='text-white ml-2 text-sm  max-sm:mt-2'>by <span className='font-sans capitalize text-yellow-50'>umar farooq</span></p>
    </div>
    </>
  )
}

export default Footer
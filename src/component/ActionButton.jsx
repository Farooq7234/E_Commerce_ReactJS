import React from 'react'
import { FaShoppingCart } from '../icons/icon'


function ActionButton() {
  return (
    <>
    <div className='flex justify-center items-center'>

    <button
    className='bg-[#6a9739] hover:bg-[#8bc34a] uppercase w-40 h-10 flex justify-center items-center text-base gap-2 text-white rounded'
    ><FaShoppingCart/> Shop Now</button>
    </div>
    </>
  )
}

export default ActionButton
import React from 'react'
import { FaShoppingCart } from '../icons/icon'


function ActionButton() {
  return (
    <>
    <div className='flex justify-center items-center'>

    <button
    className='bg-[#6a9739] hover:bg-[#8bc34a] uppercase pr-3 pl-3 pt-2 pb-2  text-sm text-white rounded mt-3 w-auto mx-auto flex  items-center'
    ><FaShoppingCart className='mr-2'/> Shop Now</button>
    </div>
    </>
  )
}

export default ActionButton
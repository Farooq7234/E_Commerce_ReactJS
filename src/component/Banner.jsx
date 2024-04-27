import React from 'react'

function Banner({ContactValue,AboutMsg}) {
  return (
   <div className='bg-gray-50 h-44 w-full flex justify-center items-center dark:bg-black'>
    <h2 className='text-6xl capitalize font-bold font-serif text-center dark:text-white'>{ContactValue || AboutMsg}</h2>
   </div>
  )
}

export default Banner
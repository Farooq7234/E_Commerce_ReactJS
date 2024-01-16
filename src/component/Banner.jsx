import React from 'react'

function Banner({ContactValue,AboutMsg}) {
  return (
   <div className='bg-gray-100 py-8 w-full dark:bg-black'>
    <h2 className='text-4xl capitalize font-bold font-serif text-center dark:text-white'>{ContactValue || AboutMsg}</h2>
   </div>
  )
}

export default Banner
import React from 'react'

function Banner({ContactValue,AboutMsg}) {
  return (
  <>
   <div className='bg-[#f8f6f3] h-52 w-full flex justify-center  items-center dark:bg-black pt-24'>
    <h2 className='text-4xl sm:text-6xl capitalize font-bold font-serif text-center dark:text-white'>{ContactValue || AboutMsg}</h2>
   </div>
   
  </>
  )
}

export default Banner
import React from 'react'
import Btn from './btn'

function FeatureSection({products}) {
  return (
   <>
   <div className='h-72 py-5 max-sm:h-auto w-full bg-gray-200 flex justify-center items-center '>
    <div className='max-sm:mt-4 h-64 max-sm:h-auto w-64 bg-white flex flex-col py-6 px-5 rounded-md shadow-md max-sm:w-full max-sm:mx-10 sm:w-full sm:mx-20 justify-start items-start'>
    <h2 className='font-semibold capitalize max-sm:text-2xl py-2 sm:text-2xl '>{products}</h2>
    <p className='text-sm py-2 w-1/2 max-sm:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, in! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti impedit delectus sed.</p>
    <Btn/>
    </div>
   </div>
   </>
  )
}

export default FeatureSection
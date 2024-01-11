import React from 'react'
import ActionButton from './ActionButton'

function FeatureSection({products,productImg}) {
  return (
   <>
    <div className='relative max-sm:mt-4 mx-5 h-auto  w-62 sm:52 bg-white flex flex-col p-5 rounded-md shadow-md  justify-start items-start mt-2'>
    <h2 className='font-semibold capitalize max-sm:text-xl py-2 sm:text-2xl '>{products}</h2>
    <p className='text-xs py-2 w-auto max-sm:w-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, in! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti impedit delectus sed.</p>
    <div className='flex justify-around items-center w-full sm:flex-col'>
    <ActionButton/>
    <img className='h-auto  w-1/4 sm:my-3 sm:h-14 sm:w-1/2' src={`https://${productImg}`} alt={`product: ${products}`} />
    </div>
    </div>
   </>
  )
}

export default FeatureSection
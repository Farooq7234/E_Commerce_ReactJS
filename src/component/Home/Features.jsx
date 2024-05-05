import React from 'react'
import ActionButton from '../ActionButton'

function FeatureSection({products,productImg}) {
  return (
   <>
    <div className=' w-[400px] dark:bg-[#333] flex flex-col justify-center  items-center gap-3  rounded-md shadow-md  p-5'>
    <h2 className='font-bold text-2xl'>{products}</h2>
    <p className='text-base sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, in! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti impedit delectus sed.</p>
    <div className='flex justify-around items-center  gap-14'>
    <ActionButton/>
    <img className='w-[150px] h-32' src={productImg} alt={`product: ${products}`} />
    </div>
    </div>
   </>
  )
}

export default FeatureSection
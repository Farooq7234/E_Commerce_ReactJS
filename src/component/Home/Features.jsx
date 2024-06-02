import React from 'react'
import ActionButton from '../ActionButton'
import { featuresData } from '../mockData'


function Features() {
  return (
    <>
    <div className='flex justify-around items-center flex-wrap gap-10 py-10' >
    {
        featuresData.map((feature, index) =>
          <div className='w-[300px] sm:w-[400px] dark:bg-[#333] bg-white flex flex-col justify-center  items-center gap-3  rounded-md shadow-md border-2 border-gray-100 p-5' key={index}>
            <h2 className='font-bold text-2xl'>{feature.title}</h2>
            <p className='text-base sm:text-lg'>{feature.content}</p>
            <div className='flex justify-around items-center  gap-14'>
              <ActionButton />
              <img className='w-[100px] h-32' src={feature.featuredImage} alt="organic products" />
            </div>
          </div>
        )
      }
    </div>    
    </>
  )
}

export default Features
import React from 'react'
import { serviceData } from '.././mockData.js'



function Service() {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center bg-black h-52'>
      {serviceData.map((data, index) =>
        <div className='h-40 w-[300px]  flex justify-around items-center ' key={index}>
          <div className='max-sm:text-xl flex flex-col justify-center items-center bg-[#333333] text-white rounded h-32  w-full max-sm:w-full'>
            {data.value1}
            <h2 className='text-sm font-semibold text-center max-sm:text-2xl'>{data.value2}</h2>
            <p className='text-sm'>{}</p>
          </div>
        </div>
      )}
 </div>
    </>
  )
}

export default Service
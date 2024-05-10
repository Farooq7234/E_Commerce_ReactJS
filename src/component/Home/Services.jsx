import React from 'react'
import { serviceData } from '.././mockData.js'
// import icons from '../icons.js'


function Service() {


  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center bg-black h-52'>
      {serviceData.map((data, index) =>
        <div className='h-40 w-[300px]  flex justify-around items-center ' key={index}>
          <div className='text-xl flex flex-col justify-center items-center bg-[#333333] text-white rounded h-32  '>
            {data.value1}
            <h2 className='text-sm font-semibold text-center max-sm:text-2xl'>{data.value2}</h2>
            <div>
            {/* {
              icons.map((Icon,index)=>
                <Icon key={index} />
              )
            } */}
            </div>
          </div>
        </div>
      )}
 </div>
    </>
  )
}

export default Service
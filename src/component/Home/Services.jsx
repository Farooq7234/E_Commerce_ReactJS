import React from 'react'




function Service({value1,value2,value3},) {
  return (
  <div className='h-40 w-1/4 max-sm:w-full bg-black flex justify-around items-center pr-4 pl-4'>
    <div className='max-sm:text-xl flex flex-col justify-center items-center bg-[#333333] text-white rounded h-32  w-full max-sm:w-full'>
    {value3}
    <h2 className='text-sm font-semibold text-center max-sm:text-2xl'>{value1}</h2>
    <p className='text-sm'>{value2}</p>
    </div>
  </div>
  )
}

export default Service
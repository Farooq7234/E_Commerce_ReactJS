import React from 'react'

function CustomerReview({custName,clients}) {
  return (
    <>
    <div className='mt-4 h-auto w-64 bg-[#6a9739] rounded shadow-xl flex justify-center items-center p-10 flex-col'>
      <p className='text-white text-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quo, magnam, quis explicabo vero assumenda iure odio obcaecati</p>
      <div className='flex flex-row justify-center items-center pt-5'>
      <img className='h-12 w-auto rounded-full mr-3' src={`https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/${clients}-free-img.png`} alt="" />
      <p className='text-white'>{custName}</p>
      </div>

    </div>
    </>
  )
}

export default CustomerReview
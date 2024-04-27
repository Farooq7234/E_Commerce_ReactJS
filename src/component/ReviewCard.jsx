import React from 'react'

function CustomerReview({custName,clients}) {
  return (
    <>
    <div className='my-5 bg-white w-[300px] xl:w-[400px] h-72 dark:bg-[#333333]  rounded shadow-md flex justify-center gap-5 items-center p-10 flex-col border-2 border-gray-100 '>
      <p className='text-black dark:text-white text-base  text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quo, magnam, quis explicabo vero assumenda iure odio obcaecati</p>
      <div className='flex flex-row justify-center items-center pt-5'>
      <img className='h-12 w-auto rounded-full mr-3' src={`https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/${clients}-free-img.png`} alt="" />
      <p className='text-black dark:text-white'>{custName}</p>
      </div>

    </div>
    </>
  )
}

export default CustomerReview
import React from 'react'
import { customerReviews } from '../mockData.js'

function ReviewCard() {
  return (
    <>
      <div className='flex flex-col gap-10 py-10'>
        <h2 className='font-serif text-3xl text-center font-medium text-[#8bc34a]'>Customers Reviews</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5'>
          {
            customerReviews.map((customer,index) =>
              <div className=' bg-white w-[300px] sm:w-[350px]  h-56 dark:bg-[#333333]  rounded-md shadow-md flex justify-center gap-5 items-center flex-col border-2 border-gray-50 ' key={index}>
                <p className='w-[95%] text-base text-center font-semibold text-[#333] dark:text-yellow-50' >{customer.review}</p>
                <div className='flex justify-center items-center gap-3'>
                  <img className='w-14 h-14 rounded-full '  src={customer.custImage} alt="Customer_Image" />
                  <p className='text-lg'>{customer.custName}</p>
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  )
}

export default ReviewCard
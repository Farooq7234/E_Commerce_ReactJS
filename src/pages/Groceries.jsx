import React from 'react'
import { products } from '../component/mockData'
function Groceries() {
  return (
    <>
      <div className='dark:bg-black bg-slate-100 dark:text-white py-10'>
      <div className=' grid place-items-center gap-5 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((product, index) => 
          <div className='pb-5 shadow-md flex flex-col justify-center items-center rounded-md w-[250px] dark:bg-[#333333] sm:w-[300px]'>
            <img className='rounded-t-md' key={index} src={product.productImage} alt="" />
            <p
             className='capitalize text-gray-400 text-base'
             key={index}
             >{product.category}</p>
            <p 
            className='text-lg font-bold font-serif'
            key={index}
            >{product.productName}</p>
            <p 
            className='text-base text-gray-800 font-normal dark:text-white'
            key={index}>${product.price}</p>
        </div>
        )}
        </div>
      </div>
    </>
  )
}

export default Groceries
import React from 'react'
import { FaRegStar } from "react-icons/fa";


function TrendProduct({category,productName,image,productPrice}) {


  return (
    <>
    <div className='mt-5 h-auto mx-4 bg-white hover:bg-slate-50 hover:cursor-pointer flex flex-col justify-center items-center rounded-2xl shadow-2xl max-sm:w-full  border-black '>
      <img className='h-auto w-auto  rounded-t-2xl max-sm:mt-4 max-sm:rounded-none' src={`https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/${image}-300x300.jpg`} alt="" />
      <p className='max-sm:text-sm sm:text-sm text-base text-gray-500 mt-2  text-center'>{category}</p>
      <p className='max-sm:text-sm sm:text-sm text-base font-semibold my-2 text-center'>{productName}</p>
      <ul className='flex'>
        <li><FaRegStar /></li>
        <li><FaRegStar /></li>
        <li><FaRegStar /></li>
        <li><FaRegStar /></li>
        <li><FaRegStar /></li>
      </ul>
    <p className='my-2 text-black text-base font-semibold'>${productPrice}</p>
    </div>
    </>
  )
}

export default TrendProduct
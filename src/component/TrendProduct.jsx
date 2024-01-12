import React from 'react';
import { FaRegStar } from 'react-icons/fa';

function TrendProduct({ category, productName, image, productPrice }) {
  const starIcons = Array(5).fill(<FaRegStar />);

  return (
    <>
      <div className='dark:dark:bg-[#1F1E1E] dark:text-white mt-5 h-auto mx-4 max-sm:mx-0 bg-white hover:bg-slate-50 hover:cursor-pointer flex flex-col justify-center items-center rounded-2xl shadow-2xl max-sm:w-auto  border-black '>
        <img
          className=' h-auto max w-full rounded-t-2xl'
          src={`https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/${image}-300x300.jpg`}
          alt={`Product: ${productName}`}
        />
        <p className='max-sm:text-sm sm:text-sm text-base text-gray-500 mt-2 text-center'>{category}</p>
        <p className='max-sm:text-sm sm:text-sm text-base font-semibold my-2 text-center'>{productName}</p>
        <ul className='flex'>
          {starIcons.map((star, index) => (
            <li key={index}>{star}</li>
          ))}
        </ul>
        <p className='my-2 text-black text-base font-semibold dark:text-white'>${productPrice}</p>
      </div>
    </>
  );
}

export default TrendProduct;

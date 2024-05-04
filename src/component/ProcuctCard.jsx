import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { products } from '../component/mockData.js'

function ProductCard() {
  const starIcons = Array(5).fill(<FaRegStar />);

  return (
    <>
      <div className='grid place-items-center gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products
          .filter(product => product.popularity === "best selling")
          .map((product, index) => (
            <div key={index} className='shadow-md flex flex-col justify-center items-center gap-1  rounded-md w-[250px] dark:bg-[#333333] sm:w-[300px]'>
              <img className='rounded-t-md' src={product.productImage} alt="" />
              <p className='capitalize text-gray-400 text-base'>{product.category}</p>
              <p className='text-lg font-bold font-serif'>{product.productName}</p>
              <ul className='flex'>
                {starIcons.map((star, index) => (
                  <li key={index}>{star}</li>
                ))}
              </ul>
              <p className='text-base text-gray-800 font-normal dark:text-white py-2'>${product.price}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default ProductCard;

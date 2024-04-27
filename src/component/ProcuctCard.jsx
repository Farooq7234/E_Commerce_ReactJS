import React from 'react';
import { FaRegStar } from 'react-icons/fa';

function ProductCard({ category, productName, image, productPrice }) {
  const starIcons = Array(5).fill(<FaRegStar />);

  return (
    <>
      <div className='dark:dark:bg-[#1F1E1E] dark:text-white bg-white flex flex-col justify-center items-center rounded-2xl shadow-lg border-2 border-gray-100 dark:border-gray-900 gap-2 pb-2 '>
        <img
          className=' rounded-t-2xl'
          src={`https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/${image}-300x300.jpg`}
          alt={`Product: ${productName}`}
        />
        <p className='text-base text-gray-500  text-center'>{category}</p>
        <p className='text-base font-semibold  text-center cursor-pointer'>{productName}</p>
        <ul className='flex'>
          {starIcons.map((star, index) => (
            <li key={index}>{star}</li>
          ))}
        </ul>
        <p className=' text-black text-base font-semibold dark:text-white'>${productPrice}</p>
      </div>
    </>
  );
}

export default ProductCard;

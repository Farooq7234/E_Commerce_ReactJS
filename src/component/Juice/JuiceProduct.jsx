import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { juices } from '../mockData.js';

function juiceCard() {
  const starIcons = Array(5).fill(<FaRegStar />);

  return (
    <>
      <div className='grid place-items-center gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {juices.map((juice, index) => (
            <div key={index} className='shadow-md flex flex-col justify-center items-center gap-1  rounded-md w-[250px] dark:bg-[#333333] sm:w-[300px]'>
              <img className='rounded-t-md h-[250px] w-[300px]' src={juice.productImage} alt="" />
              <p className='capitalize text-gray-400 text-base'>{juice.category}</p>
              <p className='text-lg font-bold font-serif'>{juice.productName}</p>
              <ul className='flex'>
                {starIcons.map((star, index) => (
                  <li key={index}>{star}</li>
                ))}
              </ul>
              <p className='text-base text-gray-800 font-normal dark:text-white py-2'>${juice.price}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default juiceCard;

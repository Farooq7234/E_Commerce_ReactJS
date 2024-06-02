import React from 'react';
import { IoIosCheckbox } from "react-icons/io";
import ActionButton from '../ActionButton';

function AboutCard() {

  const tickBoxes = [
    <IoIosCheckbox key={1} />, 
    <IoIosCheckbox key={2} />, 
    <IoIosCheckbox key={3} />, 
    <IoIosCheckbox key={4} />, 
    <IoIosCheckbox key={5} />
  ];

  return (
    <div className='flex flex-col gap-5 bg-white shadow-lg rounded w-[290px] sm:w-[500px] md:w-[600px] p-5 dark:bg-[#333232] dark:text-white'>
      <div className='flex justify-start items-center py-2'>
        <img className='h-12 w-auto' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-badge-freeimg.png" alt="" />
        <h2 className='font-bold text-xl'>Certified Products</h2>
      </div>
      <div className='flex flex-col gap-2 px-5'>
        <h2 className='text-lg sm:text-2xl font-serif font-semibold'>We Deal With Various Quality Organic Products!</h2>
        <ul className='text-base'>
          {tickBoxes.map((tickBox, index) => (
            <li className='flex justify-start items-center gap-4' key={index}>
              {tickBox}
              {index === 0 && "Fresh fruits"}
              {index === 1 && "Organic vegetables"}
              {index === 2 && "Grains and pulses"}
              {index === 3 && "Herbs and spices"}
              {index === 4 && "Natural sweeteners"}
            </li>
          ))}
        </ul>
      </div>
      <ActionButton />
    </div>
  );
}

export default AboutCard;

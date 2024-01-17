import React from 'react'
import { IoIosCheckbox } from "react-icons/io";
import ActionButton from './component/ActionButton'

function AboutCard() {
  return (
    <>
    <div className=' bg-white shadow-lg rounded w-1/2 max-sm:w-auto py-3 px-4 dark:bg-[#333232] dark:text-white'>
      <div className='flex justify-start items-center py-2'>
      <img className='h-12 w-auto mr-3' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-badge-freeimg.png" alt="" />
        <h2 className='font-bold text-xl'>Certified Products</h2>
        </div>  
    <div className='flex flex-col gap-2 px-5 max-sm:px-0'>
      <h2 className='max-sm:text-lg text-2xl font-serif font-semibold'>We Deal With Various Quality Organic Products!</h2>
      <ul className='text-sm'>
        <li className='flex justify-start items-center gap-1 mt-1'><IoIosCheckbox className='text-green-500'/> Fresh fruits</li>
        <li className='flex justify-start items-center gap-1 mt-1'><IoIosCheckbox className='text-green-500'/> Fresh vegetables</li>
        <li className='flex justify-start items-center gap-1 mt-1'><IoIosCheckbox className='text-green-500'/> Dried vegetables</li>
        <li className='flex justify-start items-center gap-1 mt-1'><IoIosCheckbox className='text-green-500'/> Diary</li>
        <li className='flex justify-start items-center gap-1 mt-1'><IoIosCheckbox className='text-green-500'/> Beauty products</li>
        <li className='flex justify-start items-center gap-1 mt-1'><IoIosCheckbox className='text-green-500'/> Organic honey</li>
        <li className='flex justify-start items-center gap-1 mt-1'><IoIosCheckbox className='text-green-500'/> Organic tea</li>
      </ul> 
      </div>
     <ActionButton/>

      </div>     
 
    </>
  )
}

export default AboutCard
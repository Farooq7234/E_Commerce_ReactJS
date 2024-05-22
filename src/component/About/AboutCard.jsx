import React from 'react'
import { IoIosCheckbox } from "react-icons/io";
import ActionButton from '../ActionButton'

function AboutCard() {


  const tickBoxes = Array(5).fill(<IoIosCheckbox />)

  return (
    <>
      <div className='flex flex-col gap-5 bg-white shadow-lg rounded w-[290px] sm:w-[500px] md:w-[600px] p-5 dark:bg-[#333232] dark:text-white'>
        <div className='flex justify-start items-center py-2'>
          <img className='h-12 w-auto ' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-badge-freeimg.png" alt="" />
          <h2 className='font-bold text-xl'>Certified Products</h2>
        </div>
        <div className='flex flex-col gap-2 px-5'>
          <h2 className='text-lg  sm:text-2xl font-serif font-semibold'>We Deal With Various Quality Organic Products!</h2>
          <ul className='text-base'>
            {
              tickBoxes.map((tickBox, index) =>

                <li className='flex justify-start items-center gap-4' key={index}> {tickBox} Fresh fruits</li>
              )
            }
            {/* <li className='flex justify-start items-center gap-1 mt-2'><IoIosCheckbox className='text-green-500'/> Fresh vegetables</li>
        <li className='flex justify-start items-center gap-1 mt-2'><IoIosCheckbox className='text-green-500'/> Dried vegetables</li>
        <li className='flex justify-start items-center gap-1 mt-2'><IoIosCheckbox className='text-green-500'/> Diary</li>
        <li className='flex justify-start items-center gap-1 mt-2'><IoIosCheckbox className='text-green-500'/> Beauty products</li>
        <li className='flex justify-start items-center gap-1 mt-2'><IoIosCheckbox className='text-green-500'/> Organic honey</li>
        <li className='flex justify-start items-center gap-1 mt-2'><IoIosCheckbox className='text-green-500'/> Organic tea</li> */}
          </ul>
        </div>
        <ActionButton />
      </div>

    </>
  )
}

export default AboutCard
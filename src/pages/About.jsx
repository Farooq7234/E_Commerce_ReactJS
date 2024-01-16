import React from 'react'
import Banner from '../component/Banner'

function About() {
  const AboutMsg = "About Us"
  return (
    <>
      <Banner ContactValue={AboutMsg} />
      <div className='flex justify-around items-center w-full py-10 bg-white dark:bg-[#1d1d1d] max-sm:flex-wrap px-10 gap-8'>
        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01-768x528.jpg"
          className='rounded shadow-md w-1/2 max-sm:w-auto h-56 max-sm:h-62'
          alt="Grapes image" />
        <div className='flex flex-col gap-2 w-1/2 items-center flex-wrap sm:w-auto max-sm:w-auto max-sm:px-5 sm:px-5'>
          <h2 className='font-bold text-2xl dark:text-white text-center selection:bg-[#8bc34a]'>We Are Your Favourite Store.</h2>
        <p className='text-xs dark:text-white text-center selection:bg-[#8bc34a]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta quisquam beatae, ex quia omnis necessitatibus nesciunt eos totam nostrum, voluptatem possimus temporibus porro non excepturi vitae? Non, suscipit facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque porro corrupti dolorem nesciunt quidem sapiente. Consequatur consequuntur enim autem inventore quo facilis sequi non quod! Obcaecati possimus magnam officiis.
        </p>
        </div>
      </div>
      <div className='py-10 flex justify-around items-center bg-[#001524]  w-full  font-semibold text-white max-sm:flex-col'>
        <div className='text-center text-sm mt-6'>
        <p>The Numbers Speak For Themselves!</p>
        </div>
        <div className='text-center mt-6'>
        <p className='text-center  text-2xl'> 5,000+</p>
        <p className='text-sm'>Curated products</p>
        </div>
        <div className='text-center mt-6'>
        <p className='text-2xl'>800+</p>
        <p className='text-sm'>Curated products</p>
        </div>
        <div className='text-center mt-6' >
        <p className='text-center text-2xl'>40+</p>
        <p className='text-sm'>product categries</p>
        </div>
      </div>

    </>
  )
}

export default About
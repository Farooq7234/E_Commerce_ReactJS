import React from 'react'

function LogoContainer() {
  return (
    <>
    <div className='h-auto w-auto flex justify-center items-center flex-wrap mt-5 mx-5'>
      <h2 className='text-base font-semibold max-sm:text-sm w-1/2 text-center '>Featured Brands:</h2>
      <div className='flex flex-wrap justify-center items-center'>
      <img className=' w-1/6  max-sm:w-1/5' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg" alt="" />
      <img className='w-1/6 max-sm:w-1/5' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg" alt="" />
      <img className='w-1/6 max-sm:w-1/5' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg" alt="" />
      <img className='w-1/6 max-sm:w-1/5' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg" alt="" />
      <img className='w-1/6 max-sm:w-1/5' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg" alt="" />
    </div>
    </div>
    </>
  )
}

export default LogoContainer
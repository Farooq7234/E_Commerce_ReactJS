import React from 'react'
// import { FaTruck, PiCertificate, FaMoneyBill, FaRecycle } from 'react-icons';
import { serviceData } from '.././mockData.js'

function Service() {
  // const icons = [
  //   <FaTruck />,
  //   <PiCertificate />,
  //   <FaMoneyBill />,
  //   <FaRecycle />
  // ];
  


  return (

    
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  place-items-center bg-black'>
      {serviceData.map((data, index) =>
        <div className='h-40   flex justify-around items-center ' key={index}>
          <div className='text-xl flex flex-col justify-center items-center w-[300px] lg:w-[250px] bg-[#333333] text-white rounded h-32  '>
            {data.value1}
            <h2 className='font-semibold text-center text-xl'>{data.value2}</h2>
            <div>
            {/* {
              icons.map((Icon,index)=>
                {Icon}
              )
            } */}
            </div>
          </div>
        </div>
      )}
 </div>
    </>
  )
}

export default Service
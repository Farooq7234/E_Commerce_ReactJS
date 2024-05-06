import React, { useState } from 'react';
import ActionButton from '../ActionButton'; 

function OfferSection() {
  const [discount, setDiscount] = useState(25);

  return (
    <>
    <div>
      <div className=' bg-black flex justify-around items-center py-6 flex-wrap gap-5'>
        <div className='text-white text-center text-lg sm:text-2xl font-semibold animate-pulse font-serif'>
          Get {discount}% Off On Your First Purchase!
        </div>
        <ActionButton />
      </div>
      <div className='bg-gray-200 py-6'>
        <p className='text-base sm:text-2xl text-center font-serif'>
          Try It For Free. No Registration Needed.
        </p>
      </div>
      </div>
    </>
  );
}

export default OfferSection;

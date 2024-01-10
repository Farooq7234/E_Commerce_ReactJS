import React, { useState, useEffect } from 'react';
import Btn from './btn';

function HeroSection() {
  const [text, setText] = useState('');
  const fullTexts = ['Join the Organic Movement!', 'Natural Products', 'Fresh Veggies'];
  const typingSpeed = 50; // Adjust the typing speed as needed
  const deletionSpeed = 50; // Adjust the deletion speed as needed

  useEffect(() => {
    let isMounted = true;

    const typeEffect = async () => {
      while (isMounted) {
        for (let j = 0; isMounted && j < fullTexts.length; j++) {
          const fullText = fullTexts[j];

          for (let i = 0; isMounted && i <= fullText.length; i++) {
            setText(fullText.substring(0, i));
            await new Promise((resolve) => setTimeout(resolve, typingSpeed));
          }

          await new Promise((resolve) => setTimeout(resolve,1000)); // Pause before deletion

          for (let i = fullText.length; isMounted && i >= 0; i--) {
            setText(fullText.substring(0, i));
            await new Promise((resolve) => setTimeout(resolve, deletionSpeed));
          }
        }
      }
    };

    typeEffect();

    return () => {
      // Cleanup to prevent memory leaks
      isMounted = false;
    };
  }, []); // Run only once on component mount

  
      return (
      <>
        <div className=' bg-gray-50 flex justify-between items-center max-sm:flex-col-reverse max-sm:px-2 p-10 overflow-hidden'>
          <img
            className='h-auto max-sm:mt-12 sm:w-1/3'
            src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png'
            alt=''
          />
          <div className='w-auto  max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:w-62'>
            <h2 className='font-semibold max-sm:text-xl  text-center font-sans'>
              Best Quality Products
            </h2>
            <h2 className='type-effect text-3xl  font-serif font-bold max-sm:text-2xl text-center h-auto my-2 max-sm:h-16'>
              {text}
            </h2>
            <p className='text-base text-center w-full  max-sm:text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit. Lorem ipsum dolor sit
              amet.
            </p>
            <Btn />
          </div>
        </div>
      </>
      );
   
}

export default HeroSection;

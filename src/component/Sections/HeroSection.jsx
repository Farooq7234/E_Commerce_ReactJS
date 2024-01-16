import React, { useState, useEffect } from 'react';
import ActionButton from '../ActionButton';

function HeroSection() {
  const [text, setText] = useState('');
  const fullTexts = ['Join the Organic Movement!', 'Natural Products', 'Fresh Veggies'];
  const typingSpeed = 50;
  const pauseBeforeDeletion = 1000;
  const deletionSpeed = 50;

  useEffect(() => {
    let isMounted = true;

    const typeEffect = async () => {
      while (isMounted) {
        for (let j = 0; isMounted && j < fullTexts.length; j++) {
          const fullText = fullTexts[j];

          // Typing
          for (let i = 0; isMounted && i <= fullText.length; i++) {
            setText(fullText.substring(0, i));
            await new Promise((resolve) => setTimeout(resolve, typingSpeed));
          }

          // Pause before deletion
          await new Promise((resolve) => setTimeout(resolve, pauseBeforeDeletion));

          // Deleting
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

    {/* Right side of Hero Section */}

    <div className='dark:bg-black bg-gray-50 flex justify-between items-center max-sm:flex-col-reverse max-sm:px-2 p-10 overflow-hidden'>
      <img
        className='h-auto max-sm:mt-12 sm:w-1/3'
        src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png'
        alt=''
      />

      {/*Left side of Hero section */}

      <div className='w-auto  max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:w-62'>
        <h2 className='font-semibold max-sm:text-xl  text-center font-sans dark:text-white'>
          Best Quality Products
        </h2>
        <h2 className='type-effect text-3xl  font-serif font-bold max-sm:text-xl text-center h-auto max-sm:h-12 max-sm:my-2 dark:text-white'>
          {text}
        </h2>
        <p className='text-base text-center w-full  max-sm:text-sm dark:text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit. Lorem ipsum dolor sit
          amet.
        </p>
        <ActionButton />
      </div>
    </div>
  </>
  );
}

export default HeroSection;

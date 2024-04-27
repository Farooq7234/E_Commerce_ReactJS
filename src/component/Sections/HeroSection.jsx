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

    <div className='dark:bg-black bg-gray-50 flex justify-around items-center max-sm:flex-col-reverse p-10 overflow-hidden'>
      <img
        className='w-full sm:w-[300px] lg:w-[600px] lg:h-[500px] py-5'
        src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png'
        alt=''
      />

      {/*Left side of Hero section */}

      <div className='w-auto sm:w-[600px]  flex flex-col gap-5 justify-center items-center'>
        <h2 className='font-semibold text-xl font-sans dark:text-white'>
          Best Quality Products
        </h2>
        <h2 className='type-effect text-center text-3xl  font-serif font-bold  dark:text-white'>
          {text}
        </h2>
        <p className='text-base text-center dark:text-white'>
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

import React, { useEffect } from 'react';
import Banner from '../component/Banner';
import '../index.css'
import ProductSlider from '../ProductSlider';
import AboutCard from '../AboutCard';

function About() {
  const AboutMsg = "About Us";

  useEffect(() => {
    const workSection = document.querySelector(".section-work-data");
    
    const workSectionObserve = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      console.log(entries);

    const counterNum = document.querySelectorAll(".counter-numbers");
    const speed = 200;

    counterNum.forEach((curNumber) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curNumber.dataset.number);
        const initialNumber = parseInt(curNumber.innerText);

        const incrementNumber = Math.trunc((targetNumber / speed));

        if (initialNumber < targetNumber) {
          curNumber.innerText = `${initialNumber + incrementNumber}+`;
          setTimeout(updateNumber, 20);
        } else {
          curNumber.innerText = `${targetNumber}+`;
        }
      };

      updateNumber();
    });
    
  }
    const workSecObserver = new IntersectionObserver(workSectionObserve, {
      root: null,
      threshold: 0,
  });
  workSecObserver.observe(workSection);
}, []);

  return (
    <>
      <Banner ContactValue={AboutMsg} />
      <div className='flex justify-around items-center max-sm:flex-col-reverse w-full py-10 bg-white dark:bg-[#1d1d1d] max-sm:flex-wrap px-10 gap-8'>
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01-768x528.jpg"
          className='rounded shadow-md w-1/2 max-sm:w-auto h-56 max-sm:h-62'
          alt="Grapes image"
        />
        <div className='flex flex-col  gap-2 w-1/2 items-center flex-wrap sm:w-auto max-sm:w-full '>
          <h2 className='font-bold text-2xl dark:text-white  selection:bg-[#8bc34a]'>
            We Are Your Favourite Store.
          </h2>
          <p className='text-xs dark:text-white   selection:bg-[#8bc34a]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta
            quisquam beatae, ex quia omnis necessitatibus nesciunt eos totam nostrum,
            voluptatem possimus temporibus porro non excepturi vitae? Non, suscipit
            facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem neque porro corrupti dolorem nesciunt quidem sapiente.
            Consequatur consequuntur enim autem inventore quo facilis sequi non quod!
            Obcaecati possimus magnam officiis.
          </p>
        </div>
      </div>
      <div className=' flex justify-around items-center bg-[#001524] w-full font-semibold text-white max-sm:flex-col section-work-data'>
        <div className='text-center text-xs py-3'>
          <p>The Numbers Speak For Themselves!</p>
        </div>
        <div className='text-center py-3'>
          <p className='text-center text-3xl counter-numbers' data-number={'5000'}>
            0
          </p>
          <p className='text-xs'>Curated products</p>
        </div>
        <div className='text-center py-3'>
          <p className='text-3xl counter-numbers' data-number={'800'}>
            0
          </p>
          <p className='text-xs'>Curated products</p>
        </div>
        <div className='text-center py-3'>
          <p className='text-center text-3xl counter-numbers' data-number={'400'}>
            0
          </p>
          <p className='text-xs'>product categories</p>
        </div>
      </div>
      <div className='flex justify-around items-center dark:bg-black py-5 flex-wrap px-5'>
     <ProductSlider/>
     <AboutCard/>
      </div>
    </>
  );
}

export default About;

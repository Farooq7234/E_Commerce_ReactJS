import React, { useEffect } from 'react';
import Banner from '../Banner';
import ProductSlider from '../ProductSlider';
import AboutCard from './AboutCard';
import ThemeBtn from '../ThemeBtn';

function About() {
  const AboutMsg = "About Us";

  useEffect(() => {
    const workSection = document.querySelector(".section-work-data");
    
    const workSectionObserve = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

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
    <ThemeBtn/>
      <Banner ContactValue={AboutMsg} />
      <hr />
      <div className='flex justify-around items-center flex-wrap-reverse px-5 lg:px-0 gap-5 lg:gap-0 bg-[#f8f6f3] dark:bg-black py-5'>
        <div className='lg:w-[500px] lg:h-[400px] md:w-[80%] place-content-center flex flex-col gap-5'>
          <h2 className='font-bold text-4xl dark:text-white  selection:bg-[#8bc34a]'>
            We Are Your Favourite Store.
          </h2>
          <p className='text-base dark:text-white text-[#333333]  selection:bg-[#8bc34a]'>
          Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu
          </p>
          <p className='text-base dark:text-white  text-[#333333] selection:bg-[#8bc34a]'>
          Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.
          </p>
        </div>
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01-768x528.jpg"
          className='rounded md:w-auto lg:w-[580px] lg:h-[400px]'
          alt="Grapes image"
        />
      </div>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#001524] gap-5  py-10 font-semibold text-white  section-work-data'>
        <div className='text-center'>
          <p className='text-base font-bold'>The Numbers Speak For Themselves!</p>
        </div>
        <div className='text-center'>
          <p className='text-center text-3xl counter-numbers' data-number={'5000'}>
            0
          </p>
          <p className='text-base'>Curated products</p>
        </div>
        <div className='text-center'>
          <p className='text-3xl counter-numbers' data-number={'800'}>
            0
          </p>
          <p className='text-base'>Curated products</p>
        </div>
        <div className='text-center'>
          <p className='text-center text-3xl counter-numbers' data-number={'400'}>
            0
          </p>
          <p className='text-base'>product categories</p>
        </div>
      </div>
      <div className='flex justify-around items-center dark:bg-black py-5 flex-wrap'>
     <ProductSlider/>
     <AboutCard/>
      </div>
    </>
  );
}

export default About;

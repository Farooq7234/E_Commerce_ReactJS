import React from 'react';


function Footer() {
  return (
    <>
      <div className='flex  justify-center gap-2 items-center dark:bg-black bg-[#000] flex-wrap text-slate-200 text-base sm:text-xl py-5 '>
        <p>&copy; Copyright {new Date().getFullYear()}</p>
        <p>Created with 💓 by Umar farooq</p>
      </div>
    </>
  );
}

export default Footer;

import React from 'react';
import GitHubButton from 'react-github-btn'

function Footer() {
  return (
    <>
      <div className='flex  justify-around items-center gap-4 sm:gap-0 dark:bg-black bg-[#000] flex-wrap text-slate-200 py-5 '>
        <div>
          <p className='text-center text-base'>&copy; Copyright {new Date().getFullYear()} Created with 💓 by Umar farooq</p>
        </div>
        <div>
          <GitHubButton href="https://github.com/Farooq7234/E_Commerce_ReactJS"  data-color-scheme="no-preference: dark_dimmed; light: dark; dark: dark;" data-size="large" data-show-count="true" aria-label="Star buttons/github-buttons on GitHub">Star</GitHubButton>
        </div>
      </div>
    </>
  );
}

export default Footer;

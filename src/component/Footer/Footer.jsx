import React from 'react';
import GitHubButton from 'react-github-btn';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-black dark:bg-gray-900 py-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <p className='text-sm text-white'>
              &copy; {new Date().getFullYear()} Organic Store | Made with ☕️  by Umar Farooq
            </p>
          </div>
          <div className='text-center md:text-right'>
            <GitHubButton
              href="https://github.com/Farooq7234/E_Commerce_ReactJS"
              data-color-scheme="no-preference: dark_dimmed; light: dark; dark: dark;"
              data-size="large"
              data-show-count="true"
              aria-label="Star buttons/github-buttons on GitHub">
              Star
            </GitHubButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

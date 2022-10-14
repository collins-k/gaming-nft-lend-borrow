import React, { useContext } from 'react';

import { AppContext } from '../../contexts/appContext';

function AppFooter() {
  const appContext = useContext(AppContext);

  return (
    <footer className="text-gray-600  body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="bg-clip-text ml-3 text-xs hover:animate-pulse hover:scale-125 transition duration-150 ease-in-out font-bold text-transparent bg-gradient-to-r from-green-400 via-pink to-purple">
            {appContext.name}
          </span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:py-2 sm:mt-0 mt-4">
          <a
            href="mailto:contact@newdevsontheblock.com"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            {appContext.contactEmail}
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="ml-3 text-gray-500"
            href="https://twitter.com/devs_block"
          >
            <svg
              className="ml-2 w-6 h-6 cursor-pointer  text-purple fill-current  hover:animate-pulse hover:scale-150 transition duration-150 ease-in-out"
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export { AppFooter };

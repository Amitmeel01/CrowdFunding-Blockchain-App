"use client";

import React, { useContext, useState } from 'react';
import { Logo, Menu } from '.';
import { CrowdFundingContext } from '@/context/CrowdFunding';

function NavBar() {
  const { account, connectWallet } = useContext(CrowdFundingContext);
  console.log("account",account)
  const [isMenu, setIsMenu] = useState(false);

  const menuList = ['White Paper', 'Project', 'Donation','Members'];

  return (
    <div className='bg-black'>
      <div className='px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          {/* Logo and Menu Items */}
          <div className='flex items-center'>
            <a href='/' aria-label='Company' title='Company' className='inline-flex items-center mr-8'>
              <Logo color='text-white' />
              <span className='ml-4 text-xl font-bold tracking-wide text-gray-100'>Company</span>
            </a>

            {/* Desktop Menu */}
            <ul className='hidden lg:flex items-center space-x-8'>
              {menuList.map((el, i) => (
                <li key={i + 1}>
                  <a href='/' aria-label={el} title={el} className='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ml-8'>
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Wallet Button (Only show if not connected) */}
          {!account && (
            <ul className='hidden lg:flex items-center space-x-8'>
              <li>
                <button
                  onClick={connectWallet}
                  className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-800 focus:shadow-outline focus:outline-none border-blue-400 bg-blue-600'
                  aria-label='Connect Wallet'
                  title='Connect Wallet'>
                  Connect Wallet
                </button>
              </li>
            </ul>
          )}

          {/* Mobile Menu Button */}
          <div className='lg:hidden z-40'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
              onClick={() => setIsMenu(true)}>
              <Menu />
            </button>

            {/* Mobile Menu */}
            {isMenu && (
              <div className='absolute top-0 left-0 w-full'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    {/* Logo */}
                    <a href='/' aria-label='Company' title='Company' className='inline-flex items-center'>
                      <Logo color='text-black' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Company
                      </span>
                    </a>

                    {/* Close Button */}
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none'
                      onClick={() => setIsMenu(false)}>
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3c-0.4,0.4-0.4,1,0,1.4c0.5,0.5,0.7,0.5,1.4,0l6.3-6.3l6.3,6.3c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-6.3-6.3l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile Navigation */}
                  <nav>
                    <ul className='space-y-4'>
                      {menuList.map((el, i) => (
                        <li key={i + 1}>
                          <a
                            href='/'
                            aria-label={el}
                            title={el}
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                            {el}
                          </a>
                        </li>
                      ))}

                      {/* Connect Wallet in Mobile Menu */}
                      {!account && (
                        <li>
                          <button
                            onClick={connectWallet}
                            className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-800 focus:shadow-outline focus:outline-none bg-blue-600'
                            aria-label='Connect Wallet'>
                            Connect Wallet
                          </button>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from 'react';

function Footer() {
  const productList = ['Market', 'ERC20 Token', 'Donation'];
  const contractList = [
    "meelamit354@gmail.com",
    "supportAmit@gmail.com",
  ];
  const useFullLink = ["Home", "About Us", "Company Info"];

  return (
    <footer className='text-center mt-8 text-white lg:text-left bg-gray-800'>
      <div className='mx-6 py-10 text-center md:text-left'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Crypto's Power Section */}
          <div className=''>
            <h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
              Crypto's Power
            </h6>
            <p className='text-sm'>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>

          {/* Products Section */}
          <div>
            <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
              Products
            </h6>
            {productList.map((el, i) => (
              <p className='mb-4 text-sm' key={i}>
                <a href="/" className='hover:text-gray-400'>{el}</a>
              </p>
            ))}
          </div>

          {/* Useful Links Section */}
          <div>
            <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
              Useful Links
            </h6>
            {useFullLink.map((el, i) => (
              <p className='mb-4 text-sm' key={i}>
                <a href="/" className='hover:text-gray-400'>{el}</a>
              </p>
            ))}
          </div>

          {/* Contact Section */}
          <div>
            <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
              Contact
            </h6>
            {contractList.map((el, i) => (
              <p className='mb-4 text-sm' key={i}>
                <a href={`mailto:${el}`} className='hover:text-gray-400'>{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='bg-gray-900 p-6 text-center'>
        <span className='text-sm text-gray-400'>
          © 2023 Crypto's Power. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
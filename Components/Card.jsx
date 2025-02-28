"use client";
import React, { useEffect } from 'react';


function Card({ title, allCampaign, setOpenModel, setDonate }) {

  // Function to calculate days left until the deadline
  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return Math.max(0, Math.floor(remainingDays)); // Ensuring non-negative days
  };

  const getRandomImage = () => {
    const images = [
      'https://img.freepik.com/free-vector/valuable-cryptocurrency-dogecoin-illustration_23-2149200122.jpg?t=st=1740683954~exp=1740687554~hmac=b98d16bf970270103261762e49b1f7e7cc1080216ccef1e358946ade5a94f829&w=900',
      'https://img.freepik.com/free-vector/flat-design-creative-dogecoin-illustration_23-2149195016.jpg?semt=ais_hybrid',
      'https://img.freepik.com/free-vector/cryptocurrency-concept-landing-page-template_52683-13377.jpg?semt=ais_hybrid',
      'https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611167.jpg?ga=GA1.1.1627338178.1740683943&semt=ais_hybrid',
      'https://img.freepik.com/free-photo/fantasy-scene-wealth_23-2151681324.jpg?ga=GA1.1.1627338178.1740683943&semt=ais_hybrid',
      'https://img.freepik.com/free-vector/computer-with-online-charity-donation_24877-54509.jpg?ga=GA1.1.1627338178.1740683943&semt=ais_hybrid',
      'https://img.freepik.com/free-vector/hand-drawn-dogecoin-illustration_23-2149214821.jpg?ga=GA1.1.1627338178.1740683943&semt=ais_hybrid',
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allCampaign?.map((campaign, i) => (
          <div
            key={i + 1}
            className="cursor-pointer border overflow-hidden transition-transform duration-300 hover:scale-105 bg-white rounded-lg shadow-md"
            onClick={() => (setDonate(campaign), setOpenModel(true))}
          >
            <img
              src={getRandomImage()}
              alt="Crypto Project"
              className="w-full h-40 object-cover"
            />
            <div className="flex items-center justify-between mr-4">
              <div className="py-5 pl-4">
                <p className="mb-2 text-xs  uppercase text-red-500 font-bold">
                  Days Left: {daysLeft(campaign.deadline)}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{campaign.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{campaign.description}</p>
            
              <div className='flex items-center gap-10 mt-4'>
                <h2 className='font-bold'>Target : {(Number(campaign.target) / 1e18).toFixed(0)} ETH</h2>
                <h1 className="mr-2 font-bold">Collected : {(Number(campaign.amountCollected) / 1e18).toFixed(0)}</h1>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
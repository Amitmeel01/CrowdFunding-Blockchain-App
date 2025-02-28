"use client";
import React, { useEffect, useState } from 'react';
import '../app/globals.css';

function Popup({ setOpenModel, getDonators, donate, donateFunction }) {
  const [amount, setAmount] = useState("");
  const [alldonation, setAllDonation] = useState();

  const createDonation = async () => {
    try {
      const data = await donateFunction(donate.pid, amount);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const donateListData = getDonators(donate.pid);
    return async () => {
      const donationData = await donateListData;
      setAllDonation(donationData);
    };
  }, [getDonators, donate.pid]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg p-4">
        <div className="relative flex flex-col bg-white rounded-lg shadow-xl">

          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200 rounded-t">
            <h3 className="text-xl font-semibold text-gray-800">{donate.title}</h3>
            <button
              onClick={() => setOpenModel(false)}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <p className="text-gray-600">{donate.description}</p>

            <input
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <div className="space-y-2 max-h-40 overflow-y-auto">
              {alldonation?.map((donate, i) => (
                <p key={i} className="text-sm text-gray-700">
                  {i + 1}: <b className='font-bold text-black'>{donate.donation}</b> {""}
                   ({donate.donator})
                </p>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 p-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setOpenModel(false)}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Close
            </button>

            <button
              onClick={createDonation}
              type="button"
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;

"use client";
import React, { useState } from 'react';


function Hero({ titleData, createCampaign }) {
    const [campaign, setCampaign] = useState({
        title: "",
        desc: "",
        amount: "",
        deadline: "",
    });

    const createNewCampaign = async (e) => {
        e.preventDefault();
        try {
            
            const data=await createCampaign(campaign);
            if(data) alert("Campaign created successfully!");
            setCampaign({
                title: "",
                desc: "",
                amount: "",
                deadline: "",
            });
        } catch (err) {
            console.error("Error creating campaign:", err);
        }
    };

    return (
        <div className='relative'>
            <span className='cover'></span>

            <img 
                src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Image from Pexels" 
                className='absolute inset-0 w-full h-full object-cover' 
            />

            <div className='relative bg-opacity-75 bg-black'>
                <svg className='absolute inset-x-0 bottom-0 text-white' viewBox='0 0 1160 163'>
                    <path
                        fill='currentColor'
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>

                <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                    <div className='flex flex-col items-center justify-between xl:flex-row'>

                        {/* Left Section */}
                        <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
                            <h2 className='max-w-lg mb-6 text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none'>
                                Crypto's King <br className='hidden md:block' /> Crowd Funding
                            </h2>
                            <p className='max-w-xl mb-4 text-base text-gray-200 md:text-lg'>
                                Empower your ideas with our crowdfunding platform. Join us to bring your vision to life!
                            </p>
                            <a href="/" className='inline-flex items-center font-semibold tracking-wider text-teal-400 hover:text-teal-700'>
                                Learn More
                                <svg className='inline-block w-3 ml-2' fill='currentColor' viewBox='0 0 12 12'>
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6l-4.293,4.293a1,1,0,0,0,1.414,1.414L9,7.414l5,5a1,1,0,0,0,1.707-.707V9.707Z" />
                                </svg>
                            </a>
                        </div>

                        {/* Right Section - Form */}
                        <div className='w-full max-w-xl xl:px-8 xl:w-5/12'>
                            <div className='bg-white rounded-lg shadow-2xl p-7 sm:p-10'>
                                <h3 className='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>Create a Campaign</h3>

                                <form onSubmit={createNewCampaign}>

                                    {/* Title Field */}
                                    <div className='mb-4'>
                                        <label htmlFor='title' className='block mb-2 font-medium'>Title</label>
                                        <input
                                            type='text'
                                            id='title'
                                            placeholder='Enter campaign title'
                                            value={campaign.title}
                                            onChange={(e) => setCampaign({ ...campaign, title: e.target.value })}
                                            required
                                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
                                        />
                                    </div>

                                    {/* Description Field */}
                                    <div className='mb-4'>
                                        <label htmlFor='desc' className='block mb-2 font-medium'>Description</label>
                                        <textarea
                                            id='desc'
                                            placeholder='Describe your campaign'
                                            value={campaign.desc}
                                            onChange={(e) => setCampaign({ ...campaign, desc: e.target.value })}
                                            required
                                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
                                        />
                                    </div>

                                    {/* Amount Field */}
                                    <div className='mb-4'>
                                        <label htmlFor='amount' className='block mb-2 font-medium'>Target Amount</label>
                                        <input
                                            type='number'
                                            id='amount'
                                            placeholder='Enter target amount'
                                            value={campaign.amount}
                                            onChange={(e) => setCampaign({ ...campaign, amount: e.target.value })}
                                            required
                                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
                                            min={0}
                                        />
                                    </div>

                                    {/* Deadline Field */}
                                    <div className='mb-6'>
                                        <label htmlFor='deadline' className='block mb-2 font-medium'>Deadline</label>
                                        <input
                                            type='date'
                                            id='deadline'
                                            value={campaign.deadline}
                                            onChange={(e) => setCampaign({ ...campaign, deadline: e.target.value })}
                                            required
                                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer'
                                        />
                                    </div>

                                    <button
                                        type='submit'
                                        className='w-full px-6 py-3 text-white bg-teal-500 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400'
                                    >
                                        Submit Campaign
                                    </button>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

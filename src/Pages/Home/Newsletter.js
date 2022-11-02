import React from 'react';

const Newsletter = () => {
    return (
        <div className='mt-28'>
            <div className='bg-[#5ab88a] md:h-[70vh] text-center px-8 pb-8'>
                <h1 className='md:text-5xl text-2xl font-semibold font-sans pt-28 pb-8 text-white'>Subscribe to Our Newsletter</h1>
                <p className='md:text-xl text-white'>Sign-up to get the latest offers and news and stay updated.</p>

                <div className='mt-12 w-full flex justify-center'>
                    <input className='py-4 w-[450px] pl-3 rounded-l-md bg-[#d2e9fc] outline-none' type="email" name="" id="" placeholder='Your Email Address' />
                    <button className='bg-[#0693e3] py-4 px-10 font-semibold text-white rounded-r-md'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
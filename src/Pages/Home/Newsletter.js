import React from 'react';

const Newsletter = () => {
    return (
        <div className='mt-28'>
            <div className='bg-[#8ed1fc] h-[70vh] text-center'>
                <h1 className='text-5xl font-semibold font-sans pt-28 pb-8'>Subscribe to Our Newsletter</h1>
                <p className='text-xl'>Sign-up to get the latest offers and news and stay updated.</p>

                <div className='mt-12'>
                    <input className='py-4 w-[450px] pl-3 rounded-l-md bg-[#d2e9fc] outline-none' type="email" name="" id="" placeholder='Your Email Address' />
                    <button className='bg-[#0693e3] py-4 px-10 font-semibold text-white rounded-r-md'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
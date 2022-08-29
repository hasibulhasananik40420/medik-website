import React from 'react';
import masks from '../../images/istockphoto-1205786368-170667a-removebg-preview.png'
const Header = () => {
    return (
        <div className='bg-[#35c7df]'>
            <div className=' h-[90vh] mx-12 flex justify-between'>


                <div>
                    <h1 className='text-3xl font-medium font-sans pt-36 pb-8'>Safety Masks</h1>
                    <h1><span className='text-5xl font-semibold text-white '>15% of.</span> <span className='text-5xl font-semibold text-gray-800 font-serif'>Hurry</span> </h1>
                    <div className='mt-6 text-xl font-sans text-white'>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        <span className=''>Lorem ipsum dolor sit amet consectetur. </span>
                    </div>

                    <button className='px-8 py-3 mt-8 bg-white text-black rounded-sm font-semibold hover:bg-[#076cec] hover:text-white'>Start from $0.99</button>
                </div>
                <div>
                    <img className='w-[600px] h-[600px]' src={masks} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Header;
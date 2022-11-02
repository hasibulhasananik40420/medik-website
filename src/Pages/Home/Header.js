import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='bg-gray-50 relative'>
                <div className='lg:ml-20 ml-8'>

                    <div className='lg:flex lg:justify-between gap-8 pt-24 '>
                        <div className='lg:w-2/4'>
                            <h1 className='lg:text-6xl text-2xl font-semibold'>Eye Care Services </h1>
                            <h1 className='lg:text-6xl text-2xl mt-2'>That You <span className='text-[#5ab88a]'>Can Trust</span></h1>
                            <p className='mt-6 text-gray-500'>It is a long established fact that a reader will be distracted by the </p>
                            <p className='text-gray-500'>readable content of a page when looking at its .</p>

                            <button className='bg-[#5ab88a] px-6 py-3 text-white font-semibold rounded mt-8 hover:bg-[#171c26] duration-300 hover:scale-105'>Get Appointment</button>



                        </div>

                        <div className='lg:w-2/4 bg-[#5ab88a] rounded-md mt-16 lg:mt-0'>
                            <img className='mt-[-40px]' src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/revslider/eye-care/ey-01.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;
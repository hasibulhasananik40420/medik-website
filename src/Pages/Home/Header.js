import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='bg-[#f5fbff] relative back-img'>
                <div className='lg:ml-20 ml-8'>

                    <div className='lg:flex lg:justify-between gap-8 '>
                        <div className='lg:w-2/4 lg:mt-44 pt-14 lg:pt-0'>
                            <h1 className='lg:text-6xl text-2xl font-semibold font-mons pb-2'>Let Our Years Of
                            </h1>
                            <h1 className='lg:text-5xl text-2xl mt-2 font-mons pb-2'>Expertise Help
                                <span className='text-[#5ab88a]'>To Get</span></h1>
                            <h1 className='lg:text-6xl text-2xl mt-2 font-mons pb-2'>Back On Track
                            </h1>
                            <p className='mt-6 text-gray-500 font-mons'>Over a long period of work we have provided 1000’s of clients a better
                            </p>
                            <p className='text-gray-500 font-mons'>life and helped to overcome mental illness

                            </p>


                            {/* <h1 className='lg:text-6xl text-2xl font-semibold font-mons'>Eye Care Services </h1>
                            <h1 className='lg:text-6xl text-2xl mt-2 font-mons'>That You <span className='text-[#5ab88a]'>Can Trust</span></h1>
                            <p className='mt-6 text-gray-500 font-mons'>It is a long established fact that a reader will be distracted by the </p>
                            <p className='text-gray-500 font-mons'>readable content of a page when looking at its .</p> */}

                            <div className='lg:flex gap-8 lg:items-center lg:justify-center lg:ml-[-100px]'>
                                <button className=' bg-[#5ab88a] px-6 py-3 text-white font-semibold rounded mt-8 font-mons hover:bg-[#171c26] duration-300 hover:scale-105'>Get Appointment</button>

                                <p className='text-xl font-mons mt-6 text-[#00b0d1] underline'>Have Questions? Talk With Us</p>
                            </div>



                        </div>

                        {/* <div className='lg:w-2/4 lg:h-2/4 bg-[#5ab88a] rounded-md mt-16 lg:mt-0'> */}
                        {/* <img className='mt-[-40px]' src="https://ibb.co/gmZMjxk" alt="" /> */}

                        {/* <img className='mt-[-40px]' src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/revslider/eye-care/ey-01.png" alt="" /> */}
                        {/* <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/10/Rectangle-4020.webp" alt="" /> */}
                        {/* </div> */}


                        <div className=' border mt-6 lg:mt-0 bg-[#5ab88a]'>
                            <div className=' w-full'>
                                <img className='w-full  p-8 rounded' src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/10/Rectangle-4020.webp" alt="" />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;
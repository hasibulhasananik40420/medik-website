import React from 'react';

const HomeAdd = () => {


    return (
        <div className='mx-14 mt-16'>

            <div className='flex gap-12'>

                <div>
                    <div className='flex  bg-[rgba(252,185,0,1)] rounded-md'>
                        <div className='ml-12'>
                            <h1 className='text-5xl font-sans pt-11 pb-4'>Save 20%</h1>
                            <p className='text-4xl font-serif text-white'>On Sanitizers</p>
                            <span>99.9% Germ Production</span>

                            <button className='bg-[#076cec] px-6 py-2 mt-4 mb-12 rounded-md font-semibold text-white'>Shop Now</button>
                        </div>
                        <div className='w-2/4'>
                            <img className=' w-full h-full' src="https://img.freepik.com/free-photo/side-view-person-washing-hands-sink_23-2148602971.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580" alt="" />

                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex  bg-[#172630] rounded-md'>
                        <div className='ml-12'>
                            <h1 className='text-5xl font-sans pt-11 pb-4'>Save 20%</h1>
                            <p className='text-4xl font-serif text-white'>On Sanitizers</p>

                            <span>99.9% Germ Production</span>

                            <button className='bg-[#076cec] px-6 py-2 mt-4 mb-12 rounded-md font-semibold text-white'>Shop Now</button>

                        </div>
                        <div className='w-2/4'>
                            <img className=' w-full h-full' src="https://img.freepik.com/free-photo/side-view-person-washing-hands-sink_23-2148602971.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580" alt="" />

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default HomeAdd;
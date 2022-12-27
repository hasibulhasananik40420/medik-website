import React from 'react';
import CountUp from 'react-countup';

const CareService = () => {
    return (
        <div className=''>
            <div className='bg-[#eefff7] p-8 mt-32 lg:h-[100vh] relative '>


                <div className='lg:flex lg:justify-between gap-16 pt-20 pb-16'>


                    <div className='lg:w-2/4'>
                        <p className='text-[#5ab88a] font-mons'>SERVICES</p>
                        <h1 className='lg:text-5xl text-2xl font-semibold mt-4'>We Provide Friendly And Useful <span className='font-normal'>Medical Services.</span>
                        </h1>

                        <p className='mt-6 text-[#6e7990] font-mons'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.le content of a page when looking at its layout.

                        </p>

                        <button className='bg-[#5ab88a] px-6 py-3 text-white font-semibold rounded mt-8 hover:bg-[#171c26] duration-300 hover:scale-105'>READ MORE </button>

                    </div>


                    <div className='lg:w-2/4 mt-14'>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-20'>
                            <div className='flex'>
                                <div>
                                    <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/4468/4468704.png" alt="" />
                                </div>

                                <div className='ml-3'>
                                    <h1 className='text-4xl font-bold'> <CountUp delay={1} end={75} /> +</h1>

                                    <p className='text-[#6e7990]'>SPECIALIZED DR.

                                    </p>
                                </div>


                            </div>
                            <div className='flex'>
                                <div>
                                    <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/6680/6680303.png" alt="" />
                                </div>

                                <div className='ml-3'>
                                    <h1 className='text-4xl font-bold'> <CountUp delay={1} end={15} /> +</h1>
                                    <p className='text-[#6e7990]'>AWARD WON

                                        .

                                    </p>
                                </div>

                            </div>
                            <div className='flex'>
                                <div>
                                    <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/5106/5106333.png" alt="" />
                                </div>

                                <div className='ml-3'>
                                    <h1 className='text-4xl font-bold'> <CountUp delay={1} end={150} /> +</h1>
                                    <p className='text-[#6e7990]'>APPOINTMENTS

                                    </p>
                                </div>

                            </div>
                            <div className='flex'>
                                <div>
                                    <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/4387/4387541.png" alt="" />
                                </div>

                                <div className='ml-3'>
                                    <h1 className='text-4xl font-bold'> <CountUp delay={1} end={250} /> +</h1>
                                    <p className='text-[#6e7990] '>YOUNG VISITORS</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className=''>
                <div className='bg-white relative  lg:mt-[-140px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-lg container mx-auto  '>

                    <div className='p-7 shadow-lg rounded hover:bg-[#5ab88a] duration-300 hover:text-white border border-transparent   hover:border-b-indigo-700 hover:scale-105 anik'>
                        <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/2547/2547870.png" alt="" />

                        <h1 className='text-4xl font-semibold mt-8'>Eye-Q Lasik</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <p className='text-[#5ab88a] font-semibold mt-6 cursor-pointer'>Read more + </p>

                    </div>
                    <div className='p-7 shadow-lg  rounded hover:bg-[#5ab88a] duration-300 hover:text-white  border border-transparent   hover:border-b-indigo-700 hover:scale-105 anik'>
                        <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/1021/1021224.png" alt="" />

                        <h1 className='text-4xl font-semibold mt-8'>Glaucoma</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <p className='text-[#5ab88a] font-semibold mt-6 cursor-pointer'>Read more + </p>

                    </div> <div className='p-7 shadow-lg  rounded hover:bg-[#5ab88a] duration-300 hover:text-white  border border-transparent   hover:border-b-indigo-700 hover:scale-105 anik'>
                        <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/508/508816.png" alt="" />

                        <h1 className='text-4xl font-semibold mt-8'>Cataract</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <p className='text-[#5ab88a] font-semibold mt-6 cursor-pointer'>Read more + </p>

                    </div>
                    <div className='p-7 shadow-lg rounded hover:bg-[#5ab88a] duration-300 hover:text-white  border border-transparent   hover:border-b-indigo-700 hover:scale-105 anik'>
                        <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/7744/7744791.png" alt="" />

                        <h1 className='text-4xl font-semibold mt-8'>Corneak</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <p className='text-[#5ab88a] font-semibold mt-6 cursor-pointer'>Read more + </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareService;
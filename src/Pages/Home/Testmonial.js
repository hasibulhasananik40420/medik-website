import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import CountUp from 'react-countup';

const Testmonial = () => {


    return (
        <div className='bg-[#5ab88a] mt-16'>


            <div className='lg:flex justify-between px-12 pt-32 lg:h-[90vh]'>


                <div className='lg:w-2/4'>

                    <h1 className='lg:text-5xl text-2xl font-bold text-white'>What Our <span className='font-normal'>Patients Says</span>
                    </h1>
                    <p className='text-white mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita eos enim commodi, rerum magnam perferendis accusantium qui obcaecati quasi libero sapiente eveniet ratione! Praesentium iure libero error quas consequatur?</p>


                    <div className='flex gap-4 items-center mt-8'>
                        <div> <img className='w-16 h-16 rounded-full' src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2020/10/01-min-1-4-1.jpg" alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold text-white text-xl'>Hasibul Hasan</h1>
                            <p className='mt-1 text-white'>Ceo of Cavicap</p>
                        </div>
                    </div>

                    <div className='flex gap-6 justify-end cursor-pointer'>
                        <div className='w-10 h-10  bg-white flex justify-center items-center'> <AiOutlineArrowLeft className='text-[#5ab88a] text-xl font-semibold'></AiOutlineArrowLeft></div>

                        <div className='w-10 h-10 bg-white flex justify-center items-center'> <AiOutlineArrowRight className='text-[#5ab88a] text-xl font-semibold'></AiOutlineArrowRight></div>
                    </div>

                </div>





                <div className='lg:w-[370px] bg-white rounded lg:mt-0 mt-20  lg:pt-0 pt-8'>



                    <div className='flex gap-6 items-center mt-12 justify-center'>
                        <div>  <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/7355/7355633.png" alt="" />
                        </div>
                        <div>
                            <h1 className='font-medium  text-4xl'><CountUp delay={1} end={105} /> +</h1>
                            <p className='mt-1'>AWARDS WON</p>
                        </div>
                    </div>
                    <div className='flex gap-6 items-center mt-12 justify-center mb-6'>
                        <div>  <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/2673/2673061.png" alt="" />
                        </div>
                        <div>
                            <h1 className='font-medium  text-4xl'><CountUp delay={1} end={2500} /> +</h1>
                            <p className='mt-1'>SATISFIED PATIENTS</p>
                        </div>
                    </div>
                    <div className='flex gap-6 items-center mt-12 justify-center'>
                        <div>  <img className='w-16' src="https://cdn-icons-png.flaticon.com/128/2966/2966327.png" alt="" />
                        </div>
                        <div>
                            <h1 className='font-medium  text-4xl'><CountUp delay={1} end={60} /> +</h1>
                            <p className='mt-1'>HEALTH SECTIONS</p>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Testmonial;
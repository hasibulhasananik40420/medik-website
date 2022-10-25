import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ClientSay = () => {
    return (
        <div className='h-[100vh] bg-[#8ed1fc]'>
            <h1 className='pt-24 text-4xl font-semibold font-sans text-center'>Our Client Say!</h1>
            <p className='text-xl mt-4 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>



            <div className='relative'>
                <FaAngleLeft className='absolute left-[310px] top-28 w-12 h-12 rounded-md bg-[#0693e3] text-white'></FaAngleLeft>

                <FaAngleRight className='absolute right-[310px] top-28 w-12 h-12 rounded-md bg-[#0693e3] text-white'></FaAngleRight>
                <div className='bg-white md:w-2/4 w-full rounded-lg mx-auto mt-12'>



                    <div className='flex items-center gap-3 justify-center pt-6'>

                        <img className='rounded-full w-16 h-16' src="https://medik.wpengine.com/wp-content/uploads/2020/05/team-1.jpg" alt="" />
                        <div>
                            <h1 className='text-xl font-serif font-semibold'>Team Expart</h1>
                            <p>Desigation</p>
                        </div>
                    </div>
                    <div className='text-center mx-12 text-xl p-4 pb-12'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque voluptatum sunt animi deleniti, nihil totam adipisci minus. Earum itaque soluta aliquid eveniet explicabo enim ad laboriosam officia error deserunt.</p>

                    </div>

                </div>

            </div>




        </div>


    );
};

export default ClientSay;
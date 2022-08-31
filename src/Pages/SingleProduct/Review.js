import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const Review = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center mt-6 mb-6'>1 REVIEW FOR SANITIZER GEL</h1>

            <div className='border p-6'>
                <div className='flex justify-between mt-8 border-b pb-4'>
                    <div className='flex items-center gap-4 '>
                        <div>
                            <img className='w-12 h-12 rounded-full' src="https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A=" alt="" />
                        </div>
                        <div>
                            <h1 className='font-semibold text-xl'>Hasibul Hasan</h1>
                            <p>May 26, 2020</p>
                        </div>
                    </div>

                    <div className='flex gap-3 items-center text-yellow-400'>
                        <AiOutlineStar></AiOutlineStar>
                        <AiOutlineStar></AiOutlineStar>
                        <AiOutlineStar></AiOutlineStar>
                        <AiOutlineStar></AiOutlineStar>
                        <AiOutlineStar></AiOutlineStar>
                    </div>


                </div>

                <div className='mt-4 ml-16'>
                    <h1>Facilisis sed odio morbi quis. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Nullam eget felis eget nunc lobortis mattis.Facilisis sed odio morbi quis. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Nullam eget felis eget nunc lobortis mattis.</h1>
                </div>
            </div>

            <div>
                <h1 className='text-xl mt-4 mb-2'>Add a review</h1>
                <p>Your email address will not be published. Required fields are marked *</p>

                <form>

                    <div className='md:flex gap-3 w-full'>
                        <div className='w-full'>
                            <label htmlFor="">Name <span className='text-red-500'>*</span> </label>
                            <input className='border py-4 w-full mt-3 rounded outline-blue-400 p-3' type="text" />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="">Email <span className='text-red-500'>*</span> </label>
                            <input className='border py-4 w-full mt-3 rounded outline-blue-400 p-3' type="text" />
                        </div>
                    </div>

                    <div className=' flex justify-between'>
                        <div className='w-1/4'>
                            <h1 className='mt-4 text-xl'>Ratting</h1>

                            <div className='ml-14'>
                                <div className='flex items-center border mt-4'>
                                    <span className='border-2 px-3'>1</span>
                                    <span className='mx-auto'> <AiOutlineStar></AiOutlineStar></span>
                                </div>
                                <div className='flex items-center border mt-2'>
                                    <span className='border-2 px-3'>2</span>
                                    <span className='flex justify-center items-center mx-auto'>
                                        <AiOutlineStar></AiOutlineStar>
                                        <AiOutlineStar></AiOutlineStar>
                                    </span>
                                </div>
                                <div className='flex items-center border mt-2'>
                                    <span className='border-2 px-3'>3</span>
                                    <span className=' flex justify-center items-center mx-auto'>
                                        <AiOutlineStar></AiOutlineStar>
                                        <AiOutlineStar></AiOutlineStar>
                                        <AiOutlineStar></AiOutlineStar>

                                    </span>
                                </div> <div className='flex items-center border mt-2'>
                                    <span className='border-2 px-3'>4</span>
                                    <span className=' flex justify-center items-center mx-auto'>
                                        <AiOutlineStar></AiOutlineStar>
                                        <AiOutlineStar></AiOutlineStar>
                                        <AiOutlineStar></AiOutlineStar>
                                        <AiOutlineStar></AiOutlineStar>

                                    </span>
                                </div>
                                <div className='flex items-center border mt-2'>
                                    <span className='border-2 px-3'>5</span>
                                    <span className=' flex justify-center items-center mx-auto'>
                                        <AiOutlineStar></AiOutlineStar>
                                        <AiOutlineStar></AiOutlineStar>
                                        <AiOutlineStar></AiOutlineStar>
                                        <AiOutlineStar></AiOutlineStar>
                                        <AiOutlineStar></AiOutlineStar>

                                    </span>
                                </div>

                            </div>
                        </div>


                        <div>
                            <h1 className='mt-4 text-xl'>Your review *</h1>
                            <textarea className='border p-3 mt-4' name="" id="" cols="70" rows="5" placeholder='Review here'></textarea>
                        </div>

                    </div>

                    <div className='flex justify-end '>
                        <button className='px-8 py-3 mt-8 bg-[#076cec] rounded text-white font-medium'>Submit Review</button>
                    </div>



                </form>
            </div>

        </div>
    );
};

export default Review;
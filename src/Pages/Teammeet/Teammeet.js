import React from 'react';
import './Teammeet.css'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle, AiOutlineTwitter } from 'react-icons/ai';

const Teammeet = () => {
    return (
        <div className='mt-24'>
            <div className=' bg-[#eefff7] lg:h-[100vh] pt-8'>
                <h1 className='lg:text-5xl text-2xl font-bold text-center font-mons'>Our Outstanding <span className='font-normal'>Doctors</span>
                </h1>
                <div className='team-area flex flex-wrap justify-center gap-16 mt-16'>
                    <div className="single-team">
                        <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2020/10/3-3.jpg" alt="" />
                        <div className="team-text">
                            <h3>Hasibul Hasan</h3>
                            <p>Gynecologist </p>
                            <div className="flex gap-3 justify-center mt-4">
                                <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <FaFacebookF></FaFacebookF></span>
                                <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'><AiOutlineTwitter></AiOutlineTwitter></span>
                                <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <AiOutlineGoogle></AiOutlineGoogle></span>

                            </div>
                        </div>
                    </div>
                    <div className="single-team">
                        <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2020/10/6-2.jpg" alt="" />
                        <div className="team-text">
                            <h3>Jhon Smith</h3>
                            <p>Gynecologist </p>
                            <div className="flex gap-3 justify-center mt-4">
                                <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <FaFacebookF></FaFacebookF></span>
                                <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'><AiOutlineTwitter></AiOutlineTwitter></span>
                                <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <AiOutlineGoogle></AiOutlineGoogle></span>

                            </div>
                        </div>
                    </div>

                    <div className="single-team">
                        <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2020/10/2-3.jpg" alt="" />
                        <div className="team-text">
                            <h3>Gunner Peha</h3>
                            <p>Gynecologist </p>
                            <div className="flex gap-3 justify-center mt-4">
                                <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <FaFacebookF></FaFacebookF></span>
                                <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'><AiOutlineTwitter></AiOutlineTwitter></span>
                                <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <AiOutlineGoogle></AiOutlineGoogle></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teammeet;
import React from 'react';
import { AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className='bg-[#5ab88a] mt-16'>

            <div>
                <div className='lg:flex justify-around items-center mx-12  pt-6 border-b border-black pb-6'>
                    <div className=''>  <img className='w-40' src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/03/home-3-Logo2.png" alt="" /></div>
                    <div className='lg:none pb-5 pt-5 flex justify-center'>
                        <input className='py-4 lg:w-[450px] pl-3 rounded-l-md bg-[#d2e9fc] outline-none' type="email" name="" id="" placeholder='Your Email Address' />
                        <button className='bg-[#0693e3] py-4 px-10 font-semibold text-white rounded-r-md'>Submit</button>
                    </div>

                    <div className='flex gap-4 text-white cursor-pointer'>
                        <AiOutlineTwitter className='w-6 h-6 hover:text-[#0693e3]'></AiOutlineTwitter>
                        <GrFacebookOption className='w-6 h-6 hover:text-[#0693e3]'></GrFacebookOption>
                        <AiOutlineYoutube className='w-6 h-6 hover:text-[#0693e3]'></AiOutlineYoutube>
                        <AiOutlineInstagram className='w-6 h-6 hover:text-[#0693e3]'></AiOutlineInstagram>
                    </div>

                </div>


                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-14 gap-10 pt-8 pb-8  text-white border-b border-black'>
                    <div className='cursor-pointer'>
                        <h1 className='lg:text-2xl font-semibold text-white mb-5'>Contact us</h1>
                        <p className='hover:text-[#0693e3] mb-2 text-sm'>1203, Town Center, Drive FL 33458</p>
                        <p className='hover:text-[#0693e3] mb-2 text-sm'>United States</p>

                        <div className='flex gap-3 items-center'>
                            <BsTelephone></BsTelephone>
                            <p className='hover:text-[#0693e3] mb-2 hover:underline text-sm'>+841 123 456 78</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <AiOutlineMail></AiOutlineMail>
                            <p className='hover:text-[#0693e3] mb-2 hover:underline text-sm'> info@example.com</p>
                        </div>
                    </div>

                    <div className='cursor-pointer'>
                        <h1 className='lg:text-2xl font-semibold text-white mb-5'>Recent Posts</h1>
                        <p className='hover:text-[#0693e3] mb-2 text-sm'> Best caring doctors</p>
                        <p className='hover:text-[#0693e3] mb-2 text-sm'> The blood sample</p>
                        <p className='hover:text-[#0693e3] mb-2 text-sm'> The Ent specialist</p>
                        <p className='hover:text-[#0693e3] mb-2 text-sm'> Types of scissors</p>
                    </div>


                    <div className='cursor-pointer'>
                        <h1 className='text-2xl font-semibold text-white mb-5'>Our Products</h1>
                        <p className='hover:text-[#0693e3] mb-2'> Plaster machine</p>
                        <p className='hover:text-[#0693e3] mb-2'> Calsius meter</p>
                        <p className='hover:text-[#0693e3] mb-2'> pedometer</p>
                        <p className='hover:text-[#0693e3] mb-2'> Smart mask</p>
                    </div>

                    <div className='cursor-pointer'>
                        <h1 className='text-2xl font-semibold text-white mb-5'>Useful Links</h1>
                        <p className='hover:text-[#0693e3] mb-2'>Shop</p>
                        <p className='hover:text-[#0693e3] mb-2'> Cart</p>
                        <p className='hover:text-[#0693e3] mb-2'> My Account</p>
                        <p className='hover:text-[#0693e3] mb-2'> Checkout</p>
                    </div>
                </div>

                <div className='flex justify-center gap-3   text-white font-semibold pt-4 pb-6'>
                    <p> MedikShop</p>
                    <p>|</p>
                    <p>About</p>
                    <p>|</p>
                    <p>blog</p>
                    <p>|</p>
                    <p>Contact</p>
                </div>
            </div>


            <div className='lg:flex justify-between bg-black p-6 px-12'>
                <p className='text-white'>Copyright © 2020, Medik Powered by DesignThemes</p>

                <div className='flex gap-4 lg:pt-0 pt-6'>
                    <img src="https://medik.wpengine.com/wp-content/uploads/2019/07/card-icons_0001_22_small.png" alt="" />
                    <img src="https://medik.wpengine.com/wp-content/uploads/2019/07/card-icons_0003_20_small.png" alt="" />
                    <img src="https://medik.wpengine.com/wp-content/uploads/2019/07/card-icons_0004_19_small.png" alt="" />
                    <img src="https://medik.wpengine.com/wp-content/uploads/2019/07/card-icons_0005_18_small.png" alt="" />
                </div>
            </div>


        </div>
    );
};

export default Footer;
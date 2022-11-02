import React from 'react';

const HeaderCaed = () => {
    return (
        <div className='mx-8 bg-white mt-[-50px] relative'>

            <div className='shadow-lg rounded pb-8'>

                <p className='text-[#5ab88a] pl-8 mt-8 text-xl'>Benifits</p>

                <div className='pl-8 lg:flex gap-32'>
                    <div>
                        <h1 className='lg:text-4xl text-2xl font-bold mt-6 mb-2 text-[#171c26]'>Best Benefits</h1>
                        <h1 className='lg:text-4xl text-2xl text-[#171c26]'>With Kivicare</h1></div>

                    <div className='mt-8 text-[#6e7990]'>
                        <p>It is a long established fact that a reader will be distracted by the </p>
                        <p>readable content of a page when looking at its </p>
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>

                    <div className='p-8'>
                        <div className=' hover:scale-110 duration-500'>
                            <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/03/Mask-group.png" alt="" />
                        </div>

                        <h1 className='text-3xl text-[#171c26] mt-4'>Qualified Doctors</h1>
                        <p className='text-[#6e7990] mt-4'>Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>

                        <button className='text-[#5ab88a] font-semibold mt-6'>Read more + </button>
                    </div>  <div className='p-8'>
                        <div className=' hover:scale-110 duration-500'>
                            <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/03/Mask-group-1.png" alt="" />
                        </div>

                        <h1 className='text-3xl text-[#171c26] mt-4'>Work Improvements</h1>
                        <p className='text-[#6e7990] mt-4'>Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>

                        <button className='text-[#5ab88a] font-semibold mt-6'>Read more + </button>
                    </div>

                    <div className='p-8'>
                        <div className='transform hover:scale-110 duration-500'>
                            <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/03/Mask-group-2.png" alt="" />
                        </div>

                        <h1 className='text-3xl text-[#171c26] mt-4'>Restoring Confidence</h1>
                        <p className='text-[#6e7990] mt-4'>Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>

                        <button className='text-[#5ab88a] font-semibold mt-6'>Read more + </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HeaderCaed;
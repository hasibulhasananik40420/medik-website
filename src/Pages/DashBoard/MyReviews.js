import React from 'react';

const MyReviews = () => {
    return (
        <div>
            <form >

                <div>
                    <div className='border-b-2 border-slate-100 mb-4'>
                        <h1 className='text-2xl font-bold text-center'>My Review</h1>
                    </div>
                    <div className='p-2 lg:w-2/4 mx-auto'>


                        <input className='w-full h-11 pl-3 rounded-md in-bord my-2 outline-none border border-[#5ab88a] bg-[#eefff7]' type="name" placeholder='Name' />
                        <input className='w-full h-11 pl-3 rounded-md in-bord my-2 outline-none border border-[#5ab88a] bg-[#eefff7]' type="name" placeholder='Sub-Title' />
                        <input className='w-full h-11 pl-3 rounded-md in-bord my-2 outline-none border border-[#5ab88a] bg-[#eefff7]' type="name" placeholder='Image' />

                        <textarea className='w-full h-32 pl-3 rounded-md in-bord my-2 outline-none border border-[#5ab88a] bg-[#eefff7]' type="area" placeholder='Message' />


                    </div>
                    <button type='submit' className='px-4 py-2 bg-[#5ab88a] hover:bg-[#154b77] rounded-md block mx-auto text-white'>Publish Review</button>


                </div>
            </form>
        </div>
    );
};

export default MyReviews;
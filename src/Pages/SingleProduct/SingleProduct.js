import React from 'react';

const SingleProduct = () => {
    return (
        <div>

            <div class="min-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div class="w-full max-w-6xl rounded bg-white shadow-md p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div class="md:flex items-center -mx-10">
                        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div class="relative">
                                <img src="https://medik.wpengine.com/wp-content/uploads/2019/01/5-15.jpg" class="w-full relative z-10" alt="" />
                                <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-10">
                            <div class="mb-10">
                                <h1 class="font-bold uppercase text-2xl mb-4">Sanitizer Gel</h1>
                                <p class="text-2xl text-[#076cec] font-semibold leading-none align-baseline">$99.99</p>

                                <p className='mt-3'>
                                    Posuere in netus a eu varius adipiscing suspendisse elementum vitae tempor suspendisse ullamcorper aenean taciti morbi potenti cursus id tortor. Cursus nulla consectetur a eros adipiscing himenaeos nam taciti id turpis a scelerisque vel habitasse. Posuere in netus a eu varius adipiscing suspendisse.
                                </p>

                                <div className='flex items-center gap-8 mt-2'>
                                    <span className='text-xl font-medium'>Color : </span>
                                    <span >Silver </span>
                                </div>
                                <div className='flex items-center gap-8 mt-2'>
                                    <span className='text-xl font-medium'>Brand	:
                                    </span>
                                    <span >Staedtler </span>
                                </div>
                                <div className='flex items-center gap-8 mt-2'>
                                    <span className='text-xl font-medium'>Material :
                                    </span>
                                    <span >Plastic </span>
                                </div>
                                <div className='flex items-center gap-8 mt-2'>
                                    <span className='text-xl font-medium'>Product Type: </span>
                                    <span >Medical </span>
                                </div>
                            </div>
                            <div className='md:flex gap-6 text-white'>
                                <button className='bg-[#076cec] px-6 py-2 rounded-md font-semibold md:mb-0 mb-3'>add to cart</button>
                                <button className='bg-[#076cec] px-6 py-2 rounded-md font-semibold'>add to Wishlist</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='md:flex justify-center items-center border-b cursor-pointer'>

                <div className='text-xl border p-4 hover:text-[#076cec]'>Product Description</div>
                <div className='text-xl border p-4 hover:text-[#076cec]'>Review</div>
                <div className='text-xl border p-4 hover:text-[#076cec]'>Shipping Details</div>

            </div>





        </div>
    );
};

export default SingleProduct;
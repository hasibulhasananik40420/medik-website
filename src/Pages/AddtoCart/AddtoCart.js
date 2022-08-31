import React from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const AddtoCart = () => {
    return (
        <div className='mx-14 mt-8'>
            <h1 className='text-4xl font-semibold font-serif text-center mt-6'>My Cart</h1>

            <div class="overflow-x-auto relative  border mt-8">
                <table class="w-full text-sm text-left  ">
                    <thead class="text-xs  uppercase text-black bg-white border-b">
                        <tr>
                            <th scope="col" class="py-4 px-6">
                                PRODUCT
                            </th>
                            <th scope="col" class="py-3 px-6">
                                PRICE
                            </th>
                            <th scope="col" class="py-3 px-6">
                                QUANTITY
                            </th>
                            <th scope="col" class="py-3 px-6">
                                TOTAL
                            </th>
                            <th scope="col" class="py-3 px-6">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-bg-gray-800 border-b ">
                            <th scope="row" class="py-6 px-6 font-medium whitespace-nowrap ">
                                <div className='flex gap-8 items-center'>
                                    <img className='w-14 h-14 ' src="https://medik.wpengine.com/wp-content/uploads/2020/05/shop-4-22.jpg" alt="" />
                                    <h1>Apple MacBook Pro 17</h1>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                $99.00
                            </td>
                            <td class="py-4 px-6">
                                <div className='md:flex items-center  cursor-pointer'>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'><AiOutlineMinus></AiOutlineMinus></div>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'>1</div>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'><AiOutlinePlus></AiOutlinePlus></div>
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <MdOutlineDeleteOutline className='w-6 h-6 cursor-pointer'></MdOutlineDeleteOutline>
                            </td>
                        </tr>

                        <tr class="bg-bg-gray-800 border-b ">
                            <th scope="row" class="py-6 px-6 font-medium whitespace-nowrap ">
                                <div className='flex gap-8 items-center'>
                                    <img className='w-14 h-14 ' src="https://medik.wpengine.com/wp-content/uploads/2020/05/shop-4-22.jpg" alt="" />
                                    <h1>Apple MacBook Pro 17</h1>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                $99.00
                            </td>
                            <td class="py-4 px-6">
                                <div className='md:flex items-center  cursor-pointer'>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'><AiOutlineMinus></AiOutlineMinus></div>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'>1</div>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'><AiOutlinePlus></AiOutlinePlus></div>
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <MdOutlineDeleteOutline className='w-6 h-6 cursor-pointer'></MdOutlineDeleteOutline>
                            </td>
                        </tr>

                        <tr class="bg-bg-gray-800 border-b ">
                            <th scope="row" class="py-6 px-6 font-medium whitespace-nowrap ">
                                <div className='flex gap-8 items-center'>
                                    <img className='w-14 h-14 ' src="https://medik.wpengine.com/wp-content/uploads/2020/05/shop-4-22.jpg" alt="" />
                                    <h1>Apple MacBook Pro 17</h1>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                $99.00
                            </td>
                            <td class="py-4 px-6">
                                <div className='md:flex items-center  cursor-pointer'>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'><AiOutlineMinus></AiOutlineMinus></div>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'>1</div>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'><AiOutlinePlus></AiOutlinePlus></div>
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <MdOutlineDeleteOutline className='w-6 h-6 cursor-pointer'></MdOutlineDeleteOutline>
                            </td>
                        </tr>

                        <tr class="bg-bg-gray-800 border-b ">
                            <th scope="row" class="py-6 px-6 font-medium whitespace-nowrap ">
                                <div className='flex gap-8 items-center'>
                                    <img className='w-14 h-14 ' src="https://medik.wpengine.com/wp-content/uploads/2020/05/shop-4-22.jpg" alt="" />
                                    <h1>Apple MacBook Pro 17</h1>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                $99.00
                            </td>
                            <td class="py-4 px-6">
                                <div className='md:flex items-center  cursor-pointer'>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'><AiOutlineMinus></AiOutlineMinus></div>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'>1</div>
                                    <div className='text-xl border w-8 h-8 flex items-center justify-center hover:text-[#076cec]'><AiOutlinePlus></AiOutlinePlus></div>
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                            <td class="py-4 px-6 text-right">
                                <MdOutlineDeleteOutline className='w-6 h-6 cursor-pointer'></MdOutlineDeleteOutline>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>


            {/* checkout */}

            <div className='border p-16 mt-12'>
                <h1 className='text-2xl mb-8'> CART TOTALS</h1>

                <div className='border-b pb-4'>
                    <div className='flex md:w-[680px] gap-8 justify-between mt-2'>
                        <h1 className='text-xl '>Subtotal</h1>
                        <h1 className='text-xl font-semibold'>	₹645.00</h1>
                    </div>
                </div>

                <div className='border-b pb-6'>
                    <div className='flex md:w-3/4 w-full gap-8 justify-between mt-6'>
                        <div>  <h1 className='text-xl'>Shipping</h1></div>

                        <div className='md:text-xl'>
                            <h1 className='mt-2'> Flat Rate: ₹20.00</h1>
                            <h1 className='mt-2'>
                                Shipping To Tamil Nadu.</h1>
                            <h1 className='mt-2 hover:underline text-[#076cec]'>Change Address</h1>
                        </div>
                    </div>
                </div>


                <div className='border-b pb-4 p-2'>
                    <div className='flex md:w-[680px] gap-8 justify-between mt-2'>
                        <h1 className='text-xl '>Total</h1>
                        <h1 className='text-xl font-semibold'>	₹645.00</h1>
                    </div>
                </div>

                <button className='px-8 py-3 mt-8 bg-[#076cec] rounded text-white font-medium'>Proceet to checkout</button>
            </div>




        </div>
    );
};

export default AddtoCart;
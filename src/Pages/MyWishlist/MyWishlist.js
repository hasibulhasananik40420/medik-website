import React from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const MyWishlist = () => {
    return (
        <div className='mx-14 mt-8'>
            <h1 className='text-4xl font-semibold font-serif text-center mt-8'>My wishlist on Clone </h1>

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
                                STATUS
                            </th>
                            <th scope="col" class="py-3 px-6">

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
                                <div className=''>
                                    <button className='px-6 py-2 border rounded text-green-500 font-medium'>In Stock</button>
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                <button className='px-6 py-2 border bg-blue-500 rounded text-white font-medium'>Add to cart</button>
                            </td>
                            <td class="py-4 px-6 text-right">
                                <MdOutlineDeleteOutline className='w-6 h-6 cursor-pointer'></MdOutlineDeleteOutline>
                            </td>
                        </tr>  <tr class="bg-bg-gray-800 border-b ">
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
                                <div className=''>
                                    <button className='px-6 py-2 border rounded text-green-500 font-medium'>In Stock</button>
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                <button className='px-6 py-2 border bg-blue-500 rounded text-white font-medium'>Add to cart</button>
                            </td>
                            <td class="py-4 px-6 text-right">
                                <MdOutlineDeleteOutline className='w-6 h-6 cursor-pointer'></MdOutlineDeleteOutline>
                            </td>
                        </tr>  <tr class="bg-bg-gray-800 border-b ">
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
                                <div className=''>
                                    <button className='px-6 py-2 border rounded text-green-500 font-medium'>In Stock</button>
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                <button className='px-6 py-2 border bg-blue-500 rounded text-white font-medium'>Add to cart</button>
                            </td>
                            <td class="py-4 px-6 text-right">
                                <MdOutlineDeleteOutline className='w-6 h-6 cursor-pointer'></MdOutlineDeleteOutline>
                            </td>
                        </tr>  <tr class="bg-bg-gray-800 border-b ">
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
                                <div className=''>
                                    <button className='px-6 py-2 border rounded text-green-500 font-medium'>In Stock</button>
                                </div>
                            </td>
                            <td class="py-4 px-6">
                                <button className='px-6 py-2 border bg-blue-500 rounded text-white font-medium'>Add to cart</button>
                            </td>
                            <td class="py-4 px-6 text-right">
                                <MdOutlineDeleteOutline className='w-6 h-6 cursor-pointer'></MdOutlineDeleteOutline>
                            </td>
                        </tr>








                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWishlist;
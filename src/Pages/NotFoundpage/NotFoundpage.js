import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsArchive } from 'react-icons/bs';
import { MdContactPage, MdContactPhone, MdImportContacts } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NotFoundpage = () => {
    return (
        <div>
            {/* <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/03/Group-6.png" alt="" /> */}
            <div class="flex items-center justify-center min-h-screen bg-white py-6">
                <div class="flex flex-col">
                    <span class="text-center font-bold my-10 opacity-30">
                        MDI (npm i @mdi/font) reuqired for all icons

                        <hr class="my-4" />

                        <a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank" class="text-blue-600">
                            Convetert to SASS
                        </a>
                    </span>

                    <div class="flex flex-col items-center">
                        <div class="text-indigo-500 font-bold text-7xl">
                            404
                        </div>

                        <div class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                            This page does not exist
                        </div>

                        <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                            The page you are looking for could not be found.
                        </div>
                    </div>

                    <div class="flex flex-col mt-48">
                        <div class="text-gray-400 font-bold uppercase">
                            Continue With
                        </div>

                        <div class="flex flex-col items-stretch mt-5">
                            <div class="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                                <div class="rounded-xl bg-blue-100 px-3 py-2 md:py-4">

                                    <AiOutlineHome class="mdi mdi-home-outline mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"></AiOutlineHome>
                                </div>

                                <div class="grow flex flex-col pl-5 pt-2">
                                    <Link to='/' class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Home Page
                                    </Link>

                                    <div class="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                        Everything starts here
                                    </div>
                                </div>

                                <i class="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                            </div>

                            <div class="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                                <div class="rounded-xl bg-blue-100 px-3 py-2 md:py-4">

                                    <MdImportContacts class="mdi mdi-book-open-page-variant-outline mx-auto 
                            text-indigo-800 text-2xl md:text-3xl"></MdImportContacts>
                                </div>

                                <div class="grow flex flex-col pl-5 pt-2">
                                    <div class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Blog
                                    </div>

                                    <div class="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                        Read our awesome articles
                                    </div>
                                </div>

                                <i class="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                            </div>

                            <div class="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                                <div class="rounded-xl bg-blue-100 px-3 py-2 md:py-4">

                                    <BsArchive class="-outline 
                            mx-auto text-indigo-800 text-2xl md:text-3xl"></BsArchive>
                                </div>

                                <div class="grow flex flex-col pl-5 pt-2">
                                    <div class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Archive
                                    </div>

                                    <div class="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                        Archived posts but still readable
                                    </div>
                                </div>

                                <i class="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                            </div>

                            <div class="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                                <div class="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                    <MdContactPhone className=' mx-auto 
                            text-indigo-800 text-2xl md:text-3xl'></MdContactPhone>
                                </div>

                                <div class="grow flex flex-col pl-5 pt-2">
                                    <div class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Contact
                                    </div>

                                    <div class="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                        Contact us for your questions
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NotFoundpage;
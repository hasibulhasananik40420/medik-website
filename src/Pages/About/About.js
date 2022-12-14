import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle, AiOutlineTwitter } from 'react-icons/ai';
import { Box } from '@chakra-ui/react'

const About = () => {



    return (
        <div>


            <div>
                <div class="py-16 bg-white">
                    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div class="md:5/12 lg:w-5/12">

                                <img src="https://medik.wpengine.com/wp-content/uploads/2019/07/about.jpg" alt="" />
                            </div>
                            <div class="md:7/12 lg:w-6/12">
                                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl ">The Best Infrastructure</h2>
                                <p class="mt-6 text-gray-600">Unpacked reserved sir offering bed judgment may and quitting speaking. Is do be improved raptures offering required in replying raillery. Stairs ladies friend by in mutual an no. Mr hence chief he cause. Whole no doors on hoped. Mile tell if help they ye full name</p>
                                <p class="mt-4 text-gray-600"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm consequat.</p>

                                <button className='px-4 py-3 rounded bg-blue-500 text-white font-medium mt-12'>View Help</button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

            <div>
                <div id="services" class="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
                    <div class="container xl:max-w-6xl mx-auto px-4">
                        <header class="text-center mx-auto mb-12 lg:px-20">
                            <h2 class="text-2xl leading-normal mb-2 font-bold text-black">How to Buy Only the Best</h2>

                            <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac</p>
                        </header>

                        <div class="flex flex-wrap flex-row -mx-4 text-center">
                            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" >
                                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-blue-600 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <div class="inline-block text-gray-900 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">SEO Services</h3>
                                    <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                                </div>
                            </div>
                            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" >
                                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-blue-600 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <div class="inline-block text-gray-900 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Social Content</h3>
                                    <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                                </div>
                            </div>
                            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" >
                                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-blue-600 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <div class="inline-block text-gray-900 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-badge-ad" viewBox="0 0 16 16">
                                            <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                                            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Creative ads</h3>
                                    <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                                </div>
                            </div>
                            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-blue-600 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <div class="inline-block text-gray-900 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Brand Identity</h3>
                                    <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                                </div>
                            </div>
                            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" >
                                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-blue-600 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <div class="inline-block text-gray-900 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Budget &amp; Marketing</h3>
                                    <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                                </div>
                            </div>
                            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" >
                                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-blue-600 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                    <div class="inline-block text-gray-900 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Optimize conversions</h3>
                                    <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-gray-800 px-24 md:h-[60vh] md:flex gap-16'>
                <div className='md:w-3/4'>
                    <h1 className='md:text-5xl text-xl pt-24'><span className='text-white'>Join us :</span> <span className='text-[#35c7df]'> Monthly Seminars on Bringing up Kids</span> </h1>
                    <p className='text-white pt-6 md:text-xl'>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
                </div>

                <div className='md:pt-36 pt-6 pb-6'>
                    <button className='px-4 py-3 rounded bg-white font-medium hover:bg-[#59e4fa] hover:scroll-smooth'>View Help Videos</button>
                </div>
            </div>

            <div className='md:flex justify-between  gap-8 md:mx-24 mx-12 mt-16 '>

                <div className='md:w-2/4'>
                    <h1 className='text-3xl font-sans mb-8'>Frequently Asked Questions</h1>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton className='bg-blue-700 rounded'>
                                    <Box flex='1' textAlign='left'>
                                        <p className='text-orange-500 text-xl font-medium'> Should I allow the child of the feedom</p>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem> <AccordionItem>
                            <h2>
                                <AccordionButton className='bg-blue-700 rounded'>
                                    <Box flex='1' textAlign='left'>
                                        <p className='text-orange-500 text-xl font-medium'> Should I allow the child of the feedom</p>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem> <AccordionItem>
                            <h2>
                                <AccordionButton className='bg-blue-700 rounded'>
                                    <Box flex='1' textAlign='left'>
                                        <p className='text-orange-500 text-xl font-medium'> Should I allow the child of the feedom</p>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem> <AccordionItem>
                            <h2>
                                <AccordionButton className='bg-blue-700 rounded'>
                                    <Box flex='1' textAlign='left'>
                                        <p className='text-orange-500 text-xl font-medium'> Should I allow the child of the feedom</p>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem> <AccordionItem>
                            <h2>
                                <AccordionButton className='bg-blue-700 rounded'>
                                    <Box flex='1' textAlign='left'>
                                        <p className='text-orange-500 text-xl font-medium'> Should I allow the child of the feedom</p>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>


                    </Accordion>


                </div>

                <div className='md:w-2/4 w-full mt-8 md:mt-0'>
                    <img src="https://medik.wpengine.com/wp-content/uploads/2019/07/video.jpg" alt="" />
                </div>

            </div>







            <div class="w-full ">
                <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div class="text-center pb-12">
                        <h2 class="text-base font-bold text-indigo-600">
                            We have the best equipment in the market
                        </h2>
                        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading ">
                            Check our awesome team memwhite
                        </h1>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">


                        <div className="single-team">
                            <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2020/10/3-3.jpg" alt="" />
                            <div className="team-text">
                                <h3>Hasibul Hasan</h3>
                                <p>Gynecologist </p>
                                <div className="flex gap-3 justify-center mt-4">
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <FaFacebookF></FaFacebookF></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex '><AiOutlineTwitter></AiOutlineTwitter></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <AiOutlineGoogle></AiOutlineGoogle></span>

                                </div>
                            </div>
                        </div> <div className="single-team">
                            <img src="https://media.istockphoto.com/id/92347287/photo/portrait-of-a-doctor.jpg?b=1&s=170667a&w=0&k=20&c=Iayz1ePJVb14L3T3n-JIZQYfRgSLlGODvueJVTVKEWU=" alt="" />
                            <div className="team-text">
                                <h3>Hasibul Hasan</h3>
                                <p>Gynecologist </p>
                                <div className="flex gap-3 justify-center mt-4">
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <FaFacebookF></FaFacebookF></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'><AiOutlineTwitter></AiOutlineTwitter></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <AiOutlineGoogle></AiOutlineGoogle></span>

                                </div>
                            </div>
                        </div> <div className="single-team">
                            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="team-text">
                                <h3>Hasibul Hasan</h3>
                                <p>Gynecologist </p>
                                <div className="flex gap-3 justify-center mt-4">
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <FaFacebookF></FaFacebookF></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'><AiOutlineTwitter></AiOutlineTwitter></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <AiOutlineGoogle></AiOutlineGoogle></span>

                                </div>
                            </div>
                        </div> <div className="single-team">
                            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="team-text">
                                <h3>Hasibul Hasan</h3>
                                <p>Gynecologist </p>
                                <div className="flex gap-3 justify-center mt-4">
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <FaFacebookF></FaFacebookF></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'><AiOutlineTwitter></AiOutlineTwitter></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <AiOutlineGoogle></AiOutlineGoogle></span>

                                </div>
                            </div>
                        </div> <div className="single-team">
                            <img src="https://plus.unsplash.com/premium_photo-1661766569022-1b7f918ac3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="team-text">
                                <h3>Hasibul Hasan</h3>
                                <p>Gynecologist </p>
                                <div className="flex gap-3 justify-center mt-4">
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <FaFacebookF></FaFacebookF></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'><AiOutlineTwitter></AiOutlineTwitter></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <AiOutlineGoogle></AiOutlineGoogle></span>

                                </div>
                            </div>
                        </div> <div className="single-team">
                            <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="team-text">
                                <h3>Hasibul Hasan</h3>
                                <p>Gynecologist </p>
                                <div className="flex gap-3 justify-center mt-4">
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <FaFacebookF></FaFacebookF></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'><AiOutlineTwitter></AiOutlineTwitter></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <AiOutlineGoogle></AiOutlineGoogle></span>

                                </div>
                            </div>
                        </div> <div className="single-team">
                            <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="team-text">
                                <h3>Hasibul Hasan</h3>
                                <p>Gynecologist </p>
                                <div className="flex gap-3 justify-center mt-4">
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <FaFacebookF></FaFacebookF></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'><AiOutlineTwitter></AiOutlineTwitter></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <AiOutlineGoogle></AiOutlineGoogle></span>

                                </div>
                            </div>
                        </div> <div className="single-team">
                            <img src="https://images.unsplash.com/photo-1622253694238-3b22139576c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="team-text">
                                <h3>Hasibul Hasan</h3>
                                <p>Gynecologist </p>
                                <div className="flex gap-3 justify-center mt-4">
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <FaFacebookF></FaFacebookF></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'><AiOutlineTwitter></AiOutlineTwitter></span>
                                    <span className='w-8 h-8 bg-[#5ab88a] rounded-sm text-xl flex justify-center items-center'> <AiOutlineGoogle></AiOutlineGoogle></span>

                                </div>
                            </div>
                        </div> <div className="single-team">
                            <img src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
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



                    </div>
                </section>
            </div>



        </div>
    );
};

export default About;
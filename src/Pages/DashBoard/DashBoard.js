import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineHome } from 'react-icons/ai';
import { RiUserLine } from 'react-icons/ri';
import { MdReviews } from 'react-icons/md';
import { HiOutlineDocumentRemove } from 'react-icons/hi';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../Components/CustomLink/CustomLink';
import auth from '../../Firebase.init';
import { BiDockBottom } from 'react-icons/bi';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className=''>

            <h1 className='lg:text-5xl text-2xl text-center pt-5 text-[#5ab88a] font-montons font-semibold'>{user?.displayName} welcome to our <span className='text-black font-montons font-semibold'>kivi</span>care Dashboard</h1>

            <div className='  bg-[#FDFCF6] w-full'>
                <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-12 '>

                </div>
            </div>
            <div className="w-full mt-8">
                <div className='md-w-full  mx-auto md:flex gap-10 justify-center'>
                    <div className='md:w-[20%] md:max-h-max h-full rounded-sm shadow-md p-2'>


                        <CustomLink className="hover:bg-[#FC8B06]  " to='/dashboard'> <span className='w-3/4 flex  items-center'><AiOutlineHome className='block text-xl mr-6' /> <span className='block'>My Appointment</span></span> </CustomLink>

                        <CustomLink className="hover:bg-[#FC8B06]" to='/dashboard/review'>  <span className='w-3/4 flex  items-center'><MdReviews className='block  mr-6 text-xl' /> <span className='block '>My Review</span></span></CustomLink>

                        {admin && <CustomLink className="hover:bg-[#FC8B06]" to='/dashboard/allusers'><span className='w-3/4 flex  items-center'><RiUserLine className='block text-xl mr-6' /><span className='block'> All Users </span> </span></CustomLink>}


                        {admin && <CustomLink className="hover:bg-[#FC8B06]" to='/dashboard/adddocter'><span className='w-3/4 flex  items-center'><BiDockBottom className='block text-xl mr-6' /><span className='block'> Add Docter </span> </span></CustomLink>}

                        {admin && <CustomLink className="hover:bg-[#FC8B06]" to='/dashboard/managedocter'><span className='w-3/4 flex  items-center'><HiOutlineDocumentRemove className='block text-xl mr-6' /><span className='block'>Manage Docter </span> </span></CustomLink>}



                    </div>
                    <div className='md:w-[80%]  rounded-sm  shadow-lg border border-[#eefff7] p-2 '>
                        {/* Out let Here */}
                        <Outlet />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;
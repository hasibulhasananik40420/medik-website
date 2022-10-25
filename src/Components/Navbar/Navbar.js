import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from 'react-icons/bi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';




const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [user] = useAuthState(auth)
    const handleSingOut = () => {
        signOut(auth)
    }

    return (

        <div>
            <div className='shadow-md w-full fixed top-0 left-0 z-20'>
                <div className='md:flex items-center justify-between bg-[#eefff7] text-[#171c26] py-4 md:px-10 px-7'>
                    <div className=' font-bold text-2xl cursor-pointer font-[Poppins] 
text-white'>
                        <span className='flex items-center text-2xl  text-[#009e66] mr-1 pt-2'>

                            <Link to={'/'} > <img className='md:w-28 w-16 h-[30px]' src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/03/home-3-Logo2.png" alt="" /></Link>

                        </span>



                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <BiMenuAltLeft name={open ? 'close' : 'menu'}></BiMenuAltLeft>
                    </div>



                    <ul onClick={() => setOpen(!open)} className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#00459e] md:bg-[#eefff7] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>


                        <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                            <Link to='/' className='  md:border-0 hover:text-gray-400 duration-500'>Home</Link>
                        </li>

                        <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                            <Link to='/appointment' className=' hover:text-gray-400 duration-500'>Appointment</Link>
                        </li>

                        <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                            <Link to='/about' className=' hover:text-gray-400 duration-500'>About</Link>
                        </li>





                        <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                            <Link to='/blog' className=' hover:text-gray-400 duration-500'>Blog</Link>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                            <Link to='/contact' className=' hover:text-gray-400 duration-500'>Contact</Link>
                        </li>

                        {
                            user ? <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                                <button onClick={handleSingOut} className=' hover:text-gray-400 duration-500'>Singout</button>
                            </li> :
                                <li className='md:ml-8 text-xl md:my-0 my-7 border-b border-b-[#009e66] md:border-0 pb-2 md:pb-0 font-san'>
                                    <Link to='/login' className=' hover:text-gray-400 duration-500'>Login</Link>
                                </li>

                        }



                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
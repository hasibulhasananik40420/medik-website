import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../Firebase.init';
import { AiOutlineCheckCircle } from 'react-icons/ai'
const MyAppointment = () => {

    const [appointments, setAppointments] = useState([])
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://medik-website-server-host.onrender.com/bookings?patient=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': ` Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()

                })
                .then(data => {
                    setAppointments(data)
                })
        }
    }, [user])

    if (loading) {
        return <Loading />
    }
    return (
        <div>

            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>MyAppointment:{appointments.length}</h1>
            </div>
            <div className=" overflow-x-auto rounded-sm">
                <table className="w-full text-sm text-left">
                    <thead className="text-white bg-[#5ab88a] rounded">
                        <tr>
                            <th className="px-6 py-4">
                                Serial
                            </th>

                            <th className="px-6 py-4">
                                Name
                            </th>

                            <th className="px-6 py-4">
                                Date
                            </th>
                            <th className="px-6 py-4">
                                Treatment
                            </th>
                            <th className="px-6 py-4">
                                Time
                            </th>
                            <th className="px-6 py-4">
                                Payment
                            </th>


                        </tr>
                    </thead>
                    <tbody>



                        {
                            appointments.map((appointment, index) =>
                                <tr key={appointment._id} className='border border-transparent border-b-[#5ab88a]'>
                                    <td className="px-6 py-4 ">
                                        {index + 1}
                                    </td>

                                    <td className="px-6 py-4">
                                        {appointment.patientName}
                                    </td>

                                    <td className="px-6 py-4">
                                        {appointment.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        {appointment.treatment}
                                    </td>
                                    <td className="px-6 py-4">
                                        {appointment.slot}
                                    </td>
                                    <td className="px-6 py-4">
                                        {(appointment.price && !appointment.paid) && <Link to={`/dashboard/payment/${appointment._id}`}><button className='bg-[#5ab88a] px-3 py-1 rounded-sm text-white font-semibold'>Pay</button></Link>}

                                        {(appointment.price && appointment.paid) && <div>

                                            <div className='flex gap-2'>
                                                <p><span className='bg-red-500 px-3 py-1 rounded-sm text-white font-semibold'>Paid</span></p>

                                                <div className='flex items-center gap-2'>

                                                    <p><span className=' text-[#5ab88a] font-mons  font-semibold'>Success</span></p>

                                                    <p><span className=' text-green-500 text-xl'><AiOutlineCheckCircle></AiOutlineCheckCircle></span></p>
                                                </div>

                                            </div>

                                        </div>}
                                    </td>


                                </tr>
                            )
                        }




                    </tbody>
                </table>



            </div>
        </div>
    );
};

export default MyAppointment;
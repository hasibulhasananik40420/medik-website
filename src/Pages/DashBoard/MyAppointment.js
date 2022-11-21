import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../Firebase.init';
const MyAppointment = () => {

    const [appointments, setAppointments] = useState([])
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/bookings?patient=${user?.email}`, {
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
                                <tr className='border border-transparent border-b-[#5ab88a]'>
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
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import ManageRow from './ManageRow';

const ManageDocter = () => {

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));



    if (isLoading) {
        return <Loading />
    }


    //delete docter


    return (
        <div>

            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>MyAppointment:{doctors.length}</h1>
            </div>
            <div className=" overflow-x-auto rounded-sm">
                <table className="w-full text-sm text-left">
                    <thead className="text-white bg-[#5ab88a] rounded">
                        <tr>
                            <th className="px-6 py-4">
                                Serial
                            </th>
                            <th className="px-6 py-4">
                                Avatar
                            </th>

                            <th className="px-6 py-4">
                                Name
                            </th>

                            <th className="px-6 py-4">
                                Specialty
                            </th>
                            <th className="px-6 py-4">
                                Action
                            </th>



                        </tr>
                    </thead>
                    <tbody>



                        {
                            doctors?.map((docter, index) => <ManageRow key={docter._id} docter={docter} index={index} refetch={refetch}></ManageRow>
                            )
                        }




                    </tbody>
                </table>



            </div>
        </div>
    );
};

export default ManageDocter;
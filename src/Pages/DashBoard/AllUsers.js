import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import User from './User';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',

        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>

            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>All User's</h1>
            </div>
            <div className=" overflow-x-auto rounded-sm">
                <table className="w-full text-sm text-left">
                    <thead className="text-white bg-[#5ab88a] rounded">
                        <tr>
                            <th className="px-6 py-4">
                                Email
                            </th>

                            <th className="px-6 py-4">
                                Make Admin
                            </th>

                            <th className="px-6 py-4">
                                Remove Admin
                            </th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map(user => <User key={user._id} user={user} refetch={refetch}>


                            </User>)
                        }






                    </tbody>
                </table>



            </div>
        </div>
    );
};

export default AllUsers;
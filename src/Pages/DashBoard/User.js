import React from 'react';
import Swal from 'sweetalert2'

const User = ({ user, refetch }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })

            .then(res => {

                if (res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to make a admin',
                    })
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `Successfully made an admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })

    }

    return (
        <tr>
            <td className="px-6 py-4 ">
                {user.email}
            </td>

            <td className="px-6 py-4">

                {role !== 'admin' && <button onClick={makeAdmin} className='px-2 py-2 bg-[#5ab88a] text-sm font-medium text-white rounded'>Make Admin</button>}
            </td>
            <td className="px-6 py-4">
                <button className='px-2 py-2 bg-red-500 text-sm font-medium text-white rounded'>Remove Admin</button>
            </td>
        </tr>
    );
};

export default User;
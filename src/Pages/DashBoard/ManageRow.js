import React from 'react';
import { MdOutlineAutoDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const ManageRow = ({ docter, index, refetch }) => {

    const { name, img, specialty, email } = docter


    const handeDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/doctor/${email}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Docter Deleted!',
                                'Docter has been deleted.',
                                'success'
                            )

                            refetch()

                        }
                    })

            }
        })

    }



    return (

        <tr className='border border-transparent border-b-[#5ab88a]'>
            <td className="px-6 py-4 ">
                {index + 1}
            </td>

            <td className="px-6 py-4">
                <img className='h-12 w-12 rounded-full' src={img} alt="" />
            </td>

            <td className="px-6 py-4">
                {name}
            </td>
            <td className="px-6 py-4">
                {specialty}
            </td>

            <td className="px-6 py-4">
                <MdOutlineAutoDelete onClick={() => handeDelete()} className='w-8 h-8 text-red-500 cursor-pointer'></MdOutlineAutoDelete>
            </td>



        </tr>

    );
};

export default ManageRow;
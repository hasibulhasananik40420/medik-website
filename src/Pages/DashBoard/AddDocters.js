import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import Swal from 'sweetalert2'

const AddDocters = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('https://medical-website-server.vercel.app/service').then(res => res.json()))

    const imageStrogeKey = '3c1f06e572f598cefb6cae407a422a8b'


    const onSubmit = async data => {

        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${imageStrogeKey}`
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const docter = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }

                    fetch('https://medical-website-server.vercel.app/docter', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(docter)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                // toast.success('Docter added successfully')
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: `Docter added successfully`,
                                    showConfirmButton: false,
                                    timer: 2000
                                })
                                reset()
                            }
                            else {
                                // toast.error('Failed to added a docter. Try again letter')

                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: `Failed to added a docter. Try again letter`,
                                })
                            }
                        })

                }

            })
    }

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <div >

                <div>
                    <div className='border-b-2 border-slate-100 mb-4'>
                        <h1 className='text-2xl font-bold text-center'>Add Docter</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-2 lg:w-2/4 mx-auto'>


                        <input  {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })} className='w-full h-11 pl-3 rounded-md in-bord my-2 outline-none border border-[#5ab88a] bg-[#eefff7]' type="name" placeholder='Name' />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.name.message}</span>}
                        </label>

                        <input  {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} className='w-full h-11 pl-3 rounded-md in-bord my-2 outline-none border border-[#5ab88a] bg-[#eefff7]' type="email" placeholder='Email'
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}

                        </label>





                        <select className='w-full h-11 pl-3 rounded-md in-bord my-2 outline-none border border-[#5ab88a] bg-[#eefff7]' {...register("specialty")} >
                            {
                                services?.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                            }
                        </select>






                        <input  {...register("image", {
                            required: {
                                value: true,
                                message: 'Photo is Required'
                            }
                        })} className='w-full h-11 pl-3 rounded-md in-bord my-2 outline-none border border-[#5ab88a] bg-[#eefff7]' type="file" placeholder='' />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.name.message}</span>}
                        </label>

                        <button type='submit' className='px-4 py-2 bg-[#5ab88a] hover:bg-[#154b77] rounded-md block mx-auto text-white'>Add Docter</button>
                    </form>







                </div>
            </div>
        </div>
    );
};

export default AddDocters;
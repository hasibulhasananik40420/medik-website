import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3O63A075wgahMPXUKqu3rlTdQ90cYSLsDuKsWMH70GXlQDUteuuo2eTmki8zEHEyz5q1n3gUsTCMudqCHo0FP000aFDt7yOk');


const Payment = () => {
    const { id } = useParams()
    const url = `https://medik-website-server-host.onrender.com/booking/${id}`
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': ` Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))


    if (isLoading) {
        return <Loading />
    }
    return (
        <div>

            <div className='text-center shadow-lg border border-[#5ab88a] p-6 rounded hover:scale-105 duration-300 w-2/4 mx-auto'>
                <p className='font-montons lg:text-3xl text-2xl text-[#5ab88a] font-bold'>Hello {appointment.patientName}</p>
                <h1 className='text-xl font-semibold mb-2'>Please pay for:{appointment?.treatment}</h1>
                <p >We will see you on <span className='text-red-400 font-medium'>{appointment?.date} at {appointment?.slot}</span></p>
                <p className='font-bold text-2xl text-[#5ab88a]'> Please pay ${appointment?.price}</p>


            </div>

            <div className='text-center shadow-lg border border-[#5ab88a] p-6 rounded hover:scale-105 duration-300 w-2/4 mx-auto mt-6'>

                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements>

            </div>




        </div>
    );
};

export default Payment;
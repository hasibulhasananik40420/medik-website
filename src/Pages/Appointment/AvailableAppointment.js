import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [modal, SetModal] = useState(null)
    const formatedDate = format(date, 'PP')
    // console.log(services);
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () =>
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
    )
    console.log(services);

    if (isLoading) {
        return <Loading />
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatedDate])

    return (
        <div>
            <p className='text-center text-red-500 font-bold mt-8'>    Available appointment is :{format(date, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12 mt-12'>
                {
                    services?.map(service => <Service key={service._id} service={service} date={date} refetch={refetch} SetModal={SetModal}>
                    </Service>)
                }
            </div>



        </div>
    );
};

export default AvailableAppointment;
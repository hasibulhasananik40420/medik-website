import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    console.log(services);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <p className='text-center text-red-500 font-bold mt-8'>    Available appointment is :{format(date, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12 mt-12'>
                {
                    services.map(service => <Service key={service._id} service={service} date={date}>
                    </Service>)
                }
            </div>



        </div>
    );
};

export default AvailableAppointment;
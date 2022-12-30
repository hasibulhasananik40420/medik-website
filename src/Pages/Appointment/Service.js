import {
    useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Select,
} from '@chakra-ui/react';
import React from 'react';
import { Input } from '@chakra-ui/react'
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Swal from 'sweetalert2'
import { useState } from 'react';



const Service = ({ service, date, refetch, }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { name, slots, _id, price } = service

    const [user, loading, error] = useAuthState(auth)
    const [modal, SetModal] = useState(null)

    const handleBooking = (e) => {
        e.preventDefault()
        const slot = e.target.slot.value

        const formatedDate = format(date, 'PP')

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            price,
            patient: user.email,
            patientName: user?.displayName,
            phone: e.target.phone.value
        }

        fetch('https://medik-website-server-host.onrender.com/booking', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.success) {


                    Swal.fire({
                        icon: 'success',
                        title: `Appoitnment is set ,${formatedDate} at ${slot}`,
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `Already hav an Appoitnment on ,${data.booking?.date} at ${data.booking?.slot}`,
                    })
                }

                refetch()
                SetModal(null)

            })


    }

    return (
        <div>
            <div className='text-center shadow-lg border border-[#5ab88a] p-6 rounded hover:scale-105 duration-300'>
                <h1 className='text-xl font-semibold mb-2'>{name}</h1>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-400 font-medium'>Not Available</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <button onClick={onOpen} disabled={slots.length === 0} className='bg-[#5ab88a] px-6 py-3 text-white mt-4 font-semibold rounded hover:bg-[#171c26] duration-300 hover:scale-105'>Book Now</button>

            </div>

            {/* modal */}


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <img className='w-32' src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/03/home-3-Logo2.png" alt="" />
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <h1 className='text-[#5ab88a] font-medium'>Booking for: {name}</h1>

                        <form onSubmit={handleBooking} className='mt-4 grid grid-cols-1 gap-1'>
                            <Input type='text' value={format(date, 'PP')} disabled size='md' />

                            <Select name='slot'>
                                {slots.map(slot => <option value={slot}>{slot}</option>)}
                            </Select>

                            <Input type='text' name='name' value={user.displayName || ''} placeholder='Your name' size='md' />
                            <Input type='email' name='email' value={user.email || ''} placeholder='Your email' size='md' />
                            <Input type='number' name='price' value={price} placeholder='Price' size='md' />
                            <Input type='number' name='phone' placeholder='Your Number' size='md' />
                            {/* <Input className='bg-[#5ab88a] font-bold' type='submit' value='Submit' size='md' /> */}
                            <button className='bg-[#5ab88a] py-2 rounded font-semibold text-white'>Submit</button>

                        </form>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>





        </div>
    );
};

export default Service;
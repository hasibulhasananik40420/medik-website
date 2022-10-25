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
const Service = ({ service, date }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { name, slots } = service

    const handleBooking = (e) => {
        e.preventDefault()
        const slot = e.target.slot.value
        console.log(slot)
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

                            <Input type='text' name='name' placeholder='Your name' size='md' />
                            <Input type='email' name='email' placeholder='Your email' size='md' />
                            <Input type='number' name='price' placeholder='Price' size='md' />
                            <Input type='number' name='number' placeholder='Your Number' size='md' />
                            <Input className='bg-[#5ab88a] font-bold' type='submit' value='Submit' size='md' />

                        </form>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


            {/* 72/7 */}


        </div>
    );
};

export default Service;
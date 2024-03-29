import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const { _id, price, patientName, patient } = appointment
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    //https://medical-website-server.vercel.app


    useEffect(() => {
        fetch(`https://medical-website-server.vercel.app/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': ` Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }

            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true)

        //confirm card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false)
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('Congrats! your payment is completed')
            //store payment on database
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://medical-website-server.vercel.app/bookings/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': ` Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data)
                })
        }


    }








    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='px-3 py-1 bg-[#5ab88a] rounded text-white font-medium' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

            {cardError && <p className='text-red-500 font-medium'>{cardError}</p>}
            {success && <div className='text-green-500 font-medium'>
                <p>{success}</p>
                <p className='text-orange-400  font-mons'>Your transaction Id: {transactionId}</p>


            </div>}



        </>
    );
};

export default CheckoutForm;
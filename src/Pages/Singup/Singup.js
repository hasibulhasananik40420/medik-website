import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../../Components/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';


const Singup = () => {

    // google singup system
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, watch, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || '/'

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
    }



    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }


    let errorMessage
    if (error || googleError || updateError) {
        errorMessage = <p className='text-red-500 font-serif'> {error?.message || googleError?.message || updateError.message}</p>
    }

    if (user || googleUser) {
        console.log(user);
        // navigate('/')
        navigate(from, { replace: true })
    }


    return (
        <div className='bg-[#eefff7]'>


            <main
                className="mx-auto flex min-h-screen w-full px-8 pt-12 justify-center"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-[30rem] flex-col space-y-9">
                    <div className="text-center text-4xl font-medium">Create an account here!!</div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                            type="text"
                            placeholder="Full Name"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                        <label className="label">  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.name.message}</span>}  </label>

                    </div>
                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                            type="email"
                            placeholder="Email Address"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}

                        </label>

                    </div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input  {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                            type="password"
                            placeholder="Password"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                        {errors.password && <label className="label"> <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>  </label>}

                    </div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            {...register("confirmpassword", {
                                required: "PLease give a confirm password",
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                },
                                validate: (val) => {
                                    if (watch('password') !== val) {
                                        return "passwords did't match";
                                    }
                                }
                            })}
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                        {errors.confirmpassword && <label className="label"> <span className="label-text-alt text-red-500 font-medium">{errors.confirmpassword.message}</span> </label>}

                    </div>
                    {errorMessage}

                    <button
                        className="transform rounded-sm bg-[#5ab88a] py-2 font-bold duration-300 hover:bg-indigo-400"
                    >
                        LOG IN
                    </button>
                    <button onClick={() => signInWithGoogle()}
                        className="transform rounded-sm bg-[#5ab88a] py-2 font-bold duration-300 hover:bg-indigo-400"
                    >
                        Continue with google
                    </button>



                </form>
            </main>



        </div>
    );
};

export default Singup;
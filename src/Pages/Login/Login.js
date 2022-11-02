import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../Firebase.init';

import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading/Loading';
import { useForm } from 'react-hook-form';
const Login = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"

    const onSubmit = (data) => {

        signInWithEmailAndPassword(data.email, data.password)
    }

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    let errorMessage
    if (error || googleError) {
        errorMessage = <p className='font-blod text-red-600'>{error?.message || googleError?.message}</p>
    }

    if (user || googleUser) {

        navigate(from, { replace: true });
    }
    return (
        <div>


            <main
                className="mx-auto flex min-h-screen w-full px-8 items-center justify-center bg-[#eefff7] text-white"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-[30rem] flex-col space-y-9">
                    <div className="text-center text-4xl font-medium text-[#171c26]">Log In</div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input {...register("email", {
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
                            placeholder="Email or Username"
                            className="w-full border-none text-[#171c26] bg-transparent outline-none placeholder:italic focus:outline-none"
                        />

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}

                        </label>
                    </div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input {...register("password", {
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
                            className="w-full border-none text-[#171c26] bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}

                        </label>
                    </div>
                    {errorMessage}
                    <button
                        className="transform rounded-sm bg-[#5ab88a] py-2 font-bold duration-300 hover:bg-indigo-400"
                    >
                        LOG IN
                    </button>
                    <button onClick={() => signInWithGoogle()}
                        className="flex items-center justify-center gap-3 transform rounded-sm bg-[#5ab88a] py-2 font-bold duration-300 hover:bg-indigo-400"
                    >
                        <span><img className='w-6' src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="" /></span>   <span>Continue with google</span>
                    </button>

                    <Link
                        to="/forgetpassword"
                        className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
                    >FORGOT PASSWORD?
                    </Link>

                    <p className="text-center text-[#171c26] text-lg">
                        No account?
                        <Link
                            to="/singup"
                            className="font-medium text-indigo-500 underline-offset-4 hover:underline"
                        > Create One</Link
                        >
                    </p>
                </form>
            </main>
        </div>

    );
};

export default Login;
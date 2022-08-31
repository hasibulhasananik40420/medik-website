import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, Outlet } from 'react-router-dom';

const Products = () => {

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>

            <h1 className='text-5xl font-sans font-semibold text-center mt-24'>Our Products</h1>
            <p className='mt-4 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>






            <div className='w-3/4 mx-auto mt-8 border  cursor-pointer'>

                <Slider {...settings}>
                    <Link to={''} className='border h-[150px]'>
                        <div >
                            <img className='mx-auto mt-6' src="https://medik.wpengine.com/wp-content/uploads/2020/05/Medication.png" alt="" />
                            <h3 className='text-center font-medium'>Medication</h3>
                        </div>
                    </Link>
                    <Link to={'drugs'} className=' border rounded-r-none h-[150px] '>
                        <div >
                            <img className='mx-auto mt-6' src="https://medik.wpengine.com/wp-content/uploads/2020/05/Drugs.png" alt="" />
                            <h3 className='text-center'>Drugs</h3>
                        </div>
                    </Link>

                    <Link to={'labpratory'} className=' border h-[150px] '>
                        <div >
                            <img className='mx-auto mt-6' src="https://medik.wpengine.com/wp-content/uploads/2020/05/Drugs.png" alt="" />
                            <h3 className='text-center'>Labpratory</h3>
                        </div>
                    </Link>
                    <Link to={'equipments'} className=' border h-[150px] '>
                        <div >
                            <img className='mx-auto mt-6' src="https://medik.wpengine.com/wp-content/uploads/2020/05/Equipments.png" alt="" />
                            <h3 className='text-center'>Equipments</h3>
                        </div>
                    </Link>
                    <Link to={'Radiology'} className=' border h-[150px] '>
                        <div >
                            <img className='mx-auto mt-6' src="https://medik.wpengine.com/wp-content/uploads/2020/05/Radiology.png" alt="" />
                            <h3 className='text-center'>Radiology</h3>
                        </div>
                    </Link>

                    <Link to={'devices'} className=' border h-[150px]  '>
                        <div >
                            <img className='mx-auto mt-6' src="https://medik.wpengine.com/wp-content/uploads/2020/05/Devices.png" alt="" />
                            <h3 className='text-center'>Devices</h3>
                        </div>
                    </Link>

                </Slider>
            </div>

            <div className='mt-12'>
                <Outlet />
            </div>

















        </div>
    );
};

export default Products;
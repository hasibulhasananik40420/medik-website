import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const FooterTop = () => {

    return (
        <div className="mx-24 mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">


                <div className=" border border-[#d2e9fc]  rounded w-[250px] p-8">
                    <div className="flex flex-col items-center">
                        <img className="" src="https://medik.wpengine.com/wp-content/uploads/2020/05/client-4-1.png" alt="" />
                        <h1 className=""><span className="text-blue-900 text-xl"> KURE</span> <span className="text-xl text-black">MEDICS</span></h1>
                    </div>
                </div> <div className=" border border-[#d2e9fc]  rounded w-[250px] p-8">
                    <div className="flex flex-col items-center">
                        <img className="" src="https://medik.wpengine.com/wp-content/uploads/2020/05/client-5-1.png" alt="" />
                        <h1 className=""><span className="text-blue-900 text-xl"> KURE</span> <span className="text-xl text-black">MEDICS</span></h1>
                    </div>
                </div> <div className=" border border-[#d2e9fc]  rounded w-[250px] p-8">
                    <div className="flex flex-col items-center">
                        <img className="" src="https://medik.wpengine.com/wp-content/uploads/2020/05/client-6-1.png" alt="" />
                        <h1 className=""><span className="text-blue-900 text-xl"> KURE</span> <span className="text-xl text-black">MEDICS</span></h1>
                    </div>
                </div> <div className=" border border-[#d2e9fc]  rounded w-[250px] p-8">
                    <div className="flex flex-col items-center">
                        <img className="" src="https://medik.wpengine.com/wp-content/uploads/2020/05/client-7.png" alt="" />
                        <h1 className=""><span className="text-blue-900 text-xl"> KURE</span> <span className="text-xl text-black">MEDICS</span></h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6 gap-4 cursor-pointer">
                <BsArrowRight className="w-8 h-8 text-gray-500"></BsArrowRight>
                <BsArrowLeft className="w-8 h-8 text-gray-500"></BsArrowLeft>

            </div>
        </div>
    );
};

export default FooterTop;
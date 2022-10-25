import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div>
            <div className='bg-gray-50'>
                <div className='lg:ml-20 ml-8'>

                    <div className='lg:flex items-center pt-24 '>
                        <div className='lg:w-2/4 '>

                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>

                        <div className='lg:w-2/4 bg-[#5ab88a] rounded-md mt-16 lg:mt-0'>
                            <img className='mt-[-40px]' src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/revslider/eye-care/ey-01.png" alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AppointmentBanner;
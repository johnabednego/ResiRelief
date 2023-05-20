import React from 'react'
import hostel from './assets/ab2.jpg'
import mission from './assets/mission.jpg'
const Mission = () => {
    return (
        <div className='bg-primary text-white py-10 px-4 sm:px-8 lg:px-12'>
            <div className='flex flex-col sm:flex-row justify-center items-center'>
                <div className=' flex sm:block flex-col justify-center items-center align-middle text-center'>
                    <div className=' justify-center items-center flex w-[150px] sm:w-[100px] lg:w-[150px] xl:w-[300px] '>
                        <img src={mission} alt="mission" className=' rounded-full' />
                    </div>
                    <h1 className=' text-[18px] lg:text-[25px] font-medium sm:text-justify sm:mr-6 lg:mr-12'>
                        Our mission is to connect travelers with the perfect accommodations,
                        providing a seamless booking experience that offers an extensive range of quality hostels,
                        apartments, hotels, and guest houses worldwide. We aim to empower travelers to discover unique and affordable options,
                        while supporting property owners by driving bookings,
                        increasing their visibility, and fostering a global hospitality community.
                    </h1>
                </div>
                <img src={hostel} alt="hostel" className=' mt-8 sm:mt-0 sm:w-[300px] h-[300px] md:h-auto md:w-[400px] xl:w-[600px]  rounded-lg border-separate shadow-sm shadow-white' />
            </div>
        </div>
    )
}

export default Mission

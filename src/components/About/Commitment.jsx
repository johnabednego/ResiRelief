import React from 'react'

const Commitment = () => {
    const data = [
        {tittle: "Connecting Travelers", subTittle: "The platform serves as a bridge between travelers and accommodation providers, ensuring they can easily find and book their ideal place to stay."},
        {tittle: "Seamless Booking Experience", subTittle: "The platform focuses on providing a user-friendly and efficient booking process, making it hassle-free for travelers to secure their accommodations."},
        {tittle: "Extensive Range of Options", subTittle: "The platform strives to offer a diverse selection of high-quality hostels, apartments, hotels, and guest houses, catering to the preferences and budgets of different travelers."},
        {tittle: "Support for Property Owners", subTittle:"The platform recognizes the importance of supporting property owners by driving bookings and enhancing their visibility, helping them thrive in the competitive hospitality industry."}
    ]
    return (
        <div className='  items-center flex flex-col h-full pb-28 w-screen bg-hotel bg-cover'>
            <div className=' mt-20 justify-center xl:justify-start text-white  '>
                <h1 className=' text-center sm:text-left text-[30px] sm:text-[40px] font-bold '>Our Commitment</h1>
                <h1 className='text-center sm:text-left text-[16px] font-normal' >Our mission statement highlights the platform's commitment to the follwoing:</h1>
            </div>
            <div className=' mt-20 w-full flex flex-wrap  items-center justify-around'>
                {data.map(item => {
                    return (
                        <div className='shadow-lg border-b-blue-500 border-b-8 border-white border-2 px-1  text-center justify-center items-center flex flex-col mt-2 bg-gradient-to-t from-primary to-emerald-800 w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-md'>
                            <h1 className=' border-b-2 border-gray-500  text-[20px] text-center sm:text-[30px] font-bold text-white '>{item.tittle}</h1>
                            <p className=' mt-3 text-white text-[16px] font-medium'>{item.subTittle}</p>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default Commitment

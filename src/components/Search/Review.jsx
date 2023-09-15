import React from 'react'

const Review = ({ data }) => {
    return (
        <center>
            <div className=" text-left sm:w-[90%] md:w-[70%] lg:w-1/2  top-[607.65px] right-[0px] left-[0px] rounded bg-white box-border flex flex-col pt-[15px] pb-[16px] pr-[16px] pl-[16px] items-start justify-start border-solid border-[#DDDFE2]">
                <h1 className=' text-[18px]'>Reviews of <strong>{data.title}</strong> from real guests</h1>
                <div className=' flex flex-col sm:flex-row gap-4'>
                    {/**person 1 */}
                    <div className=' mt-4 bg-[#f5f5f5] w-full rounded-[15px] px-3 py-7'>
                        <div className=' flex flex-wrap justify-between'>
                        <h1><span className=' text-[28px] text-[#488bf8]'>10.0</span> <span className=" text-base text-[#488bf8]">Exceptional</span></h1>
                        <h1 className=' text-lg text-primary font-semibold float-right'>Abraham</h1>
                        </div>
                        <div class="rounded-md bg-gradient-to-r from-primary to-secondary p-1"></div>
                        <div className=' mt-4 w-full px-5'>
                            <h1 className='text-[18px] font-bold text-[#333333]'>"A place to enjoy solitude."</h1>
                            <h1 className=' mt-4 text-[14px] text-[#4e4e4e]'>Nice host and a great place to have your absolute comfort and pleasure, much affordable than you could ever imagine</h1>
                        </div>
                    </div>

                    {/**person 2 */}
                    <div className=' mt-4 bg-[#f5f5f5] w-full rounded-[15px] px-3 py-7'>
                        <div className=' flex flex-wrap justify-between'>
                        <h1><span className=' text-[28px] text-[#488bf8]'>8.9</span> <span className=" text-base text-[#488bf8]">Excellent</span></h1>
                        <h1 className=' text-lg text-primary font-semibold float-right'>Joel</h1>
                        </div>
                        <div class="rounded-md bg-gradient-to-r from-primary to-secondary p-1"></div>
                        <div className=' mt-4 w-full px-5'>
                            <h1 className='text-[18px] font-bold text-[#333333]'>"Good short relaxing stay. Excellent staff and service."</h1>
                            <h1 className=' mt-4 text-[14px] text-[#4e4e4e]'>The location and pictures matched the description. The host and grounds staff were very accommodating and helped us with everything from phone charger to getting a fridge in our room. We really appreciated the customer care and attention to detail in doing their best to help us enjoy our stay, I would definitely recommend it to other looking for a short stay in the Adenta area</h1>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default Review

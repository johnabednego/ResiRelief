import React from 'react'
import { useSelector } from 'react-redux'
import contact from './assets/contact-1.jpg'
import Nav from '../Nav/Nav'
import SignInModal from '../../components/SignIn/SignInModal'
import SignUpModal from '../../components/SignUp/SignUpModal'
const ContactHero = () => {
    const signInModal = useSelector((state) => state.signInModal.value)
    const signUpModal = useSelector((state) => state.signUpModal.value)
    return (
        <div className=' overflow-hidden'>
            <div className=' w-screen h-screen bg-contact bg-cover bg-top'>
                <div data-aos='zoom-in' data-aos-duration="3000" className=' xl:px-12 pb-1 fixed w-full z-10  '>
                    <Nav />
                </div>
                <div className='pt-28 lg:pt-24 justify-center items-center flex flex-col '>
                    <div className=' animate-pulse sm:mt-16 flex flex-col bg-white px-2 sm:rounded-tl-3xl sm:rounded-tr-3xl shadow-xl shadow-[#413f3f]'>
                        <h1 className=' text-[30px] text-center sm:text-left sm:text-[40px] font-bold '>We Would Love to Hear From You</h1>
                        {/* <h1 className='text-center sm:text-left text-[12px] md:text-[16px] font-normal' ></h1>
                         */}
                        <div className='flex justify-between -mb-3'>
                            <div className=' -mt-2 h-4 w-2 bg-white flex items-end'>
                                <div className=' min-w-[15px] -ml-1 h-1 bg-blue-400'></div>
                            </div>
                            <div className=' h-[2px] w-full bg-white'>

                            </div>
                            <div className=' -mt-2 h-4 w-2 bg-white flex items-end'>
                                <div className=' min-w-[15px] -ml-1 h-1 bg-blue-400'></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=' mb-8 justify-center items-center  flex flex-col  w-full h-full bg-white'>
                <img src={contact} alt="" />
                <form action="" method="post" className='flex flex-col w-full justify-center items-center'>
                    {/**Name */}
                    <div className='flex -ml-4 -mr-4 flex-wrap sm:flex-nowrap sm:max-w-[85%] md:max-w-[70%]  lg:max-w-[50%] w-full'>
                        {/**First Name */}
                        <div className=' mt-2 relative w-full min-h-[1px] pl-4 pr-4'>
                            <div className=' leading-[1.6] mb-5 text-[16px]'>
                                <label className=' flex text-[16px] font-semibold w-full pb-1'>
                                    First Name
                                    <span className=' text-[#cc0000]'>*</span>
                                </label>
                                <div className='relative'>
                                    <input required type="text" name='FirstName' className=' input py-[5px] px-[10px] w-full block text-[1rem] leading-[1.5] text-[#495057] bg-white bg-clip-padding border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] ' />
                                </div>
                            </div>
                        </div>
                        {/**Last Name */}
                        <div className=' mt-2 relative w-full min-h-[1px] pl-4 pr-4'>
                            <div className=' leading-[1.6] mb-5 text-[16px]'>
                                <label className=' flex text-[14px] font-semibold w-full pb-1'>
                                    Last Name
                                    <span className=' text-[#cc0000]'>*</span>
                                </label>
                                <div className='relative'>
                                    <input required type="text" name='LastName' className=' input mt-[5px] py-[5px] px-[10px] w-full block text-[1rem] leading-[1.5] text-[#495057] bg-white bg-clip-padding border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] ' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**Credentails */}
                    <div className='flex -ml-4 -mr-4 flex-wrap sm:flex-nowrap sm:max-w-[85%] md:max-w-[70%]  lg:max-w-[50%] w-full'>
                        {/**Email Address  */}
                        <div className=' mt-2 relative w-full min-h-[1px] pl-4 pr-4'>
                            <div className=' leading-[1.6] mb-5 text-[16px]'>
                                <label className=' flex text-[16px] font-semibold w-full pb-1'>
                                    Email Address
                                    <span className=' text-[#cc0000]'>*</span>
                                </label>
                                <div className='relative'>
                                    <input required type="email" name='email' className=' input py-[5px] px-[10px] w-full block text-[1rem] leading-[1.5] text-[#495057] bg-white bg-clip-padding border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] ' />
                                </div>
                            </div>
                        </div>
                        {/**Phone Number */}
                        <div className=' mt-2 relative w-full min-h-[1px] pl-4 pr-4'>
                            <div className=' leading-[1.6] mb-5 text-[16px]'>
                                <label className=' flex text-[14px] font-semibold w-full pb-1'>
                                    Phone Number
                                    <span className=' text-[#cc0000]'>*</span>
                                </label>
                                <div className='relative'>
                                    <input type="tel" name='PhoneNumber' className=' input mt-[5px] py-[5px] px-[10px] w-full block text-[1rem] leading-[1.5] text-[#495057] bg-white bg-clip-padding border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] ' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**Identity*/}
                    <div className='px-4 sm:max-w-[85%] md:max-w-[70%]  lg:max-w-[50%] w-full'>
                        <label className=' flex text-[16px] font-semibold w-full pb-1'>
                            How do you identify yourself?
                            <span className=' text-[#cc0000]'>*</span>
                        </label>
                        <select name="identity" id="identity" className=' input h-[calc(2.25rem_+_2px)] mt-[5px] py-[5px] px-[10px] block w-full text-[1rem] leading-[1.5] text-[#495057] bg-white bg-clip-padding border-[1px] border-solid border-[#ced4da] rounded-[0.25rem]'>
                            <option value="Property Owner">Property Owner</option>
                            <option value="Accomodation Seeker">Accomodation Seeker</option>
                        </select>
                    </div>

                    {/**Message */}
                    <div className=' mt-6 pl-4 pr-4 sm:max-w-[85%] md:max-w-[70%]  lg:max-w-[50%] w-full'>
                        <label className=' flex text-[16px] font-semibold w-full pb-1'>
                            How may we help you??
                            <span className=' text-[#cc0000]'>*</span>
                        </label>
                        <textarea className=' input block w-full text-[1rem] leading-[1.5] text-[#495057] bg-white border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] bg-clip-padding mt-[5px] py-[5px] px-[10px]' name="message" id="message" cols="40" rows="10" placeholder='Help us understand how we can help you?'></textarea>
                    </div>
                    {/**Submit button */}
                    <div className='transition-all duration-150 ease-in-out delay-0 p-3 box-border mt-8  sm:max-w-[40%] md:max-w-[30%]  lg:max-w-[20%] w-full'>
                        <button type="submit" className=' signinButton relative border-none p-3 rounded-[4px] select-none text-white w-full '>
                            <div className='flex items-center justify-center'>
                                <div className=''>
                                    <span className='text-[14px] leading-5 font-medium'>Submit</span>
                                </div>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            {signInModal ?
                <SignInModal /> : null}
            {signUpModal ? <SignUpModal /> : null}
        </div>
    )
}

export default ContactHero

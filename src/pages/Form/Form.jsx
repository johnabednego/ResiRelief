import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import SignInModal from "../../components/SignIn/SignInModal";
import SignUpModal from "../../components/SignUp/SignUpModal";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import ErrorPage from '../Error/ErrorPage';
import CountrySelector from '../../components/Form/CountrySelector';

const Form = () => {
    const signInModal = useSelector((state) => state.signInModal.value);
    const signUpModal = useSelector((state) => state.signUpModal.value);
    const location = useLocation();
    const { state } = location;
    const [country, setCountry] = useState("")
    const [isChecked, setIsChecked] = useState(false);
    console.log(state)

    if (state) {
        let actionDescription = "book a room"
        if (state.property_type === "Apartment") {
            actionDescription = "buy/rent"
        }
        return (
            <div>
                {/* //  {/* Navigation bar */}
                <div className="fixed w-full z-50">
                    <Nav />
                </div>

                {/* More details*/}
                <div className="  relative w-full flex flex-col items-center h-fit justify-center text-center text-xs">
                    <div className=" mb-6 flex flex-col items-center justify-center w-full h-fit ">
                        <div className="  rounded flex flex-col items-center justify-center h-fit w-full">
                            <img src={state.image} alt="" className=' lg:h-[100vh] w-full rounded-bl-3xl rounded-br-3xl shadow-lg' />
                            <div className=' mt-10 flex flex-col items-center justify-center text-center'>
                                <h1 className=' text-[15px] text-center sm:text-left sm:text-[30px] md:text-[40px] font-bold '>{state.title}</h1>
                                <h1 className=' mt-[12px] sm:mt-[16px] md:mt-[20px] text-center sm:text-left text-[12px] md:text-[16px] font-normal'>{state.description}</h1>
                            </div>
                            <h1 className=' text-lg mt-4 text-primary font-semibold'>Fill the form below to {actionDescription}</h1>
                            <div className='p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                <form action="" method="post" data-cy="application form">
                                    <div className=' box-border flex flex-wrap items-center -m-3 w-[calc(100%_+_24px)] md:w-[100vh]'>
                                        {/** names */}
                                        <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0  gap-3 w-[20vh]'>
                                            {/**First name */}
                                            <div className=' flex flex-col w-full'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'>First Name</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input required type="text" name="firstName" id="firstName" data-cy="firstName" placeholder="First Name" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>
                                            {/**Last name */}
                                            <div className=' w-full flex flex-col'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'>Last Name</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input required type="text" name="lastName" id="lastName" data-cy="lastName" placeholder="Last Name" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/** email */}
                                        <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3 w-[20vh]'>
                                            {/**Email */}
                                            <div className=' w-full flex flex-col'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'>Email</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input required type="email" name="email" id="email" data-cy="email" placeholder="Double-check for typos" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>
                                            {/**Confirm Email */}
                                            <div className=' w-full flex flex-col'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'>Retype Email</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input required type="email" name="confirmEmail" id="confirmEmail" data-cy="confirmEmail" placeholder="" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/** phone country */}
                                        <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3 w-[20vh]'>
                                            {/**Phone Number */}
                                            <div className=' flex flex-col w-full'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'>Phone Number</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input required type="tel" name="phoneNumber" id="phoneNumber" data-cy="phoneNumber" placeholder="+233240234579" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>
                                            {/**country */}
                                            <div className=' w-full flex flex-col'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'>Country</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <CountrySelector setUserCountry={setCountry} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/**Check Box */}
                                        <div className='flex items-baseline p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3'>
                                            <input onChange={() => setIsChecked(!isChecked)} type="checkbox" checked={isChecked} name="" id="" />
                                            <span className='text-[14px] leading-5 font-normal'>Make this booking for someone else</span>
                                        </div>

                                        {/** The person's infomation */}
                                        {isChecked?
                                        <div className=' box-border flex flex-wrap items-center  w-[calc(100%_+_24px)]'>
                                            <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3 w-[20vh]'>

                                                <h1 className=' text-lg mt-4 text-primary font-semibold'>Provide the person's details</h1>
                                            </div>
                                            <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3 w-[20vh]'>
                                                {/**Full name */}
                                                <div className=' flex flex-col w-full'>
                                                    <div className='pb-1 text-left'>
                                                        <span className='text-[14px] leading-5 font-normal'>Full Name</span>
                                                    </div>
                                                    <div className=' box-border flex flex-wrap w-full'>
                                                        <div className='w-full flex items-start'>
                                                            <input required type="text" name="fullName" id="fullName" data-cy="fullName" placeholder="Full Name" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/**Email */}
                                                <div className=' w-full flex flex-col'>
                                                    <div className='pb-1 text-left'>
                                                        <span className='text-[14px] leading-5 font-normal'>Email</span>
                                                    </div>
                                                    <div className=' box-border flex flex-wrap w-full'>
                                                        <div className='w-full flex items-start'>
                                                            <input required type="email" name="email" id="email" data-cy="email" placeholder="Email" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/** phone country */}
                                            <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3 w-[20vh]'>
                                                {/**Phone Number */}
                                                <div className=' flex flex-col w-full'>
                                                    <div className='pb-1 text-left'>
                                                        <span className='text-[14px] leading-5 font-normal'>Phone Number</span>
                                                    </div>
                                                    <div className=' box-border flex flex-wrap w-full'>
                                                        <div className='w-full flex items-start'>
                                                            <input required type="tel" name="phoneNumber" id="phoneNumber" data-cy="phoneNumber" placeholder="+233240234579" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/**country */}
                                                <div className=' w-full flex flex-col'>
                                                    <div className='pb-1 text-left'>
                                                        <span className='text-[14px] leading-5 font-normal'>Country</span>
                                                    </div>
                                                    <div className=' box-border flex flex-wrap w-full'>
                                                        <div className='w-full flex items-start'>
                                                            <CountrySelector setUserCountry={setCountry} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>:null}
                                        {/** Sign in button */}
                                        <div className='transition-all duration-150 ease-in-out delay-0 p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                            <button type="submit" className=' signinButton relative border-none p-3 rounded-[4px] select-none text-white w-full '>
                                                <div className='flex items-center justify-center'>
                                                    <div className=''>
                                                        <span className='text-[14px] leading-5 font-medium'>Submit</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>

                {signInModal ? <SignInModal /> : null}
                {signUpModal ? <SignUpModal /> : null}
            </div >
        )
    }
    else {
        return <ErrorPage />
    }
}

export default Form

import React from 'react'

import { useDispatch } from 'react-redux'
import { SignInTrue } from '../../features/nav/signInSlice'
import { SignUpFalse } from '../../features/nav/signUpSlice'

const SignUp = () => {
    const dispatch = useDispatch()
    const handleCreateAccount = ()=>{
        dispatch(SignUpFalse()) && dispatch(SignInTrue())
    }

    return (
        <div className="flex">

            <div className='bg-white pt-4 px-6 relative'>

                <button
                    className="closeButton rounded-[4px] select-none box-border flex justify-center items-center text-center p-1 ml-auto  border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => dispatch(SignUpFalse())}
                >
                    <span className=" -mt-1 flex justify-center items-center  bg-transparent text-white opacity-95 h-6 w-6 text-2xl  outline-none focus:outline-none">
                        x
                    </span>
                </button>

                <div className='my-4'>
                    <h1 className='text-[24px] font-medium leading-6 '>Sign up</h1>
                </div>
                <div className='mb-[32px]'>
                    {/**Sign in */}
                    <div className=' box-border flex flex-wrap -m-3 w-[calc(100%_+_24px)] '>
                        <div className=' p-3 box-border m-0 basis-full flex-grow-0 max-w-full '>
                                <div className='p-3 box-border m-0   flex-grow-0 max-w-full'>
                                    <form action="" method="post" >
                                        <div className=' flex flex-wrap items-center -m-3 w-[calc(100%_+_24px)]'>
                                            {/** First Name */}
                                            <div className=' p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                <div className='pb-1'>
                                                    <span className='text-[14px] leading-5 font-normal'>First Name</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input required type="text" name="FirstName" id="FirstName" placeholder="First Name" className=' inputShadow m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>


                                            {/** Last Name */}
                                            <div className=' p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                <div className='pb-1'>
                                                    <span className='text-[14px] leading-5 font-normal'>Last Name</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input required type="text" name="LastName" id="LastName" placeholder="Last Name" className=' inputShadow m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>

                                            {/** Email */}
                                            <div className=' p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                <div className='pb-1'>
                                                    <span className='text-[14px] leading-5 font-normal'>Email</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input required type="email" name="email" id="email" placeholder="Email" className=' inputShadow m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' flex flex-wrap items-center -m-3 w-[calc(100%_+_24px)]'>
                                            {/** Password */}
                                            <div className=' p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                <div className='pb-1'>
                                                    <span className='text-[14px] leading-5 font-normal'>Password</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input required type="password" name="password" id="password" data-cy="password" placeholder="Password" className=' inputShadow m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>

                                            {/** Confirm Password */}
                                            <div className=' p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                <div className='pb-1'>
                                                    <span className='text-[14px] leading-5 font-normal'>Confirm Password</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input required type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="Confirm Password" className=' inputShadow m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>
                                            {/** Sign in button */}
                                            <div className='transition-all duration-150 ease-in-out delay-0 p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                <button type="submit" className=' signinButton relative border-none p-3 rounded-[4px] select-none text-white w-full '>
                                                    <div className='flex items-center justify-center'>
                                                        <div className=''>
                                                            <span className='text-[14px] leading-5 font-medium'>Sign up</span>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>

                {/**Already have an account */}
                <div className=' mt-4 mb-6'>
                     <button onClick={()=>handleCreateAccount()} className='accountButton'>
                        <div className=' flex items-center justify-center'>
                            <div className=''>
                                    <span className=' text-[10px] sm:text-[14px] leading-5 font-medium'>Already have an account? Sign in</span>
                            </div>
                        </div>
                     </button>
                </div>

                {/**agrrement assurace */}
                <div className=' text-center'>
                    <span className=' text-[12px] leading-4 font-normal text-[#2A2A2E]'>
                        <span>By signing in, I agree to ResiRelief's </span>
                        < span className=' cursor-pointer bg-transparent no-underline text-[14px] leading-5 font-normal text-[#5392F9]'>
                            <span className='text-[12px] leading-3 font-normal'>Terms of Use</span>
                        </span>
                        <span> and </span>
                        < span className=' cursor-pointer bg-transparent no-underline text-[14px] leading-5 font-normal text-[#5392F9]'>
                            <span className='text-[12px] leading-3 font-normal'>Privacy Policy</span>
                        </span>
                        <span>.</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SignUp

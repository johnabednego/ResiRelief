import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import MobileNumber from '../MobileNumber'
import { useDispatch } from 'react-redux'
import { SignInTrue } from '../../features/nav/signInSlice'
import { SignUpFalse } from '../../features/nav/signUpSlice'

const SignUp = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState(true)


    const handleCreateAccount = ()=>{
        dispatch(SignUpFalse()) && dispatch(SignInTrue())
    }

    return (
        <div className={state ? 'flex mt-[195px] bg-transparent ' : "flex"}>

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
                            {/**Sign in Type */}
                            <ul className=' mt-0 mb-0 flex p-0 justify-start '>
                                <li onClick={() => setState(true)} className={state ? ' flex-grow flex-shrink basis-0 items-center cursor-pointer flex list-none py-3 px-2 w-auto border-b-2  border-solid border-[#5392F9] -mb-[2px]' : 'flex-grow flex-shrink basis-0 items-center cursor-pointer flex list-none py-3 px-2 w-auto border-b-[1px]  border-solid border-[#DDDFE2] -mb-[1px]'}>
                                    <div className='w-full text-center '>
                                        <span className='text-[#5392F9] text-[14px] leading-5 font-medium'>Email</span>
                                    </div>
                                </li>
                                <li onClick={() => setState(false)} className={state ? 'flex-grow flex-shrink basis-0 items-center cursor-pointer flex list-none py-3 px-2 w-auto border-b-[1px]  border-solid border-[#DDDFE2] -mb-[1px]' : ' flex-grow flex-shrink basis-0 items-center cursor-pointer flex list-none py-3 px-2 w-auto border-b-2  border-solid border-[#5392F9] -mb-[2px]'}>
                                    <div className='w-full text-center '>
                                        <span className='text-[14px] leading-5 font-normal'>MOBILE</span>
                                    </div>
                                </li>

                            </ul>
                            {/** Sign up Form */}
                            {state ?

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
                                </div> :

                                <>
                                    {/**Sign in with Mobile */}
                                    <div className='p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                        <form action="" method="post" data-cy="mobile-login-form">
                                            <div className=' box-border flex flex-wrap items-center -m-3 w-[calc(100%_+_24px)]'>
                                                {/** Mobile number */}
                                                <div className=' p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                    <div className='pb-1'>
                                                        <span className='text-[14px] leading-5 font-normal'>Mobile number</span>
                                                    </div>
                                                    <MobileNumber />

                                                </div>
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
                                                {/** Sign in button */}
                                                <div className='p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                    <button type="submit" className=' signinButton relative border-none p-3 rounded-[4px] select-none text-white w-full '>
                                                        <div className='flex items-center justify-center'>
                                                            <div className=''>
                                                                <span className='text-[14px] leading-5 font-medium'>Send OTP</span>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </>}

                        </div>
                    </div>
                </div>
                {/*Sign in with other option*/}
                <div className='w-full flex text-center justify-center items-center relative bg-transparent p-0'>
                    <div className=' min-w-[1px] w-full m-0 border-b-[1px] border-solid border-b-[#DDDFE2] flex-grow flex-shrink basis-0  '></div>
                    <div className=' ml-2 mr-2 '><span className='text-[14px] leading-5 font-normal'>or continue with</span></div>
                    <div className=' min-w-[1px] w-full m-0 border-b-[1px] border-solid border-b-[#DDDFE2] flex-grow flex-shrink basis-0  '></div>
                </div>
                {/** Other options */}
                <div className=' mt-4 mb-4 '>
                    <div className=' box-border flex flex-wrap -m-2 w-[calc(100%_+_16px)]'>
                        <div className=' p-2 box-border m-0 basis-full flex-grow-0 max-w-full'>
                            <div className=' box-border flex justify-start -m-1 w-[calc(100%_+_8px)] flex-wrap '>
                                {/**Google */}
                                <div className=' p-1 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                    <button className=' relative p-3 rounded-[4px] select-none border-[1px] border-solid border-[#5392F9] text-[#5392F9] bg-white w-full'>
                                        <div className='flex items-center justify-center'>
                                            <div className=' mr-2 flex'>
                                                <FcGoogle />
                                            </div>
                                            <span className='text-[14px] leading-5 font-medium'>Google</span>
                                        </div>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/**Line break */}
                <div className='w-full flex items-center text-center justify-center relative bg-transparent p-0'>
                    <div className=' min-w-[1px] w-full m-0 flex-grow flex-shrink basis-0 border-[1px] border-solid border-[#DDDFE2] '></div>
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

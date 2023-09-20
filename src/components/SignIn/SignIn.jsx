import React from 'react'
import { useDispatch } from 'react-redux'
import { SignUpTrue } from '../../features/nav/signUpSlice'
import { SignInFalse } from '../../features/nav/signInSlice'

const SignIn = () => {
    const dispatch = useDispatch()

    const handleCreateAccount = ()=>{
        dispatch(SignInFalse()) && dispatch(SignUpTrue())
    }

    return (
        <div className='flex'>

            <div className='bg-white pt-4 px-6 relative'>

                <button
                    className="closeButton rounded-[4px] select-none box-border flex justify-center items-center text-center p-1 ml-auto  border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => dispatch(SignInFalse())}
                >
                    <span className=" -mt-1 flex justify-center items-center  bg-transparent text-white opacity-95 h-6 w-6 text-2xl  outline-none focus:outline-none">
                        x
                    </span>
                </button>

                <div className='my-4'>
                    <h1 className='text-[24px] font-medium leading-6 '>Sign in</h1>
                    <h1 className=' mt-2 text-[16px] leading-[20px] font-normal'>For security, please sign in to access your information</h1>
                </div>
                <div className='mb-[32px]'>
                    {/**Sign in */}
                    <div className=' box-border flex flex-wrap -m-3 w-[calc(100%_+_24px)] '>
                        <div className=' p-3 box-border m-0 basis-full flex-grow-0 max-w-full '>
                            {/** Email Form */}
                                <div className='p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                    <form action="" method="post" data-cy="email-login-form">
                                        <div className=' box-border flex flex-wrap items-center -m-3 w-[calc(100%_+_24px)]'>
                                            {/** Email */}
                                            <div className=' p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                <div className='pb-1'>
                                                    <span className='text-[14px] leading-5 font-normal'>Email</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input required type="email" name="email" id="email" data-cy="email" placeholder="Email" className=' inputShadow m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>

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
                                            <div className='transition-all duration-150 ease-in-out delay-0 p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                <button type="submit" className=' signinButton relative border-none p-3 rounded-[4px] select-none text-white w-full '>
                                                    <div className='flex items-center justify-center'>
                                                        <div className=''>
                                                            <span className='text-[14px] leading-5 font-medium'>Sign in</span>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            {/**Other options */}
                            <div className='mt-[24px] w-full justify-between flex'>
                                <div onClick={() => handleCreateAccount()} className=' cursor-pointer createAaccount bg-transparent  '>
                                    <span className='text-[14px] leading-5 font-normal'>Create account</span>
                                </div>
                                <div className=' cursor-pointer createAaccount bg-transparent  '>
                                    <div className=' align-middle pr-[4px] inline-block '>
                                        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-[12px] svgFill"><path d="M5.286 9.143V6.388A6.388 6.388 0 0 1 11.673 0h1.167a6.388 6.388 0 0 1 6.388 6.388 1 1 0 0 1-2 0A4.388 4.388 0 0 0 12.84 2h-1.167a4.388 4.388 0 0 0-4.387 4.388v2.755H19a2 2 0 0 1 2 2v10.714a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11.143a2 2 0 0 1 2-2h.286zM13 17.829a3.001 3.001 0 1 0-2 0v2.15a1 1 0 1 0 2 0v-2.15zM11 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"></path></svg>
                                    </div>
                                    <span className='text-[14px] leading-5 font-normal'>Forgot password?</span>
                                </div>
                            </div>


                        </div>
                    </div>
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

export default SignIn

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { home, about_us, contact_us } from '../../features/page/pageSlice'
import { SignInTrue } from '../../features/nav/signInSlice'
import { SignUpTrue } from '../../features/nav/signUpSlice'

const Nav = () => {

    const url = window.location.pathname
    let pageNumber = 0;


    const navigate = useNavigate()
    // const pageNumber = useSelector((state) => state.page.value)
    const dispatch = useDispatch()
 

    const handleToggle = () => {
        const menu = document.getElementById("mobile-menu");
        menu.classList.toggle("hidden");
    }
        switch(url){
            case "/":
                pageNumber=0
                break
            case "/about":
                pageNumber=1
                break
            case "/contact":
                pageNumber=2
                break
            default:
                break
        }
    return (
        <div className='bg-[#F5F5F5] lg:rounded-bl-full lg:rounded-br-full'>

            <div className=' pb-3 lg:pb-0 w-full flex-row sm:flex-col lg:flex-row shadow-md shadow-primary  lg:rounded-bl-full lg:rounded-br-full  h-fit lg:h-[80px] bg-[#F5F5F5] text-[20px] lg:px-10 flex justify-between items-center align-middle text-center '>
                <div className=' ml-2 lg:ml-0 mr-auto lg:mr-20 '>
                    <h1 className=' text-4xl font-serif text-primary '>ResiRelief</h1>
                    <h1 className=' animate-bounce text-xs font-sans font-bold uppercase text-secondary ' >Home Away From Home</h1>
                </div>
                <div className=' ml-auto lg:ml-0 -mt-12 lg:mt-3 mr-10 hidden sm:flex'>
                    <h1 onClick={()=>dispatch(SignInTrue())} className='cursor-pointer font-semibold text-primary hover:opacity-60 '>Sign in</h1>
                    <div onClick={()=>dispatch(SignUpTrue())} className=' ml-4 rounded-[7px] h-[37px] w-fit px-1 border-[3px] border-secondary hover:opacity-60'>
                        <h1 className='cursor-pointer font-semibold text-primary '>Sign up</h1>
                    </div>
                </div>
                <div className='mt-3 lg:mt-0  w-full flex-1 hidden sm:flex justify-around'>
                    {pageNumber === 0 ?  <h1 className=' border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Home</h1>: <a href='/' onClick={() => dispatch(home()) } className='cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  '>Home</a>}
                    {/* {pageNumber === 1 ? <h1 className=' border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Hotels</h1> : <h1 className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4  hover:border-[#d1e0e0] ' onClick={() => dispatch(hotels())} >Hotels</h1>}
                {pageNumber === 2 ? <h1 className=' border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Apartments</h1> : <h1 className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(apartments())} >Apartments</h1>}
                {pageNumber === 3 ? <h1 className=' border-b-4 border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Hostels</h1> : <h1 className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(hostels())} >Hostels</h1>} */}
                    {pageNumber === 1 ? <h1 className=' border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>About Us</h1> : <a href='/about' className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(about_us())} >About Us</a>}
                    {pageNumber === 2 ? <h1 className=' border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Contact Us</h1> : <a href='/contact' className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(contact_us())} >Contact Us</a>}
                    <h1 className=' shadow-lg cursor-pointer font-semibold text-primary px-4 bg-white rounded-tl-full rounded-br-full border-[1px] outline-secondary outline-double border-secondar hover:scale-[1.2]  hover:outline-none '  >List your property</h1>
                </div>
                <div className="sm:hidden flex items-center">
                    <button onClick={() => handleToggle()} id='menu-button' className="outline-none">
                        <svg className="w-6 h-6 text-gray-500"
                            x-show="! showMenu"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 00 24 24"
                            stroke="currentColor">
                            <path d="m4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div >

            <div id='mobile-menu'  className=" shadow-md shadow-primary pb-2 hidden text-[20px] flex-col mt-[60px] w-full justify-center items-center " >
                <div className=' signList flex justify-between h-fit w-full ' >
                    <h1 className=' w-fit ml-1 -mt-8 shadow-lg cursor-pointer font-semibold text-primary px-4 bg-white rounded-tl-full rounded-br-full border-[1px] outline-secondary outline-double border-secondar hover:scale-[1.2]  hover:outline-none '  >List your property</h1>
                    <div className=' sign ml-auto lg:ml-0 -mt-8 flex'>
                        <h1 onClick={()=>dispatch(SignInTrue())} className='cursor-pointer font-semibold text-primary hover:opacity-60 '>Sign in</h1>
                        <div onClick={()=>dispatch(SignUpTrue())} className=' ml-4 rounded-[7px] h-[37px] w-fit px-1 border-[3px] border-secondary hover:opacity-60'>
                            <h1 className='cursor-pointer font-semibold text-primary '>Sign up</h1>
                        </div>
                    </div>
                </div>
                <div className=' links mt-3 lg:mt-0  flex w-full justify-around'>
                    {pageNumber === 0 ? <h1 className=' w-fit border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Home</h1> : <h1 onClick={() => dispatch(home()) && navigate("/")} className='cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  '>Home</h1>}
                    {/* {pageNumber === 1 ? <h1 className=' w-fit border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Hotels</h1> : <h1 className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4  hover:border-[#d1e0e0] ' onClick={() => dispatch(hotels())} >Hotels</h1>}
                {pageNumber === 2 ? <h1 className=' w-fit border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Apartments</h1> : <h1 className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(apartments())} >Apartments</h1>}
                {pageNumber === 3 ? <h1 className=' w-fit border-b-4 border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Hostels</h1> : <h1 className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(hostels())} >Hostels</h1>} */}
                    {pageNumber === 4 ? <h1 className=' w-fit border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>About Us</h1> : <h1 className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(about_us()) && navigate("/about")} >About Us</h1>}
                    {pageNumber === 5 ? <h1 className=' w-fit border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Contact Us</h1> : <h1 className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(contact_us()) && navigate("/contact")} >Contact Us</h1>}
                </div>
            </div>
        </div>
    )
}

export default Nav

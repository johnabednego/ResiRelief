import React from 'react'
import { useDispatch } from 'react-redux'
import { home, about_us, contact_us } from '../../features/page/pageSlice'
import { SignInTrue } from '../../features/nav/signInSlice'
import { SignUpTrue } from '../../features/nav/signUpSlice'

const Nav = () => {

    const url = window.location.pathname
    let pageNumber = -1;

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
            case "/list":
                pageNumber=3
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
                    {pageNumber=== 3?<h1 className=' shadow-lg font-semibold text-white px-4 bg-primary rounded-tl-full rounded-br-full border-[1px] outline-primary cursor-not-allowed '>List your property</h1>:<a href='/list' className=' shadow-lg cursor-pointer font-semibold text-primary px-4 bg-white rounded-tl-full rounded-br-full border-[1px] outline-secondary outline-double hover:scale-[1.2]  hover:outline-none hover:bg-primary hover:text-white '  >List your property</a>}
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
                    {pageNumber===3?<h1 className=' text-white w-fit ml-1 -mt-8 shadow-lg font-semibold px-4 bg-primary rounded-tl-full rounded-br-full border-[1px] outline-primary cursor-not-allowed '  >List your property</h1>:<a href='/list' className=' w-fit ml-1 -mt-8 shadow-lg cursor-pointer font-semibold text-primary px-4 bg-white rounded-tl-full rounded-br-full border-[1px] outline-secondary outline-double hover:scale-[1.2]  hover:outline-none hover:bg-primary hover:text-white '  >List your property</a>}
                    <div className=' sign ml-auto lg:ml-0 -mt-8 flex'>
                        <h1 onClick={()=>dispatch(SignInTrue())} className='cursor-pointer font-semibold text-primary hover:opacity-60 '>Sign in</h1>
                        <div onClick={()=>dispatch(SignUpTrue())} className=' ml-4 rounded-[7px] h-[37px] w-fit px-1 border-[3px] border-secondary hover:opacity-60'>
                            <h1 className='cursor-pointer font-semibold text-primary '>Sign up</h1>
                        </div>
                    </div>
                </div>
                <div className=' links mt-3 lg:mt-0  flex w-full justify-around'>
                    {pageNumber === 0 ? <h1 className=' w-fit border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Home</h1> : <a href='/' onClick={() => dispatch(home())} className='cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  '>Home</a>}
                    {/* {pageNumber === 1 ? <h1 className=' w-fit border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Hotels</h1> : <h1 className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4  hover:border-[#d1e0e0] ' onClick={() => dispatch(hotels())} >Hotels</h1>}
                {pageNumber === 2 ? <h1 className=' w-fit border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Apartments</h1> : <h1 className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(apartments())} >Apartments</h1>}
                {pageNumber === 3 ? <h1 className=' w-fit border-b-4 border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Hostels</h1> : <h1 className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(hostels())} >Hostels</h1>} */}
                    {pageNumber === 1 ? <h1 className=' w-fit border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>About Us</h1> : <a href='/about' className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(about_us())} >About Us</a>}
                    {pageNumber === 2 ? <h1 className=' w-fit border-b-4  border-secondary cursor-not-allowed font-serif font-semibold text-primary '>Contact Us</h1> : <a href='/contact' className=' cursor-pointer hover:text-primary hover:opacity-70 hover:border-b-4 hover:border-[#d1e0e0]  ' onClick={() => dispatch(contact_us())} >Contact Us</a>}
                </div>
            </div>
        </div>
    )
}

export default Nav

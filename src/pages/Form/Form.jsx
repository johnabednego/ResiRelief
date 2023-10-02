import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import SignInModal from "../../components/SignIn/SignInModal";
import SignUpModal from "../../components/SignUp/SignUpModal";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import ErrorPage from '../Error/ErrorPage';
import CountrySelector from '../../components/Form/CountrySelector';
import RoomType from '../../components/Form/RoomType';
import moment from 'moment';
import EntryCalendar from '../../components/Form/EntryCalendar';
import date_in from './assets/date_in.png'
import PeriodSelector from '../../components/Form/PeriodSelector';
let today = new Date();

// Get day, month, and year
let day = today.getDate();
let monthIndex = today.getMonth();
let year = today.getFullYear();

// Array of month names
let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

// Format the date string
let formattedDate = day + " " + monthNames[monthIndex] + " " + year;

// Options for formatting the date
var options = { weekday: "long" };

// Format the date string
var dayOfWeek = today.toLocaleDateString("en-US", options);


const Form = () => {
    const signInModal = useSelector((state) => state.signInModal.value);
    const signUpModal = useSelector((state) => state.signUpModal.value);
    const location = useLocation();
    const { state } = location;
    const [errorMessage, setErrorMessage] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [retypeEmail, setRetypeEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [country, setCountry] = useState("")
    const [roomType, setRoomType] = useState("")
    const [period, setPeriod] = useState("")
    const [isChecked, setIsChecked] = useState(false);

    const [personFullName, setPersonFullName] = useState("")
    const [personEmail, setPersonEmail] = useState("")
    const [personPhoneNumber, setPersonPhoneNumber] = useState("")
    const [personCountry, setPersonCountry] = useState("")

    const [showEntryCalendar, setShowEntryCalendar] = useState(false);
    const [selectedEntryDate, setSelectedEntryDate] = useState(moment());


    const toggleEntryCalendar = () => {
        setShowEntryCalendar(!showEntryCalendar);
    };

    const selectEntryDate = (date) => {
        setSelectedEntryDate(date);
        setShowEntryCalendar(false);
    };

    let entryDate = formattedDate
    let entryDayOfWeek = dayOfWeek

    if (selectedEntryDate != null) {
        entryDayOfWeek = selectedEntryDate.format('dddd')
        entryDate = selectedEntryDate.format('DD MMM YYYY')
    }

    if (state) {
        let actionDescription = "book a room"
        if (state.property_type === "Apartment") {
            actionDescription = "buy/rent"
        }
        const handleSubmit = async (e) => {
            e.preventDefault()
            const pattern = /^[0-9+]+$/;
            if (email !== retypeEmail) {
                setErrorMessage("Email Mismatch!!")
            }
            else if (phoneNumber.length < 10 || !pattern.test(phoneNumber)) {
                setErrorMessage("Invalid Phone Number")
            }
            else if(phoneNumber.charAt(0).toString() !=="+"){
                setErrorMessage("Country Code in phone number is required, starting with +")
            }
            else if (country.length < 1) {
                setErrorMessage("Country is requied")
            }
            else if (roomType.length < 1) {
                setErrorMessage("Room Type is requied")
            }
            else if (period.length < 1) {
                setErrorMessage("Period is requied")
            }
            else {
                if (isChecked) {
                    if (personPhoneNumber.length < 10 || !pattern.test(personPhoneNumber)) {
                        setErrorMessage("Invalid Phone Number of the person")
                    }
                    else if(personPhoneNumber.charAt(0).toString() !=="+"){
                        setErrorMessage("Country Code in phone number of the person is required, starting with +")
                    }
                    else if (personCountry.length < 1) {
                        setErrorMessage("The person's Country is requied")
                    }
                    else{
                    const data = {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phoneNumber: phoneNumber,
                        country: country,
                        roomType: roomType,
                        period: period,
                        selectedEntryDate: selectedEntryDate,
                        entryDate: entryDate + ", " + entryDayOfWeek,
                        forSomeOne: isChecked,
                        personFullName: personFullName,
                        personEmail: personEmail,
                        personPhoneNumber: personPhoneNumber,
                        personCountry: personCountry
                    }
                    console.log(data)
                }
                }
                else {
                    const data = {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phoneNumber: phoneNumber,
                        country: country,
                        roomType: roomType,
                        period: period,
                        selectedEntryDate: selectedEntryDate,
                        entryDate: entryDate + ", " + entryDayOfWeek,
                        forSomeOne: isChecked,
                    }
                    console.log(data)
                }
            }
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
                            {errorMessage?.length > 0 ? <h1 className=' w-full mt-3 mb-3  text-[rgb(220,38,38)] text-lg text-center'>{errorMessage}</h1> : null}
                            <div className='p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                <form onSubmit={handleSubmit} action="" method="post" data-cy="application form">
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
                                                        <input onChange={(e)=>setFirstName(e.target.value)} required type="text" name="firstName" id="firstName" data-cy="firstName" placeholder="First Name" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
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
                                                        <input onChange={(e)=>setLastName(e.target.value)}  required type="text" name="lastName" id="lastName" data-cy="lastName" placeholder="Last Name" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
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
                                                        <input onChange={(e)=>setEmail(e.target.value)}  required type="email" name="email" id="email" data-cy="email" placeholder="Double-check for typos" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>
                                            {/**Retype Email */}
                                            <div className=' w-full flex flex-col'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'>Retype Email</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input onChange={(e)=>setRetypeEmail(e.target.value)}  required type="email" name="confirmEmail" id="confirmEmail" data-cy="confirmEmail" placeholder="" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/** phone and country */}
                                        <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3 w-[20vh]'>
                                            {/**Phone Number */}
                                            <div className=' flex flex-col w-full'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'>Phone Number</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input onChange={(e)=>setPhoneNumber(e.target.value)}  required type="tel" name="phoneNumber" id="phoneNumber" data-cy="phoneNumber" placeholder="+233240234579" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
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
                                        {/** room type and date */}
                                        <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3 w-[20vh]'>
                                            {/**Room Type */}
                                            <div className=' w-full flex flex-col'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'>Room Type</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <RoomType occupancies={state.occupancies} setRoomType={setRoomType} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/**Entry Date */}
                                            <div className=' w-full flex flex-col'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'>Entry Date</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        {/**Entry date */}
                                                        <div onClick={() => toggleEntryCalendar()} className=" h-[34px] w-full sm_entry_date border-[#dddfe2] mb-4 xl:mb-0  border-[1px] border-solid rounded-[4px] shadow-none text-[16px]  p-0 bg-[#fff] inline-block cursor-pointer relative align-top">
                                                            <div className=" p-0 pl-[10px] pr-[10px] absolute top-[50%] w-full translate-y-[-50%]">
                                                                <i className="Searchbox_icon  text-[#333] text-[20px] pl-[14px] pr-4 pt-3 pb-3 mb-0 inline-block align-middle font-normal leading-[1]">
                                                                    <img
                                                                        src={date_in}
                                                                        alt=""
                                                                        className=" w-[27px] h-[27px]"
                                                                    />
                                                                </i>
                                                                <div className=" w-[calc(100%-60px)] align-middle inline-block">
                                                                    <div className=" flex text-[16px] w-auto pt-[5px] pb-[5px] p-0 gap-1">
                                                                        {/**Date */}
                                                                        <div className=" font-normal text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                                                                            {entryDate},
                                                                        </div>

                                                                        {/**Day */}
                                                                        <div className=" text-[14px] text-[#999] leading-[1.25] overflow-ellipsis">
                                                                            {entryDayOfWeek}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <EntryCalendar name="entry" showCalendar={showEntryCalendar} selectDate={selectEntryDate} selectedDate={selectedEntryDate} setSelectedDate={setSelectedEntryDate} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/** period and empty div */}
                                        <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3 w-[20vh]'>
                                            {/**Period */}
                                            <div className=' flex flex-col w-full'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'>Period</span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <PeriodSelector setPeriod={setPeriod} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/**Empty Div */}
                                            <div className=' w-full hidden sm:flex flex-col'>
                                                <div className='pb-1 text-left'>
                                                    <span className='text-[14px] leading-5 font-normal'></span>
                                                </div>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>

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
                                        {isChecked ?
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
                                                                <input onChange={(e)=>setPersonFullName(e.target.value)}  required type="text" name="fullName" id="fullName" data-cy="fullName" placeholder="Full Name" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
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
                                                                <input onChange={(e)=>setPersonEmail(e.target.value)} required type="email" name="email" id="email" data-cy="email" placeholder="Email" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
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
                                                                <input onChange={(e)=>setPersonPhoneNumber(e.target.value)} required type="tel" name="phoneNumber" id="phoneNumber" data-cy="phoneNumber" placeholder="+233240234579" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
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
                                                                <CountrySelector setUserCountry={setPersonCountry} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div> : null}
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

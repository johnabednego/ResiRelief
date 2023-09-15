import React, { useState } from "react";
import Nav from "../Nav/Nav";
import SignInModal from "../../components/SignIn/SignInModal";
import SignUpModal from "../../components/SignUp/SignUpModal";
import Footer from "../../components/Footer/Footer";
import Info from "./Info";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Calendar from "./Calender";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import moment from "moment";
import date_in from "./assets/date_in.png";
import date_out from "./assets/date_out.png";
import people from "./assets/people.png";
import Overview from "./Overview";
import { useLocation } from 'react-router-dom';
import Room from "./Room";
import Facilities from "./Facilities";
import Policies from "./Policies";
import Review from "./Review";

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

const MoreDetails = () => {
  const signInModal = useSelector((state) => state.signInModal.value);
  const signUpModal = useSelector((state) => state.signUpModal.value);
  const [showDiv, setShowDiv] = useState(false);
  const [showEntryCalendar, setShowEntryCalendar] = useState(false);
  const [selectedEntryDate, setSelectedEntryDate] = useState(moment());
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState(moment());
  const [showInfo, setShowshowInfo] = useState(false);
  let [room, setRoom] = useState(1);
  let [adult, setAdult] = useState(1);
  let [child, setChild] = useState(1);
  const [details, setDetails] = useState(0);
  const location = useLocation();
  const { state } = location;

  console.log(state)

  const toggleEntryCalendar = () => {
    setShowDepartureCalendar(false);
    setShowshowInfo(false);
    setShowEntryCalendar(!showEntryCalendar);
  };

  const selectEntryDate = (date) => {
    setSelectedEntryDate(date);
    setShowEntryCalendar(false);
  };

  const toggleDepartureCalendar = () => {
    setShowEntryCalendar(false);
    setShowshowInfo(false);
    setShowDepartureCalendar(!showDepartureCalendar);
  };

  const selectDepartureDate = (date) => {
    setSelectedDepartureDate(date);
    setShowDepartureCalendar(false);
  };

  const toggleInfo = () => {
    setShowDepartureCalendar(false);
    setShowEntryCalendar(false);
    setShowshowInfo(!showInfo);
  };

  const focusInput = (inputId) => {
    var input = document.getElementById(inputId);
    input.focus();
  };

  const d_overview = () => setDetails(0);
  const d_rooms = () => setDetails(1);
  const d_facilities = () => setDetails(2);
  const d__reviews = () => setDetails(3);
  const d_policies = () => setDetails(4);

  let entryDate = formattedDate;
  let entryDayOfWeek = dayOfWeek;

  let departureDate = formattedDate;
  let departureDayOfWeek = dayOfWeek;

  if (selectedEntryDate != null) {
    entryDate = selectedEntryDate.format("dddd");
    entryDayOfWeek = selectedEntryDate.format("DD MMM YYYY");
  }

  if (selectedDepartureDate != null) {
    departureDate = selectedDepartureDate.format("dddd");
    departureDayOfWeek = selectedDepartureDate.format("DD MMM YYYY");
  }

  const handleSearchBar = (e) => {
    const searchBar = document.getElementById("searchBar")
    const displaySearch = document.getElementById("displaySearch")
    const right_line = document.getElementById("right_line")
    const left_line = document.getElementById("left_line")
    if (e === "displaySearch") {
      displaySearch.classList.replace("flex", "hidden")
      searchBar.classList.replace("hidden", "block")
      right_line.classList.replace("hidden", "block")
      left_line.classList.replace("hidden", "block")
    }
    else{
      searchBar.classList.replace("block", "hidden")
      right_line.classList.replace("block", "hidden")
      left_line.classList.replace("block", "hidden")
      displaySearch.classList.replace("hidden", "flex")
    }
  };


if(state){
  return (
    <div>
      {/* //  {/* Navigation bar */}
      <div className="fixed w-full z-50">
        <img
        id="right_line"
          className=" hidden sm:block absolute top-[0.02px] right-0 h-[145.19px] w-[44.05px] -z-50"
          alt=""
          src="/line-7.svg"
        />
        <img
        id="left_line"
          className=" hidden sm:block absolute top-[0.02px] left-[0px] w-[54.05px] h-[118.19px] -z-50"
          alt=""
          src="/line-71.svg"
        />
        <Nav />
      </div>

      {/**Search bar display on small devices button */}

      <div
        onClick={() => handleSearchBar("displaySearch")}
        id="displaySearch"
        style={{ marginTop: "78px", position: "fixed", zIndex: "10" }}
        className="flex sm:hidden w-full justify-center items-center "
      >
        <button className="searchButton py-[10px] h-[48px]">
          <div className="flex items-center justify-center">
            <div>
              <span className="text-[20px] leading-[26px] font-normal">
                SEARCH
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* search bar */}
      <div
        id="searchBar"
        className=" hidden sm:block more_details_search mt-28 sm:mt-28 scroll_search_nav SearchBox-Scrollable bg-[#20274d]"
      >
        <button onClick={() => handleSearchBar("")} className=" sm:hidden closeButton rounded-[4px] select-none box-border flex justify-center items-center text-center p-1 ml-auto  border-0  float-left text-3xl leading-none font-semibold outline-none focus:outline-none">
          <span className=" -mt-1 flex justify-center items-center  bg-transparent text-white opacity-95 h-6 w-6 text-2xl  outline-none focus:outline-none">
            x
          </span>
        </button>

        <div className="w-full justify-center mx-auto my-0 relative flex flex-wrap">
          {/* Search bar */}
          <div
            onClick={() => focusInput("scroll_input")}
            className=" ml-0 mr-[5px] h-[48px] px-[5px] py-0 w-[361px] rounded-[6px] scroll_search_nav_input Searchbox_horizontal"
          >
            <div className="relative">
              <span>
                <i className=" text-[#333] text-[27px] p-[13px] mb-0 inline-block align-middle font-normal leading-[1]">
                  <CiSearch />
                </i>
              </span>
              <div className=" w-[calc(100%-60px)] align-middle inline-block">
                <input
                  type="text"
                  id="scroll_input"
                  placeholder="Enter a destination or property"
                  className="text-[16px] bg-[#fff] text-[#2a2a2e] outline-none font-normal leading-[1.25] w-full m-0 p-0 border-none rounded-[4px] cursor-pointer overflow-ellipsis"
                />
              </div>
            </div>
          </div>
          {/**Entry date */}
          <div
            onClick={() => toggleEntryCalendar()}
            style={{ marginRight: "5px" }}
            className="w-[177px] border-r-[#90949c] border-r-[1px] border-solid h-[48px] px-[5px] py-0 rounded-[6px] mr-0 scroll_search_nav_input"
          >
            <div className="relative">
              <span>
                <i className=" text-[#333] text-[27px] p-[13px] mb-0 inline-block align-middle font-normal leading-[1]">
                  <img src={date_in} alt="" className=" w-[27px] h-[27px]" />
                </i>
              </span>
              <div className=" w-[calc(100%-60px)] align-middle inline-block">
                <div className=" text-[14px] w-[115px] py-[5px]">
                  {/**Date */}
                  <div className=" font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                    {entryDate}
                  </div>

                  {/**Day */}
                  <div className=" text-[14px] text-[#999] leading-[1.25] overflow-ellipsis">
                    {entryDayOfWeek}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Calendar
            name="sm_entry"
            showCalendar={showEntryCalendar}
            selectDate={selectEntryDate}
            selectedDate={selectedEntryDate}
            setSelectedDate={setSelectedEntryDate}
          />

          {/**Leaving date */}
          <div
            onClick={() => toggleDepartureCalendar()}
            style={{ marginLeft: "5px" }}
            className="w-[177px] border-r-[#90949c] border-r-[1px] border-solid h-[48px] px-[5px] py-0 rounded-[6px] mr-0 scroll_search_nav_input"
          >
            <div className="relative">
              <span>
                <i className=" text-[#333] text-[27px] p-[13px] mb-0 inline-block align-middle font-normal leading-[1]">
                  <img src={date_out} alt="" className=" w-[27px] h-[27px]" />
                </i>
              </span>
              <div className=" w-[calc(100%-60px)] align-middle inline-block">
                <div className=" text-[14px] w-[115px] py-[5px]">
                  {/**Date */}
                  <div className=" font-bold  text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                    {departureDate}
                  </div>

                  {/**Day */}
                  <div className=" text-[14px] text-[#999] leading-[1.25] overflow-ellipsis">
                    {departureDayOfWeek}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Calendar
            name="sm_depart"
            showCalendar={showDepartureCalendar}
            selectDate={selectDepartureDate}
            selectedDate={selectedDepartureDate}
            setSelectedDate={setSelectedDepartureDate}
          />

          {/**Info details */}
          <div
            onClick={() => toggleInfo()}
            style={{ marginLeft: "5px", marginRight: "5px" }}
            className=" Searchbox_info h-[48px] px-[5px] w-[220px] rounded-[6px] scroll_search_nav_input"
          >
            <div className="relative">
              <span>
                <i className="Searchbox_icon  text-[#333] text-[27px] p-[13px] mb-0 inline-block align-middle font-normal leading-[1]">
                  <img src={people} alt="" className=" w-[27px] h-[27px]" />
                </i>
              </span>
              <div className=" w-[calc(100%-60px)] align-middle inline-block">
                <div className=" text-[14px] py-[5px]">
                  {/**people */}
                  <div className=" font-bold  text-[#2a2a2e] whitespace-nowrap overflow-ellipsis pr-[34px]">
                    {adult > 1 ? `${adult} adults` : "1 adult"}{" "}
                    {child === 0
                      ? ""
                      : child === 1
                        ? ", 1 child"
                        : `, ${child} children`}
                  </div>

                  {/**number of rooms */}
                  <div className=" text-[14px] text-[#999] leading-[1.25] overflow-ellipsis">
                    {room > 1 ? `${room} rooms` : "1 room"}
                  </div>

                  {/**icon */}
                  <div className=" right-[15px] top-[14px]">
                    <i
                      className="Searchbox_icon  text-[#333] text-[12px] mb-[3px] inline-block align-middle font-normal leading-[1]"
                      style={{ fontSize: "15px" }}
                    >
                      {showInfo ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Info
            name="sm_info"
            showInfo={showInfo}
            room={room}
            setRoom={setRoom}
            adult={adult}
            setAdult={setAdult}
            child={child}
            setChild={setChild}
          />

          {/** Search button */}
          <button className="searchButton z-0 py-[10px] h-[48px]">
            <div className="flex items-center justify-center">
              <div>
                <span className="text-[20px] leading-[26px] font-normal">
                  SEARCH
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* pictures and sub headings */}
      <div className="  relative w-full flex flex-col items-center h-fit justify-center text-center text-xs">
        <div className=" mb-6 flex flex-col items-center justify-center w-full h-fit ">
          <div className=" detailsBody mt-[188px] rounded flex flex-row flex-wrap items-center justify-center h-fit w-full">
            {/* main */}
            <div className=" items-start justify-start ">
              <img
                className=" w-[416px] h-72 shrink-0 object-cover z-[0]"
                alt=""
                src={state.image}
              />
              <div className=" float-right -mt-6 relative cursor-pointer text-white my-0 mx-[!important]  right-[8px] bottom-[8px] rounded bg-[rgba(0,0,0,0.5)] shadow-[0px_1px_3px_1px_rgba(0,_0,_0,_0.2)] w-fit overflow-hidden shrink-0 flex flex-row pt-[7px] px-3 pb-[7px] box-border items-start justify-start">
                <div className=" w-fit flex flex-row items-center justify-center gap-[8px]">
                  <div className="w-3 overflow-hidden shrink-0 flex flex-row pt-[1.5px] px-px pb-0.5 box-border items-start justify-start">
                    <img
                      className="relative w-2.5 h-[8.5px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className=" w-fit flex flex-row pt-0 pb-[1px] pl-0.5 box-border items-start justify-center">
                    <div className="relative leading-[12px]">
                      See all photos
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*other images*/}
            <div className=" ml-2 flex flex-col items-start justify-center gap-[8px]">
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/1_img.png"
              />
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/2_img.png"
              />
            </div>
            <div className=" ml-2 flex flex-col items-start justify-center gap-[8px]">
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/3_img.png"
              />
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/4_img.png"
              />
            </div>
            <div className=" ml-2 flex flex-col items-start justify-center gap-[8px]">
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/5_img.png"
              />
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/6_img.png"
              />
            </div>
          </div>
          {/* The navigatioins */}
          <div className=" mt-6 text-[#4E4E4E] relative bg-white box-border w-full h-fit text-left text-sm justify-center items-center flex flex-wrap">
            <div className=" rounded border-[1px] border-solid flex-wrap pl-2 w-fit flex justify-center items-center text-center  h-fit py-[0.56rem]">
              <div
                onClick={() => d_overview()}
                className={
                  details === 0
                    ? " text-[#5392F9] mr-4 cursor-not-allowed  top-[16.8px] leading-[20px]"
                    : " my-1 rounded border-[1px] border-solid p-1 cursor-pointer mr-4  top-[16.8px] leading-[20px]"
                }
              >
                Overview
              </div>
              <div
                onClick={() => d_rooms()}
                className={
                  details === 1
                    ? " text-[#5392F9] mr-4  cursor-not-allowed top-[16.8px] left-[95.31px] leading-[20px]"
                    : " my-1 rounded border-[1px] border-solid p-1 cursor-pointer mr-4 top-[16.8px] left-[95.31px] leading-[20px]"
                }
              >
                Rooms
              </div>
              <div
                onClick={() => d_facilities()}
                className={
                  details === 2
                    ? " text-[#5392F9] mr-4 cursor-not-allowed top-[16.8px] left-[171.36px] leading-[20px]"
                    : " my-1 rounded border-[1px] border-solid p-1 cursor-pointer mr-4 top-[16.8px] left-[171.36px] leading-[20px]"
                }
              >
                Facilities
              </div>
              <div
                onClick={() => d__reviews()}
                className={
                  details === 3
                    ? " text-[#5392F9] mr-4 cursor-not-allowed top-[16.8px] left-[260px] leading-[20px]"
                    : " my-1 rounded border-[1px] border-solid p-1 cursor-pointer mr-4 top-[16.8px] left-[260px] leading-[20px]"
                }
              >
                Reviews
              </div>
              <div
                onClick={() => d_policies()}
                className={
                  details === 4
                    ? " text-[#5392F9] mr-4 cursor-not-allowed top-[16.8px] left-[434.21px] leading-[20px]"
                    : " my-1 rounded border-[1px] border-solid p-1 cursor-pointer mr-4 top-[16.8px] left-[434.21px] leading-[20px]"
                }
              >
                Policies
              </div>
            </div>
            {/* price */}
            <div className=" px-6 border-[1px] border-solid top-[17.79px] flex justify-center items-center h-[55.99px] text-right text-xs ">
              <div className="leading-[14px]">from</div>
              <div className=" text-[#E12D2D] text-sm leading-[14px] ml-2">
                ₵
              </div>
              <div className=" ml-1 text-[#E12D2D] text-[22px] leading-[22px]">
                {state.price}
              </div>
            </div>
            {/* view deal */}
            <div className=" px-2 border-[1px] border-y-[1px] border-solid h-[55.99px] flex justify-center items-center">
              <div className=" cursor-pointer rounded-10xs bg-[#5392F9] flex flex-row pt-[5px] pb-[7px] pr-[6px] pl-1.5 items-start justify-start text-center text-white">
                <b className=" leading-[19.6px]">VIEW THIS DEAL</b>
              </div>
            </div>
          </div>
        </div>
        {/*  Details*/}
        {details === 0 ? <Overview d_facilities={d_facilities} data={state} /> : null}
        {details === 1 ? <h1><Room data={state}/></h1> : null}
        {details === 2 ? <h1><Facilities/></h1> : null}
        {details === 3 ? <h1><Review data={state}/></h1> : null}
        {details === 4 ? <h1><Policies/></h1> : null}
        <Footer />
      </div>

      {signInModal ? <SignInModal /> : null}
      {signUpModal ? <SignUpModal /> : null}
    </div>
  );
}
else{
  return(
    <div className=" w-full h-screen flex align-middle justify-center items-center text-center text-secondary">
      <h1 className=" font-extrabold text-[#FF0000]">
      ILLIGAL ACCESS 
      </h1>
    </div>
  )
}
};

export default MoreDetails;

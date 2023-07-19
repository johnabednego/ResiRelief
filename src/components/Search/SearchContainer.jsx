import React, { useEffect, useState } from "react";
import { RiHotelLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import date_in from "./assets/date_in.png";
import date_out from "./assets/date_out.png";
import people from "./assets/people.png";
import { IoIosArrowDown } from "react-icons/io";

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

const SearchContainer = () => {
  const [showDiv, setShowDiv] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Check if the first div is scrolled up (you can change the threshold as needed)
    if (scrollPosition > 0) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const focusInput = (inputId) => {
    var input = document.getElementById(inputId);
    input.focus();
  };

  return (
    <div>
      <section className=" bg-transparent p-0 table relative w-full">
        <div className="searchBG absolute w-full h-[320px] left-0 right-0"></div>
        <section className=" block xl:table-cell xl:align-top relative">
          <div className=" text-center min-w-[580px] m-auto mt-0 mb-0 h-auto w-full p-[1px] sm:p-[3%] max-w-[768px] lg:max-w-[900px] xl:max-w-[1124px] xl:pt-[24px]">
            <div className=" text-white relative mb-[16px] overflow-hidden">
              <h1 className=" text-[24px] font-bold uppercase leading-[1.3] mb-[4px] mt-0 overflow-hidden">
                Home Away from Home
              </h1>
            </div>
            {/** normal searching */}
            <div className="search_container">
              <ul
                className="search_link"
                style={{ zIndex: "998", position: "relative" }}
              >
                <li className="search_link_li cursor-pointer">
                  <div className=" text-[#5392F9] pb-3">
                    <div className=" flex items-center">
                      <RiHotelLine className=" overflow-hidden w-5 h-5 mr-1 min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] " />
                      <h6 className=" text-[16px] font-normal leading-[16px] m-0">
                        Hotels
                      </h6>
                    </div>
                    <div className="search_active"></div>
                  </div>
                </li>
              </ul>
              <div className=" w-full">
                <div className=" min-w-[580px] w-full m-0 relative">
                  <div className="bg-[#f8f7f9] mt-[-16px] input_bg">
                    <div className="relative text-left">
                      {/**Search bar */}
                      <div
                        onClick={() => focusInput("inputField")}
                        className="Searchbox border-[#dddfe2] border-[1px] border-solid rounded-[8px] shadow-none text-[16px] h-[66px] p-0 w-full m-0 mb-3 bg-[#fff] cursor-pointer inline-block relative align-top"
                      >
                        <div className=" p-0 pl-[10px] pr-[10px] absolute top-[50%] translate-y-[-50%] w-full">
                          <i className="Searchbox_icon  text-[#333] text-[27px] pl-[14px] pr-4 pt-3 pb-3 mb-0 inline-block align-middle font-normal leading-[1]">
                            <CiSearch />
                          </i>
                          {/**Text input div */}
                          <div className=" w-[calc(100%-60px)] align-middle inline-block">
                            <input
                              type="text"
                              id="inputField"
                              placeholder="Enter a destination or property"
                              className="text-[16px] bg-[#fff] text-[#2a2a2e] outline-none font-normal leading-[1.25] w-full m-0 p-0 border-none rounded-[4px] cursor-pointer overflow-ellipsis"
                            />
                          </div>
                        </div>
                      </div>
                      {/**Entry date */}
                      <div className=" border-[#dddfe2] rounded-tr-none rounded-br-none mb-4 xl:mb-0 w-[50%] xl:w-[25%] border-[1px] border-solid rounded-[8px] shadow-none text-[16px] h-[66px] p-0 bg-[#fff] inline-block cursor-pointer relative align-top">
                        <div className=" p-0 pl-[10px] pr-[10px] absolute top-[50%] w-full translate-y-[-50%]">
                          <i className="Searchbox_icon  text-[#333] text-[20px] pl-[14px] pr-4 pt-3 pb-3 mb-0 inline-block align-middle font-normal leading-[1]">
                            <img
                              src={date_in}
                              alt=""
                              className=" w-[27px] h-[27px]"
                            />
                          </i>
                          <div className=" w-[calc(100%-60px)] align-middle inline-block">
                            <div className=" text-[16px] w-auto pt-[5px] pb-[5px] p-0">
                              {/**Date */}
                              <div className=" font-normal text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                                {formattedDate}
                              </div>

                              {/**Day */}
                              <div className=" text-[14px] text-[#999] leading-[1.25] overflow-ellipsis">
                                {dayOfWeek}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/**Leaving date */}
                      <div className="before_ldate border-[#dddfe2] mb-4 xl:mb-0 w-[50%] xl:w-[25%]  rounded-tl-none rounded-bl-none border-[1px] border-solid rounded-[8px] shadow-none text-[16px] h-[66px] p-0 bg-[#fff] inline-block cursor-pointer relative align-top">
                        <div className=" p-0 pl-[10px] pr-[10px] absolute top-[50%] w-full translate-y-[-50%]">
                          <i className="Searchbox_icon  text-[#333] text-[20px] pl-[14px] pr-4 pt-3 pb-3 mb-0 inline-block align-middle font-normal leading-[1]">
                            <img
                              src={date_out}
                              alt=""
                              className=" w-[27px] h-[27px]"
                            />
                          </i>
                          <div className=" w-[calc(100%-60px)] align-middle inline-block">
                            <div className=" text-[16px] w-auto pt-[5px] pb-[5px] p-0">
                              {/**Date */}
                              <div className=" font-normal text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                                {formattedDate}
                              </div>

                              {/**Day */}
                              <div className=" text-[14px] text-[#999] leading-[1.25] overflow-ellipsis">
                                {dayOfWeek}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/**Info details */}
                      <div className=" mr-[10px] xl:ml-3 xl:mr-0 border-[#dddfe2] w-full xl:w-[calc(50%-12px)] border-[1px] border-solid rounded-[8px] text-[18px] h-[66px] p-0 m-0 bg-[#fff] cursor-pointer inline-block relative align-top">
                        <div className=" p-0 pl-[10px] pr-[10px] absolute top-[50%] w-full translate-y-[-50%]">
                          <i className="Searchbox_icon  text-[#333] text-[20px] pl-[14px] pr-4 pt-3 pb-3 mb-0 inline-block align-middle font-normal leading-[1]">
                            <img
                              src={people}
                              alt=""
                              className=" w-[27px] h-[27px]"
                            />
                          </i>
                          <div className=" w-[calc(100%-60px)] align-middle inline-block">
                            <div className=" text-[16px] w-auto pt-[5px] pb-[5px] p-0">
                              {/**people */}
                              <div className=" font-normal text-[#2a2a2e] whitespace-nowrap overflow-ellipsis pr-[34px]">
                                4 Adults, 1 child
                              </div>

                              {/**number of rooms */}
                              <div className=" text-[14px] text-[#999] leading-[1.25] overflow-ellipsis">
                                1 room
                              </div>

                              {/**icon */}
                              <div className=" right-[24px] absolute top-[50%] translate-y-[-50%]">
                                <i
                                  className="Searchbox_icon  text-[#333] text-[12px] pl-[14px] pr-4 pt-3 pb-3 mb-0 inline-block align-middle font-normal leading-[1]"
                                  style={{ fontSize: "21px" }}
                                >
                                  <IoIosArrowDown />
                                </i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/** Search button */}
                  <div className=" m-auto mt-[-32px]">
                    <button className=" search_button w-[490px] h-[64px]">
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
              </div>
            </div>
            {/** scroll search */}
            <div className=" min-h-[144px]">
              <div className="scroll_search_nav SearchBox-Scrollable bg-[#20274d] text-start left-0 top-0 max-h-[100px] px-0 py-[11px] fixed z-[1002]">
                <div className="w-[1100px] mx-auto my-0 relative Searchbox__wrapper">
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
                  <div style={{ marginRight: "0px" }} className="w-[177px] border-r-[#90949c] border-r-[1px] border-solid h-[48px] px-[5px] py-0 rounded-tl-[6px] rounded-bl-[6px] mr-0 scroll_search_nav_input">
                    <div className="relative">
                      <span>
                        <i className=" text-[#333] text-[27px] p-[13px] mb-0 inline-block align-middle font-normal leading-[1]">
                          <img
                            src={date_in}
                            alt=""
                            className=" w-[27px] h-[27px]"
                          />
                        </i>
                      </span>
                      <div className=" w-[calc(100%-60px)] align-middle inline-block">
                        <div className=" text-[14px] w-[115px] py-[5px]">
                          {/**Date */}
                          <div className=" font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                            {formattedDate}
                          </div>

                          {/**Day */}
                          <div className=" text-[14px] text-[#999] leading-[1.25] overflow-ellipsis">
                            {dayOfWeek}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**Leaving date */}
                  <div style={{ marginRight: "0px" }} className="w-[177px] border-r-[#90949c] border-r-[1px] border-solid h-[48px] px-[5px] py-0 rounded-tr-[6px] rounded-br-[6px] mr-0 scroll_search_nav_input">
                    <div className="relative">
                      <span>
                        <i className=" text-[#333] text-[27px] p-[13px] mb-0 inline-block align-middle font-normal leading-[1]">
                          <img
                            src={date_out}
                            alt=""
                            className=" w-[27px] h-[27px]"
                          />
                        </i>
                      </span>
                      <div className=" w-[calc(100%-60px)] align-middle inline-block">
                        <div className=" text-[14px] w-[115px] py-[5px]">
                          {/**Date */}
                          <div className=" font-bold  text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                            {formattedDate}
                          </div>

                          {/**Day */}
                          <div className=" text-[14px] text-[#999] leading-[1.25] overflow-ellipsis">
                            {dayOfWeek}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/**Info details */}
                  <div style={{ marginLeft: "5px", marginRight: "5px" }} className=" Searchbox_info h-[48px] px-[5px] w-[220px] rounded-[6px] scroll_search_nav_input">
                    <div className="relative">
                      <span>
                        <i className="Searchbox_icon  text-[#333] text-[27px] p-[13px] mb-0 inline-block align-middle font-normal leading-[1]">
                          <img
                            src={people}
                            alt=""
                            className=" w-[27px] h-[27px]"
                          /></i></span>
                      <div className=" w-[calc(100%-60px)] align-middle inline-block">
                        <div className=" text-[14px] py-[5px]">
                          {/**people */}
                          <div className=" font-bold  text-[#2a2a2e] whitespace-nowrap overflow-ellipsis pr-[34px]">
                            4 Adults, 1 child
                          </div>

                          {/**number of rooms */}
                          <div className=" text-[14px] text-[#999] leading-[1.25] overflow-ellipsis">
                            1 room
                          </div>

                          {/**icon */}
                          <div className=" right-[15px] absolute top-[14px]">
                            <i
                              className="Searchbox_icon  text-[#333] text-[12px] mb-[3px] inline-block align-middle font-normal leading-[1]"
                              style={{ fontSize: "15px" }}
                            >
                              <IoIosArrowDown />
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SearchContainer;

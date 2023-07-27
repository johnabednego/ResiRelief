import React from "react";
import image_1 from "./assets/image.jpg";
import image_2 from "./assets/image_2.jpg"
import image_3 from "./assets/image_3.jpg"
import image_4 from "./assets/image_4.jpg"
import image_5 from "./assets/image_5.jpg"
import image_6 from "./assets/image_6.jpg"
import image_7 from "./assets/image_7.jpeg"
import image_8 from "./assets/image_8.jpg"
import image_9 from "./assets/image_9.jpg"
import image_10 from "./assets/image_10.jpg"
import image_11 from "./assets/image_11.jpg"
import { AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
const data = [
  {title:"TF Hostel ", town:"Legon-UG", regional_capital:"Accra", price:"5000", image:image_7 },
  {title:"Number One Oxford Street Hotel & Suites", town:"Osu", regional_capital:"Accra", price:"240", image:image_1 },
  {title:"University of Ghana Guest House", town:"Legon", regional_capital:"Accra", price:"200/Night", image:image_2 },
  {title:"Knox Apartments", town:"Weija", regional_capital:"Accra", price:"240", image:image_3 },
  {title:"Pent Hostel ", town:"Legon-UG", regional_capital:"Accra", price:"3000", image:image_6 },
  {title:"Park Apartments", town:"Cantonments", regional_capital:"Accra", price:"500", image:image_4 },
  {title:"Turtle Beach Guest House", town:"Tema", regional_capital:"Accra", price:"300/Night", image:image_8 },
  {title:"Devtraco Plus-Acasia Apartments", town:"Cantonment", regional_capital:"Accra", price:"600", image:image_5 },
  {title:"A Boutique-style Hotel", town:"Obuasi", regional_capital:"Kumasi", price:"250/Night", image:image_9 },
  {title:"Takoradi Guest House", town:"Takoradi", regional_capital:"Sekondi-Takoradi", price:"290", image:image_10 },
  {title:"Evandy Hostel", town:"Legon-UG", regional_capital:"Accra", price:"4000", image:image_11 },
]
const Container = ({facility_type}) => {
  console.log(facility_type)
  return (
    <div className=" relative w-full justify-center items-center">
      <div className=" mt-0 pt-6 w-full min-w-0 xl:w-auto">
        <div className=" w-full justify-center flex flex-wrap">
          <ol className="float-left justify-center flex flex-wrap ">
            {/* 1 */}
            {data.map((d)=>{
              return (
                <li className=" mx-1 sm:mx-2 md:mx-3 lg::mx-4 facility sm:w-[400px] md:w-[398px] p-0 cursor-pointer my-[15px]">
              <div className=" list_container border-[#dddfe2] border-[1px] border-solid rounded-[8px] min-h-[220px]">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5392f9] cursor-pointer bg-transparent no-underline"
                >
                  <div className=" border-[#dddfe2] w-full flex flex-wrap flex-col">
                    {/* image */}
                    <div className=" box-border m-0 block  flex-grow-0 ">
                      <div className=" overflow-hidden rounded-t-[8px]">
                        <div className="relative">
                          <img
                            src={d.image}
                            alt=""
                            className=" h-[182px] w-[100%] object-cover"
                          />
                        </div>
                        <span className="w-[calc(25%-1px)] inline-block h-[40px] mr-[1px] mt-[1px] relative">
                          <img
                            src={d.image}
                            alt=""
                            className=" h-full w-full max-h-[40px]"
                          />
                        </span>
                        <span className="w-[calc(25%-1px)] inline-block h-[40px] mr-[1px] mt-[1px] relative">
                          <img
                            src={d.image}
                            alt=""
                            className=" h-full w-full max-h-[40px]"
                          />
                        </span>
                        <span className="w-[calc(25%-1px)] inline-block h-[40px] mr-[1px] mt-[1px] relative">
                          <img
                            src={d.image}
                            alt=""
                            className=" h-full w-full max-h-[40px]"
                          />
                        </span>
                        <span className="w-[calc(25%-1px)] inline-block h-[40px] mr-[1px] mt-[1px] relative">
                          <img
                            src={d.image}
                            alt=""
                            className=" h-full w-full max-h-[40px]"
                          />
                          <div className=" h-full w-full left-0 top-0 absolute">
                            <div className=" bg-[rgba(0,0,0,.7)] h-[100%] w-[100%] table text-center">
                              <div className=" text-[#fff] table-cell text-[12px] leading-[1.1] align-middle">
                                See all
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    {/* info */}
                    <div className=" border-[#dddfe2] border-solid border-r-[1px] block flex-grow-0">
                      <div className="flex flex-col h-[100%] py-2 px-3">
                        <div className=" mb-1"></div>
                        <header className=" mb-1 block">
                          <div className="inline">
                            <h3 className=" text-[rgb(36,38,44)] fill-[rgb(36,38,44)] text-[clamp(18px,17.1795px+0.25641vw,20px)] inline leading-[clamp(21px,19.7692px+0.384615vw,24px)] font-semibold m-0">
                              {d.title}
                            </h3>
                          </div>
                          <div className=" w-full flex justify-between mt-1">
                            <div className="inline">
                              <div className="mr-1 flex ">
                                <AiFillStar className=" overflow-hidden fill-[rgb(223,85,5)] max-h-[14px] min-h-[14px] max-w-[14px] min-w-[14px] w-[14px]" />
                                <AiFillStar className=" overflow-hidden fill-[rgb(223,85,5)] max-h-[14px] min-h-[14px] max-w-[14px] min-w-[14px] w-[14px]" />
                                <AiFillStar className=" overflow-hidden fill-[rgb(223,85,5)] max-h-[14px] min-h-[14px] max-w-[14px] min-w-[14px] w-[14px]" />
                                <AiFillStar className=" overflow-hidden fill-[rgb(223,85,5)] max-h-[14px] min-h-[14px] max-w-[14px] min-w-[14px] w-[14px]" />
                                <AiFillStar className=" overflow-hidden fill-[rgb(223,85,5)] max-h-[14px] min-h-[14px] max-w-[14px] min-w-[14px] w-[14px]" />
                              </div>
                            </div>
                            <span className=" inline-flex items-center no-underline text-[rgb(49,112,231)] fill-[rgb(49,112,231)] font-normal text-[12px] leading-[calc(14.98px)] my-[calc(-0.98px)]">
                              <MdLocationOn className="text-[rgb(49,112,231)] fill-[rgb(49,112,231)] mr-1 max-h-[14px] min-h-[14px] max-w-[14px] min-w-[14px] w-[14px]" />
                              {d.town}, {d.regional_capital} - View on map
                            </span>
                          </div>
                        </header>
                        {/* amenities */}
                        <div className=" flex flex-wrap">
                          <div className=" border-[rgb(193,203,224)] border-[1px] rounded-[2px] border-solid inline-flex justify-center items-center text-start h-[22px] mr-1 mb-1 py-1 px-2">
                            <span className=" font-normal text-[rgb(36,38,44)] fill-[rgb(36,38,44)] text-center overflow-hidden text-ellipsis text-[12px] leading-[calc(14.98px)] my-[calc(-0.98px)]">
                              Breakfast
                            </span>
                          </div>
                          <div className=" border-[rgb(193,203,224)] border-[1px] rounded-[2px] border-solid inline-flex justify-center items-center text-start h-[22px] mr-1 mb-1 py-1 px-2">
                            <span className=" font-normal text-[rgb(36,38,44)] fill-[rgb(36,38,44)] text-center overflow-hidden text-ellipsis text-[12px] leading-[calc(14.98px)] my-[calc(-0.98px)]">
                              Free WiFi
                            </span>
                          </div>
                          <div className=" border-[rgb(193,203,224)] border-[1px] rounded-[2px] border-solid inline-flex justify-center items-center text-start h-[22px] mr-1 mb-1 py-1 px-2">
                            <span className=" font-normal text-[rgb(36,38,44)] fill-[rgb(36,38,44)] text-center overflow-hidden text-ellipsis text-[12px] leading-[calc(14.98px)] my-[calc(-0.98px)]">
                              Parking
                            </span>
                          </div>
                          <div className=" border-[rgb(193,203,224)] border-[1px] rounded-[2px] border-solid inline-flex justify-center items-center text-start h-[22px] mr-1 mb-1 py-1 px-2">
                            <span className=" font-normal text-[rgb(36,38,44)] fill-[rgb(36,38,44)] text-center overflow-hidden text-ellipsis text-[12px] leading-[calc(14.98px)] my-[calc(-0.98px)]">
                              +3
                            </span>
                          </div>
                        </div>
                        {/* prince and rank */}
                        <div className=" box-border flex items-center justify-between flex-nowrap w-[calc(100%+4px)]">
                          <div className=" pt-2 flex flex-col">
                            <span className=" text-[14px] leading-[20px] font-medium block text-[rgb(42,42,46)]">
                              Excellent
                            </span>
                            <span className=" text-[12px] leading-[16px] font-normal block text-[rgb(112,112,112)]">
                              426 reviews
                            </span>
                          </div>
                          {/* price */}
                          <div className=" text-[#737373] inline-block text-[22px] leading-[22px] font-bold relative">GH₵ {d.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Container;

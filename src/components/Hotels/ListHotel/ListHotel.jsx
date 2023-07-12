import React from "react";
import {HotFalse} from '../../../features/page/ListProperty/hotelModal'
import { useDispatch } from "react-redux";

const ListHotel = () => {
  const dispatch = useDispatch()
  return (
    <div className=" justify-center items-center flex flex-col">
      <button onClick={()=>dispatch(HotFalse())} className="closeButton -mt-5 rounded-[4px] select-none box-border flex justify-center items-center text-center p-1 ml-auto  border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
        <span  className=" -mt-1 flex justify-center items-center  bg-transparent text-white opacity-95 h-6 w-6 text-2xl  outline-none focus:outline-none">
          x
        </span>
      </button>
      <h1 className=" px-2 text-primary text-center  text-[25px]">
        Are you listing your Hotel for booking?
      </h1>
      {/* Rent*/}
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className=" mt-8 shadow shadow-primary items-center text-center justify-center h-fit pb-3 box-border rounded-[16px] px-3   relative flex flex-grow  bg-white w-fit max-w-full border-[1px] border-solid overflow-hidden  "
      >
        <div className=" items-center text-center justify-center  box-border flex flex-col">
          <div className=" box-border">
            <h1 className=" box-border mx-0 my-2 text-[30px]">
              <strong>For Booking</strong>
            </h1>
            <p className="text-[14px] text-center w-[200px] sm:w-[300px]">
              You are listing your hotel to tenants, and require monthly
              payments and offering a stay limited by a time agreed upon.
            </p>
          </div>
          <button className=" shadow-md listButton  w-fit mx-0 mt-2 text-white bg-[#3171d9] border-[#3171d9] rounded-[10px] min-h-[42px] inline-block font-semibold text-center touch-manipulation cursor-pointer border-[1px] border-solid border-transparent whitespace-nowrap text-[14px] select-none px-[15px] py-[10px]">
            <span>List Now</span>
          </button>
        </div>
      </div>

      {/* Rent*/}
      {/* <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className=" mt-8 shadow shadow-primary items-center text-center justify-center h-fit pb-3 box-border rounded-[16px] px-3   relative flex flex-grow  bg-white w-fit max-w-full border-[1px] border-solid overflow-hidden  "
      >
        <div className=" items-center text-center justify-center  box-border flex flex-col">
          <div className=" box-border">
            <h1 className=" box-border mx-0 my-2 text-[30px]">
              <strong>For Sale</strong>
            </h1>
            <p className="text-[14px] text-center w-[200px] sm:w-[300px]">
              You are selling your entire hostel for a stipulated amount and are not
              offering a stay limited by time.
            </p>
          </div>
          <button className=" shadow-md listButton  w-fit mx-0 mt-2 text-white bg-[#3171d9] border-[#3171d9] rounded-[10px] min-h-[42px] inline-block font-semibold text-center touch-manipulation cursor-pointer border-[1px] border-solid border-transparent whitespace-nowrap text-[14px] select-none px-[15px] py-[10px]">
            <span>Sale Out</span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ListHotel;

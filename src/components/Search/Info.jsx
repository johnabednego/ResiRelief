import React from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const Info = ({ name, showInfo, room, setRoom, adult, setAdult, child, setChild }) => {
  const room_minus = () => {
    if (room > 1) setRoom((room -= 1));
  };
  const room_plus = () => {
    if (room < 9) setRoom((room += 1));
    if (adult<room) setAdult((adult += 1));
  };
  const adult_minus = () => {
    if (adult > room) setAdult((adult -= 1));
  };
  const adult_plus = () => {
    if (adult < 36) setAdult((adult += 1));
  };
  const child_minus = () => {
    if (child > 0) setChild((child -= 1));
  };
  const child_plus = () => {
    if (child < 9) setChild((child += 1));
  };
  return (
    
    <div className="calender_display absolute z-50">
      <div
        className={
          "sm_calender ml-8 sm:ml-[12.25rem] xl:ml-[550px] mt-[-3.4rem] lg:mt-[-2rem] absolute z-50 w-[300px]"
        }
      >
        {name==="sm_info"?
        <div className="relative">
        {showInfo && (
          <div className="sm_info absolute bg-white shadow-lg rounded-[6px] p-4  border-[1px] border-primary  top-28 lg:top-20 ml-[-12rem] md:ml-[-10rem] lg:ml-0 xl:ml-[-24rem] sm_calender mt-[6rem] md:mt-[1rem] z-50 w-[300px]">
            {/* room */}
            <div className="flex justify-between">
              <div className="text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                {room > 1 ? "Rooms" : "Room"}
              </div>
              <div className="flex">
                <FiMinusCircle
                  onClick={() => room_minus()}
                  className={
                    room < 2
                      ? " cursor-not-allowed text-gray-400 text-[18px] sm:text-[22px] mt-[4px]"
                      : "text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
                  }
                />
                <div className=" mx-3 text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                  {room}
                </div>
                <FiPlusCircle
                  onClick={() => room_plus()}
                  className=" text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
                />
              </div>
            </div>
            {/* adult */}
            <div className="flex justify-between my-5">
              <div>
                <div className="text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                  {adult > 1 ? "Adults" : "Adult"}
                </div>
                <div className=" text-[12px] text-[#999] leading-[1.25] overflow-ellipsis">
                  Ages 18 or above
                </div>
              </div>
              <div className="flex">
                <FiMinusCircle
                  onClick={() => adult_minus()}
                  className={
                    adult <= room
                      ? " cursor-not-allowed text-gray-400 text-[18px] sm:text-[22px] mt-[4px]"
                      : "text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
                  }
                />
                <div className=" mx-3 text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                  {adult}
                </div>
                <FiPlusCircle
                  onClick={() => adult_plus()}
                  className=" text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
                />
              </div>
            </div>
            {/* child */}
            <div className="flex justify-between">
              <div>
                <div className="text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                  {child===0? "children":child > 1 ? "children" : "child"}
                </div>
                <div className=" text-[12px] text-[#999] leading-[1.25] overflow-ellipsis">
                  Ages 0-17
                </div>
              </div>
              <div className="flex">
                <FiMinusCircle
                  onClick={() => child_minus()}
                  className={
                    child <= 0
                      ? " cursor-not-allowed text-gray-400 text-[18px] sm:text-[22px] mt-[4px]"
                      : "text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
                  }
                />
                <div className=" mx-3 text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                  {child}
                </div>
                <FiPlusCircle
                  onClick={() => child_plus()}
                  className=" text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
                />
              </div>
            </div>
          </div>
        )}
      </div>:
      <div className="relative">
      {showInfo && (
        <div className="absolute w-full top-12 bg-white shadow-lg rounded-[6px] p-4  border-[1px] border-primary">
          {/* room */}
          <div className="flex justify-between">
            <div className="text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
              {room > 1 ? "Rooms" : "Room"}
            </div>
            <div className="flex">
              <FiMinusCircle
                onClick={() => room_minus()}
                className={
                  room < 2
                    ? " cursor-not-allowed text-gray-400 text-[18px] sm:text-[22px] mt-[4px]"
                    : "text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
                }
              />
              <div className=" mx-3 text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                {room}
              </div>
              <FiPlusCircle
                onClick={() => room_plus()}
                className=" text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
              />
            </div>
          </div>
          {/* adult */}
          <div className="flex justify-between my-5">
            <div>
              <div className="text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                {adult > 1 ? "Adults" : "Adult"}
              </div>
              <div className=" text-[12px] text-[#999] leading-[1.25] overflow-ellipsis">
                Ages 18 or above
              </div>
            </div>
            <div className="flex">
              <FiMinusCircle
                onClick={() => adult_minus()}
                className={
                  adult <= room
                    ? " cursor-not-allowed text-gray-400 text-[18px] sm:text-[22px] mt-[4px]"
                    : "text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
                }
              />
              <div className=" mx-3 text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                {adult}
              </div>
              <FiPlusCircle
                onClick={() => adult_plus()}
                className=" text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
              />
            </div>
          </div>
          {/* child */}
          <div className="flex justify-between">
            <div>
              <div className="text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                {child===0? "children":child > 1 ? "children" : "child"}
              </div>
              <div className=" text-[12px] text-[#999] leading-[1.25] overflow-ellipsis">
                Ages 0-17
              </div>
            </div>
            <div className="flex">
              <FiMinusCircle
                onClick={() => child_minus()}
                className={
                  child <= 0
                    ? " cursor-not-allowed text-gray-400 text-[18px] sm:text-[22px] mt-[4px]"
                    : "text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
                }
              />
              <div className=" mx-3 text-[18px] sm:text-[22px] font-bold text-[#2a2a2e] whitespace-nowrap overflow-ellipsis">
                {child}
              </div>
              <FiPlusCircle
                onClick={() => child_plus()}
                className=" text-[#5392f9] cursor-pointer text-[18px] sm:text-[22px] mt-[4px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>}
      </div>
    </div>
  );
};

export default Info;

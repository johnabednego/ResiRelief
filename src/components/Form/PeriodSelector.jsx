import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const periods = [
    "1 day",
    "2 days",
    "3 days",
    "4 days",
    "5 days",
    "6 days",
    "1 week",
    "2 weeks",
    "3 weeks",
    "1 month",
    "2 months",
    "3 months",
    "4 months",
    "5 months",
    "6 months",
    "7 months",
    "8 months",
    "9 months",
    "10 months",
    "11 months",
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5 years",
    "6 years",
    "7 years",
    "8 years",
    "9 years",
    "10 years",
]

const PeriodSelector = ({setPeriod}) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className=" w-full cursor-pointer">
      <div
        onClick={() => setOpen(!open)}
        className={` m-0 text-[14px] w-full h-[34px] font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none pl-[8px] rounded-[4px] h-[40p flex items-center justify-between ${
          !selected && "text-[#707070]"
        }`}
      >
        {selected
          ? selected?.length > 15
            ? selected?.substring(0, 15) + "..."
            : selected
          : "period or duration"}
        <BiChevronDown color="#707070" size={25} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={` text-left shadow-input bg-white mt-2 overflow-y-auto flex flex-col absolute rounded-md z-50 ${
          open ? " h-[30vh]" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-[#2A2A2E]" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter room type"
            className="placeholder:text-[#707070] p-2 outline-none"
          />
        </div>
        {periods?.map((item) => (
            item = item.toString(),
          <li
            key={item}
            className={`p-2 text-sm hover:bg-primary hover:text-white
            ${
              item?.toLowerCase() === selected?.toLowerCase() &&
              "bg-primary text-white"
            }
            ${
              item?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (item?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(item);
                setPeriod(item)
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeriodSelector;

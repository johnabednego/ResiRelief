import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const CountrySelector = ({setUserCountry}) => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
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
          : "country"}
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
            placeholder="Enter country name"
            className="placeholder:text-[#707070] p-2 outline-none"
          />
        </div>
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-primary hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-primary text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setUserCountry(country?.name)
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountrySelector;
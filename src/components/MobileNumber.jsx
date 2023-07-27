import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const MobileNumber = () => {

  const [city, setCity] = useState()
  let currentCountry = ""
  let currentFlag
  let currentRoot
  let currentSuffixes

  const userLocation = async () => {
    try {
      let url = 'https://ipinfo.io/json?token=e94155e6189079'
    let response = await fetch(url)
    let data = await response.json();
    setCity(data.city)
    } catch (error) {
      console.log(error)
    }
    
  }

  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  useEffect(() => {
    userLocation()
    const fetchData = async () => {
      try {
        // fetch spinner
        setCountryState({
          ...countryState,
          loading: true,
        });

        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
        });
      }
    };

    fetchData();
  }, []);
  const { loading,  countries } = countryState;
  countries.map(item => {
    if (item.capital) {
      if (item.capital[0] === city) {
        currentCountry = item.name.common
        currentFlag = item.flags.png
        currentRoot = item.idd.root
        currentSuffixes = item.idd.suffixes[0]
        
      }
      if (item.capital) {
        if(item.capital[0]==="United States"){
          console.log(item)
          
        }
        
      }
    }

  })
  const [selectedCountry, setSelectedCountry] = useState();
  //   find selected country data
  //search selected country
  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });

  return (
    <React.Fragment>
      <section>
        {/* body section */}
        <div>
          {loading === true ?
            <div className="flex justify-center items-center">
              <p className="uppercase font-bold text-3xl">...loading</p>
            </div> :
            <div className="justify-center">

              <div>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className=" bg-white w-[200px] h-14 outline-none text-xl rounded-lg md:text-2xl "
                >

                  <option value={currentCountry}>{currentCountry ? currentCountry : `Select Country`}</option>
                  {countries.map((item) => {
                    return (
                      <option key={uuidv4()} value={item.name.common}>
                        {item.name.common}
                      </option>
                    );
                  })}
                </select>
                {!currentCountry?<h1 className=" text-[#ff0000]">Check your Internet</h1>:null}
                <div>
                  <div className=' box-border flex -m-1 w-[calc(100%_+_8px)]'>
                    <div className='w-full p-1 box-border m-0 flex-grow-0 max-w-fit'>
                      <div className=' w-full relative'>
                        <div className=' w-fit countryCode p-2 cursor-pointer border-[1px] border-solid border-[#CED0D4] bg-white rounded-[4px] '>
                          <div className=' pl-0 pr-0 h-[22px] justify-between flex items-center' >
                            <img
                              className="w-4 h-4"
                              src={
                                searchSelectedCountry ?
                                  searchSelectedCountry.flags.png : currentFlag
                              }
                              alt=""
                            />
                            {searchSelectedCountry ?
                              searchSelectedCountry.idd.root : currentRoot}
                            {searchSelectedCountry ?
                              searchSelectedCountry.idd.suffixes : currentSuffixes}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=' p-1 box-border m-0 flex-grow '>
                      <div className=' w-full flex items-start'>
                        <input required type="tel" name="phone" id="phone" placeholder='Mobile number' className='m-0 text-[14px] w-full p-[8px] font-normal leading-[22px] bg-white bg-clip-padding box-border rounded-[4px] appearance-none text-[#2A2A2E] border-[1px] border-solid border-[#CED0D4] ' />
                      </div>
                    </div>
                  </div>
                </div>

              </div>


            </div>
          }
        </div>
      </section>
    </React.Fragment>
  );
};

export default MobileNumber;

import React from 'react'
import { useSelector } from 'react-redux'
import homes from './homes'

import location from './assets/housing_assets/location.png'
import bed from './assets/housing_assets/bed.png'
import bath from './assets/housing_assets/bath.png'
import ruler from './assets/housing_assets/ruler.png'
import cedi from './assets/housing_assets/cedi.png'



const HousingList = () => {
    const location_city = useSelector((state) => state.location.value)
    const housing = useSelector((state) => state.housing.value)
    const searchValue = useSelector(state => state.searchValue.value)
  
    const data =  homes.filter((h)=>{
        if(searchValue===true){
         if( location_city && h.city.toLowerCase().includes(location_city.toLowerCase()) && h.housing_type.toLocaleLowerCase()===housing.toLocaleLowerCase()){
            return h 
        }
        else if(!location_city){
            return h
        }
    }else{
        return h
    }
    return null
    })
    return (
        <div className=' w-full '>
            <div id='data' className="flex flex-wrap justify-center overflow-hidden pb-16 ">
                
                {
                data.map((h)=>{
                    return(
                    <div className=" flex self-center ss:self-start mx-[1%] ss:ml-[64px] mt-[44px]  flex-col w-[281px] h-[381px] rounded-[15px] bg-white">
                        <div className=' h-[280px] w-[280px] '>
                            <img className=' rounded-md w-full h-full ' src={h.house} alt="house" />
                        </div>
                        <div className='shadow-lg rounded-br-lg rounded-bl-lg pl-2 pb-2 bg-white '>
                            <h1 className="mt-[8px]  font-semibold font-sans text-[17px] leading-[25.5px] text-black">{h.name}, <strong>{h.housing_type}</strong></h1>
                            <div className="flex">
                                <img className="h-[17px] w-[17px] mt-[2px]" src={location} alt="location" />
                                <h1 className="w-[181px] h-[24px] font-sans font-light text-[16px] leading-[24px]">{h.city}, {h.town}</h1>
                            </div>
                            <div className="flex mt-[14px]">
                                <div className="flex">
                                    <img className="w-[22px] h-[18px] " src={bed} alt="bed" />
                                    <h1 className="ml-[2px] h-[18px] font-sans font-normal text-[12px] leading-[18px] text-black">{h.bed} Bed</h1>
                                </div>
                                <div className="flex ml-[19.5px]">
                                    <img className="w-[18px] h-[18px]" src={bath} alt="bath" />
                                    <h1 className="ml-[2px] h-[18px] font-sans font-normal text-[12px] leading-[18px] text-black ">{h.bath} Bath</h1>
                                </div>
                                <div className="flex ml-[18px]">
                                    <img className="w-[18px] h-[18px]" src={ruler} alt="ruler" />
                                    <h1 className="ml-[2px] h-[18px] font-sans font-normal text-[12px] leading-[18px] text-black">{h.ft} sqft</h1>
                                </div>
                            </div>
                            <div className="flex mt-[32px]">
                                <div className="flex">
                                    <img className="mt-[4px] w-[10px] h-[16px] " src={cedi} alt="cedi" />
                                    <h1 className="w-[89px] h-[24px] font-sans font-semibold text-[16px] leading-[24px] text-black ">{h.price}</h1>
                                </div>
                                <button className="ml-[49px] w-[86px] h-[32px] rounded-[10px] bg-[#2A4953] shadow text-center text-white py-[5px]">View</button>
                            </div>
                        </div>
                    </div>)
                })
                }
       
            </div>
        </div>
    )
}

export default HousingList

import React from 'react'
import homes from '../homes'

import location from '../assets/housing_assets/location.png'
// import bed from '../assets/housing_assets/bed.png'
// import bath from '../assets/housing_assets/bath.png'
// import ruler from '../assets/housing_assets/ruler.png'
import cedi from '../assets/housing_assets/cedi.png'
import { useNavigate } from 'react-router-dom'

const Nearby = () => {
    const location_city = "Accra"
    const default_city = "Accra"
    let state = 0
  
    let data =  homes.filter((h)=>{
         if( location_city && h.city.toLowerCase().includes(location_city.toLowerCase())){
            return h 
        }else if(!h.city.toLowerCase().includes(location_city.toLowerCase())){
            state+=1
        }
    return null
    })
    if(state===homes.length){
        data =  homes.filter((h)=>{
            if( default_city && h.city.toLowerCase().includes(default_city.toLowerCase())){
               return h 
           }
       return null
       })
    }

    const navigate = useNavigate()

    const scroll_control = () =>{
      const scrollDuration = 500; // Adjust this value to control the scroll speed
      const scrollStep = -window.scrollY / (scrollDuration / 15);
  
      const animateScroll = () => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
          requestAnimationFrame(animateScroll);
        } 
      };
  
      animateScroll();
    }
    const toFacility = (title) => {
      if(title==="Hostel"){
      navigate("/facility_type/hostels")
      scroll_control()
      }
      else if(title==="Apartment"){
        navigate("/facility_type/apartments")
        scroll_control()
      }
      else if(title==="Guest House"){
        navigate("/facility_type/guest_houses")
        scroll_control()
      }
      else if(title==="Hotel"){
      navigate("/facility_type/hotels")
      scroll_control()
      }
    }

    return (
        <div className=' w-full '>
            <div id='data' className="flex flex-wrap justify-evenly overflow-hidden pb-16 ">
                
                {
                data.map((h)=>{
                    return(
                    <div  className="  hover:scale-[1.09] transition-all duration-500 flex self-center ss:self-start mx-[1%] ss:ml-[64px] mt-[44px]  flex-col w-[230px] md:w-[281px] h-fit rounded-[15px] bg-white">
                        <div className=' w-[230px] md:w-[280px] '>
                            <img className=' rounded-md  h-[230px] w-[230px] md:w-[280px] ' src={h.house} alt="house" />
                        </div>
                        <div className='shadow-lg rounded-br-lg rounded-bl-lg pl-2 pb-2 bg-white '>
                            <h1 className="mt-[8px]  font-semibold font-sans text-[17px] leading-[25.5px] text-black">{h.name}, <strong>{h.housing_type}</strong></h1>
                            <div className="flex">
                                <img className="h-[17px] w-[17px] mt-[2px]" src={location} alt="location" />
                                <h1 className="w-[181px] h-[24px] font-sans font-light text-[16px] leading-[24px]">{h.city}, {h.town}</h1>
                            </div>
                            {/* <div className="flex flex-wrap mt-[14px]">
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
                            </div> */}
                            <div className="flex mt-[32px]">
                                <div className="flex">
                                    <img className="mt-[4px] w-[10px] h-[16px] " src={cedi} alt="cedi" />
                                    <h1 className="w-[89px] h-[24px] font-sans font-semibold text-[16px] leading-[24px] text-black ">{h.price}</h1>
                                </div>
                                <button onClick={()=>toFacility(h.housing_type)} className="ml-[49px] w-[86px] h-[32px] rounded-[10px] bg-[#2A4953] shadow text-center text-white py-[5px]">View</button>
                            </div>
                        </div>
                    </div>)
                })
                }
       
            </div>
        </div>
    )
}

export default Nearby

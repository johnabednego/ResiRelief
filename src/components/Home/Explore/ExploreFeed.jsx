import React from 'react'
import { useNavigate } from 'react-router-dom'
const ExploreFeed = ({image,tittle, value, facility}) => {
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
  const toFacility = () => {
    if(facility==="Hostels"){
    navigate("/facility_type/hostels")
    scroll_control()
    }
    else if(facility==="Apartments"){
      navigate("/facility_type/apartments")
      scroll_control()
    }
    else if(facility==="Guest Houses"){
      navigate("/facility_type/guest_houses")
      scroll_control()
    }
    else if(facility==="Hotels"){
    navigate("/facility_type/hotels")
    scroll_control()
    }
  }
  return (
    <div onClick={toFacility} className=' mt-[20px] ml-4 cursor-pointer '>
      <img src={image} alt={tittle} className='  hover:scale-[1.09] transition-all duration-500 h-[180px] w-[200px] rounded-tl-xl rounded-br-xl ' />
      <div className='mt-2 '>
        <h1 className=' text-black text-lg font-bold ' >{tittle}</h1>
        <h1 className=' text-[14px] font-normal '>{value} properties</h1>
      </div>
    </div>
  )
}

export default ExploreFeed

import React, { useState } from 'react';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const ImageSlider = ({ slides, tittle, value }) => {
  const navigate = useNavigate()

  const toFacility = () => {
    if(tittle==="Hostels"){
    navigate("/facility_type/hostels")
    }
    else if(tittle==="Apartments"){
      navigate("/facility_type/apartments")
    }
    else if(tittle==="Guest Houses"){
      navigate("/facility_type/guest_houses")
    }
    else if(tittle==="Hotels"){
    navigate("/facility_type/hotels")
    }
  }

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='margin ml-8 sm:ml-12 mt-8 cursor-pointer  transition-all duration-500'>
      <section className='h-[280px] w-[250px] group relative flex justify-center items-center  '>
        {current === 0 ? <IoIosArrowDropleftCircle className='invisible group-hover:visible  bg-black h-fit w-fit rounded-full -ml-[230px] absolute text-[3rem] text-white z-10 select-none cursor-not-allowed opacity-40 ' /> : <IoIosArrowDropleftCircle className=' invisible group-hover:visible  bg-white h-fit w-fit rounded-full -ml-[230px] absolute text-[3rem] text-gray-500 z-10 cursor-pointer select-none ' onClick={prevSlide} />}
        {current === length - 1 ? <IoIosArrowDroprightCircle className='invisible group-hover:visible  bg-black h-fit w-fit rounded-full ml-[230px] absolute text-[3rem] text-white z-10 select-none cursor-not-allowed opacity-40 ' /> : <IoIosArrowDroprightCircle className=' invisible group-hover:visible  bg-white h-fit w-fit rounded-full ml-[230px] absolute text-[3rem] text-gray-500 z-10 cursor-pointer select-none' onClick={nextSlide} />}
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? ' opacity-100 duration-[1s] scale-[1.08] ' : ' opacity-0 duration-[1s] ease-linear '}
              key={index}
            >
              {index === current && (
                <img onClick={toFacility} src={slide.image} alt='travel' className=' h-[230px] w-[230px] sm:h-[280px] sm:w-[280px] rounded-[10px]' />
              )}
            </div>
          );
        })}
      </section>
      <div className='mt-4 '>
        <h1 className=' text-black text-lg font-bold ' >{tittle}</h1>
        <h1 className=' text-[14px] font-normal '>{value}</h1>
      </div>
    </div>
  );
};

export default ImageSlider;

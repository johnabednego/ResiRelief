import React from 'react'
import bed from './assets/bed.jpg'

const Hero = () => {
  return (
    <div className=' text-center sm:text-left flex flex-col sm:flex-row items-center '>
      <div className='flex-1'>
        <h1 className=' text-primary text-2xl sm:text-3xl lg:text-6xl'>Enjoy Exploring your Accommodation</h1>
        <h1 className=' text-[13px] sm:text-[16px] mt-10 '>We have come to make it easy for you to Find a Better Place to Stay and Find Home Away From Home, we provide <b>more than  100</b> places that are ready for you to explore, buy, rent, or book to stay.</h1>
      </div>
      <div 
         data-aos="zoom-in"
         data-aos-easing="ease-in-out"
         data-aos-delay="50"
         data-aos-duration="3000"
         data-aos-mirror="true"
         data-aos-once="false"
      className=' mt-4 sm:mt-0 flex-1'>
        <img  className=' rounded-tl-full shadow-2xl ' src={bed} alt="hero_bed" />
      </div>
    </div>
  )
}

export default Hero

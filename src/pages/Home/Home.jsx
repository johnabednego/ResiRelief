import React from 'react'
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Home/Hero'
import Tittle from '../../components/Home/Tittle'
import ImageSlider from '../../components/ImageSlider'

import { ApartmentsSlider } from '../../components/Apartmets/ApartmentsSlider'
import { HostelsSlider } from '../../components/Hostels/HostelsSlider'
import { HotelsSlider } from '../../components/Hotels/HotelsSlider'
import { GuestHousesSlider } from '../../components/GuestHouses/GuestHousesSlider'
import Explore from '../../components/Home/Explore/Explore'
import Nearby from '../../components/Home/Nearby/Nearby'
import Feedback from '../../components/Home/Feedback/Feedback'
import Footer from '../../components/Footer/Footer'
import SignInModal from '../../components/SignIn/SignInModal'
import SignUpModal from '../../components/SignUp/SignUpModal'
import { useSelector } from 'react-redux'

const Home = () => {
  const signInModal = useSelector((state) => state.signInModal.value)
  const signUpModal = useSelector((state) => state.signUpModal.value)
 
  return (
    <div className='bg-white relative  z-10  overflow-hidden '>
      <div data-aos='zoom-in' data-aos-duration="3000" className=' xl:px-12 pb-1 fixed w-full z-10  '>
        <Nav />
      </div>
      {signInModal?
    <SignInModal/>:null}
    {signUpModal?<SignUpModal/>:null}
      <div className='bg-[#fdf4f4] px-4 sm:px-8 lg:px-12 pb-8 sm:pb-16 pt-40 '>
        <Hero />
      </div>
      <div className=' px-6 sm:px-12'>
        <Tittle tittle="Browse by property type" />
        <div data-aos="zoom-in" data-aos-duration="1000" className=' -mx-12 px-4 flex flex-wrap justify-center xl:justify-between ' >
          {/* hostels */}
          <a href='/facility_type/hostels'><div
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            data-aos-duration="3000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <ImageSlider slides={HostelsSlider} tittle="Hostels" value="41,557 hostels" />
          </div></a>
          {/* apartment */}
          
          <a href='/facility_type/apartments'><div
            data-aos="flip-right"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            data-aos-duration="3000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <ImageSlider slides={ApartmentsSlider} tittle="Apartments" value="1,070,954 apartments" />
          </div></a>
          {/* guest house */}
          <a href='/facility_type/guest_houses'><div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            data-aos-duration="3000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <ImageSlider slides={GuestHousesSlider} tittle="Guest Houses" value="128,54 guest houses" />
          </div></a>
          {/* hotel */}
          <a href='/facility_type/hotels'><div
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            data-aos-duration="3000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <ImageSlider slides={HotelsSlider} tittle="Hotels" value="557 hotels" />
          </div></a>
        </div>
        <Tittle tittle="Explore Ghana" subtittle="These popular destinations have a lot to offer" />
        <Explore />
        <Tittle tittle="Nearby facilities for you" subtittle="These facilities are within your current location" />
        <Nearby />
      </div>

    <Feedback/>


    <Footer/>





      {/* <div className=' -mt-12 w-full flex justify-center items-center'>
        <Search />
      </div>
      <div className=' flex justify-between px-12  mt-[40px] '>
        <HousingList />
      </div> */}


    </div>


  )
}

export default Home

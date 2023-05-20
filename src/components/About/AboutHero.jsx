import React from 'react'
import {Typewriter } from 'react-simple-typewriter'

import { useSelector } from 'react-redux'
import about from './assets/about.mp4'
import Nav from '../Nav/Nav'
import SignInModal from '../../components/SignIn/SignInModal'
import SignUpModal from '../../components/SignUp/SignUpModal'
const AboutHero = () => {
  const signInModal = useSelector((state) => state.signInModal.value)
  const signUpModal = useSelector((state) => state.signUpModal.value)
  return (
    <div className='bg-white relative  z-10  overflow-hidden '>
     <div data-aos='zoom-in' data-aos-duration="3000" className=' xl:px-12 pb-1 fixed w-full z-50  '>
        <Nav />
      </div>
      <header class="relative flex items-center justify-center h-screen overflow-hidden">
        <div class=" flex items-center justify-center w-full h-screen relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          <div className=' top-[50%] absolute translate-y-[-50%] left-0 text-center mt-10 sm:mt-0 w-full'>
            <h1 className=' font-bold mt-10 mb-5 text-6xl sm:text-[5rem] leading-[5.6rem] md:text-[6rem] md:leading-[6.6rem] text-white p-0'>About Us</h1>
            <div className=' w-[85%] md:w-[65%] mx-auto mt-0 mb-8'> 
              <p className=' sm:text-[2.2rem] leading-[2.4rem] text-white z-50 '>
              <Typewriter
            words={["Discover the perfect blend of comfort, affordability, and convenience with ResiRelief.", "Experience hassle-free travel with our wide range of accommodation options, where comfort meets affordability.", "Unlock unforgettable adventures and create lasting memories with us!"]}
            loop={false}
            cursor
            cursorStyle='|'
            cursorColor='red'
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
              </p>
            </div>
          </div>
        </div>
        <video autoPlay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none" src={about} type="video/mp4" />
      </header>
      {signInModal?
    <SignInModal/>:null}
    {signUpModal?<SignUpModal/>:null}
    </div>
  )
}

export default AboutHero

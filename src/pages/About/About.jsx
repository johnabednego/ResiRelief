import React from 'react'
import AboutHero from '../../components/About/AboutHero'
import Mission from '../../components/About/Mission'
import Commitment from '../../components/About/Commitment'
import  Footer from '..//../components/Footer/Footer'
const About = () => {
  return (
    <div className=' overflow-hidden'>
      <AboutHero/>
      <Mission/>
      <Commitment/>
     <div className=' -mt-[48px]'>
     <Footer/>
     </div>
    </div>
  )
}

export default About

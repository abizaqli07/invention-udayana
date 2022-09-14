import React from 'react'
import AboutContent from './subComponents/AboutContent'
import AboutHeader from './subComponents/AboutHeader'
import AboutThropy from './subComponents/AboutThropy'
import HomeBox from './subComponents/HomeBox'
import Footer from './subComponents/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const About = () => {

  // EFFECT FOR ANIMATE ON SCROLL
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, [])
  
  return (
    <div>
      <AboutHeader/>
      <AboutContent/>
      <AboutThropy/>
      <HomeBox/>
      <Footer/>
    </div>
  )
}

export default About
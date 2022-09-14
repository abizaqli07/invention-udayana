import React from 'react'
import AboutContent from './subComponents/AboutContent'
import AboutHeader from './subComponents/AboutHeader'
import AboutTeam from './subComponents/AboutTeam'
import AboutThropy from './subComponents/AboutThropy'
import HomeBox from './subComponents/HomeBox'
import Footer from './subComponents/Footer'

function About() {
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
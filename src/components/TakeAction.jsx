import React from 'react'
import Footer from './subComponents/Footer'
import TakeActionDonation from './subComponents/TakeActionDonation'
import TakeActionHeader from './subComponents/TakeActionHeader'
import TakeActionService from './subComponents/TakeActionService'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const TakeAction = () => {

   // EFFECT FOR ANIMATE ON SCROLL
   useEffect(() => {
    Aos.init({
      once: true,
    });
  }, [])

  return (
    <div>
      <TakeActionHeader/>
      <TakeActionService/>
      <TakeActionDonation/>
      <Footer/>
    </div>
  )
}

export default TakeAction
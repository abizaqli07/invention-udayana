import React from 'react'
import PopulationContent from './subComponents/PopulationContent'
import PopulationHeader from './subComponents/PopulationHeader'
import Footer from './subComponents/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Population = () => {
  // EFFECT FOR ANIMATE ON SCROLL
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, [])

  return (
    <div>
      <PopulationHeader />
      <div className='population__background'>
        <PopulationContent />
        <div className='text-white'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Population
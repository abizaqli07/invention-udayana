import React from 'react'
import PopulationContent from './subComponents/PopulationContent'
import PopulationHeader from './subComponents/PopulationHeader'
import Footer from './subComponents/Footer'

function Population() {
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
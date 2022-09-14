import React from 'react'
import ClimateChangeContent from './subComponents/CliamteChangeContent'
import ClimateChangeHeader from './subComponents/ClimateChangeHeader'
import News from './subComponents/News'
import HomeBox from './subComponents/HomeBox'
import Footer from './subComponents/Footer'


function ClimateChange() {
  return (
    <div>
      <ClimateChangeHeader />
      <div className='climate__change__background'>
        <ClimateChangeContent />
        <News />
        <HomeBox />
        <Footer />
        <div className='text-white'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ClimateChange
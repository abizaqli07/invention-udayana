import React from 'react'
import ClimateChangeContent from './subComponents/CliamteChangeContent'
import ClimateChangeHeader from './subComponents/ClimateChangeHeader'
import ClimateChangeQuote from './subComponents/ClimateChangeQuote'
import HomeBox from './subComponents/HomeBox'
import Footer from './subComponents/Footer'
import News from './subComponents/News'
import ClimateChangeStatistics from './subComponents/ClimateChangeStatistics'


function ClimateChange() {
  return (
    <div>
      <ClimateChangeHeader />
      <div className='climate__change__background'>
        <ClimateChangeStatistics />
        <ClimateChangeQuote />
        <ClimateChangeContent />
        <HomeBox />
        <News />
        <Footer/>
      </div>
    </div>
  )
}

export default ClimateChange
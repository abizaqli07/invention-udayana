import React from 'react'
import PollutionContent from './subComponents/PollutionContent'
import ClimateChangeHeader from './subComponents/ClimateChangeHeader'
import HomeBox from './subComponents/HomeBox'
import Footer from './subComponents/Footer'
import News from './subComponents/News'
import PollutionStatistics from './subComponents/PollutionStatistics'

function PollutionPlastic() {
  return (
    <div>
      <ClimateChangeHeader />
      <div className='climate__change__background'>
        <PollutionStatistics />
        <PollutionContent />
        <HomeBox />
        <News />
        <Footer/>
      </div>
    </div>
  )
}

export default PollutionPlastic

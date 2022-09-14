import React from 'react'
import PollutionContent from './subComponents/PollutionContent'
import PollutionHeader from './subComponents/PollutionHeader'
import HomeBox from './subComponents/HomeBox'
import Footer from './subComponents/Footer'
import News from './subComponents/News'
import PollutionStatistics from './subComponents/PollutionStatistics'

function PollutionPlastic() {
  return (
    <div>
      <PollutionHeader />
      <div className='climate__change__background'>
        <PollutionStatistics />
        <PollutionContent />
        <News />
        <HomeBox />
        <Footer/>
      </div>
    </div>
  )
}

export default PollutionPlastic

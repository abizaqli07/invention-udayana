import React from 'react'
import PollutionPlasticHeader from './subComponents/PollutionPlasticHeader'
import PollutionPlasticContent from './subComponents/PollutionPlasticContent'
import News from './subComponents/News'
import HomeBox from './subComponents/HomeBox'
import Footer from './subComponents/Footer'

function PollutionPlastic() {
  return (
    <div>
      <PollutionPlasticHeader />
      <div className='climate__change__background'>
        <PollutionPlasticContent />
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

export default PollutionPlastic

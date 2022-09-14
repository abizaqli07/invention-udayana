import React from 'react'
import Footer from './subComponents/Footer'
import TakeActionAction from './subComponents/TakeActionAction'
import TakeActionDonation from './subComponents/TakeActionDonation'
import TakeActionHeader from './subComponents/TakeActionHeader'
import TakeActionService from './subComponents/TakeActionService'

function TakeAction() {
  return (
    <div>
      <TakeActionHeader/>
      <TakeActionService/>
      <TakeActionAction/>
      <TakeActionDonation/>
      <Footer/>
    </div>
  )
}

export default TakeAction
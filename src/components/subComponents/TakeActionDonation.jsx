import React, { useState } from 'react'
import Donation from './Donation/Donation'
import PersonalData from './Donation/PersonalData'
import ConfirmDonation from './Donation/ConfirmDonation'

function TakeActionDonation() {
  const [toggle, setToggle] = useState({tabType:'personal'});

  function toggleHandler(input) {
    setToggle({
      tabType:input
    })
  }

  return (
    <div className='w-full donation__background py-20 mb-36'>
      <div className='layout flex justify-center items-center'>
        {
          toggle.tabType === 'personal' && <PersonalData showPersonal={() => toggleHandler('personal')} showDonation={() => toggleHandler('donation')} showConfirm={() => toggleHandler('confirm')}/>
        }
        {
          toggle.tabType === 'donation' && <Donation showPersonal={() => toggleHandler('personal')} showDonation={() => toggleHandler('donation')} showConfirm={() => toggleHandler('confirm')}/>
        }
        {
          toggle.tabType === 'confirm' && <ConfirmDonation showPersonal={() => toggleHandler('personal')} showDonation={() => toggleHandler('donation')} showConfirm={() => toggleHandler('confirm')}/>
        }
        
      </div>
    </div>
  )
}

export default TakeActionDonation
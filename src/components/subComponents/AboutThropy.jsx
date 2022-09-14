import React from 'react'

import Thropy1 from '../../assets/thropy1.png'
import Thropy2 from '../../assets/thropy2.png'
import Thropy3 from '../../assets/thropy3.png'
import Thropy4 from '../../assets/thropy4.png'

function AboutThropy() {
  return (
    <div className='w-full pt-12 mb-32'>
      <div className='layout'>

        <div className='flex flex-col gap-2 text-center justify-center items-center mt-24 mb-8'>
          <div className='sub__title'>Prestasi kami</div>
          <div className='title'>Penghargaan dan Pengakuan</div>
        </div>
        
        <div className='flex flex-wrap gap-20 justify-center items-center mt-20'>
          <div><img className='max-w-[220px]' src={Thropy1}/></div>
          <div><img className='max-w-[220px]' src={Thropy2}/></div>
          <div><img className='max-w-[220px]' src={Thropy3}/></div>
          <div><img className='max-w-[220px]' src={Thropy4}/></div>
        </div>

      </div>
    </div>
  )
}

export default AboutThropy
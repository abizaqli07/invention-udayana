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
          <div className='sub__title' data-aos='fade-up' data-aos-duration='500'>Prestasi kami</div>
          <div className='title' data-aos='fade-up' data-aos-duration='500' data-aos-delay='100'>Penghargaan dan Pengakuan</div>
        </div>
        
        <div className='flex flex-wrap gap-20 justify-center items-center mt-20'>
          <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'><img className='max-w-[220px]' src={Thropy1}/></div>
          <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='750'><img className='max-w-[220px]' src={Thropy2}/></div>
          <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='900'><img className='max-w-[220px]' src={Thropy3}/></div>
          <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1050'><img className='max-w-[220px]' src={Thropy4}/></div>
        </div>
      </div>
    </div>
  )
}

export default AboutThropy
import React from 'react'
import Biota from '../../assets/biota.png'
import Ekosistem from '../../assets/ekosistem.png'
import Iklim from '../../assets/iklim.png'
import Sampah from '../../assets/sampah.png'

function Services() {
  return (
    <div className='w-full h-full'>
      <div className='layout overflow-x-hidden'>

        <div className='title__container'>
          <div className='sub__title' data-aos='fade-up' data-aos-duration='500'>Fitur Layanan Kami</div>
          <div className='title' data-aos='fade-up' data-aos-duration='500' data-aos-delay='100'>Kami memberikan pengalaman yang terbaik</div>
        </div>

        <div className='grid grid-cols-1 mt-16 gap-8 lg:grid-cols-2'>

          <div className='service__card' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='500'>
            <div className='h-fit w-fit'><img className='w-[80px] h-[80px] sm:w-[340px]' src={Biota}/></div>
            <div className='flex flex-col gap-2'>
              <div className='text-h3 font-bold'>Biota Laut</div>
              <div className='text-small'>Donec molestie ultricies congue. Vestibulum facilisis mi sit amet iaculis auctor. Mauris quis accumsan lacus. Morbi accumsan viverra massa dictum sodales. </div>
            </div>
          </div>
          <div className='service__card' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='500'>
            <div className='h-fit w-fit'><img className='w-[80px] h-[80px] sm:w-[340px]' src={Ekosistem}/></div>
            <div className='flex flex-col gap-2'>
              <div className='text-h3 font-bold'>Ekosistem Laut</div>
              <div className='text-small'>Donec molestie ultricies congue. Vestibulum facilisis mi sit amet iaculis auctor. Mauris quis accumsan lacus. Morbi accumsan viverra massa dictum sodales. </div>
            </div>
          </div>
          <div className='service__card' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='1000'>
            <div className='h-fit w-fit'><img className='w-[80px] h-[80px] sm:w-[340px]' src={Iklim}/></div>
            <div className='flex flex-col gap-2'>
              <div className='text-h3 font-bold'>Perubahan Iklim</div>
              <div className='text-small'>Donec molestie ultricies congue. Vestibulum facilisis mi sit amet iaculis auctor. Mauris quis accumsan lacus. Morbi accumsan viverra massa dictum sodales. </div>
            </div>
          </div>
          <div className='service__card' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='1000'>
            <div className='h-fit w-fit'><img className='w-[80px] h-[80px] sm:w-[340px]' src={Sampah}/></div>
            <div className='flex flex-col gap-2'>
              <div className='text-h3 font-bold'>Polusi dan Sampah Plastik</div>
              <div className='text-small'>Donec molestie ultricies congue. Vestibulum facilisis mi sit amet iaculis auctor. Mauris quis accumsan lacus. Morbi accumsan viverra massa dictum sodales. </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Services;
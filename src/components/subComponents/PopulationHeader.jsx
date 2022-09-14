import React from 'react'

function PopulationHeader() {
  return (
    <div className='w-full h-[100vh] bg-slate-400 relative'>
      <div className='flex population__hero w-full h-full'>
        <div className='flex flex-col justify-center items-center layout text-center lg:items-start lg:text-left'>
          <div className='text-h1 font-black' data-aos='fade-up' data-aos-duration='500'>Habitat dan Populasi</div>
          <div className='text-biggest font-black leading-[1.1]' data-aos='fade-up' data-aos-duration='500' data-aos-delay='100'>di Lautan</div>
          <div className='text-normal pt-4' data-aos='fade-up' data-aos-duration='500' data-aos-delay='200'>Sagara akan membuat kehidupan yang lebih baik untuk habitat luat, dan ekosistem manusia.</div>
          <div className='mt-8 flex flex-col gap-4' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
          <div className='py-3 px-6 rounded-full gradient-primary drop-shadow-[0px_12px_12px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_10px_10px_rgba(0,0,0,0.25)]  shadow-slate-800 font-semibold text-white cursor-pointer'>Jelajah Sekarang</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PopulationHeader
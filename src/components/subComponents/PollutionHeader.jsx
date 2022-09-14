import React from 'react'

function PollutionHeader() {
  return (
    <div className='w-full h-[100vh] bg-slate-400 relative'>
      <div className='flex pollution__hero w-full h-full'>
        <div className='flex flex-col justify-center items-center layout text-center lg:items-start lg:text-left text-white'>
          <div className='text-6xl font-black' data-aos='fade-up' data-aos-duration='500'>Polusi Sampah Plastik</div>
          <div className='text-[8.5rem] font-black leading-[1.1]' data-aos='fade-up' data-aos-duration='500' data-aos-delay='100'>pada Lautan</div>
          <div className='text-normal pt-4' data-aos='fade-up' data-aos-duration='500' data-aos-delay='200'>Setidaknya 8,3 milliar plastik telah dibuat hingga saat ini dan 79 persennya belum didaur ulang dan mencemari lingkungan</div>
          <div className='mt-8 flex flex-col gap-4' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
          <div className='py-3 px-6 rounded-full gradient-primary drop-shadow-[0px_12px_12px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_10px_10px_rgba(0,0,0,0.25)]  shadow-slate-800 font-semibold text-white cursor-pointer'>Donasi Sekarang</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PollutionHeader
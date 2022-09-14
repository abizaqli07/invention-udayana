import React, { useEffect } from 'react'
import hero2 from "../../assets/hero2.png";

const Header = () => {

  return (
    <div className='w-full h-[100vh] bg-slate-400 relative'>
      <div className='flex hero w-full h-full lg:hidden'>
        <div className='flex flex-col justify-center items-center layout text-center lg:items-start lg:text-left'>
          <div className='text-h1 font-semibold'>Connect With</div>
          <div className='text-biggest font-bold'>The Ocean</div>
          <div className='text-normal pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit nunc. Vulputate libero et velit interdum, ac aliquet odio mattis.</div>
          <div className='mt-8 flex flex-col gap-4'>
            <div className='py-3 px-6 rounded-full gradient-primary shadow-md shadow-slate-800 font-semibold text-white cursor-pointer'>Jelajah Sekarang</div>
            <div className='py-3 px-6 rounded-full border-[2px] border-blue-500 shadow-md shadow-slate-800 font-semibold text-blue-500 cursor-pointer bg-white/40'>Bantu Donasi</div>
          </div>
        </div>
      </div>

      <div className='hidden w-full h-full bg-white lg:flex'>
        <div className='flex flex-col justify-center layout items-start text-left'>
            <div className='text-6xl font-black' data-aos='fade-up' data-aos-duration='500'>Connect With</div>
            <div className='text-9xl font-black' data-aos='fade-up' data-aos-duration='500' data-aos-delay='100'>The Ocean</div>
            <div className='text-normal pt-4' data-aos='fade-up' data-aos-duration='500' data-aos-delay='200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit nunc.<br /> Vulputate libero et velit interdum, ac aliquet odio mattis.</div>
          <div className='mt-16 flex gap-4 flex-row' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
            <div className='py-3 px-6 rounded-full gradient-primary shadow-md shadow-slate-800 font-semibold text-white cursor-pointer'>Jelajah Sekarang</div>
            <div className='py-3 px-6 rounded-full border-[2px] border-blue-500 shadow-md shadow-slate-800 font-semibold text-blue-500 cursor-pointer bg-white/30'>Bantu Donasi</div>
          </div>
        </div>
      </div>
      <div className='hidden lg:flex h-[100vh] w-fit absolute top-0 right-0'><img src={hero2} /></div>

    </div>
  )
}

export default Header;
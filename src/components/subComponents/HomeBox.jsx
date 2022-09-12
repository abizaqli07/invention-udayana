import React from 'react'
import {
  FaPaperPlane
} from "react-icons/fa";

function HomeBox() {
  return (
    <div className='w-full h-full mt-36 mb-52'>
      <div className='layout gradient-primary py-36 sm:py-20 px-8 mb-8 rounded-[1rem] text-white flex flex-col gap-6 text-center justify-center items-center drop-shadow-[0px_30px_30px_rgba(0,0,0,0.35)] shadow-[#161616] md:flex-row lg:gap-14 '>
        <div className='flex flex-col md:text-left'>
          <div className='text-h3 font-normal'>Mari beraksi</div>
          <div className='text-h1 font-bold md:text-h2'>Untuk menjaga lautan ini</div>
        </div>
        <div className='flex border-[2px] w-full max-w-[400px] border-white p-4 rounded-xl'>
          <input placeholder='Email kamu' className=' w-full bg-transparent text-white text-small focus:border-none focus:outline-none placeholder:text-white/90'/>
          <div className='pl-4 cursor-pointer border-l-2 border-white text-h3'><FaPaperPlane/></div>
        </div>
      </div>
      <div className='layout bg-slate-400 h-[2px] rounded-full'></div>
    </div>
  )
}

export default HomeBox;
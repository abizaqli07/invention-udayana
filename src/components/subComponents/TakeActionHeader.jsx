import React from 'react'

function TakeActionHeader() {
  return (
    <div className='w-full h-[100vh] bg-slate-400 relative'>
      <div className='flex takeaction__hero w-full h-full'>
        <div className='flex flex-col justify-center items-center layout text-center lg:items-start lg:text-left'>
          <div className='text-h1 font-semibold'>Ayo</div>
          <div className='text-biggest font-bold'>Beraksi Bersama</div>
          <div className='text-normal pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit nunc. <br /> Vulputate libero et velit interdum, ac aliquet odio mattis.</div>
          <div className='mt-8 flex flex-col gap-4'>
            <div className='py-3 px-6 rounded-full gradient-primary shadow-md shadow-slate-800 font-semibold text-white cursor-pointer'>Donasi Sekarang</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TakeActionHeader
import React from 'react'

function PollutionPlasticHeader() {
  return (
    <div className='w-full h-[100vh] bg-slate-400 relative'>
      <div className='flex population__hero w-full h-full'>
        <div className='flex flex-col justify-center items-center layout text-center lg:items-start lg:text-left'>
          <div className='text-h1 font-semibold'>Perubahan Iklim Global</div>
          <div className='text-biggest font-bold'>Pada Lautan Dunia</div>
          <div className='text-normal pt-4'>Sebagai penyerap karbon terbesar di planet ini, lautan menyerap kelebihan panas dan energi <br/> yang dilepaskan dari meningkatnya emisi gas rumah kaca yang terperangkap dalam sistem Bumi.</div>
          <div className='mt-8 flex flex-col gap-4'>
            <div className='py-3 px-6 rounded-full gradient-primary shadow-md shadow-slate-800 font-semibold text-white cursor-pointer'>Jelajah Sekarang</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PollutionPlasticHeader
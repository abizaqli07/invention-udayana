import React from 'react'

function ClimateChangeStatistics() {
  return (
    <div className='w-full h-full'>
      <div className='layout '>

        {/* ========== TITLE MAIN CONTENT ========== */}
        <div className='title__container'>
          <div className='sub__title'>Permasalahan di Lautan</div>
          <div className='title'>Dampak Besar Perubahan Iklim di Lautan</div>
        </div>
        {/* ========== END OF TITLE MAIN CONTENT ========== */}

        {/* ========== CONTAINER FOR CARD ========== */}
        <div className='grid grid-cols-[repeat(1,_300px)] mt-16 gap-8 justify-center items-center sm:grid-cols-[repeat(2,_300px)] lg:grid-cols-[repeat(3,_300px)] '>

          <div className='w-full p-6 bg-slate-300 flex flex-col justify-center items-center text-center min-h-[300px]'>
            <div><img /></div>
            <div>Bumi menyerap panas yang dihasilkan oleh peningkatan emisi.</div>
          </div>
          <div className='w-full p-6 bg-slate-300 flex flex-col justify-center items-center text-center min-h-[300px]'>
            <div><img /></div>
            <div>Bumi menyerap panas yang dihasilkan oleh peningkatan emisi.</div>
          </div>
          <div className='w-full p-6 bg-slate-300 flex flex-col justify-center items-center text-center min-h-[300px]'>
            <div><img /></div>
            <div>Bumi menyerap panas yang dihasilkan oleh peningkatan emisi.</div>
          </div>


        </div>
        {/* END OF CONTAINER FOR CARD */}

      </div>
    </div>
  )
}

export default ClimateChangeStatistics
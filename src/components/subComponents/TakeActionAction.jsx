import React from 'react'
import ActionImage from '../../assets/takeActionAction.png'

function TakeActionAction() {
  return (
    <div className='w-full pt-32 mb-32'>
      <div className='layout'>
        <div className='title__container mb-14'>
          <div className='sub__title'>Ikut serta dengan kami</div>
          <div className='title'>Tunjukkan aksimu <br/> dalam menjaga bumi ini</div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 justify-center items-center'>

          <div className='take__action-card'>
            <div className='w-full'><img className='w-full h-auto' src={ActionImage}/></div>
            <div className='flex flex-col gap-3 text-center justify-center py-4'>
              <div className='text-normal font-semibold'>Marketing Toolkit</div>
              <div className='text-small'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='px-3 py-1 border-[1px] border-blue-500 rounded-lg w-fit mx-auto cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-200 ease-out font-semibold'>Unduh</div>
            </div>
          </div>

          <div className='take__action-card'>
            <div className='w-full'><img className='w-full h-auto' src={ActionImage}/></div>
            <div className='flex flex-col gap-3 text-center justify-center py-4'>
              <div className='text-normal font-semibold'>Marketing Toolkit</div>
              <div className='text-small'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='px-3 py-1 border-[1px] border-blue-500 rounded-lg w-fit mx-auto cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-200 ease-out font-semibold'>Unduh</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TakeActionAction
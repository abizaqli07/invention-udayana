import React from 'react'
import NewsSwiper from './NewsSwiper'

function News() {
  return (
    <div className='w-full h-full'>
      <div className='layout '>
        <div className='title__container'>
          <div className='sub__title'>Berita Terbaru</div>
          <div className='title'>Dapatkan berita terupdate hari ini</div>
        </div>

        <div className='hidden sm:grid grid-cols-[repeat(1,_300px)] mt-16 gap-8 justify-center items-center sm:grid-cols-[repeat(2,_300px)] lg:grid-cols-[repeat(3,_300px)] '>

          <div className='news__card w-[300px] h-auto min-h-[350px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-500'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-500'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex justify-between items-center mt-2'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
          <div className='news__card w-[300px] h-auto min-h-[350px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-500'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-500'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex justify-between items-center mt-2'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
          <div className='news__card w-[300px] h-auto min-h-[350px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-500'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-500'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex justify-between items-center mt-2'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
          <div className='news__card w-[300px] h-auto min-h-[350px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-500'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-500'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex justify-between items-center mt-2'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
          <div className='news__card w-[300px] h-auto min-h-[350px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-500'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-500'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex justify-between items-center mt-2'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
          <div className='news__card w-[300px] h-auto min-h-[350px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-500'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-500'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex justify-between items-center mt-2'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>


        </div>

        <div className='sm:hidden mt-16 400px h-full mb-16'>
          <NewsSwiper />
        </div>
      </div>
    </div>
  )
}

export default News
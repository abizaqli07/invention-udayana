import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import {
  BiChevronLeft,
  BiChevronRight
} from "react-icons/bi";

function NewsSwiper() {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <div>
      <Swiper
        slidesPerView={1.6}
        spaceBetween={80}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="newsswiper"
      >

        <SwiperSlide>
          <div className='news__card-swiper w-full h-auto min-h-[420px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-full h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content text-center flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-100'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex flex-col justify-between items-center mt-2 gap-4'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='news__card-swiper w-full h-auto min-h-[420px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-full h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content text-center flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-100'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex flex-col justify-between items-center mt-2 gap-4'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='news__card-swiper w-full h-auto min-h-[420px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-full h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content text-center flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-100'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex flex-col justify-between items-center mt-2 gap-4'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='news__card-swiper w-full h-auto min-h-[420px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-full h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content text-center flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-100'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex flex-col justify-between items-center mt-2 gap-4'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='news__card-swiper w-full h-auto min-h-[420px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-full h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content text-center flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-100'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex flex-col justify-between items-center mt-2 gap-4'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='news__card-swiper w-full h-auto min-h-[420px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-full h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content text-center flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-100'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex flex-col justify-between items-center mt-2 gap-4'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='news__card-swiper w-full h-auto min-h-[420px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-full h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content text-center flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-100'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex flex-col justify-between items-center mt-2 gap-4'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='news__card-swiper w-full h-auto min-h-[420px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-full h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content text-center flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-100'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex flex-col justify-between items-center mt-2 gap-4'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='news__card-swiper w-full h-auto min-h-[420px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
            <div className='news__image w-full h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content text-center flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-100'>
              <div className='text-h3 font-semibold'>Judul Berita</div>
              <div className='text-small font-light'>Lorem ipsum itterator dolor sit amet, consectetur adipiscing elit.</div>
              <div className='flex flex-col justify-between items-center mt-2 gap-4'>
                <div className='text-normal font-semibold'>21/08/2022</div>
                <div className='news__button'>Selanjutnya</div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="flex gap-4 absolute top-1/2 z-10 w-full justify-between px-2">
          <div ref={navigationPrevRef}><BiChevronLeft className='text-biggest cursor-pointer text-blue-500 bg-white/40 rounded-lg hover:bg-white hover:border-[3px] border-blue-500 transition-all duration-200'/></div>
          <div ref={navigationNextRef}><BiChevronRight className='text-biggest cursor-pointer text-blue-500 bg-white/40 rounded-lg hover:bg-white hover:border-[3px] border-blue-500 transition-all duration-200'/></div>
        </div>

      </Swiper>
    </div >
  )
}

export default NewsSwiper
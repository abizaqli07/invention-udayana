import React from 'react'
import NewsSwiper from './NewsSwiper'

function News() {
  return (

    <div className='w-full h-full mb-40'>

      <div className='layout '>

        {/* =========== TITLE CONTAINER =========== */}
        <div className='title__container'>
          <div className='sub__title' data-aos='fade-up' data-aos-duration='500'>Berita Terbaru</div>
          <div className='title' data-aos='fade-up' data-aos-duration='500' data-aos-delay='100'>Dapatkan berita terupdate hari ini</div>
        </div>
        {/* =========== END OF TITLE CONTAINER =========== */}

        {/* =========== CONTAINER FOR NEWS CARD =========== */}
        <div className='hidden sm:grid grid-cols-[repeat(1,_300px)] mt-16 gap-8 justify-center items-center sm:grid-cols-[repeat(2,_300px)] lg:grid-cols-[repeat(3,_300px)] '>

          {/* =========== NEWS CARD =========== */}
          <div className='news__card w-[300px] h-auto min-h-[380px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>
            <div className='news__image news__image1 w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-100 ease-out delay-100'>
              <div className='text-h3 font-semibold mb-2'>Kota Terendam!</div>
              <div className='text-small font-light mb-4'>Apa yang 'Ditakuti' Menteri Keuangan Sri Mulyani Terjadi di RI.</div>
              <div className='flex justify-between items-center mt-2'>
                <a href="https://www.cnbcindonesia.com/news/20220914104412-4-371956/kota-terendam-apa-yang-ditakuti-sri-mulyani-terjadi-di-ri" data-aos='fade-up' target="_blank" rel="noopener noreferrer" className='news__button'>Selengkapnya</a>
              </div>
            </div>
          </div>
          {/* =========== END NEWS CARD =========== */}

          {/* =========== NEWS CARD =========== */}
          <div className='news__card w-[300px] h-auto min-h-[380px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>
            <div className='news__image news__image2 w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-100 ease-out delay-100'>
              <div className='text-h3 font-semibold mb-2'>Meneropong Nasib Pelaut</div>
              <div className='text-small font-light mb-4'>Harga BBM naik membuat nasib pelaut terombang ambing</div>
              <div className='flex justify-between items-center mt-2'>
                <a href="https://www.cnbcindonesia.com/opini/20220914095231-14-371927/meneropong-nasib-pelaut-indonesia-usai-harga-bbm-dinaikkan" data-aos='fade-up' target="_blank" rel="noopener noreferrer" className='news__button'>Selengkapnya</a>
              </div>
            </div>
          </div>
          {/* =========== END NEWS CARD =========== */}

          {/* =========== NEWS CARD =========== */}
          <div className='news__card w-[300px] h-auto min-h-[380px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>
            <div className='news__image news__image3 w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-100 ease-out delay-100'>
              <div className='text-h3 font-semibold mb-2'>Nelayan Dilarang Tangkap Ikan</div>
              <div className='text-small font-light mb-4'>Bencana bagi nelayan.</div>
              <div className='flex justify-between items-center mt-2'>
                <a href="https://www.cnbcindonesia.com/news/20220802171139-4-360559/oktober-nanti-nelayan-dilarang-tangkap-ikan-ini-sebabnya" data-aos='fade-up' target="_blank" rel="noopener noreferrer" className='news__button'>Selengkapnya</a>
              </div>
            </div>
          </div>
          {/* =========== END NEWS CARD =========== */}

          {/* =========== NEWS CARD =========== */}
          <div className='news__card w-[300px] h-auto min-h-[380px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>
            <div className='news__image news__image4 w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-100 ease-out delay-100' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
              <div className='text-h3 font-semibold mb-2'>700 Orang Diselamatkan!</div>
              <div className='text-small font-light mb-4'>Italia menyelamatkan hampir 700 imigran di pantai Calabria.</div>
              <div className='flex justify-between items-center mt-2'>
                <a href="https://www.cnbcindonesia.com/news/20220724194414-4-358120/gelombang-imigran-terjang-italia-700-orang-diselamatkan" data-aos='fade-up' target="_blank" rel="noopener noreferrer" className='news__button'>Selengkapnya</a>
              </div>
            </div>
          </div>
          {/* =========== END NEWS CARD =========== */}

          {/* =========== NEWS CARD =========== */}
          <div className='news__card w-[300px] h-auto min-h-[380px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>
            <div className='news__image news__image5 w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-100 ease-out delay-100' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
              <div className='text-h3 font-semibold mb-2'>Shinzo Abe</div>
              <div className='text-small font-light mb-4'>Kedigdayaan Maritim Jepang pada masa Shinzo Abe.</div>
              <div className='flex justify-between items-center mt-2'>
                <a href="https://www.cnbcindonesia.com/opini/20220718140349-14-356451/shinzo-abe-dan-kedigdayaan-maritim-jepang" data-aos='fade-up' target="_blank" rel="noopener noreferrer" className='news__button'>Selengkapnya</a>
              </div>
            </div>
          </div>
          {/* =========== END NEWS CARD =========== */}

          {/* =========== NEWS CARD =========== */}
          <div className='news__card w-[300px] h-auto min-h-[380px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>
            <div className='news__image news__image6 w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-100'></div>
            <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-100 ease-out delay-100' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
              <div className='text-h3 font-semibold mb-2'>Ancol milik siapa?</div>
              <div className='text-small font-light mb-4'>Hak milik antara Ciputra dengan Pemprov Jakarta.</div>
              <div className='flex justify-between items-center mt-2'>
                <a href="https://www.cnbcindonesia.com/opini/20220914095231-14-371927/meneropong-nasib-pelaut-indonesia-usai-harga-bbm-dinaikkan" data-aos='fade-up' target="_blank" rel="noopener noreferrer" className='news__button'>Selengkapnya</a>
              </div>
            </div>
          </div>
          {/* =========== END NEWS CARD =========== */}
          
        </div>
        {/* =========== END OF CONTAINER NEWS CARD =========== */}

        {/* SWIPER FOR NEWS CARD */}
        <div className='sm:hidden mt-16 400px h-full mb-16'>
          <NewsSwiper />
        </div>
      </div>
    </div>
    // =========== END OF CONTAINER FOR NEWS ===========
  )
}

export default News
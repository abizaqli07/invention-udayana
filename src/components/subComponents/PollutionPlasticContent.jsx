import React from 'react'
import Plankton from '../../assets/plankton.png'
import Nekton from '../../assets/nekton.png'
import NewsSwiper from './NewsSwiper'


function PollutionPlasticContent() {
  return (
    // ========== CONTAINER FOR MAIN CONTENT ==========
    <div className='layout pt-24 mb-64'>
      <div className='w-full h-full'>
        <div className='layout '>

          {/* ========== TITLE MAIN CONTENT ========== */}
          <div className='title__container'>
            <div className='sub__title'>Permasalahan di Lautan</div>
            <div className='title'>Dampak Besar Perubahan Iklim di Lautan</div>
          </div>
          {/* ========== END OF TITLE MAIN CONTENT ========== */}

          {/* ========== CONTAINER FOR CARD ========== */}
          <div className='hidden sm:grid grid-cols-[repeat(1,_300px)] mt-16 gap-8 justify-center items-center sm:grid-cols-[repeat(2,_300px)] lg:grid-cols-[repeat(3,_300px)] '>
            
            {/* ========== CARD ========== */}
            <div className='news__card w-[300px] h-auto min-h-[350px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
              <div className='news__image w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-500'>
              </div>
              <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-500'>
                <div className='text-h3 font-semibold text-center'>90%</div>
                <div className='text-small font-light text-center'>
                  Bumi menyerap panas yang dihasilkan oleh peningkatan emisi.
                </div>
              </div>
            </div>
            {/* ========== END OF CARD ========== */}

            {/* ========== CARD ========== */}
            <div className='news__card w-[300px] h-auto min-h-[350px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
              <div className='news__image w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-500'>
              </div>
              <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-500'>
                <div className='text-h3 font-semibold text-center'>680 Juta</div>
                <div className='text-small font-light text-center'>
                  Penurunan mata pencaharian masyarakat pesisir pantai
                </div>
              </div>
            </div>
            {/* ========== END OF CARD ========== */}

            {/* ========== CARD ========== */}
            <div className='news__card w-[300px] h-auto min-h-[350px] flex flex-col gap-4 relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out'>
              <div className='news__image w-[300px] h-[200px] transition-all duration-300 ease-in-out rounded-2xl  delay-500'>
              </div>
              <div className='news__content flex flex-col gap-1 absolute z-20 left-0 bottom-0 p-4 transition-all duration-200 ease-out delay-500'>
                <div className='text-h3 font-semibold text-center'>68 Juta</div>
                <div className='text-small font-light text-center'>
                  Penurunan di sektor perikanan dan akuakultur di seluruh dunia.
                </div>
              </div>
            </div>
            {/* ========== END OF CARD ========== */}

          </div>
          {/* END OF CONTAINER FOR CARD */}

          {/* ========== SWIPER JS FOR CARD ========== */}
          <div className='sm:hidden mt-16 400px h-full mb-16'>
            <NewsSwiper />
          </div>
          {/* ========== END SWIPER JS FOR CARD ========== */}

        </div>
      </div>

      {/* ========== QUOTE ========== */}
      <div className=' text-center population__content-title mx-auto'>
        Perubahan Iklim di Lautan menyebabkan dampak jangka panjang pada keanekaragaman hayati laut, dan kehidupan serta
        mata pencaharian masyarakat pesisir dan sekitarnya
      </div>
      {/* ========== END OF QUOTE ========== */}

      {/* ========== CONTAINER FOR DAMPAK PERUBAHAN IKLIM ========== */}
      <div className='w-full h-full mt-36'>

        {/* ========== DAMPAK ========== */}
        <div className='layout p-8 rounded-[1rem] flex flex-col gap-y-6 text-center justify-center items-center lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='flex flex-col lg:hidden'>
            <div className='text-h3 font-normal'>Konsekuensi Utama</div>
            <div className='text-h1 font-bold'>Dampak Besar Perubahan Iklim di Laut</div>
          </div>
          <div>
            <img className='w-full h-auto' src={ Nekton } />
          </div>
          <div className='text-justify text-normal flex flex-col gap-y-4'>
            <div className='text-h1 font-bold hidden lg:block text-left'>Kenaikan Permukaan Laut</div>
            <div className='text-small'>
              Kenaikan permukaan laut telah dipercepat dalam beberapa dekade terakhir karena meningkatnya hilangnya es di
              wilayah kutub dunia. Data terbaru dari <a href="https://library.wmo.int/doc_num.php?explnum_id=11178"
                target="_blank" rel="noopener noreferrer">Organisasi Meteorologi Dunia</a> menunjukkan bahwa permukaan laut
              rata-rata global mencapai rekor tertinggi baru pada tahun 2021, naik rata-rata 4,5 milimeter per tahun selama
              periode 2013 hingga 2021.

              Bersamaan dengan meningkatnya siklon tropis, kenaikan permukaan laut telah memperburuk kejadian ekstrim
              seperti gelombang badai yang mematikan dan bahaya pesisir seperti banjir, erosi dan tanah longsor, yang
              sekarang diproyeksikan terjadi setidaknya sekali setahun di banyak lokasi. Peristiwa semacam itu terjadi
              sekali per abad secara historis.

              Selain itu, <a href="https://www.ipcc.ch/srocc/chapter/chapter-4-sea-level-rise-and-implications-for-low-lying-islands-coasts-and-communities/"
                target="_blank" rel="noopener noreferrer">Panel Antarpemerintah tentang Perubahan Iklim (IPCC)</a>
              mengatakan bahwa beberapa wilayah, seperti Pasifik Tropis barat, Pasifik Barat Daya, Pasifik Utara, Samudra
              Hindia Barat Daya, dan Atlantik Selatan, menghadapi permukaan laut yang jauh lebih cepat. bangkit.
            </div>
            <div className='text-small'>Maecenas eget condimentum velit, sit amet feugiat lectus. Curabitur vel bibendum
              lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum.</div>
          </div>
        </div>
        {/* ========== END OF DAMPAK ========== */}

        {/* ========== DAMPAK ========== */}
        <div className='layout p-8 rounded-[1rem] flex flex-col gap-y-6 text-center justify-center items-center lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='flex flex-col lg:hidden'>
            <div className='text-h3 font-normal'>Konsekuensi Utama</div>
            <div className='text-h1 font-bold'>Dampak </div>
          </div>
          <div className='text-justify text-normal flex flex-col gap-y-4'>
            <div className='text-h1 font-bold hidden lg:block text-left'>Gelombang Panas Laut</div>
            <div className='text-small'>
              Gelombang panas laut telah berlipat ganda frekuensinya, dan menjadi lebih tahan lama, lebih intens dan luas.
              IPCC mengatakan bahwa pengaruh manusia telah menjadi pendorong utama peningkatan panas laut yang diamati sejak
              tahun 1970-an.

              Sebagian besar gelombang panas terjadi antara tahun 2006 dan 2015, menyebabkan pemutihan karang yang meluas
              dan degradasi terumbu karang. Pada tahun 2021, hampir <a
                href="https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf" target="_blank"
                rel="noopener noreferrer">60 persen permukaan laut dunia</a> mengalami setidaknya satu gelombang panas laut.
              Program Lingkungan PBB mengatakan bahwa setiap terumbu karang dunia dapat memutih pada akhir abad ini jika air
              terus menghangat.

              Pemutihan karang terjadi karena terumbu kehilangan ganggang mikroskopis yang menopang kehidupannya saat berada
              di bawah tekanan. Peristiwa pemutihan global terakhir dimulai pada tahun 2014 dan berlanjut hingga tahun 2017
              - menyebar ke seluruh samudera Pasifik, India, dan Atlantik.
            </div>
          </div>
          <div><img className='w-full h-auto' src={ Nekton } /></div>

        </div>
        {/* ========== END OF DAMPAK ========== */}

        {/* ========== DAMPAK ========== */}
        <div className='layout p-8 rounded-[1rem] flex flex-col gap-y-6 text-center justify-center items-center lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='flex flex-col lg:hidden'>
            <div className='text-h3 font-normal'>Konsekuensi Utama</div>
            <div className='text-h1 font-bold'>Dampak Besar Perubahan Iklim di Laut</div>
          </div>
          <div><img className='w-full h-auto' src={ Nekton } /></div>
          <div className='text-justify text-normal flex flex-col gap-y-4'>
            <div className='text-h1 font-bold hidden lg:block text-left'>Hilangnya keanekaragaman hayati laut</div>
            <div className='text-small'>
              Meningkatnya suhu meningkatkan risiko hilangnya ekosistem laut dan pesisir yang tidak dapat dipulihkan . Saat
              ini, perubahan luas telah diamati, termasuk kerusakan terumbu karang dan bakau yang mendukung kehidupan laut,
              dan migrasi spesies ke lintang dan ketinggian yang lebih tinggi di mana airnya bisa lebih dingin.

              Perkiraan terbaru dari Organisasi Pendidikan, Ilmu Pengetahuan dan Kebudayaan PBB memperingatkan bahwa lebih
              dari setengah spesies laut dunia mungkin berada di ambang kepunahan pada tahun 2100. Pada peningkatan suhu
              1,1??C hari ini, diperkirakan 60 persen ekosistem laut dunia telah terdegradasi atau digunakan secara tidak
              berkelanjutan. Pemanasan 1,5??C mengancam akan menghancurkan 70 hingga 90 persen terumbu karang, dan kenaikan
              2??C berarti kerugian hampir 100 persen - titik tanpa tujuan.
            </div>
          </div>
        </div>
        {/* ========== END OF DAMPAK ========== */}

      </div>
      {/* ========== END OF CONTAINER FOR DAMPAK IKLIM ========== */}

    </div>
    // END OF CONTAINER MAIN CONTENT
  )
}

export default PollutionPlasticContent
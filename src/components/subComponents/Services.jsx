import React from 'react'
import Biota from '../../assets/biota.png'
import Ekosistem from '../../assets/ekosistem.png'
import Iklim from '../../assets/iklim.png'
import Sampah from '../../assets/sampah.png'

function Services() {
  return (

    // ========== CONTAINER FOR SERVICES ==========
    <div className='w-full h-full'>
      <div className='layout overflow-x-hidden'>

        {/* ========== TITLE CONTAINER ========== */}
        <div className='title__container'>
          <div className='sub__title' data-aos='fade-up' data-aos-duration='500'>Fitur Layanan Kami</div>
          <div className='title' data-aos='fade-up' data-aos-duration='500' data-aos-delay='100'>Kami memberikan pengalaman yang terbaik</div>
        </div>
        {/* ========== END OF TITLE CONTAINER ========== */}

        {/* ========== CONTAINER FOR SERVICES ========== */}
        <div className='grid grid-cols-1 mt-16 gap-8 lg:grid-cols-2'>

          {/* ========== SERVICE CARD ========== */}
          <div className='service__card' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='500'>
            <div className='h-fit w-fit'><img className='w-[80px] h-[80px] sm:w-[340px] object-contain' src={Biota}/></div>
            <div className='flex flex-col gap-2'>
              <div className='text-h3 font-bold'>Biota Laut</div>
              <div className='text-small'>Biota laut dapat memberikan kontribusi besar untuk keberlangsungan hidup manusia, karena dapat menjadi sumber makanan, sumber obat-obatan, membuat daya tarik wisatawan, dan penghasil gizi yang baik bagi manusia.</div>
            </div>
          </div>
          {/* ========== END OF SERVICE CARD ========== */}

          {/* ========== SERVICE CARD ========== */}
          <div className='service__card' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='500'>
            <div className='h-fit w-fit'><img className='w-[80px] h-[80px] sm:w-[340px] object-contain' src={Ekosistem}/></div>
            <div className='flex flex-col gap-2'>
              <div className='text-h3 font-bold'>Ekosistem Laut</div>
              <div className='text-small'>Menjaga dan melestarikan ekosistem laut dapat memberikan banyak manfaat bagi kehidupan, seperti sebagai tempat penelitian, sebagai sumber bahan makanan dan minuman, serta menjaga Keseimbangan Iklim di Bumi.</div>
              
            </div>
          </div>
          {/* ========== END OF SERVICE CARD ========== */}

          {/* ========== SERVICE CARD ========== */}
          <div className='service__card' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='1000'>
            <div className='h-fit w-fit'><img className='w-[80px] h-[80px] sm:w-[340px] object-contain' src={Iklim}/></div>
            <div className='flex flex-col gap-2'>
              <div className='text-h3 font-bold'>Perubahan Iklim</div>
              <div className='text-small'>Menyebabkan pergeseran rentang geografis serta pola migrasi spesies daratan dan laut. Pemanasan dan pengasaman laut menimbulkan risiko besar terhadap ekosistem laut, terutama ekosistem di wilayah kutub dan ekosistem terumbu karang.</div>
            </div>
          </div>
          {/* ========== END OF SERVICE CARD ========== */}

          {/* ========== SERVICE CARD ========== */}
          <div className='service__card' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='1000'>
            <div className='h-fit w-fit'><img className='w-[80px] h-[80px] sm:w-[340px] object-contain' src={Sampah}/></div>
            <div className='flex flex-col gap-2'>
              <div className='text-h3 font-bold'>Polusi dan Sampah Plastik</div>
              <div className='text-small'>Sampah plastik di laut dapat menyebabkan berbagai dampak yang serius seperti merusak ekosistem laut, menganggu rantai makanan biota laut, meningkatnya pencemaran dan polusi di lautan, merusak ikan dan lainnya yang dapat di konsumsi oleh manusia.</div>
            </div>
          </div>
          {/* ========== END OF SERVICE CARD ========== */}

        </div>
        {/* ========== END CONTAINER FOR SERVICES ========== */}

      </div>
    </div>
    // ========== END OF CONTAINER FOR SERVICES ==========
  )
}

export default Services;
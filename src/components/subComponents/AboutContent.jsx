import React from 'react'
import AboutChard from '../../assets/aboutChard.png'
import About from '../../assets/about.jpg'

function AboutContent() {
  return (
    <div className='w-full pt-32 mb-32'>
      <div className='layout'>
        <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_.9fr] sm:gap-6'>
          <div className='flex flex-col gap-4 text-center md:text-left md:gap-2'>
          <div className='sub__title mt-12' data-aos='fade-right' data-aos-duration='500'>Ikut serta dengan kami</div>
          <div className='title' data-aos='fade-right' data-aos-duration='500' data-aos-delay='100'>Tunjukkan aksimu dalam menjaga laut ini</div>
            <div className='text-smallest font-light text-justify lg:text-small mt-6' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='500'>
              Setiap tahun, jutaan ton plastik masuk ke lautan, terutama dari sungai. Oleh sebab itu Segara hadir, untuk bersama-sama menjaga kesehatan lautan dari ancaman yang akan datang. Kami mendokumentasikan masalah dan mengembangkan solusi, mempersenjatai orang dengan pengetahuan, dan alat sehingga mereka dapat membuat perbedaan.
              Dengan seluruh elemen masyarakat, kami pergi ke Perserikatan Bangsa-Bangsa dan badan-badan global lainnya untuk melakukan perubahan Internasional. Kami menghadiri pertemuan-pertemuan ini sehingga kami dapat menawarkan rencana yang kreatif, layak secara ekonomi, berkelanjutan, dan ramah lingkungan kepada para pembuat keputusan.
            </div>
          </div>
          <div className='w-full flex justify-center items-center md:items-start' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='500'><img className='w-full h-auto max-w-[600px]' src={About} /></div>
        </div>
        <div className='mt-36 grid grid-cols-1 gap-8 md:grid-cols-[.9fr_1.1fr] sm:gap-6'>
          <div className='w-full flex justify-center items-center md:items-start' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='500'><img className='w-full h-auto max-w-[600px]' src={AboutChard} /></div>
          <div className='flex flex-col gap-4 text-center md:text-left md:gap-1'>
            <div className='text-normal font-semibold text-blue-500 mt-12' data-aos='fade-left' data-aos-duration='500'>Tujuan Kami</div>
            <div className='text-h3 lg:text-h1 font-semibold' data-aos='fade-left' data-aos-duration='500' data-aos-delay='100'>Manfaat yang kami berikan</div>
            <div className='text-smallest font-light text-justify lg:text-small mt-6' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='500'>Penelitian menunjukkan sebagian besar plastik di pilin (berdasarkan massa) terdiri dari puing-puing yang lebih besar. Dengan melepas plastik saat sebagian besar masih besar, kami mencegahnya terurai menjadi mikroplastik yang berbahaya.</div>
            <div className='text-smallest font-light text-justify lg:text-small mt-6' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='750'>Tujuan kami adalah menghilangkan 90% plastik laut yang mengapung pada tahun 2040. Kami berencana melakukan ini dengan membersihkan plastik warisan – plastik yang sudah mengambang di lautan – dan dengan menghentikan sumber plastik yang mengalir ke lautan kita.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
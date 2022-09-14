import React from 'react'
import AboutChard from '../../assets/aboutChard.png'

function AboutContent() {
  return (
    <div className='w-full pt-32 mb-32'>
      <div className='layout'>

        <div className='flex flex-col gap-2 text-center justify-center items-center mt-24 mb-8'>
          <div className='sub__title'>Ikut serta dengan kami</div>
          <div className='title'>Tunjukkan aksimu dalam menjaga bumi ini</div>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_.9fr] sm:gap-6'>
          <div className='flex flex-col gap-4 text-center md:text-left md:gap-2'>
            <div className='text-smallest font-light text-justify lg:text-small'>Setiap tahun, jutaan ton plastik masuk ke lautan, terutama dari sungai. Dan plastik yang mengapung di lautan tidak akan hilang dengan sendirinya. Untuk mengatasi masalah secara efektif, kita perlu mematikan keran dan mengepel lantai secara bersamaan. The Ocean Cleanup, sebuah organisasi nirlaba, sedang mengembangkan dan menskalakan teknologi untuk membersihkan lautan plastik di dunia. Tujuan kami adalah untuk membuat diri kita keluar dari bisnis setelah lautan bersih.</div>
          </div>
          <div className='w-full flex justify-center items-center md:items-start'><img className='w-full h-auto max-w-[400px]' src={AboutChard} /></div>
        </div>
        {/* <div className='flex flex-col md:flex-row gap-8 justify-center items-center'>

          <div className='text-small text-justify flex flex-col gap-3'>
            <div>Setiap tahun, jutaan ton plastik masuk ke lautan, terutama dari sungai. Dan plastik yang mengapung di lautan tidak akan hilang dengan sendirinya. Untuk mengatasi masalah secara efektif, kita perlu mematikan keran dan mengepel lantai secara bersamaan. The Ocean Cleanup, sebuah organisasi nirlaba, sedang mengembangkan dan menskalakan teknologi untuk membersihkan lautan plastik di dunia. Tujuan kami adalah untuk membuat diri kita keluar dari bisnis setelah lautan bersih.</div>
            <div>To succeed in its mission, The Ocean Cleanup’s management team relies on a combination of innovative talent and high-level industry experience. The organization also benefits from the invaluable support and guidance of its advisory boards.</div>
            <div>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.</div>
          </div>

        </div> */}

        <div className='mt-36 grid grid-cols-1 gap-8 md:grid-cols-[.9fr_1.1fr] sm:gap-6'>
          <div className='w-full flex justify-center items-center md:items-start'><img className='w-full h-auto max-w-[400px]' src={AboutChard} /></div>
          <div className='flex flex-col gap-4 text-center md:text-left md:gap-1'>
            <div className='text-normal font-semibold text-blue-500'>Tujuan Kami</div>
            <div className='text-h3 lg:text-h1 font-semibold'>Manfaat yang kami berikan</div>
            <div className='text-smallest font-light text-justify lg:text-small'>Penelitian menunjukkan sebagian besar plastik di pilin (berdasarkan massa) terdiri dari puing-puing yang lebih besar. Dengan melepas plastik saat sebagian besar masih besar, kami mencegahnya terurai menjadi mikroplastik yang berbahaya.</div>
            <div className='text-smallest font-light text-justify lg:text-small'>Tujuan kami adalah menghilangkan 90% plastik laut yang mengapung pada tahun 2040. Kami berencana melakukan ini dengan membersihkan plastik warisan – plastik yang sudah mengambang di lautan – dan dengan menghentikan sumber plastik yang mengalir ke lautan kita.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
import React from 'react'
import Plankton from '../../assets/plankton.png'
import Nekton from '../../assets/nekton.png'
import Bentos from '../../assets/bentos.png'

function PopulationContent() {
  return (
    <div className='layout pt-24 mb-64'>
      <div className=' text-center text-normal font-light w-[70%] mx-auto'>Biota Laut adalah semua makhluk hidup yang ada di laut baik hewan maupun tumbuhan atau karang.
        Secara umum biota laut dibagi menjadi tiga kelompok besar yaitu plankton, nekton dan bentos.
        Pembagain ini tidak ada kaitannya dengan klasifikasi ilmiah, ukuran, hewan atau tumbuhan,
        tetapi berdasarkan pada kebiasaan hidup secara umum,
        seperti gerak berjalan, pola hidup dan persebaran menurut ekologi.</div>
      <div className='grid grid-cols-[max-content_1.7fr] md:grid-cols-[.8fr_max-content_.8fr] grid-rows-[max-content_1.7fr_max-content_1.7fr_max-content_1.7fr] mt-20 gap-4 md:gap-8'>
        {/* ========== Plankton =========== */}
        <div className='self-center p-2 md:p-3 border-2 border-yellow-500 rounded-full w-[70px] h-[70px] md:w-[80px] md:h-[80px] bg-white/50 md:col-start-2'><div className='p-2 rounded-full bg-yellow-500 text-big font-bold text-center'>1</div></div>
        <div className='population__content-title'>Plankton</div>
        <div className='h-full w-[3px] bg-gradient-to-b from-yellow-500 to-yellow-600 mx-auto'></div>
        <div className='flex flex-col text-justify gap-2 text-normal font-light justify-start items-center md:col-start-3 md:row-start-2'>
          <div>Plankton adalah salah satu organisme hanyut apapun yang hidup dalam zona pelagik (bagian atas) samudra, dan badan air tawar.</div>
          <div className='font-semibold self-start'>Jenis Plankton</div>
          <div>Fitoplankton adalah jenis plankton yang sering disebut mikroalga mirip dengan tanaman terestrial karena memiliki klorofil dan membutuhkan sinar matahari untuk hidup dan berkembang. Fitoplakton dapat digunakan sebagai indikator kontaminasi dan kualitas air.</div>
          <div>Zooplankton adalah jenis plankton mikroskopis yang hidup pada tubuh air dan mengandalkan arus air sebagai transportasinya. Zooplankton adalah makanan penting untuk ikan dan dapat mengevaluasi pencemaran air tempat mereka tinggal.</div>
          <div className='mt-12 md:mt-0 md:hidden'><img className='max-w-[270px] max-h-[270px] xsm:max-w-[400px] xsm:max-h-[400px] md:max-w-[500px] md:max-h-[500px]' src={Plankton} /></div>
        </div>
        <div className='mt-12 md:mt-0 hidden md:block col-start-1 row-start-2'><img className='max-w-[270px] max-h-[270px] md:max-w-[320px] md:max-h-[320px] lg:max-w-[430px] lg:max-h-[430px] self-center justify-self-center' src={Plankton} /></div>

        {/* ========== Nekton =========== */}
        <div className='self-center p-2 md:p-3 border-2 border-yellow-500 rounded-full w-[70px] h-[70px] md:w-[80px] md:h-[80px] bg-white/50 md:col-start-2 md:row-start-3'><div className='p-2 rounded-full bg-yellow-600 text-big font-bold text-center'>2</div></div>
        <div className='population__content-title md:col-start-1 md:row-start-3'>Nekton</div>
        <div className='h-full w-[3px] bg-gradient-to-b from-yellow-600 to-orange-600 mx-auto md:col-start-2 md:row-start-4'></div>
        <div className='flex flex-col text-justify gap-2 text-normal font-light justify-start items-center md:col-start-1 md:row-start-4'>
          <div>ekton adalah kelompok organisme yang tinggal di dalam kolom air, baik di perairan tawar maupun laut. Nekton terdiri dari organisme yang mempunyai kemampuan untuk bergerak sehingga mereka tidak bergantung pada arus laut yang kuat. Salah satu karateristik nekton adalah kemampuannya bergerak dengan cepat atau capability of fast motion.</div>
          <div className='font-semibold self-start'>Sifat-sifat Nekton</div>
          <div>1. Organisme yang dapat bergerak atau berenang dengan keinginan sendiri.<br />
            2. Organisme konsumen di daerah pelagic. <br />
            3. Aktif berenang.<br />
            4. Umumnya invertebrata, namun vertebrata juga ada seperti pisces dan mamalia laut.<br />
            5. Memiliki masa hidup lebih panjang daripada plankton (invertebrata: 1 tahun, ikan: 5 – 10 tahun).</div>
          <div className='mt-12 md:mt-0 md:hidden'><img className='max-w-[270px] max-h-[270px] xsm:max-w-[400px] xsm:max-h-[400px] md:max-w-[500px] md:max-h-[500px]' src={Plankton} /></div>
        </div>
        <div className='mt-12 md:mt-0 hidden md:block col-start-3 row-start-4'><img className='max-w-[270px] max-h-[270px] md:max-w-[320px] md:max-h-[320px] lg:max-w-[430px] lg:max-h-[430px] self-center justify-self-center' src={Nekton} /></div>

        {/* ========== Bentos =========== */}
        <div className='self-center p-2 md:p-3 border-2 border-yellow-500 rounded-full w-[70px] h-[70px] md:w-[80px] md:h-[80px] bg-white/50 md:col-start-2 md:rowstart-5'><div className='p-2 rounded-full bg-orange-600 text-big font-bold text-center'>3</div></div>
        <div className='population__content-title'>Bentos</div>
        <div></div>
        <div className='flex flex-col text-justify gap-2 text-normal font-light justify-start items-center md:col-start-3 md:row-start-6'>
          <div>Bentos merupakan hewan dan tumbuh-tumbuhan yang hidup di atas atau di bawah dasar laut atau pada wilayah yang disebut zona bentik (benthic zone) maupun dasar daerah tepian. Bentos berbeda dengan plankton yang hidup mengambang bebas di air. Beberapa organisme bentik bahkan belum sepenuhnya dipahami sehingga penelitian terus berlangsung untuk mengungkap rahasianya.</div>
          <div className='font-semibold self-start'>Hewan Jenis Bentos</div>
          <div>Beberapa hewan jenis benthos adalah cacing laut (terutama annelida polychaeta), lamun (sejenis tanaman berbunga), kerang, tiram, teripang (sejenis echinoderma), bintang ular, anemon laut, bintang laut, berbagai moluska, serta berbagai krustasea.</div>
          <div>Selain bentos makroskopik, terdapat pula bentos mikroskopis yang juga melimpah, seperti beruang air (tardigrade), nematoda (hewan multiseluler yang paling berlimpah di bumi), krustasea kecil seperti copepoda, dan lain sebagainya. Karena cahaya matahari cenderung tidak sampai di dasar laut, dan hampir tidak terdapat cahaya pada kedalaman lebih dari 200 m, makanan utama bentos berasal dari hewan dan tumbuhan mati yang jatuh dari atas.</div>
          <div className='mt-12 md:mt-0 md:hidden'><img className='max-w-[270px] max-h-[270px] xsm:max-w-[400px] xsm:max-h-[400px] md:max-w-[500px] md:max-h-[500px]' src={Bentos} /></div>
        </div>
        <div className='mt-12 md:mt-0 hidden md:block col-start-1 row-start-6'><img className='max-w-[270px] max-h-[270px] md:max-w-[320px] md:max-h-[320px] lg:max-w-[430px] lg:max-h-[430px] self-center justify-self-center' src={Bentos} /></div>
      </div>
    </div>
  )
}

export default PopulationContent
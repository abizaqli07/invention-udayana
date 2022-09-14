import React from 'react'
import ServiceImage from '../../assets/takeActionService.png'

function TakeActionService() {
  return (
    <div className='pt-36 w-full'>
      <div className='layout'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-[.9fr_1.1fr] sm:gap-6'>
          <div className='w-full flex justify-center items-center md:items-start'><img className='w-full h-auto max-w-[400px]' src={ServiceImage}/></div>
          <div className='flex flex-col gap-4 text-center md:text-left md:gap-2'>
            <div className='text-normal font-semibold text-blue-500'>Misi Kami</div>
            <div className='text-h3 lg:text-h1 font-semibold'>Gerakan global untuk menjaga kelestarian ekosistem laut</div>
            <div className='text-smallest font-light text-justify lg:text-small'>Clean4Change telah terlibat dengan beragam audiens di seluruh dunia dan memotivasi mereka untuk mengadopsi perilaku pembersihan. Dan hingga saat ini, kami secara kolektif telah mengumpulkan lebih dari 1,5 juta keping sampah di seluruh dunia dan terus bertambah.</div>
            <div className='text-smallest font-light text-justify lg:text-small'>Kita tahu bahwa keterlibatan karyawan dan warga negara dimungkinkan jika semua orang percaya bahwa menjaga kebersihan lingkungan kita adalah tanggung jawab bersama antara pemerintah, otoritas lokal, organisasi, dan individu.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeActionService
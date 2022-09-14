import React from 'react'

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillCaretRight
} from "react-icons/ai";

function ConfirmDonation(props) {
  return (
    <div className='w-full max-w-[1200px] grid grid-cols-1 gap-0 lg:grid-cols-[1.3fr_.7fr] drop-shadow-[0px_10px_10px_rgba(0,0,0,0.40)] lg:min-h-[670px]'>
      <div className='bg-white p-12 gap-12 flex flex-col rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none'>

        <div className='flex text-small font-light text-slate-600 items-start border-b-[1px] border-blue-500 w-fit'>
          <div className='donation__link-active ' onClick={props.showPersonal}>Data Pribadi</div>

          <div className='donation__link-active pl-6' onClick={props.showDonation}>Donasi</div>

          <div className='donation__link-active pl-6' >Konfimasi Data & Donasi</div>
        </div>

        <div className='min-w-[350px] flex flex-col p-12 bg-slate-100 rounded-xl max-w-sm self-center justify-self-center lg:self-start lg:justify-self-start'>
          <div className='text-h3 font-bold mb-12'>Ringkasan Donasi</div>
          <div className='flex flex-col gap-1 text-small font-light pb-4 border-b-[1px] border-slate-800'>

            <div className='flex justify-between'>
              <div>Besaran Donasi</div>
              <div>Rp. 1.000.000</div>
            </div>
            <div className='flex justify-between'>
              <div>Pajak</div>
              <div>Rp. 4.500</div>
            </div>

          </div>
          <div className='flex justify-between text-small font-bold pt-4'>
            <div>Total Donasi</div>
            <div>Rp. 995.500</div>
          </div>
          <div className='mt-16 gradient-primary py-2 px-4 rounded-full text-white font-semibold text-center cursor-pointer'>Konfirmasi Pembayaran</div>
        </div>

      </div>

      <div className='bg-gradient-to-br from-cyan-400 to-blue-700 rounded-b-[2rem] p-12 text-white flex flex-col justify-between lg:rounded-r-[2rem] lg:rounded-bl-none lg:max-w-[350px]'>
        <div className='flex flex-col justify-self-start self-start'>
          <div className='text-big font-extralight'>Kami senang mendengar <span className='font-semibold'>Anda</span></div>
          <div className='text-small font-extralight pt-8'>Segara@gmail.org</div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='text-small font-extralight'>Ikuti kami</div>
          <div className='flex gap-2 text-h1 lg:text-h2 text-white/60'>
            <AiFillInstagram className='cursor-pointer' />
            <AiFillFacebook className='cursor-pointer' />
            <AiFillTwitterSquare className='cursor-pointer' />
            <AiFillLinkedin className='cursor-pointer' />
            <AiFillYoutube className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDonation
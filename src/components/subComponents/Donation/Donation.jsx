import React from 'react'

import Payment1 from '../../../assets/payment1.png'
import Payment2 from '../../../assets/payment2.png'
import Payment3 from '../../../assets/payment3.png'
import Payment4 from '../../../assets/payment4.png'
import Payment5 from '../../../assets/payment5.png'

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillCaretRight
} from "react-icons/ai";

function Donation(props) {
  return (
    <div className='w-full max-w-[1200px] grid grid-cols-1 gap-0 lg:grid-cols-[1.3fr_.7fr] drop-shadow-[0px_10px_10px_rgba(0,0,0,0.40)] lg:min-h-[670px]'>
      <div className='bg-white p-12 gap-12 flex flex-col rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none'>
        <div className='flex text-small font-light text-slate-600 items-start border-b-[1px] border-blue-500 w-fit'>
          <div className='donation__link-active' onClick={props.showPersonal}>Data Pribadi</div>

          <div className='donation__link-active pl-6'>Donasi</div>

          <div className='donation__link' onClick={props.showConfirm}>Konfimasi Data & Donasi</div>
        </div>

        <form className='flex flex-col gap-4'>
          <div className='text-h2 font-bold'>Donasi</div>

          <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
            <div className='donation__input'>
              <label for="donation">Besaran Donasi</label>
              <input className='donation__input-box' type="text" id='donation'></input>
            </div>
            <div className='donation__input'>
              <label for="noreceiver">No. Tujuan Donasi</label>
              <input className='donation__input-box disabled:opacity-75' type="text" id='noreceiver' value="3625 4193 0474 118 12" disabled></input>
            </div>
          </div>

          <div className='flex flex-col gap-6 mt-6'>
            <div className='text-h2 font-bold'>Metode Pembayaran</div>

            <div className='flex gap-3 flex-wrap'>
              <div className='px-4 py-2 bg-slate-100 rounded-lg flex items-center cursor-pointer hover:bg-slate-300'><img className='w-[40px] h-auto' src={Payment1} /></div>
              <div className='px-4 py-2 bg-slate-100 rounded-lg flex items-center cursor-pointer hover:bg-slate-300'><img className='w-[40px] h-auto' src={Payment2} /></div>
              <div className='px-4 py-2 bg-slate-100 rounded-lg flex items-center cursor-pointer hover:bg-slate-300'><img className='w-[40px] h-auto' src={Payment3} /></div>
              <div className='px-4 py-2 bg-slate-100 rounded-lg flex items-center cursor-pointer hover:bg-slate-300'><img className='w-[40px] h-auto' src={Payment4} /></div>
              <div className='px-4 py-2 bg-slate-100 rounded-lg flex items-center cursor-pointer hover:bg-slate-300'><img className='w-[40px] h-auto' src={Payment5} /></div>
              <div className='px-4 py-2 bg-slate-100 rounded-lg flex items-center cursor-pointer hover:bg-slate-300 font-semibold'>Lainnya</div>
            </div>

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
              <div className='donation__input'>
                <label for="sender">Nama Pengirim</label>
                <input className='donation__input-box' type="text" id='sender'></input>
              </div>
              <div className='donation__input'>
                <label for="nocard">No. Kartu</label>
                <input className='donation__input-box' type="text" id='nocard'></input>
              </div>
            </div>

            <div className='donation__checkbox'>
              <input className='donation__input-checkbox' type="checkbox" id="option3" name="option3" value="Donasi" />
              <label for="option3">Saya mengetujui syarat & ketentuan</label>
            </div>

          </div>
        </form>

        <div className='flex gap-4 justify-end'>
          <div className='py-2 px-4 gradient-primary cursor-pointer rounded-full text-normal font-semibold text-white' onClick={props.showConfirm}>Selanjutnya</div>
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

export default Donation
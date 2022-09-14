import React from 'react'

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillCaretRight
} from "react-icons/ai";

function PersonalData(props) {
  return (
    <div className='w-full max-w-[1200px] min-w-[670px] grid grid-cols-1 gap-0 lg:grid-cols-[1.3fr_.7fr] drop-shadow-[0px_10px_10px_rgba(0,0,0,0.40)] lg:min-h-[670px]'>
      <div className='bg-white p-12 gap-12 flex flex-col rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none'>
        <div className='flex text-small font-light text-slate-600 items-start border-b-[1px] border-blue-500 w-fit'>
          <div className='donation__link-active'>Data Pribadi</div>

          <div className='donation__link' onClick={props.showDonation}>Donasi</div>

          <div className='donation__link' onClick={props.showConfirm}>Konfimasi Data & Donasi</div>
        </div>

        <form className='flex flex-col gap-4'>
          <div className='text-h2 font-bold'>Data Diri Peserta</div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-2'>
              <div className='donation__input'>
                <label for="nama">Nama</label>
                <input className='donation__input-box' type="text" id='nama'></input>
              </div>
              <div className='donation__input'>
                <label for="nohp">No. HP</label>
                <input className='donation__input-box' type="text" id='nohp'></input>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <div className='donation__input'>
                <label for="email">Email</label>
                <input className='donation__input-box' type="text" id='email'></input>
              </div>
              <div className='donation__input'>
                <label for="alamat">Alamat</label>
                <input className='donation__input-box' type="text" id='alamat'></input>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4 mt-4'>
            <div className='text-h2 font-bold'>Aksi yang diikuti</div>
            <div className='flex flex-col gap-2'>
              <div className='donation__checkbox'>
                <input className='donation__input-checkbox' type="checkbox" id="option1" name="option1" value="Membersihkan Pantai/laut" />
                <label for="option1">Membersihkan Pantai/laut</label>
              </div>
              <div className='donation__checkbox'>
                <input className='donation__input-checkbox' type="checkbox" id="option2" name="option2" value="Budidaya Biota Laut" />
                <label for="option2">Budidaya Biota Laut</label>
              </div>
              <div className='donation__checkbox'>
                <input className='donation__input-checkbox' type="checkbox" id="option3" name="option3" value="Donasi" />
                <label for="option3">Donasi</label>
              </div>

            </div>
          </div>
        </form>

        <div className='flex gap-4 justify-end'>
          <div className='py-2 px-4 gradient-primary cursor-pointer rounded-full text-normal font-semibold text-white' onClick={props.showDonation}>Selanjutnya</div>
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

export default PersonalData
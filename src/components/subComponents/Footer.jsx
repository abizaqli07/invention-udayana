import React from 'react'
import Logo from '../../assets/logo.png'

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube
} from "react-icons/ai";


function Footer() {
  return (
    <div className='w-full h-full mb-4'>
      <div className='layout'>
        <div className='flex flex-col gap-8 lg:flex-row justify-between items-center lg:items-start'>
          <div className='flex flex-col gap-4 justify-center text-center items-center mb-6 lg:text-left lg:justify-start lg:items-start'>
            <div className='flex gap-2 items-center text-big font-bold'><img src={Logo} />Logo</div>
            <div className='text-normal'>Lorem ipsum itterator dolor sit amet, <br/> consectetur adipiscing elit.</div>
          </div>
          <div className='flex flex-col gap-y-8 gap-x-12 xsm:flex-row xsm:flex-wrap justify-center items-center xsm:items-start lg:flex-nowrap'>
            <div className='footer__content'>
              <div className='footer__title'>Tautan</div>
              <div className='footer__link'>Tentang Kami</div>
              <div className='footer__link'>Ocean Life</div>
              <div className='footer__link'>Ocean Problem</div>
            </div>
            <div className='footer__content'>
              <div className='footer__title'>Bantu</div>
              <div className='footer__link'>Donasi</div>
              <div className='footer__link'>Take Action</div>
              <div className='footer__link'>Kontak</div>
            </div>
            <div className='footer__content'>
              <div className='footer__title'>Hal Hukum</div>
              <div className='footer__link'>Pemberitahuan Privasi dan Cookie</div>
              <div className='footer__link'>Syarat dan Ketentuan</div>
              <div className='footer__link'>Sangkalan</div>
              <div className='footer__link'>Kode Etik</div>
            </div>
          </div>
        </div>
        <div className='flex gap-2 justify-center mt-6 text-h2 lg:justify-start lg:mt-0'>
          <AiFillInstagram />
          <AiFillFacebook />
          <AiFillTwitterSquare />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className='mt-16 text-small text-center'>&#169; TheDeadliners. All right reserved</div>
      </div>
    </div>
  )
}

export default Footer;
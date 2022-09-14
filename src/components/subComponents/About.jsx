import React from 'react'
import AboutImage from '../../assets/about.png'
import { NavLink } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {
  return (
    // =========== CONTAINER FOR ABOUT ===========
    <div className='w-full h-full mt-36'>
      <div className='layout gradient-primary-alt p-12 rounded-[1rem] text-white flex flex-col gap-y-6 text-center justify-center items-center lg:grid lg:grid-cols-2 lg:gap-8 drop-shadow-[0px_30px_30px_rgba(0,0,0,0.35)] shadow-[#161616]' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
        
        {/* =========== CONTAINER FOR SMALL DEVICE =========== */}
        <div className='flex flex-col lg:hidden'>
          <div className='text-h3 font-normal'>Tentang Sagara</div>
          <div className='text-h1 font-bold'>Apa itu Sagara</div>
        </div>
        {/* =========== END OF SMALL DEVICE =========== */}

        {/* =========== ABOUT IMAGE =========== */}
        <div data-aos='zoom-in-up' data-aos-duration='1000' data-aos-delay='1000'><img className='w-full h-auto p-2 md:p-12' src={AboutImage} /></div>
        {/* =========== END OF ABOUT IMAGE =========== */}

        {/* =========== CONTAINER FOR LARGE DEVICE =========== */}
        <div className='text-justify text-normal flex flex-col gap-y-4' data-aos='zoom-in-up' data-aos-duration='1000' data-aos-delay='1000'>
          <div className='text-h3 font-normal hidden lg:block text-left'>Tentang Segara</div>
          <div className='text-h1 font-bold hidden lg:block text-left'>Apa itu Segara</div>
          <div className='font-extralight'>
            Segara adalah platform yang berdiri untuk menjaga kesehatan lautan dari ancaman yang akan datang. Kami mendokumentasikan masalah dan mengembangkan solusi, mempersenjatai orang dengan pengetahuan, dan alat sehingga mereka dapat membuat perbedaan.
          </div>
          <div className='font-extralight'>
            Dengan seluruh elemen masyarakat, kami pergi ke Perserikatan Bangsa-Bangsa dan badan-badan global lainnya untuk melakukan perubahan Internasional. Kami menghadiri pertemuan-pertemuan ini sehingga kami dapat menawarkan rencana yang kreatif, layak secara ekonomi, berkelanjutan, dan ramah lingkungan kepada para pembuat keputusan.
          </div>
          <div className='w-full lg:w-fit px-12 py-4 rounded-full bg-white text-blue-500 text-center text-h3 font-semibold mt-4 mb-16 lg:mb-0 cursor-pointer'><NavLink to="/about">Tentang Kami</NavLink></div>
        </div>
        {/* =========== END OF CONTAINER LARGE DEVICE =========== */}
      </div>
    </div>
    // =========== END OF CONTAINER FOR ABOUT ===========
  )
}

export default About;
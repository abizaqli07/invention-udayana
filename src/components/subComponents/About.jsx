import React from 'react'
import AboutImage from '../../assets/about.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    Aos.init({
      mirror: true,
      once: true,
    });
  }, [])
  
  return (
    <div className='w-full h-full mt-36'>
      <div className='layout gradient-primary-alt p-12 rounded-[1rem] text-white flex flex-col gap-y-6 text-center justify-center items-center lg:grid lg:grid-cols-2 lg:gap-8 drop-shadow-[0px_30px_30px_rgba(0,0,0,0.35)] shadow-[#161616]' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
        <div className='flex flex-col lg:hidden'>
          <div className='text-h3 font-normal'>Tentang Website</div>
          <div className='text-h1 font-bold'>Apa itu Website</div>
        </div>
        <div data-aos='zoom-in-up' data-aos-duration='1000' data-aos-delay='1000'><img className='w-full h-auto p-12' src={AboutImage} /></div>
        <div className='text-justify text-normal flex flex-col gap-y-4' data-aos='zoom-in-up' data-aos-duration='1000' data-aos-delay='1000'>

          <div className='text-h3 font-normal hidden lg:block text-left'>Tentang Website</div>
          <div className='text-h1 font-bold hidden lg:block text-left'>Apa itu Website</div>

          <div className='font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</div>
          <div className='font-extralight'>Maecenas eget condimentum velit, sit amet feugiat lectus. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum.</div>
          <div className='w-full lg:w-fit px-12 py-4 rounded-full bg-white text-blue-500 text-center text-h3 font-semibold mt-4 mb-16 lg:mb-0'>Tentang Kami</div>
        </div>
      </div>
    </div>
  )
}

export default About;
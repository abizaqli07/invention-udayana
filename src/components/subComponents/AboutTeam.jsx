import React from 'react'
import ProfileAbi from '../../assets/abizaqli.JPEG'

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

function AboutTeam() {
  return (
    <div className='w-full pt-12 mb-32'>
      <div className='layout'>

        <div className='flex flex-col gap-2 text-center justify-center items-center mt-24 mb-8'>
          <div className='text-blue-500 text-h1 font-bold'>Tim Kami</div>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-20'>

          <div className='flex flex-col gap-0 justify-center items-center text-center rounded-md overflow-hidden hover:shadow-[3px_3px_16px_rgba(0,0,0,0.16)] hover:translate-x-2 hover:-translate-y-2 transition-all duration-300 ease-out'>
            <div className='max-w-[300px] aspect-[3/4] overflow-hidden'><img className='object-fit' src={ProfileAbi}/></div>
            <div className='py-6 flex flex-col gap-3'>
              <div className='text-normal font-bold'>Abi Khoir Naufal Zaqli</div>
              <div className='text-h1 flex gap-3 justify-center text-slate-700'>
                <AiFillInstagram className='cursor-pointer'/>
                <AiFillFacebook className='cursor-pointer'/>
                <AiFillLinkedin className='cursor-pointer'/>
              </div>
              <div className='text-normal font-light'>CEO - Programmer</div>
            </div>
          </div>

          <div className='flex flex-col gap-0 justify-center items-center text-center rounded-md overflow-hidden hover:shadow-[3px_3px_16px_rgba(0,0,0,0.16)] hover:translate-x-2 hover:-translate-y-2 transition-all duration-300 ease-out'>
            <div className='max-w-[300px] aspect-[3/4] overflow-hidden'><img className='object-fit' src={ProfileAbi}/></div>
            <div className='py-6 flex flex-col gap-3'>
              <div className='text-normal font-bold'>Hanizar Florian Sukma</div>
              <div className='text-h1 flex gap-3 justify-center text-slate-700'>
                <AiFillInstagram className='cursor-pointer'/>
                <AiFillFacebook className='cursor-pointer'/>
                <AiFillLinkedin className='cursor-pointer'/>
              </div>
              <div className='text-normal font-light'>Manager - CTO</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutTeam
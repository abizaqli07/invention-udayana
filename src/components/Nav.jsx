import React from 'react'
import { Link } from "react-router-dom";
import { 
  BiChevronDown
} from "react-icons/bi";

function Nav() {
  return (
    <div className=' bg-primary text-white'>
      <div className='flex justify-between layout py-6 text-normal items-center'>
        <div><Link to="/">Logo</Link></div>

        <ul className='flex gap-6'>
          <li className=' nav__link'>
            <Link to="/">Home</Link>
          </li>
          <li className=' nav__link'>
            <Link to="/about">About</Link>
          </li>
          <li className='dropdown__link'>
            <div className='flex gap-2 text-normal content-center nav__link'>
              Ocean Life
              <BiChevronDown className='text-h2'/>
            </div>

            <div className='dropdowns'>
              <div className='dropdown__item'><Link to="/habitat">Habitats</Link></div>
              <div className='dropdown__item'><Link to="/population">Population</Link></div>
            </div>
          </li>
          <li className='dropdown__link'>
            <div className='flex gap-2 text-normal content-center nav__link'>
              Ocean Problems
              <BiChevronDown className='text-h2'/>
            </div>

            <div className='dropdowns w-60'>
              <div className='dropdown__item'><Link to="/pollutionplastic">Pollution and Plastic</Link></div>
              <div className='dropdown__item'><Link to="/climatechange">Climate Change</Link></div>
            </div>
          </li>
        </ul>

        <div className='text-dark bg-white px-5 py-2 rounded-full font-semibold cursor-pointer'>
          <Link to="/takeaction">Take Action</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
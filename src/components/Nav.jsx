import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useWindowScrollPositions } from "../components/subComponents/GetScrollPosition";
import {
  BiChevronDown,
  BiMenuAltRight,
  BiLogInCircle
} from "react-icons/bi";

function Nav() {
  const { scrollX, scrollY } = useWindowScrollPositions()
  const [toggle, setToggle] = React.useState(false)

  function toggleHandler() {
    setToggle((prev) => {
      return !prev
    })
  }

  return (
    <div className='overflow-x-hidden'>
      <div className={`fixed z-40 w-[100vw]  font-normal ${scrollY > 0 ? "shadow-md bg-white" : ""}`} data-aos='fade-down' data-aos-duration='1000' data-aos-delay='500'>
        <div className={`flex justify-between gap-8 layout pb-6 text-normal items-center transition-all duration-300 ${scrollY > 0 ? "pt-6" : "pt-6 lg:pt-16"}`}>
          <div><Link to="/" className='flex gap-2 justify-center items-center font-bold'><img src={logo} />Logo</Link></div>

          <ul className='gap-8 items-center lg:flex hidden relative z-0'>
            <li className=' nav__link'>
              <Link to="/">Home</Link>
            </li>
            <li className=' nav__link'>
              <Link to="/about">About</Link>
            </li>

            <li className='dropdown__link'>
              <div className='flex gap-2 text-normal content-center nav__link peer'>
                Ocean Life
                <BiChevronDown className='text-h2' />
              </div>

              <div className='dropdowns'>
                <div className='dropdown__item'><Link to="/habitat">Habitats</Link></div>
                <div className='dropdown__item'><Link to="/population">Population</Link></div>
              </div>
            </li>

            <li className='dropdown__link'>
              <div className='flex gap-2 text-normal content-center nav__link peer'>
                Ocean Problems
                <BiChevronDown className='text-h2' />
              </div>

              <div className='dropdowns w-60'>
                <div className='dropdown__item'><Link to="/pollutionplastic">Pollution and Plastic</Link></div>
                <div className='dropdown__item'><Link to="/climatechange">Climate Change</Link></div>
              </div>
            </li>

            <li className='ml-8'>
              <div className='nav__link border-[2px] border-blue-500 rounded-full py-2 px-7 bg-white/40 hover:bg-white'>
                <Link to="/takeaction">Take Action</Link>
              </div>
            </li>
          </ul>

          <div className='flex lg:hidden text-big items-center cursor-pointer bg-white/60 p-1 rounded-lg hover:bg-white' onClick={toggleHandler}>
            <BiMenuAltRight />
          </div>
        </div>
      </div>

      <div className={`lg:hidden w-[100vw] h-[100vh] bg-white flex justify-center transition-all fixed z-50 duration-500 ease-out ${toggle ? "right-0" : "-right-[110%]"}`}>
        <div className='absolute text-big top-8 right-8 cursor-pointer' onClick={toggleHandler}><BiLogInCircle/></div>
        <ul className='gap-8 items-center flex flex-col justify-center'>
          <li className=' nav__link'>
            <Link to="/">Home</Link>
          </li>
          <li className=' nav__link'>
            <Link to="/about">About</Link>
          </li>
          <li className=' nav__link'>
            <Link to="/habitat">Habitats</Link>
          </li>
          <li className=' nav__link'>
            <Link to="/population">Population</Link>
          </li>
          <li className=' nav__link'>
            <Link to="/pollutionplastic">Pollution and Plastic</Link>
          </li>
          <li className=' nav__link'>
            <Link to="/climatechange">Climate Change</Link>
          </li>

          <li className=''>
            <div className='nav__link border-[2px] border-blue-500 rounded-full py-2 px-7 hover:gradient-primary '>
              <Link to="/takeaction">Take Action</Link>
            </div>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Nav;
import React from 'react'
import { NavLink } from "react-router-dom";
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
          <div><NavLink to="/" className='flex gap-2 justify-center items-center font-bold'><img src={logo} />Logo</NavLink></div>

          <ul className='gap-8 items-center lg:flex hidden relative z-0'>
            <li className=' nav__link'>
              <NavLink to="/" className={({ isActive }) => (isActive ? "nav__link-active" : "")}>Home</NavLink>
            </li>
            <li className=' nav__link'>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "nav__link-active" : "")}>About</NavLink>
            </li>
            <li className=' nav__link'>
            <NavLink to="/population" className={({ isActive }) => (isActive ? "nav__link-active" : "")}>Ocean Life</NavLink>
            </li>

            <li className='dropdown__link'>
              <div className='flex gap-2 text-normal content-center nav__link peer'>
                Ocean Problems
                <BiChevronDown className='text-h2' />
              </div>

              <div className='dropdowns w-60'>
                <div className='dropdown__item'><NavLink to="/pollutionplastic" className={({ isActive }) => (isActive ? "nav__link-active" : "")}>Pollution and Plastic</NavLink></div>
                <div className='dropdown__item'><NavLink to="/climatechange" className={({ isActive }) => (isActive ? "nav__link-active" : "")}>Climate Change</NavLink></div>
              </div>
            </li>

            <li className='ml-8'>
              <div className='nav__link border-[2px] border-blue-500 rounded-full py-2 px-7 bg-white/40 hover:bg-white'>
                <NavLink to="/takeaction" className={({ isActive }) => (isActive ? "nav__link-active-action" : "")}>Take Action</NavLink>
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
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav__link-active" : "")} onClick={toggleHandler}>Home</NavLink>
          </li>
          <li className=' nav__link'>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav__link-active" : "")} onClick={toggleHandler}>About</NavLink>
          </li>
          <li className=' nav__link'>
            <NavLink to="/habitat" className={({ isActive }) => (isActive ? "nav__link-active" : "")} onClick={toggleHandler}>Habitats</NavLink>
          </li>
          <li className=' nav__link'>
            <NavLink to="/population" className={({ isActive }) => (isActive ? "nav__link-active" : "")} onClick={toggleHandler}>Population</NavLink>
          </li>
          <li className=' nav__link'>
            <NavLink to="/pollutionplastic" className={({ isActive }) => (isActive ? "nav__link-active" : "")} onClick={toggleHandler}>Pollution and Plastic</NavLink>
          </li>
          <li className=' nav__link'>
            <NavLink to="/climatechange" className={({ isActive }) => (isActive ? "nav__link-active" : "")} onClick={toggleHandler}>Climate Change</NavLink>
          </li>

          <li className=''>
            <div className='nav__link border-[2px] border-blue-500 rounded-full py-2 px-7 hover:gradient-primary '>
              <NavLink to="/takeaction" className={({ isActive }) => (isActive ? "nav__link-active-action" : "")} onClick={toggleHandler}>Take Action</NavLink>
            </div>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Nav;
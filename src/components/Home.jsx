import React from 'react'
import Header from './subComponents/Header';
import Services from './subComponents/Services';
import About from './subComponents/About';
import News from './subComponents/News';
import HomeBox from './subComponents/HomeBox';
import Footer from './subComponents/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {

  // EFFECT FOR ANIMATE ON SCROLL
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, [])

  return (
    <div>
      <Header/>
      <Services/>
      <About/>
      <News/>
      <HomeBox/>
      <Footer/>
    </div>
  )
}

export default Home;
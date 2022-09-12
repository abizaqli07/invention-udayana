import React from 'react'
import About from './subComponents/About';
import Footer from './subComponents/Footer';
import Header from './subComponents/Header';
import HomeBox from './subComponents/HomeBox';
import News from './subComponents/News';
import Services from './subComponents/Services';

function Home() {
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
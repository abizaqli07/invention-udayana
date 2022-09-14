import hero2 from "../../assets/hero2.png";

function Header() {
  return (
    // ========== CONTAINER FOR HEADER ==========
    <div className='w-full h-[100vh] bg-slate-400 relative'>

      {/* ========== CONTAINER FOR SMALL DEVICE ========== */}
      <div className='flex hero w-full h-full lg:hidden'>
        <div className='flex flex-col justify-center items-center layout text-center lg:items-start lg:text-left'>
          <div className='text-h1 font-semibold'>Connect With</div>
          <div className='text-biggest font-bold'>The Ocean</div>
          <div className='text-normal pt-4'>Berdiri untuk menjaga kesehatan lautan dari ancaman yang akan datang.</div>
          <div className='mt-8 flex flex-col gap-4'>
            <div className='py-3 px-6 rounded-full gradient-primary shadow-md shadow-slate-800 font-semibold text-white cursor-pointer'>Jelajah Sekarang</div>
            <div className='py-3 px-6 rounded-full border-[2px] border-blue-500 shadow-md shadow-slate-800 font-semibold text-blue-500 cursor-pointer bg-white/40'>Bantu Donasi</div>
          </div>
        </div>
      </div>
      {/* ========== END OF SMALL DEVICE ========== */}

      {/* ========== CONTAINER FOR LARGE DEVICE ========== */}
      <div className='hidden w-full h-full bg-white lg:flex'>
        <div className='flex flex-col justify-center layout items-start text-left'>
            <div className='text-6xl font-black' data-aos='fade-up' data-aos-duration='500'>Connect With</div>
            <div className='text-[8.5rem] font-black leading-[1.1]' data-aos='fade-up' data-aos-duration='500' data-aos-delay='100'>The Ocean</div>
            <div className='text-xl ' data-aos='fade-up' data-aos-duration='500' data-aos-delay='200'>Berdiri untuk menjaga kesehatan lautan dari ancaman yang akan datang.</div>
          <div className='mt-16 flex gap-4 flex-row' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
            <div className='py-3 px-6 rounded-full gradient-primary drop-shadow-[0px_12px_12px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_10px_10px_rgba(0,0,0,0.25)]  shadow-slate-800 font-semibold text-white cursor-pointer'>Jelajah Sekarang</div>
            <div className='py-3 px-6 rounded-full border-[2px] border-blue-500 drop-shadow-[0px_12px_12px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_10px_10px_rgba(0,0,0,0.25)] shadow-slate-800 font-semibold text-blue-500 cursor-pointer bg-white/30'>Bantu Donasi</div>
          </div>
        </div>
      </div>
      {/* ========== END OF CONTAINER FOR LARGE DEVICE ========== */}

      {/* ========== BACKGROUND CONTAINER ========== */}
      <div className='hidden lg:flex h-[100vh] w-fit absolute top-0 right-0'><img src={hero2} /></div>
      {/* ========== END OF BACKGROUND CONTAINER ========== */}

    </div>
    // ========== END OF CONTAINER FOR HEADER ==========
  )
}

export default Header;
import React from 'react';

const Navbar = () => {
  return (
      <div className='w-full'>
        <div className="fixed px-[29px] py-5 md:px-[60px] md:py-[55px] z-10 max-w-screen-xl mx-auto w-full flex items-center justify-between">
        <img
          className="w-[95px] md:w-[145.5px] h-[42px] md:h-[64px]"
          src="/allimgs/logo-wlkr.webp"
          alt=""
        />
        <button className="hidden lg:flex xl:flex bg-[#897460] text-white py-[11.5px] px-[76px] font-[800] rounded-full text-[18px] tracking-tighter text-center xl:-mr-[1.5px] xl:mt-1">
          ACHETER
        </button>
      </div>
      </div>
  )
}

export default Navbar;
import React from 'react';

const Navbar = () => {
  return (
      <div className="fixed px-[29px] py-5 xl:px-[60px] xl:py-[55px] z-10 max-w-screen-xl mx-auto w-full flex items-center justify-between">
        <img
          className="w-[95px] xl:w-[145.5px] h-[42px] xl:h-[64px]"
          src="/allimgs/logo-wlkr.webp"
          alt=""
        />
        <button className="hidden xl:flex bg-[#897460] text-white py-[11.5px] px-[76px] font-[800] rounded-full text-[18px] tracking-tighter text-center xl:-mr-[1.5px] xl:mt-1">
          ACHETER
        </button>
      </div>
  )
}

export default Navbar;
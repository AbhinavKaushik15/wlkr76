import React from 'react';

const Navbar = () => {
  return (
      <div className="fixed top-14 left-0 z-10 max-w-screen-xl mx-auto w-full flex items-center justify-between">
        <img
          className="w-[90px] xl:w-[145.5px] h-[40px] xl:h-[64px] ml-[59.4px]"
          src="/allimgs/logo-wlkr.webp"
          alt=""
        />
        <button className="bg-[#897460] text-white py-3 px-[76px] font-[800] rounded-full mr-[59.4px] text-[18px] tracking-tighter text-center">
          ACHETER
        </button>
      </div>
  )
}

export default Navbar;
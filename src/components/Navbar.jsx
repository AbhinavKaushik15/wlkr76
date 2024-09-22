import React from 'react';

const Navbar = () => {
  return (
      <div className='w-full'>
        <div className="fixed px-[29px] py-5 lg:px-[60px] lg:py-[55px] z-10 max-w-screen-xl mx-auto w-full flex items-center justify-between">
        <img
          className="w-[95px] lg:w-[145.5px] h-[42px] lg:h-[64px]"
          src="/allimgs/logo-wlkr.webp"
          alt=""
        />
        <button className="hidden lg:flex xl:flex tracking-tighter text-center py-[11.5px] px-[76px] text-[18px] rounded-full text-white font-[800] hover:px-[80px] hover:py-[12.5px] hover:transition-all hover:duration-200 bg-[#897460] xl:-mr-[1.5px] xl:mt-1">
          ACHETER
        </button>

        {/* <button className="tracking-tighter text-center py-[11.5px] px-[76px] text-[18px] rounded-full text-white font-[800] hover:px-[45px] hover:py-[10px] hover:transition-all hover:duration-200">
            AJOUTER AU PANIER
          </button> */}
      </div>
      </div>
  )
}

export default Navbar;
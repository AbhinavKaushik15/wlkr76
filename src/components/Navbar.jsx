import React from 'react';

const Navbar = () => {
  return (
      <div className="fixed top-14 left-0 z-10 w-full flex items-center justify-between">
        <img
          className="w-[145.5px] h-[64px] ml-[59.4px]"
          src="/allimgs/logo-wlkr.webp"
          alt=""
        />
         {/* <div className="clouds">
              <img className='absolute w-full h-screen top-[-89%] left-1/2 -translate-x-1/2' src="/allimgs/clouds.webp" alt="" />
            </div> */}
        <button className="bg-[#897460] text-white py-3 px-[76px] font-[800] rounded-full mr-[59.4px] text-[18px] tracking-tighter text-center">
          ACHETER
        </button>
      </div>
  )
}

export default Navbar;
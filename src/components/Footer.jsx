import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

const Footer = () => {
  const parent = useRef();

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(parent.current, {
      x: "-100%",
      scrollTrigger:{
        trigger: parent.current,
        start: "top -50%",
        markers: true,
      }
    })

  })

  return (
    <div ref={parent} className="relative w-full h-screen items-center">
      <img
        className="absolute w-full h-full object-cover"
        src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/bg.6f060e16cb5802b780a013714307f463.jpg"
        alt=""
      />

      <Swiper
        slidesPerView={2}
        spaceBetween={-299.5}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper pt-[14.8%]"
      >
        <SwiperSlide className="ml-[25%]">
          <img
            className="w-[34.6vw] h-[54.4vh] object-cover"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-1.1b97614d41e5837270d6552372c3c84b.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-[34.6vw] h-[54.4vh] object-cover"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-2.b859e947584b0d00529b89cd390c4479.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-[34.6vw] h-[54.4vh] object-cover"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-3.c8764dfeae4caa18566b0406b83157b4.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-[34.6vw] h-[54.4vh] object-cover"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel4.919df7697cd32f0533a442fe4544edd2.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-[34.6vw] h-[54.4vh] object-cover"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel5.b7b62578992d023fab4c7f6fab3729eb.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-[34.6vw] h-[54.4vh] object-cover"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel6.29578aa0120d18374870a5663dc2809c.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-[34.6vw] h-[54.4vh] object-cover"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel7.f95ef802c7d093c92de3fdc3113587a3.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-[34.6vw] h-[54.4vh] object-cover"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel8.74b29e0fe4b42eb9a386416a0de8a620.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-[34.6vw] h-[54.4vh] object-cover"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel9.794351f5446e05e7cefa97702be6528d.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-[34.6vw] h-[54.4vh] object-cover"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel10.750dbb71558a5a65cf5a41226c5dc703.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute mt-[3.25%] flex items-center justify-between px-[6%] w-full">
        <h1 className="text-white font-[Roboto_Flex_Thin] font-[700] tracking-tighter text-xs">©️ DECATHLON 2024 ALL RIGHT RESERVED</h1>
        <h1 className="text-white font-[Roboto_Flex_Thin] font-[700] tracking-tighter text-xs"><a className="underline hover:text-[#dadada]" href="#">LEGAL MENTIONS</a> • WEBSITE BY <a className="underline hover:text-[#dadada]" href="#">INDEX.STUDIO</a></h1>
      </div>
    </div>
  );
};

export default Footer;

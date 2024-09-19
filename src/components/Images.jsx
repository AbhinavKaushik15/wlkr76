import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const Images = () => {
  const parent = useRef();
  const mainImg = useRef();
  const middleImg = useRef();
  const lastImg = useRef();
  const head1 = useRef();
  const head2 = useRef();
  const head3 = useRef();
  const head4 = useRef();
  const head5 = useRef();
  const head6 = useRef();

  const parentFooter = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(mainImg.current, {
      y: "-50%",
      width: "100%",
      height: "100%",
      scrollTrigger: {
        trigger: parent.current,
        start: "top 65%",
        end: "top 10%",
        scrub: 2,
      },
    });
    tl.to(parent.current,{
      scrollTrigger:{
        trigger: parent.current,
        start: "top top",
        end: "top -450%",
        pin: true,
        scrub: 2,
      }
    })
    tl.to(middleImg.current, {
      top: "5%",
      scrollTrigger:{
        trigger: parent.current,
        scrub: 1,
        start: "top 0%",
      }
    }, "h")
    tl.to(head1.current, {
      x: '133%',
      fontWeight: "700",
      letterSpacing: "-8px",
      duration: 10,
      repeat: 1,
      yoyo: true,
      scrollTrigger:{
        trigger: parent.current,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
      }
    }, "h")
    tl.to(head2.current, {
      x: '-115%',
      fontWeight: "700",
      letterSpacing: "-8px",
      duration: 10,
      repeat: 1,
      yoyo: true,
      scrollTrigger:{
        trigger: parent.current,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
      }
    }, "h")
    tl.to(head3.current, {
      x: '140%',
      duration: 10,
      fontWeight: "700",
      letterSpacing: "-8px",
      repeat: 1,
      yoyo: true,
      scrollTrigger:{
        trigger: parent.current,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
      }
    }, "h")
    tl.to(middleImg.current, {
      scale: [2],
      duration: 9000,
      scrollTrigger:{
        trigger: middleImg.current,
        start: "top 30%",
        end: "top 0%",
        scrub: 4,
      }
    })
    tl.to(lastImg.current, {
      top: "5.5%",
      // duration: 10000,
      scrollTrigger:{
        trigger: middleImg.current,
        start: "top 50%",
        scrub: 2,
      }
    }, "i")
    tl.to(head4.current, {
      x: '200%',
      fontWeight: "700",
      letterSpacing: "-8px",
      duration: 10,
      scrollTrigger:{
        trigger: lastImg.current,
        start: "top -50%",
        end: "top -200%",
        scrub: 2,
      }
    }, "i")
    tl.to(head5.current, {
      x: '-135%',
      fontWeight: "700",
      letterSpacing: "-8px",
      duration: 10,
      scrollTrigger:{
        trigger: lastImg.current,
        start: "top -50%",
        end: "top -200%",
        scrub: 2,
      }
    }, "i")
    tl.to(head6.current, {
      x: '180%',
      duration: 10,
      fontWeight: "700",
      letterSpacing: "-8px",
      scrollTrigger:{
        trigger: lastImg.current,
        start: "top -50%",
        end: "top -200%",
        scrub: 2,
      }
    }, "i")
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto w-full h-full bg-white overflow-hidden">
        <div ref={parent} className="relative w-full h-[100vh] overflow-hidden">
          <img ref={mainImg} className="absolute w-[29.5vw] h-[50vh] object-cover left-1/2 -translate-x-1/2 top-1/2 -translate-y-[-10%]"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/story/story-1.b140c7aa360fee7b7b6af5ba73560924.webp"
            alt=""
          />
          <img ref={middleImg} className="absolute w-[33.57vw] h-[90vh] object-cover left-1/2 -translate-x-1/2 top-[150%]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/story/story-2.cfe8225bd6e52170e551f8a5739b3492.webp"
            alt=""
          />
          <h1 ref={head1} className="absolute -top-20 left-[-65%] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            ÉXPLOREZ DE
          </h1>
          <h1 ref={head2} className="absolute top-[30%] right-[-52%] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            NOUVEAUX
          </h1>
          <h1 ref={head3} className="absolute -bottom-24 left-[-50%] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            HORIZONS
          </h1>
          <img ref={lastImg} className="absolute w-[33.57vw] h-[90vh] object-cover left-1/2 -translate-x-1/2 top-[120%]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/story/story-3.6e5425847547c4b4bf037ca5d760fa5f.webp"
            alt=""
          />
          <h1 ref={head4} className="absolute -top-20 left-[-65%] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            DANS ON
          </h1>
          <h1 ref={head5} className="absolute top-[30%] right-[-52%] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            CONFORT
          </h1>
          <h1 ref={head6} className="absolute -bottom-24 left-[-50%] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            ABSOLU
          </h1>
        </div>

        <div ref={parentFooter} className="absolute w-full h-[100%] left-1/2 -translate-x-1/2 top-[81.8%] items-center">
          <img
            className="absolute w-full h-screen scale-[2.47] xl:scale-[1] object-cover pb-[10.4vw] xl:pb-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/bg.6f060e16cb5802b780a013714307f463.jpg"
          alt=""
          />

          <Swiper
            slidesPerView={2}
            spaceBetween={-299.5}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="hidden w-[100vw] xl:flex mySwiper pt-[14.8%]"
          >
            {[{src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-1.1b97614d41e5837270d6552372c3c84b.webp", marginLeft: "25%"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-2.b859e947584b0d00529b89cd390c4479.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-3.c8764dfeae4caa18566b0406b83157b4.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel4.919df7697cd32f0533a442fe4544edd2.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel5.b7b62578992d023fab4c7f6fab3729eb.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel6.29578aa0120d18374870a5663dc2809c.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel7.f95ef802c7d093c92de3fdc3113587a3.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel8.74b29e0fe4b42eb9a386416a0de8a620.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel9.794351f5446e05e7cefa97702be6528d.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel10.750dbb71558a5a65cf5a41226c5dc703.webp"}].map((items, index)=>{
              return <SwiperSlide key={index} style={{marginLeft: items.marginLeft}}>
                      <img
                        className="w-[34.6vw] h-[318.24px] object-cover"
                        src={items.src}
                        alt=""
                      />
                    </SwiperSlide>
            })}
          </Swiper>

          {/* <Swiper
            slidesPerView={1}
            spaceBetween={15}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="flex xl:hidden mySwiper w-[100vw] pt-[22.5%] xl:pt-[14.8%] pr-60"
          >
            {[{src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-1.1b97614d41e5837270d6552372c3c84b.webp", marginLeft: "18vw"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-2.b859e947584b0d00529b89cd390c4479.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-3.c8764dfeae4caa18566b0406b83157b4.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel4.919df7697cd32f0533a442fe4544edd2.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel5.b7b62578992d023fab4c7f6fab3729eb.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel6.29578aa0120d18374870a5663dc2809c.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel7.f95ef802c7d093c92de3fdc3113587a3.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel8.74b29e0fe4b42eb9a386416a0de8a620.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel9.794351f5446e05e7cefa97702be6528d.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel10.750dbb71558a5a65cf5a41226c5dc703.webp"}].map((items, index)=>{
              return <SwiperSlide key={index} style={{marginLeft: items.marginLeft}} className="w-[100vw]">
                      <img
                        className="w-[100vw] h-[305px] object-cover"
                        src={items.src}
                        alt=""
                      />
                    </SwiperSlide>
            })}
          </Swiper> */}

          <div className="absolute mt-[17.5vh] xl:mt-[3.25%] flex flex-col xl:flex-row items-center justify-between px-[6%] w-full">
            <h1 className="text-white font-[Roboto_Flex_Thin] font-[700] tracking-tighter text-[10px] xl:text-xs">©️ DECATHLON 2024 ALL RIGHT RESERVED</h1>
            <h1 className="text-white font-[Roboto_Flex_Thin] font-[700] tracking-tighter text-[10px] xl:text-xs"><a className="underline hover:text-[#dadada]" href="#">LEGAL MENTIONS</a> • WEBSITE BY <a className="underline hover:text-[#dadada]" href="#">INDEX.STUDIO</a></h1>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Images;
import { useGSAP } from "@gsap/react";
import gsap, { Linear, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  // step 1: Current Index & Maximum Index
  const [val, setval] = useState({
    currentIndex: 1,
    maxIndex: 650,
  });

  const imageObject = useRef([]);
  const canvasRef = useRef(null);
  const imagesLoader = useRef(0);

  // step 2: Preload Images
  const preload = () => {
    for (let i = 0; i <= val.maxIndex; i++) {
      const imagesURL = `./wlkrImg/${i.toString().padStart(3, "0")}.jpg`;
      const img = new Image();
      img.src = imagesURL;

      img.onload = () => {
        imagesLoader.current++;
        if (imagesLoader.current === val.maxIndex) {
          showImg(val.currentIndex);
        }
      };
      imageObject.current.push(img);
    }
  };

  // Call the preload
  useEffect(() => {
    preload();
  });

  // step 3: Show Image / Load Images on Screen

  // const showImg = (index) => {
  //   if (index >= 0 && index <= val.maxIndex) {
  //     const img = imageObject.current[index];
  //     const canvas = canvasRef.current;

  //     if (canvas && img) {
  //       let ctx = canvas.getContext("2d");
  //       if (ctx) {
  //         canvas.width = window.innerWidth;
  //         canvas.height = window.innerHeight;

  //         // images ko screen ke barabar set kiya hai
  //         const scaleX = canvas.width / img.width;
  //         const scaleY = canvas.height / img.height;

  //         // X & Y ki total / final length
  //         const scale = Math.max(scaleX, scaleY);

  //         const newWidth = canvas.width - scale + 1;
  //         const newHeight = canvas.height - scale + 125;

  //         // images ko center krne ke liye
  //         const offsetX = (canvas.width - newWidth) / 2;
  //         const offsetY = (canvas.height - newHeight) / 2;

  //         // clear the canvas
  //         ctx.clearRect(0, 0, canvas.width, canvas.height);

  //         // for high smoothing / quality of image
  //         ctx.imageSmoothingEnabled = true;
  //         ctx.imageSoothingQuality = "high";

  //         // Ab final image draw hogi🫡
  //         ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

  //         setval((prev) => ({
  //           ...prev,
  //           currentIndex: index,
  //         }));
  //       }
  //     }
  //   }
  // };

  const getResponsiveCanvasDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    // Define breakpoints for mobile, tablet, and desktop
    if (width <= 768) { // Mobile
      return { canvasWidth: width, canvasHeight: height };
    } else if (width <= 1024) { // Tablet
      return { canvasWidth: width, canvasHeight: height };
    } else { // Desktop
      return { canvasWidth: width, canvasHeight: height };
    }
  };
  
  const showImg = (index) => {
    if (index >= 0 && index <= val.maxIndex) {
      const img = imageObject.current[index];
      const canvas = canvasRef.current;
  
      if (canvas && img) {
        let ctx = canvas.getContext("2d");
        if (ctx) {
          // Get responsive canvas dimensions
          const { canvasWidth, canvasHeight } = getResponsiveCanvasDimensions();
  
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
  
          // Adjust the scale based on the responsive dimensions
          const scaleX = canvas.width / img.width;
          const scaleY = canvas.height / img.height;
  
          // Choose the scaling strategy
          const scale = Math.max(scaleX, scaleY);
  
          const newWidth = img.width * scale;
          const newHeight = img.height * scale;
  
          // Center the image on the canvas
          const offsetX = (canvas.width - newWidth) / 2;
          const offsetY = (canvas.height - newHeight) / 2;
  
          // Clear canvas before drawing
          ctx.clearRect(0, 0, canvas.width, canvas.height);
  
          // Enable high-quality image rendering
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
  
          // Draw the image on the canvas
          ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  
          setval((prev) => ({
            ...prev,
            currentIndex: index,
          }));
        }
      }
    }
  };
  

  const parentDiv = useRef(null);
  const shade = useRef();
  const parentRail = useRef();
  const roll1 = useRef();
  const roll2 = useRef();
  const roll3 = useRef();
  const roll4 = useRef();

  const head1 = useRef();
  const head2 = useRef();
  const head3 = useRef();
  const head4 = useRef();

  useGSAP(() => {

    gsap.to(shade.current, {
      opacity: 0,
      scrollTrigger:{
        trigger: parentDiv.current,
        start: "top -30%",
        end: "top 40%",
        scrub: 3,
      }
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentDiv.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        scrub: 2,
      },
    });

    tl.to(val, {
      currentIndex: val.maxIndex,
      onUpdate: () => {
        showImg(Math.floor(val.currentIndex));
      },
    });

    const tlrail = gsap.timeline();

    tlrail.to(parentRail.current, {
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 60%",
        end: "top 200%",
        scrub: 2,
      }
    }, "a")
    tlrail.to(head1.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 80%",
        end: "top -20%",
        scrub: 2,
      }
    }, "a, b")
    tlrail.to(roll1.current, {
      x: 90,
      ease: Linear,
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 80%",
        end: "top -20%",
        scrub: 2,
      }
    }, "a, b")
    tlrail.to(head2.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 70%",
        end: "top -40%",
        scrub: 2,
      }
    }, "a,b")
    tlrail.to(roll2.current, {
      x: -220,
      ease: Linear,
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 80%",
        end: "top -40%",
        scrub: 2,
      }
    }, "a, b")
    tlrail.to(head3.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 55%",
        end: "top -60%",
        scrub: 2,
      }
    }, "b,c")
    tlrail.to(roll3.current, {
      x: 130,
      ease: Linear,
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 80%",
        end: "top -70%",
        scrub: 2,
      }
    }, "b,c")
    tlrail.to(head4.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 45%",
        end: "top -100%",
        scrub: 2,
      }
    }, "c, d")
    tlrail.to(roll4.current, {
      x: -155,
      ease: Linear,
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 80%",
        end: "top -100%",
        scrub: 2,
      }
    }, "c, d")
  });

  return (
    <div className="w-full">
      <div ref={parentDiv} className="w-full h-[990vh] max-w-screen-xl mx-auto overflow-hidden bg-red-400">
        <div className="w-full h-screen sticky top-0 left-0">
          <canvas ref={canvasRef} className="w-full h-screen overflow-hidden"></canvas>
          <span ref={shade} className="inline-block absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-transparent opacity-1"></span>
        </div>
      </div>

      <div ref={parentRail} className="w-full h-screen bg-white overflow-hidden">
        <div ref={roll1} className="w-full h-[25%] flex items-center gap-10 -ml-28">
          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-1.f27f2e44f0b09b5b4e3864bb35fe99a4.jpg"
            alt=""
          />
          <h1 ref={head1} className="text-[110px] font-[100] tracking-[-7px] font-[Roboto_Flex_Thin]">
            ÉDITION
          </h1>

          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-2.b1d4272156170297d10a5a60965dbb82.jpg"
            alt=""
          />

          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-3.b9bc6bbef9f511fb5352eb2b628f82e3.jpg"
            alt=""
          />

          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-4.8dd753c719d788ed76ef6b6acbd776ff.jpg"
            alt=""
          />
        </div>

        <div ref={roll2} className="w-full h-[25%] flex items-center gap-10 ml-[41.5px]">
          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-5.c7be62540b36c08bcbfde656ea89f089.jpg"
            alt=""
          />

          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-6.904f5249c01d47b75251b2cfa978bccf.jpg"
            alt=""
          />

          <h1 ref={head2} className="text-[110px] font-[100] tracking-[-7px] font-[Roboto_Flex_Thin] ">
            LIMITÉE
          </h1>

          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-7.da0e2ec9042a307a847c6209bac0e027.jpg"
            alt=""
          />
        </div>

        <div ref={roll3} className="w-full h-[25%] flex items-center gap-10 -ml-[63px]">
          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-9.ad839066400db0785d319a39aeb54b96.jpg"
            alt=""
          />
          <h1 ref={head3} className="text-[110px] font-[100] tracking-[-7px] font-[Roboto_Flex_Thin]">
            1500
          </h1>

          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-10.852d26e1734f0094f91e42e2c96e7f76.jpg"
            alt=""
          />

          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-11.7e82065e51b1ddd0fdd38fd4b5c82636.jpg"
            alt=""
          />

          <img
            className="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-11.7e82065e51b1ddd0fdd38fd4b5c82636.jpg"
            alt=""
          />

          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-12.4e8c5e78b1276aba7a8133e96df58712.jpg"
            alt=""
          />
        </div>

        <div ref={roll4} className="w-full h-[25%] flex items-center gap-10 -ml-2">
          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-13.31c04c133654910233f64dec54f5520f.jpg"
            alt=""
          />

          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-14.0a64339771fee89ad9c31aede58819a4.jpg"
            alt=""
          />

          <h1 ref={head4} className="text-[110px] font-[100] tracking-[-7px] font-[Roboto_Flex_Thin]">
            PIÉCES
          </h1>

          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-15.b76806546845786fbf166dffd00520a7.jpg"
            alt=""
          />

          <img
            className="w-[307px] h-[103px] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-1.f27f2e44f0b09b5b4e3864bb35fe99a4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Video;

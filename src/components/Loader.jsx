import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Loader = () => {
    const loaderp = useRef();

    useGSAP(()=>{
        const tl = gsap.timeline();
    })
  return (
    <div ref={loaderp}>
      
    </div>
  )
}

export default Loader;

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shoes from "./components/Shoes";
import Images from "./components/Images";
import Video from "./components/Video";
import "./App.css";
import Lenis from 'lenis';
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  })

  return (
    <div style={{fontFamily: "'Roboto Flex', sans-serif"}} className="relative w-full min-h-screen font-[Roboto Flex Thin]">
      <Navbar />
      <Home />
      <Video />
      <Shoes />
      <Images />
    </div>
  );
}

export default App;

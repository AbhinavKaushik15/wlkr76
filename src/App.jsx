import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shoes from "./components/Shoes";
import "./App.css";
import Images from "./components/Images";
import Video from "./components/Video";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div style={{fontFamily: "'Roboto Flex', sans-serif"}} className="relative w-full font-[Roboto Flex Thin]">
      <Navbar />
      <Home />
      <Video />
      <Shoes />
      <Images />
    </div>
  );
}

export default App;

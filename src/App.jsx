import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shoes from "./components/Shoes";
import Images from "./components/Images";
import Video from "./components/Video";
import LocomotiveScroll from "locomotive-scroll";
import "./App.css";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div style={{fontFamily: "'Roboto Flex', sans-serif"}} className="relative w-full min-h-screen font-[Roboto Flex Thin]">
      <Navbar />
      <Home />
      <Video />
      <Shoes />
      {/* <Images /> */}
    </div>
  );
}

export default App;

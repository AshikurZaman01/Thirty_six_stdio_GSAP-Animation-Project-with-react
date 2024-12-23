import { useEffect } from "react";
import CanvasSection from "./Components/Pages/CanvasSection/CanvasSection";
import data from "./assets/Data/data";
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./Components/Pages/Navbar/Navbar";

const App = () => {

  useEffect(() => {

    const locomotiveScroll = new LocomotiveScroll();

  }, [])

  return (
    <>

      <div className="w-full relative min-h-screen  text-white">

        <Navbar></Navbar>
        {/* 
        <div>
          {
            data[0].map((item, subIndex) => (
              <CanvasSection key={subIndex} details={item} />
            ))
          }
        </div> */}

      </div>






    </>
  );
};

export default App;

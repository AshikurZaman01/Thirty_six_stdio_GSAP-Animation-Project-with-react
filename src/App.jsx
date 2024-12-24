import { useEffect } from "react";
import CanvasSection from "./Components/Pages/CanvasSection/CanvasSection";
import data from "./assets/Data/data";
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./Components/Pages/Navbar/Navbar";
import Banner from "./Components/Pages/Banner/Banner";
import Brand from "./Components/Pages/Brand/Brand";

const App = () => {

  useEffect(() => {

    const locomotiveScroll = new LocomotiveScroll();

  }, [])

  return (
    <>

      <div className="w-full relative min-h-screen  text-white">

        <Navbar></Navbar>
       
        <div>
          {
            data[0].map((item, subIndex) => (
              <CanvasSection key={subIndex} details={item} />
            ))
          }
        </div> 

        <Banner></Banner>
      </div>

      <Brand></Brand>

     



    </>
  );
};

export default App;

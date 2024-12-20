import CanvasSection from "./Components/Pages/CanvasSection/CanvasSection";
import data from "./assets/Data/data";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {
        data.map((section, index) => (
          <div key={index}>

            {
              section.map((item, subIndex) => (
                <CanvasSection key={subIndex} details={item} />
              ))
            }

          </div>
        ))
      }
    </div>
  );
};

export default App;

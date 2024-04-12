import React from "react";
import FAQ from "./FAQ";
import News from "./News";
import Carasel from "./Carasel";
import Event from "./Event";

const Home = () => {
  return (
    <div>
      <div className="md:grid grid-cols-4 dark:bg-black">
        <div className="col-span-1" style={{ zIndex: "1" }}>
          <div className="w-full bg-gradient-to-r">
            <div className="p-4">
              <FAQ />
            </div>
          </div>
        </div>
        <div className="col-span-2 pt-4">
          <Carasel />
        </div>
        <div className="col-span-1 p-4">
          <News />
        </div>
      </div>
      <div className="pt-4">
        <Event/>
      </div>
    </div>
  );
};

export default Home;

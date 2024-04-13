import React from "react";
import FAQ from "./FAQ";
import News from "./News";
import Carasel from "./Carasel";
import Event from "./Event";

const Body = () => {
  return (
    <div className="dark:bg-black">
      <div className="md:grid grid-cols-4">
        <div className="col-span-1" style={{ zIndex: 1 }}>
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
      <div>
        <div className="flex justify-center text-4xl pt-4 pb-4">Sự kiện trong tháng</div>
        <div className="p-4 md:grid md:grid-cols-4 gap-4">
          <Event/>
        </div>
      </div>
    </div>
  );
};

export default Body;

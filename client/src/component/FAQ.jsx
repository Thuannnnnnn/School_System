import React from "react";
import Accordion from "./Accordion ";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg h-96">
      <div className="text-4xl flex justify-center pb-4">
        Lựa chọn
      </div>
      <Accordion
        title="option 1"
        links={[
          { label: "Option 1-1", url: "#" },
          { label: "Option 1-2", url: "#" }
        ]}
      />
      <Accordion
        title="option 2"
        links={[]}
      />
      <Accordion
        title="option 3"
        links={[
            { label: "Option 3-1", url: "#" },
            { label: "Option 3-2", url: "#" }
        ]}
      />
    </div>
  );
};

export default FAQ;

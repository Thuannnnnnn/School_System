import React, { useState } from "react";

const Accordion = ({ title, links }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const hasAnswers = links.length > 0;
  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span>{title}</span>
        {hasAnswers && ( <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>)}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[auto] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {accordionOpen && links.map((link, index) => (
          <a key={index} href={link.url} className="overflow-hidden hover:text-blue-400">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

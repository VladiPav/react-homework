import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div
        className=" pointer-events-auto lg:pointer-events-none flex justify-between items-center p-4"
        onClick={() => toggleOpen()}
      >
        <p className="font-medium font-[DMSerifDisplay,serif] text-xl">
          {title}
        </p>
        <svg
          className={`block lg:hidden w-8 h-8 transform ${
            isOpen === true ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={`lg:block p-4 ${isOpen === true ? "block" : "hidden"}`}>
        <ul>
          {content.map((item) => (
            <li
              key={Math.random()}
              className="pb-5 px-4 text-16 md:px-0 font-light font-[avenir]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;

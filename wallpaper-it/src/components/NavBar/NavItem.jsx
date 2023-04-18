import React, { useState } from "react";
import DownArrow from "./DownArrow";

const NavItem = ({ name, hasDownArrow, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={"font-[avenir] uppercase"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="flex items-center h-8">
          {name}
          {hasDownArrow && <DownArrow />}
        </div>
        <div className= {(isHovered ? "block" : "hidden") + " bg-primary h-1 w-full absolute z-10"}>
        </div>
      </div>
      

      {isHovered && (
        <div className="absolute left-0 top-[32px] bg-white w-full shadow-md border-t-4 border-opacity-50 border-t-primary z-0">
          <div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;

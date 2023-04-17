import React, { useState } from "react";
import DownArrow from "./DownArrow";

const NavItem = ({ name, hasDownArrow, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={"flex items-center font-[avenir] uppercase"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
      {hasDownArrow && <DownArrow />}
      {isHovered && children && (
        <div className="absolute left-0 top-[165px] bg-white w-full shadow-md p-5 border-t-4 border-opacity-50 border-t-primary">
          {children}
        </div>
      )}
    </div>
  );
};

export default NavItem;

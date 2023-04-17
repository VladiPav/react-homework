import React from "react";
import PromoBar from "./PromoBar";
import logo from "../../assets/wallpaperit-Logo.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white shadow-md">
      <PromoBar />
      <div className="flex justify-between w-full items-center p-3">
        <div className=" space-x-3">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <button className="bg-no-repeat bg-sprite bg-[left_-58px_bottom_-52px] w-[35px] h-[35px]"></button>
        </div>
        <img src={logo} alt="logo" className="max-w-[130px] max-h-[55px]" />
        <div className=" space-x-3">
          <button className="bg-no-repeat bg-sprite bg-[left_-8px_bottom_-52px] w-[35px] h-[35px]"></button>
          <button className="bg-no-repeat bg-sprite bg-[left_-2px_bottom_-5px] w-[35px] h-[35px]"></button>
        </div>
      </div>
      <div className="bg-primary w-full h-1" />
    </div>
  );
};

export default Navbar;

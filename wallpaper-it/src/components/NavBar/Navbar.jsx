import React from "react";
import PromoBar from "./PromoBar";
import logo from "../../assets/wallpaperit-Logo.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white shadow-md">
      <PromoBar />
      <div className="flex justify-between w-full items-center p-3">
        <div className=" space-x-3">
          <button className="bg-no-repeat bg-sprite bg-[left_-45px_bottom_-25px] w-[35px] h-[35px]"></button>
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

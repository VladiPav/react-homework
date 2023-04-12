import React from "react";
import PromoBar from "./PromoBar";
import logo from "../../assets/wallpaperit-Logo.png";

const Navbar = () => {
  return (
    <>
      <PromoBar />
      <div className="flex justify-evenly w-full items-center p-3">
        <button className="flex-none bg-no-repeat bg-sprite bg-[left_-45px_bottom_-25px] w-[35px] h-[35px]"></button>
        <button className="flex-none bg-no-repeat bg-sprite bg-[left_-58px_bottom_-52px] w-[35px] h-[35px]"></button>
        <img
          src={logo}
          alt="logo"
          className="flex-1 max-w-[130px] max-h-[55px]"
        />
        <button className="flex-none bg-no-repeat bg-sprite bg-[left_-8px_bottom_-52px] w-[35px] h-[35px]"></button>
        <button className="flex-none bg-no-repeat bg-sprite bg-[left_-2px_bottom_-5px] w-[35px] h-[35px]"></button>
      </div>
      <div className="bg-primary w-full h-1" />
    </>
  );
};

export default Navbar;

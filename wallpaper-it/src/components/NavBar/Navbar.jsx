import React from "react";
import PromoBar from "./PromoBar";
import logo from "../../assets/wallpaperit-Logo.png";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="sticky top-0 shadow-md">
      <div className="flex flex-col bg-white">
        <PromoBar />
        <div className="flex justify-between w-full items-center p-3">
          <div className="lg:hidden space-x-3">
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
            <button className="bg-no-repeat bg-sprite bg-[left_-58px_bottom_-52px] w-[35px] h-[35px]" />
          </div>
          <div className="lg:p-3">
            <img
              src={logo}
              alt="logo"
              className="max-w-[130px] max-h-[55px] lg:min-h-[55px] lg:min-w-[272px]"
            />
          </div>
          <div className="hidden lg:flex justify-between items-center px-2 rounded-full border-2 border-primary w-1/3 h-10">
            <p className="">Search for products...</p>
            <span className="bg-no-repeat bg-sprite bg-[left_-58px_bottom_-52px] w-[30px] h-[30px]" />
          </div>
          <div className="space-x-3 flex lg:justify-between lg:space-x-10">
            <span className="hidden lg:flex flex-col items-center">
              <button className="bg-no-repeat bg-sprite bg-[right_-35px_bottom_-58px] w-[35px] h-[35px]"></button>
              <p className="hidden lg:block">Sign In</p>
            </span>
            <span className="flex flex-col items-center">
              <button className="bg-no-repeat bg-sprite bg-[left_-8px_bottom_-52px] w-[35px] h-[35px]"></button>
              <p className="hidden lg:block">Wishlist</p>
            </span>
            <span className="flex flex-col items-center">
              <button className="bg-no-repeat bg-sprite bg-[left_-2px_bottom_-5px] w-[35px] h-[35px]"></button>
              <p className="hidden lg:block">Bag</p>
            </span>
          </div>
        </div>
        <div className="hidden relative lg:flex justify-around">
          <NavItem name="wallpaper" hasDownArrow={true} />
          <NavItem name="paint" hasDownArrow={true} />
          <NavItem name="brands" hasDownArrow={true} />
          <NavItem name="wall murals" hasDownArrow={false} />
          <NavItem
            name="wall art"
            hasDownArrow={true}
            children={
              <div className="flex justify-start space-x-5">
                <ul className="flex flex-col text-left">
                  <li className="font-bold font-[avenir] pb-2">
                    Shop By Colour
                  </li>
                  <li className="font-[avenir]">Canvas Wall Art</li>
                  <li className="font-[avenir]">Framed Wall Art</li>
                  <li className="font-[avenir]">Clocks</li>
                </ul>
                <ul className="flex flex-col text-left">
                  <li className="font-bold font-[avenir]">Shop By Colour</li>
                  <li className="font-[avenir]">Black</li>
                  <li className="font-[avenir]">Blue</li>
                  <li className="font-[avenir]">Brown</li>
                  <li className="font-[avenir]">Green</li>
                </ul>
              </div>
            }
          />
          <NavItem name="sale" hasDownArrow={false} />
        </div>
      </div>
      <div className={"bg-primary w-full h-1"} />
    </div>
  );
};

export default Navbar;

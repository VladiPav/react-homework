import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:grid lg:grid-cols-5 mb-9 md:p-10 bg-black text-white">
      <div className="lg:col-span-4">
        <div className="lg:grid lg:grid-cols-4">
          <div class="border-b border-dim-gray md:border-0 text-left">
            <button>Shopping with Us</button>
            <ul>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">
                Delivery and Returns
              </li>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">
                Wallpaper Sample Service
              </li>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">
                Privacy Policy
              </li>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">
                Terms & Conditions
              </li>
            </ul>
          </div>
          <div class="border-b border-dim-gray md:border-0 text-left">
            <button>Wallpaper Guides</button>
            <ul>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">
                Wallpaper FAQs
              </li>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">
                Wallpaper Guide
              </li>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">
                How to Hang Wallpaper
              </li>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">
                How to Remove Wallpaper
              </li>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">
                How to Hang a Wall Mural
              </li>
            </ul>
          </div>
          <div class="border-b border-dim-gray md:border-0 text-left">
            <button>Visit Us</button>
            <ul>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">
                Outlet Stores
              </li>
            </ul>
          </div>
          <div class="border-b border-dim-gray md:border-0 text-left">
            <button>How Can We Help?</button>
            <ul>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">
                Customer Service
              </li>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">Email Us</li>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">About Us</li>
              <li className="pb-5 px-4 text-16 md:px-0 font-light">Call Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

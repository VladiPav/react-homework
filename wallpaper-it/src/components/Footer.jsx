import React from "react";
import Accordion from "./Accordion";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:grid lg:grid-cols-5 mb-9 md:p-10 bg-black text-white">
      <div className="lg:col-span-4">
        <div className="lg:grid lg:grid-cols-4 text-left">
          <Accordion
            title="Shopping with Us"
            content={[
              "Delivery and Returns",
              "Wallpaper Sample Service",
              "Privacy Policy",
              "Terms & Conditions",
            ]}
          />
          <div className=" lg:hidden bg-secondary h-0.5 w-full"></div>
          <Accordion
            title="Wallpaper Guides"
            content={[
              "Wallpaper FAQs",
              "Wallpaper Guide",
              "How to Hang Wallpaper",
              "How to Remove Wallpaper",
              "How to Hang a Wall Mural",
            ]}
          />
          <div className=" lg:hidden bg-secondary h-0.5 w-full"></div>
          <Accordion title="Visit Us" content={["Outlet Stores"]} />
          <div className=" lg:hidden bg-secondary h-0.5 w-full"></div>
          <Accordion
            title="How Can We Help?"
            content={["Customer Service", "Email Us", "About Us", "Call U"]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

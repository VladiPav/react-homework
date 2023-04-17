import React from "react";

const Star = () => {
  return (
    <div className="flex justify-center items-center bg-green-500 h-10 w-full">
      <div className="bg-yellow-500 w-1/2 h-full"></div>
      <div className="bg-red-500 w-1/2 h-full"></div>
      <div className=" left-0 text-4xl bg-clip-text text-transparent">
        ★★★★★
      </div>
    </div>
  );
};

export default Star;

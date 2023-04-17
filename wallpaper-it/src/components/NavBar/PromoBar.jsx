import React, { useState } from "react";

const PromoBar = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <>
      {!isClosed && (
        <div id="promo-bar" className=" bg-primary p-1">
          <p className="flex items-center justify-center font-[avenir]">
            FREE DELIVERY* AND FREE RETURNS
          </p>
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 bg-no-repeat bg-sprite bg-[left_-42px_bottom_-10px] w-[35px] h-[35px]"
          ></button>
        </div>
      )}
    </>
  );
};

export default PromoBar;

import React, { useState } from "react";

const CookieFooter = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAcceptCookies = () => {
    setIsAccepted(true);
  };

  return (
    <div className="sticky bottom-0 w-full bg-white">
      {!isAccepted && (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center space-x-5 py-5">
          <p className="">
            This site uses cookies to improve your experience. By clicking, you
            agree to our Privacy Policy.
          </p>
          <button
            className=" rounded-3xl bg-primary p-3"
            onClick={handleAcceptCookies}
          >
            Accept Cookies
          </button>
        </div>
      )}
    </div>
  );
};

export default CookieFooter;

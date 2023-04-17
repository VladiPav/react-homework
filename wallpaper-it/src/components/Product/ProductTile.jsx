import React from "react";
import StarRating from "./StarRating";

const ProductTile = (props) => {
  const { name, price, img } = props;
  return (
    <article className="">
      <img src={img} alt="Missing"></img>
      <p className=" pt-2 text-left font-[avenir]">{name}</p>
      <div className="w-full flex justify-between">
        <p>£{(+price).toFixed(2)}</p>
        <button className="pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </div>
      <p className="text-left text-xs font-[avenir]">PER ROLL</p>
    </article>
  );
};

export default ProductTile;

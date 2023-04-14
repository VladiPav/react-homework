import React from "react";

const ProductTile = (props) => {
  const { name, price } = props;

  return (
    <article className="bg-red-500 m-3 p-3">
      <img className="p-4 flex flex-col justify-center gap-y-4" alt="alo"></img>
      <p className="">{name}</p>
      <div className="w-full flex justify-between items-center">
        <p>{price}</p>
        <button className="underline">Order example</button>
      </div>
      <p className="text-base uppercase">Per roll</p>
    </article>
  );
};

export default ProductTile;

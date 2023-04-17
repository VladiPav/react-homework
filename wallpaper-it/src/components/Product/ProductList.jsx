import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import ProductTile from "./ProductTile";

const ProductList = () => {
  const [products, setProducts] = useState();
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    fetch("https://tues-store.dev.uxperience.eu/wp-json/wc/v3/products", {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.REACT_APP_CLIENT_KEY}:${process.env.REACT_APP_SECRET_KEY}`
        ).toString("base64")}`,
      },
    })
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  if (!products) return <div className=" p-3">Loading...</div>;

  console.log(products);

  return (
    <div className="p-3">
      <div className="flex items-center justify-center py-3">
        <p className=" font-bold">Found:</p>
        <p className="">{products.length} results</p>
      </div>
      <div className="flex justify-between py-3">
        <button className=" bg-red-100 rounded-full px-12 py-2 text-12 uppercase">
          filter & sort
        </button>
        <div className="flex items-center mt-2.5">
          <span
            onClick={() => {
              setIsGrid(false);
              console.log(isGrid);
            }}
            className="opacity-20 w-6 h-6 mr-1.5 border border-black cursor-pointer"
          ></span>
          <span
            onClick={() => {
              setIsGrid(true);
              console.log(isGrid);
            }}
            className="w-6.5 h-6.5 flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 400"
              className="h-6 w-6"
            >
              <path
                stroke="#000"
                strokeDasharray="14 179"
                strokeWidth="400"
                d="M0 200h400M200 0v400"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div
        className={
          isGrid
            ? "flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4"
            : "flex flex-col"
        }
      >
        {products.map((product) => (
          <ProductTile
            key={product.id}
            name={product.name}
            price={product.price}
            img={product.images[0].src}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

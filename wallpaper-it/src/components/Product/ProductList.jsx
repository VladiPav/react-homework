import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import ProductTile from "./ProductTile";
import DownArrow from "../NavBar/DownArrow";

const sortType = {
  newest: "Newest - Oldest",
  priceIncreasing: "Price: Low - High",
  priceDecreasing: "Price: High - Low",
};

const ProductList = () => {
  const [products, setProducts] = useState();
  const [isGrid, setIsGrid] = useState(true);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const toggleOpenSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const handleSort = (type) => {
    switch (type) {
      case sortType.priceIncreasing:
        products.sort((a, b) => a.price - b.price);
        break;
      case sortType.priceDecreasing:
        products.sort((a, b) => b.price - a.price);
        break;
      case sortType.newest:
        products.sort(
          (a, b) =>
            new Date(a.date_created).getTime() -
            new Date(b.date_created).getTime()
        );
        break;
      default:
        return;
    }
  };

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
      <div className="flex items-center lg:justify-between justify-center py-3">
        <div className="flex items-center">
          <p className="font-bold">Found:</p>
          <p className="">{products.length} results</p>
        </div>
        <div className="hidden lg:flex justify-between space-x-3">
          <button className="flex">
            <div className="">Color</div>
            <DownArrow />
          </button>
          <button className="flex">
            <div className="">Brand</div>
            <DownArrow />
          </button>
          <button className="flex">
            <div className="">Design Style</div>
            <DownArrow />
          </button>
          <button
            className="flex relative"
            onClick={() => toggleOpenSortOptions()}
          >
            <div className="">Sort</div>
            <DownArrow />
            {showSortOptions && (
              <div className=" absolute -bottom-[75px] -left-[75px] border-black border-2  bg-white">
                <div
                  className="hover:bg-gray-300"
                  onClick={() => {
                    handleSort(sortType.newest);
                  }}
                >
                  Newest - Oldest
                </div>
                <div
                  className="hover:bg-gray-300"
                  onClick={() => {
                    handleSort(sortType.priceIncreasing);
                  }}
                >
                  Price: Low - High
                </div>
                <div
                  className="hover:bg-gray-300"
                  onClick={() => {
                    handleSort(sortType.priceDecreasing);
                  }}
                >
                  Price: High - Low
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
      <hr className="bg-primary h-0.5"></hr>
      <div className="lg:hidden flex justify-between py-3">
        <button className=" bg-red-100 rounded-full px-12 py-2 text-12 uppercase">
          filter & sort
        </button>
        <div className="flex items-center mt-2.5">
          <span
            onClick={() => {
              setIsGrid(false);
            }}
            className="opacity-20 w-6 h-6 mr-1.5 border border-black cursor-pointer"
          ></span>
          <span
            onClick={() => {
              setIsGrid(true);
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
            rating={Math.random() * 5}
            img={product.images[0].src}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

import React from "react";
import { useEffect } from "react";
import ProductTile from "./ProductTile";

const ProductList = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=10&_limit=10");
  }, []);

  let itemCount = 10;

  return (
    <>
      <div className="flex items-center justify-center py-3">
        <p className=" font-bold">Found:</p>
        <p className="">{itemCount} results</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row">
        <ProductTile name="Product" price="$20.00" />
        <ProductTile name="Product1" price="$21.00" />
        <ProductTile name="Product2" price="$22.00" />
        <ProductTile name="Product3" price="$23.00" />
        <ProductTile name="Product4" price="$24.00" />
        <ProductTile name="Product5" price="$25.00" />
        <ProductTile name="Product6" price="$26.00" />
        <ProductTile name="Product7" price="$27.00" />
        <ProductTile name="Product8" price="$28.00" />
        <ProductTile name="Product9" price="$29.00" />
      </div>
    </>
  );
};

export default ProductList;

import "./App.css";
import Header from "./components/Header";

import React from "react";
import ProductList from "./components/Product/ProductList";
import Footer from "./components/Footer";
import CookieFooter from "./components/CookieFooter";
import Navbar from "./components/NavBar/Navbar";
import RollingPromoBar from "./components/RollingPromoBar";
import StarRating from "./components/Product/StarRating";

const App = () => {
  return (
    <div className="App min-h-screen w-full ">
      <Navbar />
      <RollingPromoBar />
      <Header />
      <ProductList />
      <Footer />
      <CookieFooter />
    </div>
  );
};

export default App;

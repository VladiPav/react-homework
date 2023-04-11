import './App.css';
import Header from './components/Header';

import React from 'react'
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import CookieFooter from './components/CookieFooter';

const App = () => {
  return (
    <div className="App min-h-screen w-full ">
      <Header />
      <ProductList />
      <Footer />
      <CookieFooter/>
    </div>
  )
}

export default App;

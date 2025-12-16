import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarr from "./components/Navbar/Navbarr";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import ShopCards from "./components/ShopCards/ShopCards";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/Footer/Footer";

import "./index.css"; 

function App() {
  return (
    <BrowserRouter>
      <Navbarr />
      <Hero/>
      <Categories/>
      <About/>
      <ShopCards/>
      <FeaturedProducts/>
      <WhyChooseUs/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
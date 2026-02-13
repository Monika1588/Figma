import React from "react";
import "./Hero.css";

function Hero(){
  return (
    <section className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}>
        <div className="hero-overlay">
          <h1>Best Practices For Maintaining Your Pet’s Coat And Hygiene</h1>
          <p>This Provides Essential Tips And Techniques To Ensure 
          Your Pet's Fur And Skin Stay Healthy And Clean.</p>
          <button className="btn">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

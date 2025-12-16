import React from "react";
import "./FeaturedProducts.css";

const products = [
  { img: "/images/dog1.png" },
  { img: "/images/dog2.png" },
  { img: "/images/dog3.png" },
  { img: "/images/dog4.png" },
  { img: "/images/cat1.png" },
  { img: "/images/cat2.png" },
  { img: "/images/cat3.png" },
  { img: "/images/cat4.png" }
];

function FeaturedProducts(){
  return (
    <div className="featured-section">
      <div className="featured-header">
        <h2>Featured Product</h2>
        <span className="see-all"><b>See all</b></span>
      </div>

      <div className="featured-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>

            <img src={item.img} alt="Pet" className="base-img" />

            <img
              src="/images/dogoverlay.png"
              alt="Overlay"
              className="overlay-img"
            />

            <div className="overlay-content">
              <button>View Details</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

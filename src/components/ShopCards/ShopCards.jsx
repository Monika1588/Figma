import React from "react";
import "./ShopCards.css";

function ShopCards(){
  return (
    <div className="shop-grid">

      <div className="promo-card">
        <img
          src="/images/Rectangle 3.png"
          alt="Dog grooming"
          className="base-img"
        />

        <img
          src="/images/Rectangle4.png"
          alt="Overlay"
          className="overlay-img"
        />

        <div className="content">
          <h3>
            Pamper Your Pets Must-Have Items for <br />
            Happy and Healthy Pets
          </h3>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="promo-card">

        <img
          src="/images/Rectangle 3 (1).png"
          alt="Pet love"
          className="base-img"
        />

        <img
          src="/images/Rectangle4(1).png"
          alt="Overlay"
          className="overlay-img"
        />

        <div className="content">
          <h3>
            Discover the Best Products for Your <br />
            Beloved Companions
          </h3>
          <button>Shop Now</button>
        </div>
      </div>

    </div>
  );
};

export default ShopCards;

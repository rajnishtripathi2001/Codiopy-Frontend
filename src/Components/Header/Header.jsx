import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="hero-upper">
        <div className="left">
          <img src="codiopy-logo.png" alt="logo" />
          Elevate Your Online Presence with Codiopy
          <p>Design. Innovate. Excel. </p>
        </div>
        <div className="right"></div>
      </div>
      <div className="hero-down">
        <div className="hero-down-tag">Crafted for leadership.</div>
        <div className="hero-down-rating">
          <b>8.0*</b>
          <p>Average Platform specialists rating.</p>
          </div>
        <div className="hero-down-base-price">
          <b>$10</b>
          <p>Base Price</p>
          </div>
        <div className="hero-down-total-order">
          <b>1M+</b>
          <p>Online-order our product last month</p>
          </div>
      </div>
    </div>
  );
}

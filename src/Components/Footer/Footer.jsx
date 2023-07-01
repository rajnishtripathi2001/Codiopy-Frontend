import React from "react";
import "./Footer.css";
import { FaFacebook, FaGoogle, FaGooglePlus, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-upper">
        <div className="footer-left">
          <div className="footer-left-top">
            <h4>Your Logo</h4>
            <p>Your Tagline here</p>
          </div>

          <div className="footer-left-bottom">
            <h2>About Us</h2>
            <p>We want to help you find the best products for your needs.</p>
             
            <h2>Contact Us</h2>
            <p id="contact-source">Phone : 123-456-7890</p>
            <p id="contact-source">Email : rakshd@hmla.com</p>
          </div>

        </div>
        <div className="footer-center">
          <h2>Informations</h2>
          <p>About Us</p>
          <p>Blog</p>
          <p>Testimonoals</p>
          <p>Events</p>
        </div>
        <div className="footer-right">
          <h2>Helpful Links</h2>
          <p>Services</p>
          <p>Supports</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="subscribe">
          <h3>Subscribe more info</h3>
          <input type="email" name="email" id="email" />
          <button className="btn-subscribe">Subscribe</button>
        </div>
      </div>


      <br />
      <hr />
      <br />

      <div className="footer-lower">
        <FaFacebook />
        <FaGooglePlus/>
        <FaTwitter/>
        <FaInstagram/>
      </div>
      <p className="crs">2023 © Copyright Codiopy. All Rights Reserved </p>
    </div>
  );
}

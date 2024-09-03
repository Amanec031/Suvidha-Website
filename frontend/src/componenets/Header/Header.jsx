import React from "react";
import HeroImage from "../../assets/hero-img.webp";
import "./Header.css";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <div className="hero-image">
        <img src={HeroImage} className="hero-img" alt="hero" />
      </div>
      <div className="hero-text">
        <div className="text-container">
          <h1 className="hero-title mb-3">Welcome to Suvidha OverSeas</h1>
          <div className="my-md-4 d-flex align-items-center flex-column">
            <p className="hero-subtitle">" We Empower your Dreams "</p>
            <p className="hero-description">
              - Study abroad along with us and reach new heights.
            </p>
          </div>
          <div className="">
            <Link to="/services"><button className="service-btn">Our Services</button></Link>
            <Link to="/enquiry-form" className="enquire-btn">Enquire</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

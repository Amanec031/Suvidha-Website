// AboutUs.js
import React from "react";
import "./AboutUs.css";
import aboutImage from "../../assets/hero-img.jpg";
import about2Image from "../../assets/college.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <section className="about-us">
        <div className="row">
          <div className="about-col col-md-6">
            <img src={aboutImage} alt="About" />
          </div>
          <div className="about-col pt-3 pt-md-0 col-md-6">
            <h1>We are the world's largest university</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam
            </p>
            <Link to="/" className="hero-btn red-btn">
              EXPLORE NOW
            </Link>
          </div>
          
        </div>
      </section>
      <section className="about-us">
        <div className="row">
          
          <div className="about-col pt-3 pt-md-0 col-md-6">
            <h1>We are the world's largest university</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam
            </p>
            <Link to="/" className="hero-btn red-btn">
              EXPLORE NOW
            </Link>
          </div>
          <div className="about-col col-md-6">
            <img src={about2Image} alt="About" />
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default AboutUs;

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import fblogo from "../../assets/fblogo.png";
import iglogo from "../../assets/iglogo.png";
import linkedinlogo from "../../assets/linkedinlogo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h3>Contact Details</h3>
        <p>Vazhra Nirman Pushpak C block 701, Blooming dale road
          Nizampet, 500090
        </p>
        <p className="mt-3">Email: info@suvidhaoverseas.org</p>
        <p>Phone: +918087249616</p>
      </div>

      <div className="column">
        <h3>Redirection Links</h3>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/enquiry-form">Enquiry Form</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact-us" className="contact-from">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Exams</h3>
        <ul>
          <li>
            <Link to="/exams/ielts">IELTS</Link>
          </li>
          <li>
            <Link to="/exams/gre">GRE</Link>
          </li>
        </ul>
      </div>

      <div className="column">
        <h3>Social Links</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61553478092558&mibextid=LQQJ4d"><img src={fblogo} width="20" height="20" alt="fblogo"></img> <span>Facebook</span></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/suvidha-overseas/"><img src={iglogo} width="20" height="20" alt="iglogo"></img> <span>LinkedIn</span></a>
          </li>
          <li>
            <a href="https://www.instagram.com/suvidha.overseas?igsh=YXFtdTdxem9xMG42"><img src={linkedinlogo} width="20" height="20" alt="linkedinlogo"></img> <span>Instagram</span></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

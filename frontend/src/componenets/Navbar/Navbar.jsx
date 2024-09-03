import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../assets/Main_Logo/Main_Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [examDropdownOpen, setExamDropdownOpen] = useState(false);

  const handleExamMouseEnter = () => {
    setExamDropdownOpen(true);
  };

  const handleExamMouseLeave = () => {
    setExamDropdownOpen(false);
  };

    const [DropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };


  return (
    <nav className="navbar shadow-xl justify-content-between navbar-expand-lg nav-main-container navbar-light px-md-5 px-2 py-0">
      <Link
        style={{ textDecoration: "none" }}
        className="navbar-brand py-3"
        to="/"
      >
        <img
          style={{ textDecoration: "none" }}
          src={MainLogo}
          width="60"
          height="auto"
          alt="logo"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ backgroundColor: "#fff" }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item px-3">
            <Link className="nav-link" to="/" >
              Home
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link" to="/about-us">
              About Us
            </Link>
          </li>
          <li
            className={`nav-item dropdown px-3 ${examDropdownOpen ? "show" : ""
              }`}
            onMouseEnter={handleExamMouseEnter}
            onMouseLeave={handleExamMouseLeave}
          >
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
            >
              Exams
            </span>
            <div
              className={`dropdown-menu ${examDropdownOpen ? "show" : ""}`}
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/exams/gre">
                Free IELTS MasterClass
              </Link>
            
              <div>

{/* Hehehe */}
<li
className={`nav-item dropright px-3 ${
DropdownOpen ? "show" : ""
}`}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>
<span
className="nav-link dropdown-toggle"
id="navbarDropdownMenuLink"
>
IELTS
</span>


<div
className={`dropdown-menu ${DropdownOpen ? "show" : ""}`}
aria-labelledby="navbarDropdownMenuLink"
>
<Link className="dropdown-item" to="/exams/ielts">
IELTS Module Overview
</Link>
<Link className="dropdown-item" to="/exams/ielts/speaking">
Speaking Details
</Link>
<Link className="dropdown-item" to="exams/ielts/listening">
Listening Details
</Link>
<Link className="dropdown-item" to="/exams/ielts/writing">
Writing Details
</Link>
<Link className="dropdown-item" to="/exams/ielts/reading">
Reading Details
</Link>
</div>
</li>
{/* Heheheh */}

   </div>

            </div>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link" to="/enquiry-form">
              Enquiry Form
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link" to="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
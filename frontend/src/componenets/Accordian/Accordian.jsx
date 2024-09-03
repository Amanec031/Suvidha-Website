// Accordian.js
import React, { useState } from "react";
import "./Accordian.css";
import apiData from "./api";
import Accord from "../../assets/Main_Logo/Accord.png";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderItems = apiData.map((item) => {
    const isActive = item.id === activeIndex;
    const contentClassName = `content ${isActive ? "active" : ""}`;

    return (
      <div key={item.id} className="item">
    
        <div
          className={`title ${isActive ? "active" : ""}`}
          onClick={() => onTitleClick(item.id)}
        >
          {item.question}
        </div>
        <div className={contentClassName}>
          {isActive && <p>{item.answer}</p>}
        </div>
      </div>
    );
  });

  return (
    <div className="section-background">
    <div className="container">
     <header className="header">
        <h2>FAQ's</h2>
        <p>Got any questions? Learn more about us.</p>
      </header>
      <div className="image row p-3 p-md-5 g-5 ">
        <img src={Accord} alt="Left Half Image" />
      </div>
      <div className="accordian p-3 p-md-5 g-5">{renderItems}</div>
    </div>
    </div>
  );
};

export default Accordian;


// Updated Slider.jsx
import React, { useState } from 'react';
import './Slider.css';



const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

    const slidesData = [
      {
        image: 'https://i.ibb.co/qCkd9jS/img1.jpg',
        name: 'Switzerland',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
      },
      {
        image: 'https://i.ibb.co/jrRb11q/img2.jpg',
        name: 'Finland',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
      },
      {
        image: 'https://i.ibb.co/NSwVv8D/img3.jpg',
        name: 'Iceland',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
      },
      {
        image: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
        name: 'Australia',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
      },
      {
        image: 'https://i.ibb.co/jTQfmTq/img5.jpg',
        name: 'Netherlands',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
      },
      {
        image: 'https://i.ibb.co/RNkk6L0/img6.jpg',
        name: 'Ireland',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!'
      }
    ];
  return (
    <div className="slider-container">
      <div className="slide">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`item ${currentIndex === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="content">
              <div className="name">{slide.name}</div>
              <div className="des">{slide.description}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={handlePrev}>Previous</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Slider;

import React from "react";
import "./State.css";
import HeroImage from "../../assets/hero-img.webp";
import { useParams } from "react-router-dom";
import TpImage from "../../assets/canada.avif";
import { useState, useEffect } from "react";



const State = () => {
  const data = {
    usa: {
      sections: [
        {
          title: "Section 1",
          imageSrc: TpImage,
          subtitle: "Subtitle 1",
          description: "Description 1",
        },
        {
          title: "Section 2",
          imageSrc: HeroImage,
          subtitle: "Subtitle 2",
          description: "Description 2",
        },
      ],
    },
    canada: {
      sections: [
        {
          title: "Section 1",
          imageSrc: HeroImage,
          subtitle: "Subtitle 1",
          description: "Description 1",
        },
        {
          title: "Section 2",
          imageSrc: TpImage,
          subtitle: "Subtitle 2",
          description: "Description 2",
        },
      ],
    },
    england: {
      sections: [
        {
          title: "England",
          imageSrc: "../../assets/hero-img.webp",
          subtitle: "Subtitle 1",
          description: "Description 1",
        },
        {
          title: "Section 2",
          imageSrc: "../../assets/hero-img.webp",
          subtitle: "Subtitle 2",
          description: "Description 2",
        },
      ],
    },
    new_zealand: {
      sections: [
        {
          title: "Section 1",
          imageSrc: "../../assets/hero-img.webp",
          subtitle: "Subtitle 1",
          description: "Description 1",
        },
        {
          title: "Section 2",
          imageSrc: "../../assets/hero-img.webp",
          subtitle: "Subtitle 2",
          description: "Description 2",
        },
      ],
    },
    germany: {
      sections: [
        {
          title: "Section 1",
          imageSrc: "../../assets/hero-img.webp",
          subtitle: "Subtitle 1",
          description: "Description 1",
        },
        {
          title: "Section 2",
          imageSrc: "../../assets/hero-img.webp",
          subtitle: "Subtitle 2",
          description: "Description 2",
        },
      ],
    },
    australia: {
      sections: [
        {
          title: "Section 1",
          imageSrc: "../../assets/hero-img.webp",
          subtitle: "Subtitle 1",
          description: "Description 1",
        },
        {
          title: "Section 2",
          imageSrc: "../../assets/hero-img.webp",
          subtitle: "Subtitle 2",
          description: "Description 2",
        },
      ],
    },
  };

  const { destination } = useParams();
  const [content, setContent] = useState();

  useEffect(() => {
    const destinationData = data[destination];

    setContent(destinationData);

    console.log(destinationData);
  }, [destination]);

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
            <button className="service-btn">Our Services</button>
            <button className="enquire-btn">Enquire</button>
          </div>
        </div>
      </div>

      {content &&
        content.sections &&
        content.sections.map((section, index) => (
          <div key={index} className="row p-3 p-md-5 g-5">
            {index % 2 === 0 ? (
              <>
                <div className="col-md-5">
                  <img
                    src={section.imageSrc}
                    width="100%"
                    style={{ maxHeight: "400px" }}
                    alt={`section-${index}`}
                  />
                </div>
                <div className="col-md-7">
                  <h1>{section.title}</h1>
                  <p>{section.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-7 order-2 order-md-1">
                  <h1>{section.title}</h1>
                  <p>{section.description}</p>
                </div>
                <div className="col-md-5 order-1 order-md-2">
                  <img
                    src={section.imageSrc}
                    width="100%"
                    style={{ maxHeight: "400px" }}
                    alt={`section-${index}`}
                  />
                </div>
              </>
            )}
          </div>
        ))}
        <div>
        AMAN
        </div>


    </div>
  );
};

export default State;


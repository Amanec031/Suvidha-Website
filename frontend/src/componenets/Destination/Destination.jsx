// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Destination.css";
// import AmericaImage from "../../assets/america.jpg";
// import UkImage from "../../assets/uk.avif";
// import AustraliaImage from "../../assets/australia.webp";
// import CanadaImage from "../../assets/canada.avif";
// import GermanyImage from "../../assets/germany.jpg";
// import NewZealandImage from "../../assets/new_zealand.jpg";

// const CampusCol = ({ imgSrc, title }) => {
//   return (
//     <div className="campus-col m-3">
//       <img src={imgSrc} alt={title} style={{ height: "300px" }} />
//       <div className="layer">
//         <h2>{title}</h2>
//         <p>Explore popular universities in {title}</p>
//         <button>Explore</button>
//       </div>
//     </div>
//   );
// };

// const Destination = () => {
//   const campusData = [
//     { imgSrc: AmericaImage, title: "United States" },
//     { imgSrc: UkImage, title: "England" },
//     { imgSrc: AustraliaImage, title: "Australia" },
//     { imgSrc: CanadaImage, title: "Canada" },
//     { imgSrc: GermanyImage, title: "Germany" },
//     { imgSrc: NewZealandImage, title: "New Zealand" },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     margin: 20,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       <section className="campus mb-5">
//         <h1 style={{ padding: "0px 10px 0px 10px" }}>
//           Top Study Abroad Destination
//         </h1>
//         <p>Study in best Universities accross the world</p>
//         <Slider {...settings}>
//           {campusData.map((campus, index) => (
//             <CampusCol
//               key={index}
//               imgSrc={campus.imgSrc}
//               title={campus.title}
//             />
//           ))}
//         </Slider>
//       </section>
//     </div>
//   );
// };

// export default Destination;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Destination.css";
import AmericaImage from "../../assets/america.jpg";
import UkImage from "../../assets/uk.avif";
import AustraliaImage from "../../assets/australia.webp";
import CanadaImage from "../../assets/canada.avif";
import GermanyImage from "../../assets/germany.jpg";
import NewZealandImage from "../../assets/new_zealand.jpg";
import { Link } from "react-router-dom";

const CampusCol = ({ imgSrc, title, param }) => {
  return (
    <div className="campus-col m-3">
      <img src={imgSrc} alt={title} style={{ height: "300px" }} />
      <div className="layer">
        <h2>{title}</h2>
        <p>Explore popular universities in {title}</p>
        {/* Use Link to navigate to the "connect" page */}
        <Link to={`/state/${param}`}>
          <button>Explore</button>
        </Link>
      </div>
    </div>
  );
};

const Destination = () => {
  const campusData = [
    { imgSrc: AmericaImage, title: "United States", param: "usa" },
    { imgSrc: GermanyImage, title: "Germany", param: "germany" },
    { imgSrc: UkImage, title: "England", param: "england" },
    { imgSrc: CanadaImage, title: "Canada", param: "canada" },
    { imgSrc: NewZealandImage, title: "New Zealand", param: "new_zealand" },
    { imgSrc: AustraliaImage, title: "Australia", param: "australia" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 20,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div>
      <section className="campus mb-5">
        <h1 style={{ padding: "0px 10px 0px 10px" }}>
          Top Study Abroad Destination
        </h1>
        <p>Study in best Universities accross the world</p>
        <Slider {...settings}>
          {campusData.map((campus, index) => (
            <CampusCol
              key={index}
              imgSrc={campus.imgSrc}
              title={campus.title}
              param={campus.param}
            />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Destination;
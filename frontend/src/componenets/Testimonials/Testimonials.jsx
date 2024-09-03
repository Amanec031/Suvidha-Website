import React from "react";
import "./Testimonials.css"; // Import your CSS file
import Testimonial1 from "../../assets/user1.jpg";
import Testimonial2 from "../../assets/user2.jpg";
import Testimonial3 from "../../assets/user1.jpg";
import Testimonial4 from "../../assets/user2.jpg";
import Testimonial5 from "../../assets/user1.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      imgSrc: Testimonial1,
      text: "Studying abroad with XYZ Company was a truly transformative and enriching experience! The unwavering support and guidance provided by the dedicated team were nothing short of exceptional. It was more than just education; it was a journey of personal and academic growth.",
      author: "Angel Singh",
      stars: [1, 1, 1, 1, 0.5],
    },
    {
      imgSrc: Testimonial2,
      text: "My heartfelt gratitude to XYZ Company for making my dream of studying abroad a reality. The entire process, from application to settling into a new academic environment, was impeccably smooth. The team's meticulous attention to detail and commitment to excellence set them apart.",
      author: "Aditya Rai",
      stars: [1, 1, 1, 1, 0],
    },
    {
      imgSrc: Testimonial3,
      text: "Choosing XYZ Company for my overseas studies was undeniably the best decision of my academic journey. Their seamless and comprehensive support, from the initial application stages to navigating the nuances of settling in a new country, made the entire experience unforgettable.",
      author: "Rahul Singh",
      stars: [1, 1, 1, 1, 1],
    },
    // {
    //   imgSrc: Testimonial4,
    //   text: "XYZ Company exceeded my expectations in assisting me with my studies abroad. Their personalized approach and attention to detail set them apart. ",
    //   author: "Aman Singh",
    //   stars: [1, 1, 1, 1, 1],
    // },
    // {
    //   imgSrc: Testimonial5,
    //   text: "I'm grateful to XYZ Company for making my international education journey memorable. The comprehensive support and valuable insights provided by the team were invaluable. ",
    //   author: "Piyush Rajput",
    //   stars: [1, 1, 1, 1, 1],
    // },
  ];

  return (
    <section className="testimonials w-100">
      <h1>What Our Students Say</h1>
      <p className="p-0 m-0">
        Discover the experiences of students who studied abroad with XYZ
        Company.
      </p>
      <div className="row d-flex align-items-center justify-content-center test-container">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCol key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCol = ({ imgSrc, text, author, stars }) => {
  return (
    <div className="col-md-6 col-sm-6 col-12 g-5">
      <div className="testimonials-col">
        <img src={imgSrc} alt="" />
        <div>
          <p>{text}</p>
          <h3>{author}</h3>
          <div className="star-rating">
            {stars.map((star, index) => (
              <i
                key={index}
                className={`fa ${star === 1 ? "fa-star" : "fa-star-half-o"}`}
              ></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

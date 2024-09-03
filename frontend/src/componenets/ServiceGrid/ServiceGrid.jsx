import React from "react";
import UserImg from "../../assets/Services/7566.jpg";
import styles from "./ServiceGrid.css";

const ServiceGrid = () => {
  // Example data for alternate flex direction
  const items = [
    {
      heading: "SOP Review",
      para: "Thorough review and feedback on your Statement of Purpose (SOP) for university applications.",
      offerings: [
        "Detailed analysis and critique of your Statement of Purpose.",
        "Customized suggestions to enhance content and presentation.",
        "Guidance on aligning your SOP with university requirements.",
      ],
      imageUrl: UserImg,
    },
    {
      heading: "Visa Help",
      para: "Assistance and guidance in the visa application process for studying abroad.",
      offerings: [
        "Assistance in preparing necessary documents for visa applications.",
        "Guidance on fulfilling visa requirements and procedures.",
        "Expert advice and support to address visa-related queries and concerns.",
      ],
      imageUrl: UserImg,
    },
    {
      heading: "Financial Planning",
      para: "Personalized support and guidance in financial planning for education expenses abroad.",
      offerings: [
        "Tailored financial guidance for educational expenses.",
        "Assistance in creating a budget and managing expenses.",
        "Support in exploring funding options and scholarships.",
      ],
      imageUrl: UserImg,
    },
    {
      heading: "Scholarship Application Assistance",
      para: "Comprehensive aid in applying for scholarships to fund your education abroad through our NGO.",
      offerings: [
        "Tailored aid in identifying suitable scholarships.",
        "Assistance in crafting compelling scholarship essays.",
        "Support throughout the application process.",
      ],
      imageUrl: UserImg,
    },
    {
      heading: "Educational Counseling",
      para: "Personalized guidance sessions to help you make informed decisions about your overseas education.",
      offerings: [
        "Tailored advice for academic pathways abroad.",
        "Support for university selection and application.",
        "Assistance in adapting to a new educational environment.",
      ],
      imageUrl: UserImg,
    },
    {
      heading: "Language Support Program",
      para: "Specialized language training tailored to assist you in adapting to a new educational environment.",
      offerings: [
        "Tailored language training for educational integration.",
        "Assistance in adapting to diverse language requirements.",
        "Personalized support for a smooth linguistic transition.",
      ],
      imageUrl: UserImg,
    },
    {
      heading: "Community Outreach Programs",
      para: "Engage in volunteer activities and community projects as part of our educational initiatives.",
      offerings: [
        "Participate in meaningful volunteer activities.",
        "Contribute to community-based projects.",
        "Support educational initiatives through community engagement.",
      ],
      imageUrl: UserImg,
    },
    {
      heading: "Mentorship Program",
      para: "Access to experienced mentors who provide guidance throughout your educational journey abroad.",
      offerings: [
        "Personalized guidance from experienced mentors.",
        "Ongoing support for your educational endeavors.",
        "Tailored advice for your educational path.",
      ],
      imageUrl: UserImg,
    },
    {
      heading: "Cultural Exchange Initiatives",
      para: "Participate in cultural exchange events fostering global understanding and appreciation.",
      offerings: [
        "Engage in diverse cultural events enhancing global awareness.",
        "Foster cross-cultural understanding through interactive programs.",
        "Experience various traditions, promoting global appreciation.",
      ],
      imageUrl: UserImg,
    },
    // Add more items as needed
  ];

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`service-container ${index % 2 === 0 ? "even" : "odd"}`}
        >
          <div className="service-content">
            <div className="service-img">
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="service-text">
              <div className="serv-student">
                <h2 className="serve-student-heading">{item.heading}</h2>
                <p className="serve-student-para">{item.para}</p>
                <h6 className="serve-student-heading2">Offerings</h6>
                <ul className="custom-list">
                  {item.offerings.map((offering, idx) => (
                    <li key={idx}>{offering}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
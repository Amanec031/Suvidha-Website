import React from "react";
import "./ServicesHome.css";
import VisaHelp from "../../assets/visahelp.png";
import Ielts from "../../assets/ieltsicon.png";
import GetaCoach from "../../assets/getacoach.png";
import ShortlistCollege from "../../assets/shortlistcollege.png";
import FinancialPlanning from "../../assets/financialplanning.png";
import SopReview from "../../assets/sopreview.png";

const ServicesHome = () => {
  const servicesData = [
    { icon: VisaHelp, title: "Crack IELTS" },
    { icon: GetaCoach, title: "Get a Coach" },
    { icon: ShortlistCollege, title: "Shortlist College" },
    { icon: FinancialPlanning, title: "Financial Planning" },
    { icon: SopReview, title: "SOP Review" },
    { icon: Ielts, title: "Visa Help" },
  ];

  const halfLength = Math.ceil(servicesData.length / 2);
  const firstHalf = servicesData.slice(0, halfLength);
  const secondHalf = servicesData.slice(halfLength);

  return (
    <div>
      <a href="https://forms.gle/394MtigdFQy4HtAv6" target="_blank" >
        <div className="main-container p-5 p-md-0 w-100 text-center d-sm-flex align-items-center flex-column justify-content-center ">
          <h1>Services We Offer</h1>
          <div className="row w-100 g-md-5 g-2 mt-md-2 mb-md-4 mb-2 d-flex justify-content-center ">
            {firstHalf.map((service, index) => (
              <div className="col-md-3" key={index}>
                <ServiceCol icon={service.icon} title={service.title} />
              </div>
            ))}
          </div>
          <div className="row w-100 g-md-5 g-2 d-flex justify-content-center ">
            {secondHalf.map((service, index) => (
              <div className="col-md-3" key={index}>
                <ServiceCol icon={service.icon} title={service.title} />
              </div>
            ))}
          </div>
        </div></a>
    </div>
  );
};

const ServiceCol = ({ icon, title }) => {
  return (
    <div className="card">
      <div className="card-body">
        <img className="card-icon" src={icon} alt={title} />
        <h3 className="mt-3">{title}</h3>
        <p className="start-btn mt-3">
          Start Now <i className="fas fa-arrow-right" ></i>
        </p>
      </div>
    </div>
  );
};

export default ServicesHome;

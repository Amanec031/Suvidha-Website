import React from "react";
import Header from "../../componenets/Header/Header";
import Destination from "../../componenets/Destination/Destination";
import Testimonials from "../../componenets/Testimonials/Testimonials";
import ServicesHome from "../../componenets/Services-Home/ServicesHome";
import Accordian from "../../componenets/Accordian/Accordian";
import UniversitySection from "../../componenets/UniversitySection/UniversitySection";

const Home = () => {
  return (
    <div>
      <Header />
      <Destination />
      <Testimonials />
      <ServicesHome />
      <Accordian />
      <UniversitySection />
    </div>
  );
};

export default Home;

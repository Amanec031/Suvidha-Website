import React from "react";
import Service from "../../componenets/Service/Service";
import ServiceGrid from "../../componenets/ServiceGrid/ServiceGrid";
import './Services.css';
import Counseling from '../../assets/Services/Counseling.png'
import culturalExchange from '../../assets/Services/culturalExchange.png'
import language from '../../assets/Services/language.png'
import mentorship from '../../assets/Services/mentorship.png'
import outreach from '../../assets/Services/outreach.png'
import scholarship from '../../assets/Services/sholarship.png'
import sop from '../../assets/Services/sop.png'
import visa from '../../assets/Services/visa.png'
import planning from '../../assets/Services/planning.png'





const Services = () => {

  const services = [
    {
      title: 'SOP Review',
      description: 'Thorough review and feedback on your Statement of Purpose (SOP) for university applications.',
      icon: sop
    },
    {
      title: 'Visa Help',
      description: 'Assistance and guidance in the visa application process for studying abroad.',
      icon: visa
    },
    {
      title: 'Financial Planning',
      description: 'Personalized support and guidance in financial planning for education expenses abroad.',
      icon: planning
    },
    {
      title: 'Scholarship Application Assistance',
      description: 'Comprehensive aid in applying for scholarships to fund your education abroad through our NGO.',
      icon: scholarship
    },
    {
      title: 'Educational Counseling',
      description: 'Personalized guidance sessions to help you make informed decisions about your overseas education.',
      icon: Counseling
    },
    {
      title: 'Language Support Program',
      description: 'Specialized language training tailored to assist you in adapting to a new educational environment.',
      icon: language
    },
    {
      title: 'Community Outreach Programs',
      description: 'Engage in volunteer activities and community projects as part of our educational initiatives.',
      icon: outreach
    },
    {
      title: 'Mentorship Program',
      description: 'Access to experienced mentors who provide guidance throughout your educational journey abroad.',
      icon: mentorship
    },
    {
      title: 'Cultural Exchange Initiatives',
      description: 'Participate in cultural exchange events fostering global understanding and appreciation.',
      icon: culturalExchange
    }
  ];


  return <>

    <div className="main-service">

      <h1 className="section-heading">Services </h1>
      <p className="section-para">"Empowering dreams worldwide: Our tailored services unlock boundless opportunities."</p>
      <div className="serviceCards">
        {services.map((service, index) => (
          <Service
            key={index}
            title={service.title}
            description={service.description}
            myurl={service.icon}
          />
        ))}
      </div>

    </div>

    <ServiceGrid />
  </>
};

export default Services;
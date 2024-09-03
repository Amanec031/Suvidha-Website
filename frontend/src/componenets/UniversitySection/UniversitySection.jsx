import React from "react";
import "./UniversitySection.css"; // Import the corresponding CSS file
import logo1 from '../../assets/university_images/w1.webp';
import logo2 from '../../assets/university_images/w2.webp';
import logo3 from '../../assets/university_images/w3.webp';
import logo4 from '../../assets/university_images/w4.webp';
import logo5 from '../../assets/university_images/w5.webp';
import logo6 from '../../assets/university_images/w6.webp';
import logo7 from '../../assets/university_images/w7.webp';
import logo8 from '../../assets/university_images/w8.webp';
import logo9 from '../../assets/university_images/w9.webp';

const UniversitySection = () => {
    return (
        <div className="logos">
            <div className="logos-slide">
                <img src={logo1} alt="University1" />
                <img src={logo2} alt="University2"/>
                <img src={logo3} alt="University3" />
                <img src={logo4} alt="University4" />
                <img src={logo5} alt="University5" />
                <img src={logo6} alt="University6"/>
                <img src={logo7} alt="University7" />
                <img src={logo8} alt="University8" />
                <img src={logo9} alt="University9" />
            </div>
            <div className="logos-slide">
                <img src={logo1} alt="University1" />
                <img src={logo2} alt="University2"/>
                <img src={logo3} alt="University3" />
                <img src={logo4} alt="University4" />
                <img src={logo5} alt="University5" />
                <img src={logo6} alt="University6"/>
                <img src={logo7} alt="University7" />
                <img src={logo8} alt="University8" />
                <img src={logo9} alt="University9" />
            </div>
        </div>
    );
};

export default UniversitySection;

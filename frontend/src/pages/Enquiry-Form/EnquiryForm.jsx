import React from 'react';
import './EnquiryForm.css';

const EnquiryForm = () => {
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formEle);
    console.log("Form Data:", formData);

    fetch("",
      {
        method: "POST",
        body: formData
      })
      .then((res) => {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return res.json();
        } else {
          return res.text();
        }
      })
      .then((data) => {
        if (typeof data === 'string') {
          console.log("Non-JSON Response:", data);
        } else {
          console.log("Response Data:", data);
        }
        if (data) {
          console.log("Form submitted successfully");
          window.alert("Form submitted successfully!"); // Add a pop-up message
        } else {
          console.log("Form submission failed. Error:", data || "Unexpected error");
        }
      })
      .catch((error) => console.log("Fetch Error:", error));
  }

  return (
    <div>
      <div className="body">
        {/* <div className='overlay'></div> */}
        <div className="enquiryForm">

          <h2 className="title">NGO Enquiry Form</h2>

          <form className="form" onSubmit={(e) => Submit(e)}>
            <div className="formGroup">
              <label htmlFor="Name" className="formLabel">
                Full Name *
              </label>
              <input type="text" className="formControl" id="Name" name="Name" required />
            </div>
            <div className="formGroup">
              <label htmlFor="BirthPlace" className="formLabel">
                Place of Birth *
              </label>
              <input type="text" className="formControl" id="BirthPlace" name="BirthPlace" required />
            </div>

            <div className="formGroup">
              <label htmlFor="Address" className="formLabel">
                Full Address *
              </label>
              <input type="text" className="formControl" id="Address" name="Address" required />
            </div>

            <div className="formGroup">
              <label htmlFor="Nationality" className="formLabel">
                Nationality *
              </label>
              <input type="text" className="formControl" id="Nationality" name="Nationality" required />
            </div>

            <div className="formGroup">
              <label htmlFor="City" className="formLabel">
                City/Country *
              </label>
              <input type="text" className="formControl" id="City" name="City" required />
            </div>

            <div className="formGroup">
              <label htmlFor="Gender" className="formLabel">
                Gender *
              </label>
              <select className="formSelect" id="Gender" name="Gender" required>
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="formGroup">
              <label htmlFor="Email" className="formLabel">
                Email *
              </label>
              <input type="email" className="formControl" id="Email" name="Email" required />
            </div>

            <div className="formGroup">
              <label htmlFor="Phone" className="formLabel">
                Phone Number *
              </label>
              <input type="tel" className="formControl" id="Phone" name="Phone" required />
            </div>

            <div className="buttonContainer">
              {/* <button type="button" className="btnClose">
              Close
            </button> */}
              <button type="submit" className="btnSubmit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default EnquiryForm;

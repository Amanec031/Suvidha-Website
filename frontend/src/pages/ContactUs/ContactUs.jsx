import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("Submitted");
    // window.alert("Form submitted successfully!"); // Add a pop-up message
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
    <main className="contact-body">
      {/* <div className='overlay'></div> */}
      <div className="contact-frm">
        <h2 style={{ textAlign: 'center' }} className='contact-form'>Contact Us</h2>

        <form className="form" onSubmit={(e) => Submit(e)}>
          <div className="form-group">
            <label htmlFor="Name" className="form-label">
              Full Name *
            </label>
            <input type="text" className="form-control" id="Name" name="Name" />
          </div>

          <div className="form-group">
            <label htmlFor="Email" className="form-label">
              Email *
            </label>
            <input type="email" className="form-control" id="Email" name="Email" />
          </div>

          <div className="form-group">
            <label htmlFor="Phone" className="form-label">
              Phone *
            </label>
            <input type="tel" className="form-control" id="Phone" name="Phone" />
          </div>

          <div className="form-group">
            <label htmlFor="Message" className="form-label">
              Message *
            </label>
            <textarea className="form-control" id="Message" name="Message" rows="4"></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactUs;

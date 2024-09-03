// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Navbar from "./componenets/Navbar/Navbar";
import Home from "./pages/Home/Home";
// import Exams from "./pages/Exams/Exams/Exams";
import GRE from "./pages/Exams/GRE/GRE";
import IELTS from "./pages/Exams/IELTS/IELTS";
import Listening from "./pages/Exams/IELTS/Listening/Listening";
import Speaking from "./pages/Exams/IELTS/Speaking/Speaking";
import Writing from "./pages/Exams/IELTS/Writing/Writing";
import Reading from "./pages/Exams/IELTS/Reading/Reading";
import Services from "./pages/Services/Services";
import About from "./pages/About-Us/AboutUs";
import Blogs from "./pages/Blogs/Blogs";
import EnquiryForm from "./pages/Enquiry-Form/EnquiryForm";
import Footer from "./componenets/Footer/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import State from "./pages/Connect/State.jsx";
import ScrollToTop from "./pages/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exams/gre" element={<GRE />} />
          <Route path="/exams/ielts" element={<IELTS />} />
          <Route path="/exams/ielts/speaking" element={<Speaking />} />
          <Route path="/exams/ielts/listening" element={<Listening />} />
          <Route path="/exams/ielts/writing" element={<Writing />} />
          <Route path="/exams/ielts/reading" element={<Reading />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/enquiry-form" element={<EnquiryForm />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/state/:destination" element={<State />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

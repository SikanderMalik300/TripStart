import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-head">
        <div className="intro">
          <h1 className="footer-logo">
            <span>Trip</span>Start
          </h1>
          <p>Choose your favourite Destination.</p>
        </div>
        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaLinkedin className="social-icon" />
        </div>
      </div>
      <div className="footer-body">
        <div>
          <h4>Project</h4>
          <p>Innovation</p>
          <p>Research</p>
          <p>Development</p>
          <p>Impact</p>
        </div>
        <div>
          <h4>Community</h4>
          <p>Connect</p>
          <p>Collaborate</p>
          <p>Engage</p>
          <p>Network</p>
        </div>
        <div>
          <h4>Help</h4>
          <p>Support</p>
          <p>Contact</p>
          <p>Assistance</p>
          <p>Feedback</p>
        </div>
        <div>
          <h4>Others</h4>
          <p>News</p>
          <p>Resources</p>
          <p>Partnerships</p>
          <p>Mission</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

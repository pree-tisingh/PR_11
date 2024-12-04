import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* First Row: Job Containers */}
      <div className="footer-row footer-job-containers">
        <div className="job-container">
          <h3>Jobs in India</h3>
          <div className="city-list">
            <a href="#">#Mumbai</a>
            <a href="#">#Delhi</a>
            <a href="#">#Bangalore</a>
            <a href="#">#Hyderabad</a>
            <a href="#">#Pune</a>
            <a href="#">#Chennai</a>
            <a href="#">#Surat</a>
            <a href="#">#Himachal</a>
          </div>
        </div>
        <div className="job-container">
          <h3>Jobs International</h3>
          <div className="city-list">
            <a href="#">#New York</a>
            <a href="#">#London</a>
            <a href="#">#Sydney</a>
            <a href="#">#Dubai</a>
            <a href="#">#Singapore</a>
            <a href="#">#Tokyo</a>
            <a href="#">#Paris</a>
            <a href="#">#LA</a>
            <a href="#">#Washington</a>
          </div>
        </div>
      </div>

      {/* Second Row: Stats */}
      <hr class="footer-hr" />
      <div className="footer-row footer-stats">
        <div className="stat-item">
          <h4>Jobs Filled</h4>
          <p>1,245</p>
        </div>
        <div className="stat-item">
          <h4>Jobs Posted</h4>
          <p>3,210</p>
        </div>
        <div className="stat-item">
          <h4>Employers</h4>
          <p>890</p>
        </div>
        <div className="stat-item">
          <h4>Active Users</h4>
          <p>12,345</p>
        </div>
      </div>
      <hr class="footer-hr" />
      {/* Third Row: Footer Details */}
      <div className="footer-row footer-details">
        <div className="footer-logo">
          <img
            src="/logo.svg"
            alt="Job Website Logo"
            className="footer-logo-img"
          />
        </div>
        <div className="footer-info">
          <p>
            Jobringer is a premier job listing platform connecting job seekers
            and employers worldwide.
          </p>
          <p>
            <em>
              <b>Disclaimer:</b> All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. 
            </em>
          </p>
          <div className="social-media-icons">
            <a href="#" aria-label="Visit our Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Follow us on Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Connect with us on LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Check out our Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
        <hr class="footer-hr1" />
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyright">
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a> |
          <a href="/privacy">Privacy</a> |<a href="/about">About</a> | <a href="/about">Refund & Cancellation</a> |
          <a href="/contact">Contact Us</a>
        </div>
        <p>
          &copy; All Rights Reserved @ 2024 Jobtech Ventures Private Limited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

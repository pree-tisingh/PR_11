import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="nav">
        <div className="nav-left">
          <img src="logo.svg" alt="Logo" className="nav-logo" />
        </div>
        <div className="nav-center">
          <p className="tagline">Your Gateway to Career Success</p>
        </div>
        <div className="nav-right">
          <a href="/jobs" className="nav-link">
            Jobs
          </a>
          <a href="/active-employer" className="nav-link">
            Active Employer
          </a>
          <a href="/pricing" className="nav-link">
            Pricing
          </a>
          <a href="/signup" className="nav-link" id="bg-1">
            Sign Up
          </a>
          <a href="/login" className="nav-link" id="bg-2">
            Login
          </a>
        </div>
      </nav>

      {/* Tagline Section */}
      {/* Tagline Section */}
<div className="tagline-container">
  <h2 className="beautiful-tagline">Innovate, Inspire, Achieve</h2>
  <div className="tagline-content">
    <div className="tagline-buttons">
      <a href="/register" className="btn-register">
        Register
      </a>
      <a href="/post-job" className="btn-post-job">
        Post a Job
      </a>
    </div>
    <a href="/contact" className="btn-contact-link">
      Sales Enquiry
    </a>
  </div>
</div>

    </div>
  );
}

export default Navbar;

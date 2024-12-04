import React from "react";
import "./Job.css";

function Job() {
  return (
    <section className="job-section">
      <h2 className="section-heading">Find Your Next Job Opportunity</h2>
      <p className="section-subheading">
        Explore countless career opportunities tailored just for you.
      </p>
      <div className="job-container" id="bg-11">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for jobs..."
          />
          <div class="button-wrapper">
            <button class="search-button">Search</button>
          </div>
          <div className="search-links">
            <button className="btn-view-job" id="view">View Jobs</button>
            <button className="btn-free" id="register">Register</button>
          </div>
        </div>

        {/* Quick Job Search Section */}
        <div className="quick-search-container">
          <h3 className="quick-search-heading" id="quick">Quick Job Search</h3>
          <ul className="quick-search-list">
            <li>#WFH</li>
            <li>#Remote</li>
            <li>#FullTime</li>
            <li>#PartTime</li>
            <li>#Internship</li>
            <li>#IT</li>
            <li>#HR</li>
            <li>#Developer</li>
            <li>#Marketing</li>
            <li>#Pharma</li>
            

          </ul>
        </div>
      </div>
    </section>
  );
}

export default Job;

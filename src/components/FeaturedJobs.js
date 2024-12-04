import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedJobs.css"; // Custom CSS for styling
import { FaMapMarkerAlt, FaBuilding, FaDollarSign, FaClock } from "react-icons/fa";

function FeaturedJobs() {
  const jobs = useMemo(
    () => [
      { id: 1, title: "Software Engineer", company: "TechCorp", location: "Remote", salary: "₹10L - ₹12L", type: "Remote", employment: "Full-Time" },
      { id: 2, title: "Product Manager", company: "Innovate Inc.", location: "New York, NY", salary: "₹8L - ₹10L", type: "Hybrid", employment: "Contractual" },
      { id: 3, title: "UI/UX Designer", company: "DesignMasters", location: "San Francisco, CA", salary: "₹7L - ₹9L", type: "Onsite", employment: "Full-Time" },
      { id: 4, title: "Data Analyst", company: "Data Insights", location: "Chicago, IL", salary: "₹6L - ₹8L", type: "Onsite", employment: "Full-Time" },
      { id: 5, title: "Project Manager", company: "ManagePro", location: "Austin, TX", salary: "₹9L - ₹11L", type: "Hybrid", employment: "Contractual" },
      { id: 6, title: "Backend Developer", company: "CodeHive", location: "Remote", salary: "₹10L - ₹12L", type: "Remote", employment: "Full-Time" },
      { id: 7, title: "DB Developer", company: "CodeHive", location: "Remote", salary: "₹10L - ₹12L", type: "Remote", employment: "Full-Time" },
      { id: 8, title: "Frontend Developer", company: "CodeHive", location: "Remote", salary: "₹10L - ₹12L", type: "Remote", employment: "Full-Time" },
    ],
    []
  );

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const remoteJobs = jobs.filter((job) => job.type === "Remote");

  return (
    <section className="featured-jobs-section">
      {/* All Jobs Section */}
      <h2 className="featured-jobs-heading">Find Your Dream Job</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          {jobs.map((job) => (
            <div className="job-box" key={job.id}>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">
                <FaBuilding /> {job.company}
              </p>
              <p className="job-location">
                <FaMapMarkerAlt /> {job.location}
              </p>
              <p className="job-salary">
                <FaDollarSign /> {job.salary}
              </p>
              <p className="job-employment">
                <FaClock /> {job.employment}
              </p>
              <button className="apply-button">Apply Now</button>
              <span className={`job-type ${job.type.toLowerCase()}`}>{job.type}</span>
            </div>
          ))}
        </Slider>
      </div>

      {/* Remote Jobs Section */}
      <h2 className="featured-jobs-heading">Remote Jobs</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          {remoteJobs.map((job) => (
            <div className="job-box" key={job.id}>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">
                <FaBuilding /> {job.company}
              </p>
              <p className="job-location">
                <FaMapMarkerAlt /> {job.location}
              </p>
              <p className="job-salary">
                <FaDollarSign /> {job.salary}
              </p>
              <p className="job-employment">
                <FaClock /> {job.employment}
              </p>
              <button className="apply-button">Apply Now</button>
              <span className={`job-type ${job.type.toLowerCase()}`}>{job.type}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default FeaturedJobs;

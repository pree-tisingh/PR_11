import React from 'react';
import Slider from 'react-slick';
import './Remote.css';
import { FaBriefcase, FaMapMarkerAlt, FaMoneyBillAlt, FaRegClock } from 'react-icons/fa';

const remoteJobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'Remote',
    salary: '$120,000/year',
    employmentType: 'Full-time',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'DesignWorks',
    location: 'Remote',
    salary: '$80,000/year',
    employmentType: 'Contract',
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'Innovate Inc.',
    location: 'Hybrid',
    salary: '$150,000/year',
    employmentType: 'Full-time',
  },
  {
    id: 4,
    title: 'Project Lead',
    company: 'Global Solutions',
    location: 'Hybrid',
    salary: '$130,000/year',
    employmentType: 'Full-time',
  },
  {
    id: 5,
    title: 'Project Lead',
    company: 'Global Solutions',
    location: 'Hybrid',
    salary: '$130,000/year',
    employmentType: 'Full-time',
  },
  {
    id: 6,
    title: 'Project Lead',
    company: 'Global Solutions',
    location: 'Hybrid',
    salary: '$130,000/year',
    employmentType: 'Full-time',
  }
];

const Remote = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4, 
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2, 
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1, 
            },
          },
        ],
      };
      
      

  return (
    <div className="remote-section">
      <h2 className="remote-heading">Remote & Hybrid Jobs</h2>
      <Slider {...settings} className="remote-carousel">
        {remoteJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-content">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company"><FaBriefcase /> {job.company}</p>
              <p className="job-location"><FaMapMarkerAlt /> {job.location}</p>
              <p className="job-salary"><FaMoneyBillAlt /> {job.salary}</p>
              <p className="job-employment"><FaRegClock /> {job.employmentType}</p>
              <button className="apply-button">Apply</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Remote;

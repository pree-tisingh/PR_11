import React from "react";
import Navbar from "../src/components/Navbar";
import Job from '../src/components/Job';
import Employer from '../src/components/Employer';
import Featured from '../src/components/FeaturedJobs';
import Mobile from '../src/components/Mobile';
import Footer from '../src/components/Footer';
const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Job/>
      <Featured />
      <Employer />
      <Mobile/>
      <Footer/>
    </div>
  );
};

export default HomePage;

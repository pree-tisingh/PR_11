import React from "react";
import './Mobile.css';

function MobileApp() {
  return (
    <section className="mobile-app-promo-section">
      <div className="promo-text-container">
        <h2 className="promo-heading">Apply to Jobs on the Go</h2>
        <p className="promo-subtext">
          Experience the ease of applying to jobs and managing your applications
          directly from your mobile device. 
          <p><b>Download the app now!</b></p>
        </p>
       
        <div className="download-buttons">
          <img
            src="/anroid.png"
            alt="Download on Android"
            className="platform-logo"
          />
          <img
            src="/ios.png"
            alt="Download on iOS"
            className="platform-logo"
          />
        </div>
      </div>
      <div className="promo-image-container">
        <img
          src="/mm.png"
          alt="Mobile App Preview"
          className="mobile-preview-image"
        />
      </div>
    </section>
  );
}

export default MobileApp;

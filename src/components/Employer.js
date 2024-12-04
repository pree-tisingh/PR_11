import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Employer.css";

function Employers() {
  const employers = [
    { id: 1, image: "/img1.png" },
    { id: 2, image: "/img2.png" },
    { id: 3, image: "/img3.png" },
    { id: 4, image: "/img4.png" },
    { id: 5, image: "/img5.png" },
    { id: 6, image: "/img6.png" },
    { id: 7, image: "/imh7.png" },
    { id: 8, image: "/img8.png" },
    { id: 9, image: "/img9.png" },
    { id: 10, image: "/imh10.png" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="employers-section">
      <h2 className="employers-heading">Featured Employers</h2>
      <div className="employers-carousel">
        <Slider {...settings}>
          {employers.map((employer) => (
            <div className="employer-slide" key={employer.id}>
              <img
                src={employer.image}
                alt={`Employer ${employer.id}`}
                className="employer-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Employers;

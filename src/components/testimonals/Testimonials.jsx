import React from "react";
import "./testimonials.css";
import Data from "../Data"; 

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section_title">My Clients Say</h2>
      <span className="section_subtitle">Testimonial</span>

      <Swiper
        className="testimonials-container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 38,
          },
        }}
         modules={[Pagination]} 
      >
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide key={id} className="testimonial-card">
            <img src={image} alt={title} className="testimonial-image" />
            <h3 className="testimonial_name">{title}</h3>
            <p className="testimonial_description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

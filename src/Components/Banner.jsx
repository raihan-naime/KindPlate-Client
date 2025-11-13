import React from "react";
import { Link } from "react-router";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget the CSS!

const Banner = () => {
  // In your Homepage component
useEffect(() => {
  AOS.init({
    duration: 1000, // Optional: animation duration
    once: true, // Optional: only animate once
  });
}, []);
  return (

    <section>
    

    {/* test */}
    <div
  className="hero min-h-[30vh]"
  style={{
    backgroundImage:
      "url(https://plus.unsplash.com/premium_photo-1679072595330-67c13052bd1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 data-aos="fade-up" className="mb-5 text-5xl font-bold">Share Food, Spread Kindness </h1>
      <p className="mb-5">
        PlateShare connects people who have extra food with those who need it. Join us in reducing food waste and helping your community today.
      </p>
      <Link to="/availableFoods">
            <button className="btn btn-outline text-white px-6">
              
              View All Foods
            </button>
          </Link>
    </div>
  </div>
</div>
    </section>
  );
};

export default Banner;

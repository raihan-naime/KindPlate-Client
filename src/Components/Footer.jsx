import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-8 px-5 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        
        {/* Left: Logo & Name */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍽️</span>
          <Link to="/" className="text-2xl font-bold text-[#3E3F29]">
            KindPlate
          </Link>
        </div>

        {/* Center: Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} KindPlate — All Rights Reserved.
        </p>

        {/* Right: Social Media Links */}
        <SocialLinks></SocialLinks>
      </div>

      
    </footer>
  );
};

export default Footer;

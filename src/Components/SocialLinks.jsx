import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    color: "bg-[#0274b3]",
    link: "https://linkedin.com/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "bg-[#24262a]",
    link: "https://github.com/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    color:
      "bg-gradient-to-r from-[#405de6] via-[#c135b4] to-[#fd1f1f]",
    link: "https://instagram.com/",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    color: "bg-[#ff0000]",
    link: "https://youtube.com/",
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex flex-col sm:flex-row items-center justify-center gap-3">
      {socials.map((social, i) => (
        <li key={i} className="relative group">
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-600 shadow-md overflow-hidden transition-all duration-300 group-hover:text-white"
          >
            {/* Animated background */}
            <span
              className={`absolute inset-0 bottom-0 h-0 group-hover:h-full transition-all duration-300 ease-in-out ${social.color}`}
            ></span>

            {/* Icon */}
            <span className="relative z-10 text-2xl">{social.icon}</span>
          </a>

          {/* Tooltip */}
          <div className="absolute left-1/2 top-14 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-gray-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap">
            {social.name}
          </div>
        </li>
      ))}
    </ul>
  );
}

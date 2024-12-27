import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#465697] text-white p-8 md:p-12">
      {/* Social Icons Section */}
      <div className="flex gap-6 justify-center mb-4">
        <a
          href="https://instagram.com/dhairya_7._"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 transition-opacity"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://github.com/dhairya22157"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 transition-opacity"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="//linkedin.com/in/dhairyakumar23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 transition-opacity"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="mailto:dhairya22157@iiitd.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 transition-opacity"
        >
          <MdOutlineEmail size={28} />
        </a>
      </div>
      <p className="text-gray-300 text-sm md:text-base">© 2024 Dhairya</p>
    </div>
  );
};

export default Footer;

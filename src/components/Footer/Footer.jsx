import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="Footer" className="flex flex-col justify-center items-center bg-bg-light text-text-primary p-8 md:p-12 border-t border-slate-200">
      {/* Social Icons Section */}
      <div className="flex gap-8 justify-center mb-6">
        <a
          href="https://instagram.com/dhairya_7._"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent transition-colors duration-300 transform hover:scale-110"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://github.com/dhairya22157"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent transition-colors duration-300 transform hover:scale-110"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="//linkedin.com/in/dhairyakumar23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent transition-colors duration-300 transform hover:scale-110"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="mailto:dhairya22157@iiitd.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent transition-colors duration-300 transform hover:scale-110"
        >
          <MdOutlineEmail size={28} />
        </a>
      </div>
      <p className="text-text-secondary text-sm md:text-base">© 2024 Dhairya. All rights reserved.</p>
    </div>
  );
};

export default Footer;

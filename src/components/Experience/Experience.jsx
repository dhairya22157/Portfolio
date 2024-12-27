import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedis, SiMongodb, SiTensorflow, SiPython } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

const Experience = () => {
  const skills = [
    { icon: <FaHtml5 color="#E34F26" size={50} />, name: "HTML5" },
    { icon: <FaCss3 color="#1572B6" size={50} />, name: "CSS3" },
    { icon: <FaReact color="#61DAFB" size={50} />, name: "React.js" },
    { icon: <FaJs color="#F7DF1E" size={50} />, name: "JavaScript" },
    { icon: <FaFigma color="#F24E1E" size={50} />, name: "Figma" },
    { icon: <SiMongodb color="#47A248" size={50} />, name: "MongoDB" },
    // { icon: <SiRedis color="#FF4438" size={50} />, name: "Redis" },
    { icon: <SiTensorflow color="#FF6F00" size={50} />, name: "Machine Learning" },
    { icon: <SiPython color="#3776AB" size={50} />, name: "Data Science" },
    { icon: <FaNodeJs color="#339933" size={50} />, name: "Backend" },
  ];

  return (
    <div id="Experience" className="p-10 md:p-24 bg-[#fef6e4]">
      <h1 className="text-2xl md:text-4xl text-[#f07167] font-bold text-center mb-10">
        Experience
      </h1>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-1/2 gap-8 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group p-4 bg-[#e8ded2] flex items-center justify-center rounded-2xl shadow-md w-24 h-24"
            >
              {skill.icon}
              {/* Hover overlay */}
              <span className="absolute bottom-0 left-0 right-0 bg-[#011627] text-white text-sm text-center py-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="flex flex-col md:w-1/2 bg-[#e8ded2] bg-opacity-90 rounded-lg p-6 shadow-md">
          <div className="flex items-center gap-6">
            {/* <FaGoogle color="#4285F4" size={50} /> */}
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#011627]">
                Working under the Dr Vikram Goel Professor at IIIT-Delhi
              </h2>
              <p className="text-sm text-[#6b7280] font-light">
                Aug 2024 - Present
              </p>
            </div>
          </div>
          <ul className="mt-4 text-sm text-[#011627] font-normal leading-relaxed">
            <li>
              Designed and developed a responsive platform for students to
              access high-quality, curated study material, networking
              opportunities, and industry mentorship.
            </li>
            <li className="mt-2">
              Utilized WordPress to develop custom themes, integrate essential
              plugins, and optimize user experience, creating an intuitive,
              interactive learning platform.
            </li>
            <li className="mt-2">
              Website:{" "}
              <a
                href="http://43.205.173.25/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f07167] underline hover:text-[#d96050] transition duration-200"
              >
                http://43.205.173.25/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

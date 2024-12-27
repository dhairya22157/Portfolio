import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main, demoLink, repoLink, image }) => {
  return (
    <div
      className="p-4 md:p-6 flex flex-col bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
      onClick={() => window.open(repoLink, "_blank")}
      style={{ cursor: "pointer" }}
    >
      <img className="rounded-t-lg" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm md:text-md mb-4">{main}</p>
        <div className="flex justify-between">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-lg bg-[#465697] hover:bg-[#3b4a7e] transition"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

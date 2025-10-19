import React from "react";

const ProjectCard = ({ title, main, demoLink, repoLink, image }) => {
  return (
    // Card now has a fixed width for horizontal scrolling
    <div className="w-80 md:w-96 flex-shrink-0 mx-2 my-4 bg-white shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Image Container */}
      <div className="h-40 w-full bg-gray-100 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={title}
          // Placeholder fallback in case images fail to load
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/cccccc/333333?text=Project+Image"; }}
        />
      </div>
      
      {/* Text Content */}
      <div className="p-5 flex flex-col justify-between min-h-[12rem]">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-[#011627]">{title}</h3>
          {/* 'main' is now used as the short summary */}
          <p className="text-sm text-[#6b7280] mb-4 overflow-hidden text-ellipsis whitespace-normal">
            {main}
          </p>
        </div>

        {/* Links Section */}
        <div className="flex justify-start gap-x-6 items-center pt-2 border-t border-gray-100">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f07167] font-semibold text-base flex items-center hover:text-[#d96050] transition duration-300"
          >
            View Code →
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#465697] font-semibold text-base flex items-center hover:text-[#3b4a7e] transition duration-300"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";

// NOTE: Placeholder URLs are used below because the original local image paths (e.g., "../../assets/song-popularity.avif")
// cannot be resolved in this environment. Replace these with actual image URLs if available.
const IMAGE_PLACEHOLDER_URL = "https://placehold.co/400x200/465697/ffffff?text=";

// Data structure for the project details
const projectData = [
    {
        title: "Song Popularity Predictor (HitTrack)",
        main: "Developed a machine learning model to predict song popularity using features from Spotify's API, achieving 78% classification accuracy.",
        repoLink: "https://github.com/dhairya22157/Song_Popularity",
        image: IMAGE_PLACEHOLDER_URL + "HitTrack",
        demoLink: null,
    },
    {
        title: "Movie Recommender System",
        main: "Built a personalized Movie Recommender System using Machine Learning and Flask, integrating the TMDB API for high-quality, relevant movie images and suggestions.",
        demoLink: "https://movie-recommender-8aae.onrender.com/",
        repoLink: "https://github.com/dhairya22157/movie-recommender",
        image: IMAGE_PLACEHOLDER_URL + "Movie+Recommender",
    },
    {
        title: "YouTube Sentiment Analysis Chrome Extension",
        main: "Created a Chrome extension using NLP and Flask for automated sentiment analysis of YouTube comments, boosting analysis efficiency by over 50%.",
        repoLink: "Link", // Replace "Link" with actual Repo Link
        image: IMAGE_PLACEHOLDER_URL + "YT+Sentiment+Analysis",
        demoLink: null, // Replace null with Demo Link if available
    },
    {
        title: "Efficient Summarization of Healthcare Response",
        main: "Developed a medical Q&A summarization system using PyTorch and SOTA Transformer models (Hugging Face), achieving a BERTScore F1 of 0.8907.",
        repoLink: "Link", // Replace "Link" with actual Repo Link
        image: IMAGE_PLACEHOLDER_URL + "Healthcare+Summarization",
        demoLink: null, // Replace null with Demo Link if available
    },
    {
        title: "Amazon Co-Purchase Network Analysis",
        main: "Analyzed Amazon's 310K-product network using Graph Theory (NetworkX) and ML for link prediction, achieving an AUC of 0.7935 in forecasting co-purchases.",
        repoLink: "Link", // Replace "Link" with actual Repo Link
        image: IMAGE_PLACEHOLDER_URL + "Amazon+Network",
        demoLink: null, // Replace null with Demo Link if available
    },
    {
        title: "Stick Hero Game (JavaFX)",
        main: "A single-player game developed in Java and JavaFX, featuring a custom-built 2D physics engine based on robust Object-Oriented Programming (OOP) principles.",
        repoLink: "https://github.com/dhairya22157/Javafx-game",
        image: IMAGE_PLACEHOLDER_URL + "Stick+Hero",
        demoLink: null,
    },
    {
        title: "Online Store (Full Stack)",
        main: "Developed a feature-rich e-commerce website using React, Django, and a MySQL-based DBMS, emphasizing OLAP queries, transactions, and ACID compliance.",
        repoLink: "https://github.com/dhairya22157/Kartify_E-commerce-Website",
        image: IMAGE_PLACEHOLDER_URL + "Online+Store",
        demoLink: null,
    },
    {
        title: "Artificial Machine Simulator (C)",
        main: "A system simulator built in C for a Computer Organization course, translating user commands to machine code and using an inbuilt assembler for user-readable output.",
        repoLink: "https://github.com/dhairya22157/Assembler-and-Simulator",
        image: IMAGE_PLACEHOLDER_URL + "Machine+Simulator",
        demoLink: null,
    },
    {
        title: "ShellCraft - Linux Shell Simulator",
        main: "A custom Linux shell developed for an Operating Systems course, designed to execute fundamental Linux commands and provide a foundational understanding of process management.",
        repoLink: "https://github.com/dhairya22157/ShellCraft",
        image: IMAGE_PLACEHOLDER_URL + "ShellCraft",
        demoLink: null,
    },
];

// ---------------------------------------------
// ProjectCard Component (Integrated into this file)
// ---------------------------------------------
const ProjectCard = ({ title, main, demoLink, repoLink, image }) => (
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
                {/* 'main' is used as the short summary */}
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
// ---------------------------------------------

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 bg-[#fef6e4] text-[#011627]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#f07167]">
        Featured Projects
      </h1>
      
      {/* Horizontal Scrolling Container */}
      {/* This is the container that enables the left-to-right scrolling */}
      <div className="flex overflow-x-scroll pb-10 hide-scrollbar scroll-smooth">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.main} // This is now the short summary
            demoLink={project.demoLink}
            repoLink={project.repoLink}
            image={project.image}
          />
        ))}
      </div>

      {/* Custom CSS for hiding scrollbar - ensures a cleaner look */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Projects;

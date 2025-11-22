import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import { motion } from "framer-motion";
import { RiGithubLine, RiExternalLinkLine } from "@remixicon/react";

// NOTE: Placeholder URLs are used below because the original local image paths might be missing or broken.
// I am preserving the structure so you can easily swap them back if needed.
const IMAGE_PLACEHOLDER_URL = "https://placehold.co/600x400/fef6e4/f07167?text=";

const Projects = () => {
  const projectData = [
    {
        title: "Song Popularity Predictor",
        description: "Developed a machine learning model to predict song popularity using features from Spotify's API, achieving 78% classification accuracy.",
        image: IMAGE_PLACEHOLDER_URL + "HitTrack",
        tags: ["ML", "Python", "Spotify API"],
        codeLink: "https://github.com/dhairya22157/Song_Popularity",
        demoLink: null
    },
    {
        title: "Movie Recommender",
        description: "Built a personalized Movie Recommender System using Machine Learning and Flask, integrating the TMDB API for high-quality, relevant movie images and suggestions.",
        image: IMAGE_PLACEHOLDER_URL + "Movie+Recommender",
        tags: ["Flask", "ML", "TMDB API"],
        demoLink: "https://movie-recommender-8aae.onrender.com/",
        codeLink: "https://github.com/dhairya22157/movie-recommender"
    },
    {
        title: "YouTube Sentiment Analysis",
        description: "Created a Chrome extension using NLP and Flask for automated sentiment analysis of YouTube comments, boosting analysis efficiency by over 50%.",
        image: IMAGE_PLACEHOLDER_URL + "YT+Sentiment",
        tags: ["NLP", "Flask", "Chrome Ext"],
        codeLink: "#", // Placeholder as original link was just "Link"
        demoLink: null
    },
    {
        title: "Healthcare Summarization",
        description: "Developed a medical Q&A summarization system using PyTorch and SOTA Transformer models (Hugging Face), achieving a BERTScore F1 of 0.8907.",
        image: IMAGE_PLACEHOLDER_URL + "Healthcare+Summ",
        tags: ["PyTorch", "Transformers", "BERT"],
        codeLink: "#",
        demoLink: null
    },
    {
        title: "Amazon Network Analysis",
        description: "Analyzed Amazon's 310K-product network using Graph Theory (NetworkX) and ML for link prediction, achieving an AUC of 0.7935 in forecasting co-purchases.",
        image: IMAGE_PLACEHOLDER_URL + "Amazon+Network",
        tags: ["Graph Theory", "NetworkX", "ML"],
        codeLink: "#",
        demoLink: null
    },
    {
        title: "Stick Hero Game",
        description: "A single-player game developed in Java and JavaFX, featuring a custom-built 2D physics engine based on robust Object-Oriented Programming (OOP) principles.",
        image: IMAGE_PLACEHOLDER_URL + "Stick+Hero",
        tags: ["Java", "JavaFX", "OOP"],
        codeLink: "https://github.com/dhairya22157/Javafx-game",
        demoLink: null
    },
    {
        title: "Online Store",
        description: "Developed a feature-rich e-commerce website using React, Django, and a MySQL-based DBMS, emphasizing OLAP queries, transactions, and ACID compliance.",
        image: IMAGE_PLACEHOLDER_URL + "Online+Store",
        tags: ["React", "Django", "MySQL"],
        codeLink: "https://github.com/dhairya22157/Kartify_E-commerce-Website",
        demoLink: null
    },
    {
        title: "Machine Simulator",
        description: "A system simulator built in C for a Computer Organization course, translating user commands to machine code and using an inbuilt assembler for user-readable output.",
        image: IMAGE_PLACEHOLDER_URL + "Machine+Sim",
        tags: ["C", "Assembly", "Systems"],
        codeLink: "https://github.com/dhairya22157/Assembler-and-Simulator",
        demoLink: null
    },
    {
        title: "ShellCraft Simulator",
        description: "A custom Linux shell developed for an Operating Systems course, designed to execute fundamental Linux commands and provide a foundational understanding of process management.",
        image: IMAGE_PLACEHOLDER_URL + "ShellCraft",
        tags: ["C", "Linux", "OS"],
        codeLink: "https://github.com/dhairya22157/ShellCraft",
        demoLink: null
    },
  ];

  return (
    <div id="Projects" className="p-10 md:p-24 bg-bg-light text-text-primary">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        Featured <span className="text-accent">Projects</span>
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.demoLink && (
            <a 
                href={project.demoLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-text-primary hover:text-accent transition-colors shadow-lg"
                title="Live Demo"
            >
                <RiExternalLinkLine size={24} />
            </a>
          )}
          {project.codeLink && (
            <a 
                href={project.codeLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-text-primary hover:text-accent transition-colors shadow-lg"
                title="View Code"
            >
                <RiGithubLine size={24} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium bg-bg-light text-text-secondary rounded-full border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

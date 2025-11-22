import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Developer",
      organization: "IIIT-Delhi",
      guide: "Prof. Vikram Goyal",
      dates: "Aug 2024 - May 2025",
      points: [
        "Developed and launched an academic content-sharing platform on AWS EC2, providing students with high-quality, organized course materials.",
        "Managed the end-to-end deployment lifecycle, including AWS EC2 server configuration, domain setup, and production maintenance.",
        "Engineered personalized student dashboards and dedicated peer discussion spaces to foster an interactive learning environment.",
        "Achieved integration with an EdTech startup's product, Unsaid Talks, expanding reach to a broader student audience.",
      ],
      website: "http://43.205.173.25/",
      startup_landing_page: "https://unsaidtalks.com/",
      icon: <FaLaptopCode size={30} className="text-white" />,
    },
    {
      id: 2,
      role: "Research Intern",
      organization: "CoSy Lab, IIIT-Delhi",
      guide: "Prof. Ganesh Bagler",
      dates: "Aug 2025 - Present",
      points: [
        "Conducted extensive Exploratory Data Analysis (EDA) on a large-scale N-Recipe network to uncover underlying patterns in culinary data.",
        "Designed and implemented novel algorithms for defining and categorizing 'Nova Categories' within the dataset.",
        "Developed and trained a machine learning model for recipe recommendation based on the analyzed network structure.",
      ],
      icon: <FaLaptopCode size={30} className="text-white" />,
    },
  ];

  return (
    <div id="Experience" className="p-10 md:p-24 bg-bg-light text-text-primary">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        Work <span className="text-accent">Experience</span>
      </motion.h1>
      
      <div className="flex flex-col gap-12 max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-300 transform -translate-x-1/2 hidden md:block"></div>

        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 w-10 h-10 bg-accent rounded-full transform -translate-x-1/2 hidden md:flex items-center justify-center border-4 border-white shadow-md z-10">
                {/* Small icon inside dot */}
                <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>

            {/* Content Card */}
            <div className="w-full md:w-1/2 p-6 bg-bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group relative">
              {/* Arrow for desktop */}
              <div className={`hidden md:block absolute top-6 w-4 h-4 bg-bg-white transform rotate-45 ${index % 2 === 0 ? '-right-2 border-t border-r border-slate-100' : '-left-2 border-b border-l border-slate-100'}`}></div>

              <div className="flex flex-col gap-2 mb-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                        <h2 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">{exp.role}</h2>
                        <h3 className="text-lg font-semibold text-text-secondary">{exp.organization}</h3>
                    </div>
                    <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.dates}
                    </span>
                </div>
                {exp.guide && <p className="text-sm text-text-secondary italic">Guide: {exp.guide}</p>}
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4 leading-relaxed text-sm">
                {exp.points.map((point, idx) => (
                    <li key={idx} className="hover:text-text-primary transition-colors duration-200">
                        {point}
                    </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mt-4">
                {exp.website && (
                    <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
                        Project Platform ↗
                    </a>
                )}
                {exp.startup_landing_page && (
                    <a href={exp.startup_landing_page} target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
                        Startup Integration ↗
                    </a>
                )}
              </div>
            </div>
            
            {/* Spacer for the other side */}
            <div className="w-full md:w-1/2 hidden md:block"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
// No longer importing icons as requested, focusing only on the experience data

// Data structure for the two professional experiences
const experiences = [
  {
    id: 1,
    title: "Developer",
    organization: "IIIT-Delhi",
    guide: "Prof. Vikram Goyal",
    dates: "Aug 2024 - May 2025",
    points: [
      "Developed and launched an academic content-sharing platform on AWS EC2, providing students with high-quality, organized course materials and peer collaboration tools.",
      "Managed the end-to-end deployment lifecycle, including AWS EC2 server configuration, domain setup, and production maintenance, ensuring high uptime and accessibility.",
      "Engineered personalized student dashboards and dedicated peer discussion spaces to foster an interactive, organized, and community-driven learning environment.",
      "Achieved integration with an EdTech startup's product, Unsaid Talks, after the founder recognized the platform's value for broader student outreach.",
      "Spearheaded the creation and launch of 24 structured course pages on the Graphy LMS platform, focusing on clear organization and an intuitive learner-friendly design.",
      "Successfully drove student engagement by integrating the curated course content directly into the startup's existing educational ecosystem.",
    ],
    website: "http://43.205.173.25/",
    startup_landing_page: "https://unsaidtalks.com/",
  },
  {
    id: 2,
    title: "Research Intern",
    organization: "CoSy Lab, IIIT-Delhi",
    guide: "Prof. Ganesh Bagler",
    dates: "Aug 2025 - Present", // Assuming start date for this example
    points: [
      "Conducted extensive Exploratory Data Analysis (EDA) on a large-scale N-Recipe network to uncover underlying patterns and relationships in culinary data.",
      "Designed and implemented novel algorithms for defining and categorizing 'Nova Categories' (a system for classifying food processing levels) within the dataset.",
      "Developed and trained a machine learning model for recipe recommendation based on the analyzed network structure and newly defined NOVA categories, aiming to enhance personalized dietary suggestions.",
    ],
  },
];

// Component for a single experience card
const ExperienceCard = ({ exp }) => (
  <div className="bg-[#e8ded2] bg-opacity-90 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300">
    {/* Title and Guide */}
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
      <h2 className="text-xl md:text-2xl font-extrabold text-[#f07167]">
        {exp.title}
        <span className="text-[#011627] font-semibold text-lg md:text-xl"> - {exp.organization}</span>
      </h2>
      <p className="text-sm text-[#011627] font-medium min-w-[120px] text-left md:text-right">
        {exp.dates}
      </p>
    </div>
    <p className="text-sm font-light italic text-[#6b7280] mb-4">
        Guide: {exp.guide}
    </p>

    {/* Description Points */}
    <ul className="mt-2 text-sm text-[#011627] font-normal leading-relaxed list-disc list-inside space-y-2">
      {exp.points.map((point, index) => (
        <li key={index} className="text-gray-700">
          {point}
        </li>
      ))}
    </ul>

    {/* Project Links */}
    {(exp.website || exp.startup_landing_page) && (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {exp.website && (
                <p>
                    Project Platform:{" "}
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f07167] underline hover:text-[#d96050] transition duration-200"
                    >
                      {exp.website}
                    </a>
                </p>
            )}
            {exp.startup_landing_page && (
                <p>
                    Startup Integration:{" "}
                    <a
                      href={exp.startup_landing_page}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f07167] underline hover:text-[#d96050] transition duration-200"
                    >
                      {exp.startup_landing_page}
                    </a>
                </p>
            )}
        </div>
    )}
  </div>
);


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 bg-[#fef6e4]">
      <h1 className="text-3xl md:text-4xl text-[#f07167] font-bold text-center mb-12 border-b-2 border-[#f07167] pb-2">
        Experience
      </h1>

      {/* Experience Section - Now full width and structured */}
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;

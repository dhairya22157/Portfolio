import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-between items-center bg-bg-light text-text-primary px-8 md:px-20 relative overflow-hidden pt-20">
      {/* Background gradient glow effect - Softer for light theme */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Left Content */}
      <div className="relative z-10 max-w-2xl w-full md:w-3/5">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-accent drop-shadow-sm">Dhairya</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed"
        >
          A 19-year-old Computer Science student at IIIT Delhi, passionate about building impactful web and AI projects using React, Node.js, Flask, and Python. 
          I love creating seamless digital experiences that solve real-world problems.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base md:text-lg text-text-secondary mb-10 leading-relaxed"
        >
          Always excited about collaborating on innovative projects, participating in hackathons, and exploring creative challenges. 
          My vision is to leverage technology for positive societal impact—addressing issues like hunger and poverty through accessible platforms.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex gap-4 flex-wrap"
        >
          <button 
            onClick={() => scrollToSection('About')}
            className="px-8 py-3 bg-accent text-white rounded-lg shadow-lg hover:bg-accent-hover hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-semibold"
          >
            About Me
          </button>
          <button 
            onClick={() => scrollToSection('Projects')}
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
          >
            View Work
          </button>
        </motion.div>
      </div>

      {/* Right Content - Floating Astronaut Animation */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden md:flex w-2/5 justify-center items-center relative z-10"
      >
        <motion.img 
          src="https://cdn-icons-png.flaticon.com/512/4525/4525878.png" // Placeholder astronaut image
          alt="Floating Astronaut"
          className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </section>
  );
};

export default Home;

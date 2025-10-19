import React from "react";

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#0f172a] text-white px-8 md:px-20 relative overflow-hidden">
      {/* Background gradient glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f07167] opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f07167] opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Content with fade-in animation */}
      <div className="relative z-10 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="text-[#f07167] drop-shadow-[0_0_15px_rgba(240,113,103,0.5)]">Dhairya</span>
        </h1>
        
        {/* <h2 className="text-2xl md:text-3xl text-[#d1d5db] mb-6 font-light">
          Full Stack Developer | Machine Learning Enthusiast
        </h2> */}
        
        <p className="max-w-3xl text-lg md:text-xl text-[#94a3b8] mb-8 leading-relaxed">
          A 19-year-old Computer Science student at IIIT Delhi, passionate about building impactful web and AI projects using React, Node.js, Flask, and Python. 
          I love creating seamless digital experiences that solve real-world problems.
        </p>
        
        <p className="max-w-3xl text-base md:text-lg text-[#94a3b8] mb-10 leading-relaxed">
          Always excited about collaborating on innovative projects, participating in hackathons, and exploring creative challenges. 
          My vision is to leverage technology for positive societal impact—addressing issues like hunger and poverty through accessible platforms.
        </p>
        
        <div className="flex gap-4 flex-wrap">
          <button 
            onClick={() => scrollToSection('About')}
            className="px-6 py-3 bg-[#f07167] rounded-lg shadow-lg hover:bg-[#fb8b76] hover:shadow-[0_0_20px_rgba(240,113,103,0.4)] transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            About Me
          </button>
          <button 
            onClick={() => scrollToSection('Projects')}
            className="px-6 py-3 border-2 border-[#f07167] rounded-lg hover:bg-[#1e293b] hover:shadow-[0_0_20px_rgba(240,113,103,0.3)] transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            View Work
          </button>
        </div>
      </div>

      {/* Custom fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Home;

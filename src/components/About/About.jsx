import React from "react";
import AboutImg from "../../assets/mine3.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section id="About" className="bg-[#0f172a] text-white px-8 md:px-20 py-20 flex flex-col gap-10">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f07167] to-[#ffb703]">
        About Me
      </h2>

      {/* Two-column layout - Image and Text */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image with glow effect */}
        <img 
          src={AboutImg} 
          alt="Dhairya" 
          className="rounded-xl w-72 md:w-96 object-cover shadow-[0_0_30px_#f0716780] hover:shadow-[0_0_50px_#f07167aa] transition-all duration-300"
        />
        
        {/* Text content */}
        <div className="space-y-6">
          <p className="text-[#d1d5db] text-lg leading-relaxed">
            Hi! I'm <span className="text-[#f07167] font-semibold">Dhairya</span>, a Computer Science student at IIIT Delhi with a strong interest in 
            <span className="font-semibold"> Full Stack Development</span> and <span className="font-semibold"> Machine Learning</span>.  
            I love building intuitive, impactful applications and exploring modern technologies.
          </p>
          
          <p className="text-[#d1d5db] text-lg leading-relaxed">
            Outside coding, I enjoy <span className="text-[#f07167]">music</span>, <span className="text-[#f07167]">gaming</span>, 
            and <span className="text-[#f07167]">chess</span>. You can find me on 
            <a 
              href="https://lichess.org/@/dhairya22157" 
              target="_blank" 
              rel="noreferrer" 
              className="underline hover:text-[#f07167] ml-1 transition-colors duration-200"
            >
              Lichess
            </a>.
          </p>

          {/* Technologies Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#f07167] mb-4">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-3">
             {[
  "React",
  "Node.js",
  "Flask",
  "MongoDB",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Transformers",
  "Computer Vision",
  "TensorFlow",
  "PyTorch"
].map((tech) => (
  <span 
    key={tech} 
    className="px-4 py-2 bg-[#1e293b] text-white rounded-lg shadow-md hover:scale-105 hover:bg-[#2d3a52] transition-all duration-200 cursor-default"
  >
    {tech}
  </span>
))}

            </div>
          </div>
        </div>
      </div>

      {/* Three cards section */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {[
          
          { 
            title: "Machine Learning", 
            desc: "Building intelligent systems using Python, TensorFlow, and Scikit-learn." 
          },
          { 
            title: "Algorithm Solver", 
            desc: "Enjoys solving complex problems using DSA and competitive programming." 
          },
          { 
            title: "Full Stack Developer", 
            desc: "Experienced in frontend & backend development using React, Node.js, and Flask." 
          },
        ].map((item) => (
          <div 
            key={item.title} 
            className="bg-[#1e293b] p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(240,113,103,0.3)] transition-all duration-300 cursor-default"
          >
            <h4 className="text-xl font-semibold text-[#f07167] mb-3">{item.title}</h4>
            <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Resume Section */}
      <div className="mt-8">
        <a
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1ah8I9gOSi9fnbQ3hwR3ohcf3EWmKnDJ-/view?usp=sharing"
          target="_blank"
          className="block"
        >
          <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg hover:bg-[#2d3a52] hover:scale-105 hover:shadow-[0_0_25px_rgba(240,113,103,0.3)] transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <h6 className="text-2xl font-semibold text-[#f07167] mb-2 flex items-center gap-2">
                  Resume
                  <IoArrowForward className="group-hover:translate-x-2 transition-transform duration-300" />
                </h6>
                <p className="text-[#94a3b8] leading-relaxed">
                  Check out some of the stuff I've worked on and teams I've been a part of.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* About this website section */}
      <div className="bg-[#1e293b] p-8 md:p-10 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f07167] to-[#ffb703] mb-6">
          About this website
        </h2>
        <div className="space-y-4">
          <p className="text-[#d1d5db] text-lg leading-relaxed">
            My website has always been a playground for me to try out new tech and
            experiment with new features. The main motive for this website was to
            showcase the projects I've worked on over the last few years. This
            website is built with <span className="text-[#f07167] font-semibold">React</span> and <span className="text-[#f07167] font-semibold">Tailwind CSS</span>.
          </p>
          <p className="text-[#d1d5db] text-lg leading-relaxed">
            The website has been deployed to <span className="text-[#f07167] font-semibold">Vercel</span> and it takes advantage of its
            serverless functions for features like the real-time Spotify currently
            playing indicator and contact form. It's Open Sourced at{" "}
            <a
              href="https://github.com/dhairya22157/Personal_Portfoliio"
              target="_blank"
              rel="noreferrer"
              className="text-[#f07167] underline hover:text-[#fb8b76] transition-colors duration-200"
            >
              github.com/dhairya22157/Personal_Portfoliio
            </a>
            . Leave a star!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

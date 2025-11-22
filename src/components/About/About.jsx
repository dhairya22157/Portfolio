import React from "react";
import AboutImg from "../../assets/mine3.jpg";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="About" className="text-text-primary bg-bg-light shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image with glow effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={AboutImg} 
            alt="Dhairya" 
            className="rounded-2xl w-72 md:w-96 object-cover shadow-[0_0_30px_rgba(240,113,103,0.3)] hover:shadow-[0_0_50px_rgba(240,113,103,0.5)] transition-all duration-300 border-2 border-accent/20"
          />
        </motion.div>
        
        {/* Text content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Hi! I'm <span className="text-accent font-semibold">Dhairya</span>, a Computer Science student at IIIT Delhi with a strong interest in 
            <span className="font-semibold text-text-primary"> Full Stack Development</span> and <span className="font-semibold text-text-primary"> Machine Learning</span>.  
            I love building intuitive, impactful applications and exploring modern technologies.
          </p>
          
          <p className="text-text-secondary text-lg leading-relaxed">
            Outside coding, I enjoy <span className="text-accent">music</span>, <span className="text-accent">gaming</span>, 
            and <span className="text-accent">chess</span>. You can find me on 
            <a 
              href="https://lichess.org/@/dhairya22157" 
              target="_blank" 
              rel="noreferrer" 
              className="underline hover:text-accent ml-1 transition-colors duration-200"
            >
              Lichess
            </a>.
          </p>

          {/* Technologies Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-accent mb-4">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-3">
             {[
              "React", "Node.js", "Flask", "MongoDB", 
              "Machine Learning", "Deep Learning", "NLP", 
              "Transformers", "Computer Vision", "TensorFlow", "PyTorch"
            ].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-bg-white text-text-primary rounded-lg border border-slate-200 hover:border-accent hover:text-accent transition-all duration-200 cursor-default shadow-sm"
              >
                {tech}
              </span>
            ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Three cards section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6 mt-16"
      >
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
            className="bg-bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300"
          >
            <h4 className="text-xl font-semibold text-accent mb-3">{item.title}</h4>
            <p className="text-text-secondary leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Resume Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12"
      >
        <a
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1ah8I9gOSi9fnbQ3hwR3ohcf3EWmKnDJ-/view?usp=sharing"
          target="_blank"
          className="block"
        >
          <div className="bg-bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:bg-slate-50 hover:border-accent transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <h6 className="text-2xl font-semibold text-accent mb-2 flex items-center gap-2">
                  Resume
                  <IoArrowForward className="group-hover:translate-x-2 transition-transform duration-300" />
                </h6>
                <p className="text-text-secondary leading-relaxed">
                  Check out some of the stuff I've worked on and teams I've been a part of.
                </p>
              </div>
            </div>
          </div>
        </a>
      </motion.div>

      {/* About this website section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-bg-white p-8 md:p-10 rounded-xl shadow-lg border border-slate-100 mt-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
          About this website
        </h2>
        <div className="space-y-4">
          <p className="text-text-secondary text-lg leading-relaxed">
            My website has always been a playground for me to try out new tech and
            experiment with new features. The main motive for this website was to
            showcase the projects I've worked on over the last few years. This
            website is built with <span className="text-accent font-semibold">React</span> and <span className="text-accent font-semibold">Tailwind CSS</span>.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            The website has been deployed to <span className="text-accent font-semibold">Vercel</span> and it takes advantage of its
            serverless functions for features like the real-time Spotify currently
            playing indicator and contact form. It's Open Sourced at{" "}
            <a
              href="https://github.com/dhairya22157/Personal_Portfoliio"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline hover:text-accent-hover transition-colors duration-200"
            >
              github.com/dhairya22157/Personal_Portfoliio
            </a>
            . Leave a star!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

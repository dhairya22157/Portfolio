import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiDownload } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import ProfileImg from "../../assets/photoo.png";

const techChips = [
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "GenAI",
  "RAG",
  "LangGraph",
];

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fffdf8_0%,#fef6e4_100%)] px-6 pt-28 text-text-primary sm:px-8 md:px-16 lg:px-20">
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"></div>

      {/* Background glows */}
      <motion.div
        aria-hidden="true"
        className="absolute -right-32 top-28 -z-10 h-40 w-[38rem] -rotate-12 rounded-[4rem] bg-[linear-gradient(90deg,rgba(96,165,250,0),rgba(96,165,250,0.18),rgba(16,185,129,0))] blur-2xl"
        animate={{ opacity: [0.35, 0.65, 0.35], x: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -left-32 bottom-16 -z-10 h-36 w-[34rem] rotate-12 rounded-[4rem] bg-[linear-gradient(90deg,rgba(240,113,103,0),rgba(240,113,103,0.16),rgba(250,204,21,0))] blur-2xl"
        animate={{ opacity: [0.25, 0.5, 0.25], x: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      {/* Main content */}
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-0">

        {/* Left side - Text content */}
        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mt-4"
          >
            <p className="text-lg font-medium text-text-secondary">Hi, I'm Dhairya 👋</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem]">
              AI Engineer &
              <br />
              <span className="bg-gradient-to-r from-accent to-rose-500 bg-clip-text text-transparent">
                Software Developer
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg">
              IIIT Delhi CSE Graduate (June 2026). Passionate about building AI products with Generative AI, Machine Learning, and modern software engineering.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToSection("Projects")}
              className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-accent/25"
            >
              View Projects
              <HiOutlineArrowNarrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="https://drive.google.com/file/d/1ah8I9gOSi9fnbQ3hwR3ohcf3EWmKnDJ-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-text-primary shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:shadow-lg"
            >
              <FiDownload className="text-base" />
              Download Resume
            </a>

            <a
              href="https://github.com/dhairya22157"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
            >
              <FiGithub className="text-lg" />
              GitHub
            </a>
          </motion.div>

          {/* Tech chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {techChips.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.06 }}
                className="rounded-full border border-slate-200/80 bg-white/60 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-md sm:text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right side - Professional photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 mx-auto flex items-center justify-center lg:mx-0"
        >
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-[28px] bg-gradient-to-br from-accent/10 via-rose-200/20 to-amber-200/15 blur-3xl"></div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={ProfileImg}
              alt="Dhairya - AI/ML Engineer"
              className="h-[340px] w-[380px] rounded-[22px] border border-white/60 object-cover shadow-2xl shadow-slate-900/10 sm:h-[400px] sm:w-[320px] lg:h-[440px] lg:w-[340px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import { motion } from "framer-motion";

const stackItems = [
  "CV",
  "DL",
  "NLP",
  "Gen-AI",
  "LLM",
  "RAG"
];

const metricCards = [
  { label: "Models", value: "Dl + LLM", tone: "text-accent" },
  { label: "Focus", value: "AI products", tone: "text-blue-600" },
  { label: "Stack", value: "Full stack", tone: "text-emerald-600" },
];

const codeLines = [
  "const engineer = {",
  "  craft: 'AI systems',",
  "  stack: ['React', 'Python'],",
  "  goal: 'useful products'",
  "};",
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
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"></div>
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

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl grid-cols-1 items-center gap-14 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-8">
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
          >
            Building Intelligent Applications
            <br />
            with AI & Machine Learning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl"
          >
            Hi, I'm <span className="font-semibold text-text-primary">Dhairya</span>, a Computer Science graduate from IIIT Delhi passionate about artificial intelligence, machine learning, and modern software development. My work focuses on turning research concepts into scalable and user-friendly applications
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {stackItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-md"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("Projects")}
              className="rounded-xl bg-slate-950 px-7 py-3.5 font-semibold text-white shadow-xl shadow-slate-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-accent/25"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("About")}
              className="rounded-xl border border-slate-300 bg-white/70 px-7 py-3.5 font-semibold text-text-primary shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent hover:shadow-lg"
            >
              About Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="relative z-10 mx-auto flex w-full max-w-[560px] items-center justify-center lg:max-w-none"
        >
          <div className="relative aspect-square w-full max-w-[520px]">
            <motion.div
              aria-hidden="true"
              className="absolute inset-8 rounded-full border border-slate-200"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute inset-20 rounded-full border border-dashed border-slate-300"
              animate={{ rotate: -360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/70 bg-white/75 shadow-2xl shadow-slate-900/10 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-slate-200/80 px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-accent"></span>
                  <span className="h-3 w-3 rounded-full bg-amber-400"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">model.jsx</span>
              </div>
              <div className="space-y-3 p-5 font-mono text-sm text-slate-700 sm:text-base">
                {codeLines.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.12 }}
                    className={line.includes("'") ? "text-blue-700" : "text-slate-700"}
                  >
                    <span className="mr-4 select-none text-slate-300">{String(index + 1).padStart(2, "0")}</span>
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {metricCards.map((card, index) => (
              <motion.div
                key={card.label}
                animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                className={`absolute rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-md ${
                  index === 0 ? "left-0 top-16" : index === 1 ? "right-0 top-28" : "bottom-16 left-8"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{card.label}</p>
                <p className={`mt-1 text-lg font-black ${card.tone}`}>{card.value}</p>
              </motion.div>
            ))}

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-4 right-4 w-52 rounded-2xl border border-white/80 bg-slate-950/90 p-4 text-white shadow-2xl shadow-slate-900/20 backdrop-blur"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">pipeline</span>
                <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-xs font-bold text-emerald-300">live</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[87%] rounded-full bg-emerald-400"></div>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[72%] rounded-full bg-blue-400"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

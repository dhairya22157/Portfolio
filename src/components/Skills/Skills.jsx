import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "TypeScript"],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      "PyTorch",
      "Transformers",
      "Hugging Face",
      "LangChain",
      "Ollama",
      "Scikit-Learn",
      "Flask",
      "OpenCV",
      "React",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Platforms & Databases",
    skills: [
      "Docker",
      "AWS",
      "Git",
      "GitHub",
      "Linux",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Matplotlib",
    ],
  },
  {
    title: "Core Areas",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "RAG",
      "LLMs",
      "Computer Vision",
      "DSA",
      "OOPs",
      "DBMS",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="bg-bg-light px-6 py-16 text-text-primary md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-3xl font-bold md:text-5xl"
        >
          <span className="text-accent">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.12 }}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-slate-200 bg-bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg md:p-8"
            >
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-accent">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.04 }}
                    className="cursor-default rounded-full border border-slate-200 bg-bg-white px-3 py-1.5 text-sm text-text-secondary shadow-sm transition-all duration-200 hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="About" className="py-20 px-6 sm:px-8 md:px-16 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent/60"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 space-y-6 text-center sm:text-left"
        >
          <p className="text-lg leading-relaxed text-text-secondary sm:text-xl sm:leading-relaxed">
            Hi! I'm <span className="font-semibold text-text-primary">Dhairya</span>, a Computer Science graduate from
            <span className="font-semibold text-text-primary"> IIIT Delhi</span> with a deep passion for
            <span className="font-semibold text-text-primary"> Artificial Intelligence</span>,
            <span className="font-semibold text-text-primary"> Machine Learning</span>, and
            <span className="font-semibold text-text-primary"> Full Stack Development</span>.
            I thrive at the intersection of research and engineering, turning complex ideas into practical, scalable products.
          </p>

          <p className="text-lg leading-relaxed text-text-secondary sm:text-xl sm:leading-relaxed">
            My work spans across building end-to-end AI systems — from training and fine-tuning models to deploying
            intelligent applications that serve real users. I'm experienced with technologies like
            <span className="font-medium text-text-primary"> Python</span>,
            <span className="font-medium text-text-primary"> TensorFlow</span>,
            <span className="font-medium text-text-primary"> PyTorch</span>,
            <span className="font-medium text-text-primary"> React</span>, and
            <span className="font-medium text-text-primary"> FastAPI</span>, and I enjoy working across the
            full stack to deliver seamless experiences.
          </p>

          <p className="text-lg leading-relaxed text-text-secondary sm:text-xl sm:leading-relaxed">
            Whether it's developing RAG pipelines, building LLM-powered tools, or crafting modern web interfaces,
            I'm always looking for ways to push the boundaries of what's possible with technology. Outside of code,
            you'll find me exploring chess strategies, listening to music, or diving into a good game.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

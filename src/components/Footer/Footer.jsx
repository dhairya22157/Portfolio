import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="scroll-mt-24 md:scroll-mt-28 bg-bg-light text-text-primary px-6 sm:px-8 md:px-16 lg:px-20 py-16 md:py-24 border-t border-slate-200/80"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Contact Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-950">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, AI research, or tech ideas, if you have some ideas to work i am happy to look into it.
          </p>
        </motion.div>

        {/* Direct Email Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="mailto:dhairya22157@iiitd.ac.in"
            className="group inline-flex items-center gap-3 rounded-xl bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-accent/25"
          >
            <MdOutlineEmail size={22} />
            <span>Say Hello &bull; dhairya22157@iiitd.ac.in</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://github.com/dhairya22157"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/70 px-5 py-2.5 text-sm font-medium text-text-secondary shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-md"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/dhairyakumar23"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/70 px-5 py-2.5 text-sm font-medium text-text-secondary shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-md"
          >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://instagram.com/dhairya_7._"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/70 px-5 py-2.5 text-sm font-medium text-text-secondary shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-md"
          >
            <FaInstagram size={18} />
            <span>Instagram</span>
          </a>
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-200/60">
          <p className="text-text-secondary text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Dhairya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

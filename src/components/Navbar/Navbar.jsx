import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#Skills", label: "Skills" },
    { href: "#About", label: "About" },
    { href: "#Experience", label: "Experience" },
    { href: "#Projects", label: "Projects" },
    { href: "#Footer", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full px-5 text-text-primary transition-all duration-300 md:px-10 lg:px-20 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 transition-all duration-300 md:px-5 ${
          scrolled
            ? "border border-white/70 bg-white/75 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "border border-transparent bg-transparent py-2"
        }`}
      >
      <span className="text-xl font-black tracking-tight text-slate-950">
        Dhairya<span className="text-accent">.</span>
      </span>

      {/* Desktop Menu */}
      <ul className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 p-1 text-sm font-semibold shadow-sm backdrop-blur md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group rounded-full px-4 py-2 text-text-secondary transition-all duration-300 hover:bg-slate-950 hover:text-white"
          >
            <li className="cursor-pointer">
              {link.label}
            </li>
          </a>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <button
        type="button"
        className="z-50 rounded-full border border-slate-200 bg-white/80 p-2 shadow-sm md:hidden"
        onClick={() => setMenu(!menu)}
        aria-label="Toggle navigation menu"
      >
        {menu ? (
          <RiCloseLine size={24} className="text-text-primary" />
        ) : (
          <RiMenu2Line size={24} className="text-text-primary" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 bg-bg-light/95 px-6 backdrop-blur-lg md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenu(false)}
                className="w-full max-w-xs rounded-2xl border border-slate-200 bg-white/70 px-6 py-4 text-center text-xl font-bold shadow-sm transition-colors hover:border-accent/40 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

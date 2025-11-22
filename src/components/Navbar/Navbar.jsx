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
    { href: "#About", label: "About" },
    { href: "#Experience", label: "Experience" },
    { href: "#Projects", label: "Projects" },
    { href: "#Footer", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-light/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      } px-6 md:px-20 flex justify-between items-center text-text-primary`}
    >
      <span className="text-2xl font-bold tracking-wide text-accent">
        Portfolio
      </span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            <li className="hover:text-accent transition-colors duration-300 cursor-pointer">
              {link.label}
            </li>
          </a>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50" onClick={() => setMenu(!menu)}>
        {menu ? (
          <RiCloseLine size={30} className="text-text-primary" />
        ) : (
          <RiMenu2Line size={30} className="text-text-primary" />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bg-light/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenu(false)}
                className="text-2xl font-semibold hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
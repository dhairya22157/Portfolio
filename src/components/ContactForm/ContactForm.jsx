import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Configuration error. Please contact the site administrator.");
      setLoading(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Dhairya",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          setError("Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-bg-light px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-6">
          Message me
        </h2>
        <p className="text-md md:text-lg text-text-secondary text-center mb-8 leading-relaxed">
          Let me know what you think about this website! Or let's work on a project together!{" "}
          {!submitted && "I'll try to get back to you as soon as possible."} Alternatively, you can email me at{" "}
          <a
            href="mailto:dhairya22157@iiitd.ac.in"
            className="text-accent hover:underline"
          >
            dhairya22157@iiitd.ac.in
          </a>
          .
        </p>
        <div className="flex justify-center">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg flex flex-col gap-6"
            >
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  disabled={loading}
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              
              <button
                type="submit"
                className={`w-full bg-accent text-white rounded-lg p-4 font-bold hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-accent/25 ${
                  loading ? "cursor-wait opacity-70" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">Message Sent!</h3>
              <p className="text-text-secondary">
                Thank you for reaching out. I'll get back to you shortly.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
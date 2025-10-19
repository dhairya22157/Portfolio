import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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

    // Get environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug logging (values are logged but not exposed in UI)
    console.log("📧 EmailJS Configuration Check:");
    console.log("Service ID exists:", !!serviceId);
    console.log("Template ID exists:", !!templateId);
    console.log("Public Key exists:", !!publicKey);
    console.log("Service ID:", serviceId ? `${serviceId.substring(0, 10)}...` : "MISSING");
    console.log("Template ID:", templateId ? `${templateId.substring(0, 10)}...` : "MISSING");
    console.log("Public Key:", publicKey ? `${publicKey.substring(0, 5)}...` : "MISSING");

    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      const missingVars = [];
      if (!serviceId) missingVars.push("VITE_EMAILJS_SERVICE_ID");
      if (!templateId) missingVars.push("VITE_EMAILJS_TEMPLATE_ID");
      if (!publicKey) missingVars.push("VITE_EMAILJS_PUBLIC_KEY");
      
      const errorMsg = `⚠️ EmailJS configuration error: Missing environment variables: ${missingVars.join(", ")}. Please check your .env file.`;
      console.error(errorMsg);
      setError("Configuration error. Please contact the site administrator.");
      setLoading(false);
      return;
    }

    // Make sure these keys match your EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Dhairya", // Optional: recipient name
    };

    console.log("📤 Sending email with template params:", {
      from_name: templateParams.from_name,
      from_email: templateParams.from_email,
      message_length: templateParams.message.length,
    });

    emailjs
      .send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      .then(
        (response) => {
          console.log("✅ Email sent successfully!", response.status, response.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("❌ EmailJS Error Details:");
          console.error("Error object:", error);
          console.error("Error status:", error?.status);
          console.error("Error text:", error?.text);
          console.error("Error message:", error?.message);
          
          // Provide more specific error messages
          let userMessage = "Failed to send message. ";
          if (error?.status === 400) {
            userMessage += "Invalid request. Please check your input.";
          } else if (error?.status === 401 || error?.status === 403) {
            userMessage += "Authentication error. Please contact the site administrator.";
          } else if (error?.status === 404) {
            userMessage += "Service not found. Please contact the site administrator.";
          } else {
            userMessage += "Please try again later or email me directly.";
          }
          
          setError(userMessage);
          setLoading(false);
        }
      );
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fef6e4] px-4">
      <div className="w-full max-w-3xl bg-[#fef6e4] p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f07167] text-center mb-6">
          Message me
        </h2>
        <p className="text-md md:text-lg text-[#011627] text-center mb-6">
          Let me know what you think about this website! Or let's work on a project together!{" "}
          {!submitted && "I'll try to get back to you as soon as possible."} Alternatively, you can email me at{" "}
          <a
            href="mailto:dhairya22157@iiitd.ac.in"
            className="text-[#f07167] underline"
          >
            dhairya22157@iiitd.ac.in
          </a>
          .
        </p>
        <div className="flex justify-center">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-2 border-[#f07167] bg-[#fef6e4] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#f07167]"
                disabled={loading}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-2 border-[#f07167] bg-[#fef6e4] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#f07167]"
                disabled={loading}
              />
              <textarea
                name="message"
                placeholder="Anything you wanna say"
                value={formData.message}
                onChange={handleChange}
                required
                className="border-2 border-[#f07167] bg-[#fef6e4] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#f07167]"
                disabled={loading}
              />
              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}
              <button
                type="submit"
                className={`bg-[#f07167] text-white rounded-lg p-3 font-semibold hover:bg-[#d96050] transition  ${
                  loading ? "cursor-wait" : ""
                }`}
                disabled={loading}
                style={{ width: "100px", height: "50px" }}
              >
                {loading ? (
                  <span className="animate-spin">⏳</span>
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          ) : (
            <p className="text-md text-[#011627] text-center">
              Thank you for the message! I'll get back to you as soon as possible.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
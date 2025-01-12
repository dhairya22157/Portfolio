import React, { useState } from "react";
import emailjs from "emailjs-com";

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
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("EmailJS Success:", response.status,response.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log("User ID:", process.env.REACT_APP_EMAILJS_USER_ID);

          setError("Failed to send message. Please try again later.");
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
                  <div className="loader border-t-transparent mx-auto"></div>
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

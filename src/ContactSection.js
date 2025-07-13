import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactSection.css";

const calendlyUrl = "https://calendly.com/harmatia/30min";
const mailto = "mailto:services@harmatialocalseoagency.com";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, use a real email service or backend
    window.location.href = `mailto:services@harmatialocalseoagency.com?subject=Mailing List Signup&body=Please add ${email} to your mailing list.`;
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">Ready to Grow Your Local Business?</h2>
        <div className="contact-buttons-row">
          <motion.a
            href={calendlyUrl}
            className="contact-btn book-call"
            whileHover={{ scale: 1.08, boxShadow: "0 4px 24px #18391e55" }}
            whileTap={{ scale: 0.97 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call
          </motion.a>
          <motion.a
            href={mailto}
            className="contact-btn email-us"
            whileHover={{ scale: 1.08, boxShadow: "0 4px 24px #18391e55" }}
            whileTap={{ scale: 0.97 }}
          >
            Email Us
          </motion.a>
        </div>
        <div className="contact-copy">
          Submit your email to get free current tips and tricks on how to solidify your business presence digitally as a business owner.
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="contact-email-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.button
            type="submit"
            className="contact-btn join-list"
            whileHover={{ scale: 1.08, boxShadow: "0 4px 24px #18391e55" }}
            whileTap={{ scale: 0.97 }}
            disabled={submitted}
          >
            {submitted ? "Submitted!" : "Join Mailing List"}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection; 
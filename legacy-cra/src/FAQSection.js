import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQSection.css";

const faqs = [
  {
    q: "How soon will I see results from local SEO?",
    a: "Most clients notice improved rankings and more calls within 60 to 90 days. If your market is less competitive, you may see results even faster."
  },
  {
    q: "How is your approach different from other SEO agencies?",
    a: "Unlike agencies that use cookie-cutter templates, we create a custom SEO strategy tailored to your business, your market, and your competition. No generic fluff—just what actually gets you ranking higher in Google Maps and search."
  },
  {
    q: "Will I need a new website to get started?",
    a: "No need for a new website. We work with your existing site and handle any SEO improvements as part of your plan."
  },
  {
    q: "Do I have to manage anything myself?",
    a: "Nope! You stay focused on running your business. We take care of everything: content, Google Business Profile, backlinks, and all technical SEO. You'll get clear, easy-to-read reports."
  },
  {
    q: "Is there a contract or long-term commitment?",
    a: "No contracts or lock-ins. Our service is month-to-month—stay only if you’re seeing results and value."
  }
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-content">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div className="faq-item" key={idx}>
              <button className="faq-question" onClick={() => toggle(idx)}>
                {faq.q}
                <span className={`faq-arrow${openIdx === idx ? " open" : ""}`}>▼</span>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 
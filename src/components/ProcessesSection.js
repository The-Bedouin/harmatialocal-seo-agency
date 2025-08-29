"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaBuilding, FaLink, FaPenNib, FaBullseye, FaChartLine } from "react-icons/fa";

const processes = [
  { title: "GBP Management", desc: "Optimize your Google Business Profile to grab the attention of local customers and rank higher in the Map Pack, where 93% of local searches happen.", icon: <FaGoogle className="process-icon" />, features: ["Keyword-rich profile optimization","Regular photo & service updates","Review management & response system"] },
  { title: "Citation Building", desc: "Build consistent business listings across the web to boost your local authority and improve rankings in local search results.", icon: <FaBuilding className="process-icon" />, features: ["NAP consistency across 50+ sites","Industry-specific directory submissions","Citation monitoring & cleanup"] },
  { title: "Backlink Building", desc: "Establish high-quality, relevant backlinks to boost your website's authority and improve rankings for competitive local keywords.", icon: <FaLink className="process-icon" />, features: ["Local press & media outreach","Community sponsorship link building","High-authority domain targeting"] },
  { title: "Content Creation", desc: "Create engaging, optimized content that ranks in local search and converts visitors into customers for your home service business.", icon: <FaPenNib className="process-icon" />, features: ["Service area pages for local keywords","Expert blog content addressing customer pain points","Schema markup for rich results"] },
  { title: "PPC Management", desc: "Manage high-performing Google Ads campaigns that deliver immediate visibility while building long-term organic traffic.", icon: <FaBullseye className="process-icon" />, features: ["Hyper-local targeting for service areas","Custom landing pages with conversion focus","ROI optimization & bid management"] },
  { title: "Reporting & Analytics", desc: "Track your progress with detailed reporting that shows exactly how your SEO investment is driving leads and revenue growth.", icon: <FaChartLine className="process-icon" />, features: ["Monthly performance reports","Call tracking & lead attribution","ROI analysis & recommendations"] },
];

const sectionVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, when: "beforeChildren" } } };
const cardVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function ProcessesSection() {
  return (
    <section className="processes-section" id="processes">
      <motion.div className="processes-header" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={sectionVariants}>
        <h2 className="processes-title">Our Proven Local SEO Processes</h2>
        <p className="processes-desc">Every step is designed to maximize your local visibility, drive real leads, and grow your business. Here’s how we deliver results for home service companies like yours:</p>
      </motion.div>
      <motion.div className="processes-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        {processes.map((proc, idx) => (
          <motion.div className="process-card" key={idx} variants={cardVariants}>
            <div className="process-card-icon">{proc.icon}</div>
            <h3 className="process-card-title">{proc.title}</h3>
            <p className="process-card-desc">{proc.desc}</p>
            <ul className="process-card-features">
              {proc.features.map((feature, i) => (
                <li key={i} className="process-feature"><span className="checkmark">✓</span> {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}





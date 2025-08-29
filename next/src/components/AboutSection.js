"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 3, label: "Average Profit Growth", places: [1], suffix: "x" },
  { value: 3, label: "Clients Ranking #1 Locally", places: [1], suffix: "" },
  { value: 100, label: "Location-Based Business Focus", places: [100, 10, 1], suffix: "%" }
];

function Counter({ value, fontSize = 48 }) {
  return <span className="about-stat-value" style={{ fontSize }}>{value}</span>;
}

export default function AboutSection() {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });
  useEffect(() => { setStartCount(inView); }, [inView]);

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="about-content">
        <h2 className="about-title">About HarmatiaLocal-SEO Agency</h2>
        <p className="about-desc">
          HarmatiaLocal-SEO Agency is dedicated exclusively to helping local businesses and home service providers dominate their markets. We specialize in local SEO strategies that put your business ahead of the competition—especially for location-based and brick-and-mortar businesses. Our proven approach is designed to drive real results: more calls, more customers, and up to <span className="about-highlight">3x profit growth</span> for our clients.
        </p>
        <p className="about-desc">
          Whether you’re a plumber, electrician, landscaper, or any local service provider, we know how to get you found by the right customers in your area. Our tailored strategies have already helped <span className="about-highlight">three clients reach #1 in local search</span>—and we’re just getting started. Let us help you become the go-to choice in your community and turn your online presence into a lead-generating machine.
        </p>
        <div className="about-stats-row">
          {stats.map((stat, idx) => (
            <div className="about-stat" key={idx}>
              <Counter value={startCount ? stat.value : 0} />
              <span className="about-stat-suffix">{stat.suffix}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




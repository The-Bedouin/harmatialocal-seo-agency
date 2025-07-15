import React from "react";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import "./CaseStudySection.css";
import ccbmaprank from "./ccbmaprank.png";
import ccblocalcalls from "./ccblocalcalls.png";
import ccbtargetedwebtraffic from "./ccbtargetedwebtraffic.png";
import ccbwebcompettitoranalysis from "./ccbwebcompettitoranalysis.png";

const caseStudies = [
  {
    title: "Local Rank",
    desc: "See how we improved local search rankings.",
    img: ccbmaprank,
    oneLiner: "Boosted to top 3 in Google Maps results."
  },
  {
    title: "Local Calls to Location",
    desc: "Increased direct calls from search.",
    img: ccblocalcalls,
    oneLiner: "Doubled monthly call volume."
  },
  {
    title: "Targeted Web Traffic",
    desc: "Drove more relevant visitors to site.",
    img: ccbtargetedwebtraffic,
    oneLiner: "+120% increase in local traffic."
  },
  {
    title: "Website Competitor Analysis",
    desc: "Identified and outperformed competitors.",
    img: ccbwebcompettitoranalysis,
    oneLiner: "Surpassed 5 top competitors."
  }
];

const CaseStudySection = () => (
  <section className="case-study-section" id="case-study">
    <h2 className="case-study-heading">Social Proof</h2>
    <div className="case-study-grid">
      {caseStudies.map((study, idx) => (
        <CardContainer key={idx} className="case-card-container">
          <CardBody className="case-card-body">
            <CardItem translateZ={50} className="case-card-title">
              {study.title}
            </CardItem>
            <CardItem as="p" translateZ={60} className="case-card-desc">
              {study.desc}
            </CardItem>
            <CardItem translateZ={100} className="case-card-img">
              <img
                src={study.img}
                height="200"
                width="400"
                className="case-card-image"
                alt={study.title}
              />
            </CardItem>
            <div className="case-card-oneliner">{study.oneLiner}</div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  </section>
);

export default CaseStudySection; 
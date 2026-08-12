import './HowItWorks.css';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaHardHat, FaClipboardList, FaUserCheck, FaQrcode, FaRoad } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    label: "Step 01",
    icon: FaHardHat,
    title: "Normal Work Continues",
    description: "Workers continue performing their regular job on site.",
  },
  {
    id: 2,
    label: "Step 02",
    icon: FaClipboardList,
    title: "Skill Assessment",
    description: "Skills are evaluated using structured trade-specific checklists.",
  },
  {
    id: 3,
    label: "Step 03",
    icon: FaUserCheck,
    title: "Employer Recommendation",
    description: "Employer or supervisor confirms worker capability.",
  },
  {
    id: 4,
    label: "Step 04",
    icon: FaQrcode,
    title: "Digital Certification",
    description: "Certificate issued within 72 hours with QR verification.",
  },
  {
    id: 5,
    label: "Step 05",
    icon: FaRoad,
    title: "Career Pathway",
    description: "Certified skill becomes part of the worker's professional development pathway.",
  },
];

const badges = [
  "No downtime",
  "No classroom training",
  "No productivity loss",
];

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔹 container stagger
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  // 🔹 fade up
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // 🔹 card animation
  const cardAnim = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="how-it-works" className="hiw-section">
      <div className="hiw-container">

        {/* Header */}
        <motion.div
          className="hiw-header"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="hiw-eyebrow">
            <span className="hiw-eyebrow-line" />
            LCP Process
            <span className="hiw-eyebrow-line" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="hiw-title">
            Simple 5-Step Process
          </motion.h2>

          <motion.p variants={fadeUp} className="hiw-subtitle">
            A seamless, on-the-job certification process that doesn't disrupt your daily operations.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="hiw-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={step.id}
                variants={cardAnim}
                onClick={() => setActiveIndex(index)}
                className={`hiw-card${isActive ? ' hiw-active' : ''}`}
                animate={{
                  scale: isActive ? 1.05 : 1,
                  y: isActive ? -10 : 0
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <span className="hiw-ghost-num">{step.id}</span>
                <div className="hiw-card-label">{step.label}</div>

                <h3 className="hiw-card-title">{step.title}</h3>
                <p className="hiw-card-desc">{step.description}</p>

                {/* Icon animation */}
                <motion.div
                  className="hiw-icon-wrap"
                  animate={{
                    rotate: isActive ? [0, -10, 10, 0] : 0,
                    scale: isActive ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <div className="hiw-timeline">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                className={`hiw-dot${activeIndex >= index ? ' hiw-dot-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                animate={{
                  scale: activeIndex === index ? 1.4 : 1
                }}
              />
              {index < steps.length - 1 && (
                <motion.div
                  className="hiw-line"
                  animate={{
                    width: activeIndex > index ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Badges */}
        <motion.div
          className="hiw-badges"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {badges.map((text, i) => (
            <motion.span
              key={i}
              variants={fadeUp}
              className="hiw-badge"
              whileHover={{ scale: 1.05 }}
            >
              <span className="hiw-badge-dot" />
              {text}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
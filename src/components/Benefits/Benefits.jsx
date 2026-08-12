import './Benefits.css';
import React from 'react';
import { motion } from "framer-motion";
import { Target, Shield, Users, TrendingDown } from 'lucide-react';

const Benefits = () => {

  const benefits = [
    {
      category: "Quality & Operations",
      icon: <Target className="benefits-icon" size={32} />,
      items: [
        "Reduce rework and corrections",
        "Deploy workers with verified skills",
        "Baseline skill visibility before assignment",
        "Standardize quality expectations"
      ]
    },
    {
      category: "Safety & Risk",
      icon: <Shield className="benefits-icon" size={32} />,
      items: [
        "Document worker competency",
        "Reduce liability in skill-critical tasks",
        "Support compliance audits",
        "Minimize operational incidents"
      ]
    },
    {
      category: "HR & Retention",
      icon: <Users className="benefits-icon" size={32} />,
      items: [
        "Retain workers through career pathway",
        "Recognize skill without degree barriers",
        "Reduce supervisor micromanagement time",
        "Improve worker motivation"
      ]
    },
    {
      category: "Cost & Brand",
      icon: <TrendingDown className="benefits-icon" size={32} />,
      items: [
        "Lower per-worker certification cost",
        "Strengthen employer brand",
        "Support ESG commitments",
        "Differentiate from competitors"
      ]
    }
  ];

  // 🔹 container stagger
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  // 🔹 fade up
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // 🔹 card animation
  const cardAnim = {
    hidden: { opacity: 0, y: 70, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="benefits" className="section-padding benefits-section">

      {/* 🌊 Animated Live Background Elements */}
      <motion.div
        className="benefits-blob-1"
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="benefits-blob-2"
        animate={{ x: [0, -20, 20, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="benefits-blob-3"
        animate={{ x: [0, 20, -20, 0], y: [0, -25, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom benefits-container">

        {/* Header */}
        <motion.div
          className="benefits-header-wrap"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="benefits-heading">
            Employer Benefits
          </motion.h2>

          <motion.p variants={fadeUp} className="benefits-subtext">
            Certification isn't just a credential. It's a strategic tool for operational excellence.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="benefits-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              className="benefits-card"
              whileHover={{ y: -10, scale: 1.02, rotateX: 3, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* 💥 Icon */}
              <motion.div
                className="benefits-icon-wrap"
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                {React.cloneElement(benefit.icon, {
                  className: 'benefits-icon',
                  strokeWidth: 2,
                  size: 28
                })}
              </motion.div>

              <h3 className="benefits-card-title">{benefit.category}</h3>

              <ul className="benefits-card-list">
                {benefit.items.map((item, i) => (
                  <motion.li
                    key={i}
                    className="benefits-card-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="benefits-bullet"></div>
                    <span className="benefits-item-text">{item}</span>
                  </motion.li>
                ))}
              </ul>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Benefits;
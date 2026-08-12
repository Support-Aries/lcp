import "./Action.css";
import React from 'react';
import { motion } from "framer-motion";

import CertificationProcess from "../../assets/images/action/CertificationProcess.webp";
import SkillsAssessment from "../../assets/images/action/SkillsAssessment.webp";
import IndustrialTraining from "../../assets/images/action/IndustrialTraining.webp";
import WorkerDevelopment from "../../assets/images/action/WorkerDevelopment.webp";

const Action = () => {

  const actions = [
    { title: "Certification Process", image: CertificationProcess },
    { title: "Skills Assessment", image: SkillsAssessment },
    { title: "Industrial Training", image: IndustrialTraining },
    { title: "Worker Development", image: WorkerDevelopment },
  ];

  // 🔹 container
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 }
    }
  };

  // 🔹 section fade
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // 🔹 card entry
  const cardAnim = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="action-section">
      <div className="action-container">

        {/* Header */}
        <motion.div
          className="action-header flex-col md:flex-row"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="action-header-text">
            <motion.h2 variants={fadeUp} className="heading-md action-title">
              See LCP in Action
            </motion.h2>

            <motion.p variants={fadeUp} className="action-subtitle">
              Watch how our comprehensive evaluation handles every phase with precision.
            </motion.p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="action-grid sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {actions.map((action, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              className="action-card"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >

              {/* Image */}
              <motion.img
                src={action.image}
                alt={action.title}
                className="action-card-image"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.08 }
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Overlay */}
              <motion.div
                className="action-card-overlay"
                variants={{
                  rest: { opacity: 0.75 },
                  hover: { opacity: 0.95 }
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content (🔥 new animation) */}
              <motion.div
                className="action-card-body"
                variants={{
                  rest: {
                    opacity: 0,
                    clipPath: "inset(20% 0% 0% 0%)"
                  },
                  hover: {
                    opacity: 1,
                    clipPath: "inset(0% 0% 0% 0%)"
                  }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3 className="action-card-heading">
                  {action.title}
                </h3>
              </motion.div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Action;
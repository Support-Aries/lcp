import './Challenges.css';
import React from 'react';
import { motion } from "framer-motion";
import { EyeOff, AlertTriangle, RefreshCw } from 'lucide-react';

const Challenges = () => {

  const challenges = [
    {
      icon: <EyeOff size={32} className="ch-icon ch-icon--red" />,
      title: "Skills invisible until work begins",
      description: "Without standard certification, it's impossible to verify a worker's true competency before putting them on a critical task."
    },
    {
      icon: <AlertTriangle size={32} className="ch-icon ch-icon--amber" />,
      title: "Unpredictable quality across workers",
      description: "Inconsistent skill levels lead to variable output quality, making it difficult to maintain project standards and timelines."
    },
    {
      icon: <RefreshCw size={32} className="ch-icon ch-icon--blue" />,
      title: "Rework increases project costs",
      description: "Errors from unskilled labor require rework, directly impacting the bottom line through wasted materials and schedule delays."
    }
  ];

  // 🔹 Container (stagger)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // 🔹 Fade up
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // 🔹 Card animation
  const cardAnim = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // 🔹 Icon pop
  const iconAnim = {
    hidden: { scale: 0, rotate: -20 },
    show: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 12 }
    }
  };

  return (
    <section id="challenge" className="ch-section">
      <div className="container-custom">

        {/* Intro */}
        <motion.div
          className="ch-intro"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="ch-badge">
            The Problem
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="ch-heading text-3xl md:text-5xl"
          >
            The Employer Challenge
          </motion.h2>

          <motion.p variants={fadeUp} className="ch-subtext">
            Traditional hiring in industrial sectors relies on guesswork, leading to inefficiencies that cost time and money.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="ch-grid md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              whileHover={{ y: -10, scale: 1.02 }}
              className="ch-card group"
            >
              {/* Icon */}
              <motion.div
                variants={iconAnim}
                className="ch-icon-wrap"
              >
                {challenge.icon}
              </motion.div>

              {/* Content */}
              <h3 className="ch-card-title">{challenge.title}</h3>
              <p className="ch-card-desc">{challenge.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Challenges;
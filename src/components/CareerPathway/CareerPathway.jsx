import './CareerPathway.css';
import React from 'react';
import { motion } from "framer-motion";

const CareerPathway = () => {

  const steps = [
    { title: "Certified Skill", desc: "On-site competency verified" },
    { title: "Diploma-on-Experience", desc: "Skill credit toward qualification" },
    { title: "Degree Program", desc: "Academic pathway opened" },
    { title: "Advanced Specialist", desc: "Career progression enabled" },
  ];

  // 🔹 stagger
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 }
    }
  };

  // 🔹 fade up
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section className="cp-section">

      {/* 🌊 Background Radiance Blurs */}
      <motion.div
        className="cp-blur cp-blur--pink"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="cp-blur cp-blur--blue"
        animate={{ x: [0, -30, 30, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom cp-container">

        {/* Heading */}
        <motion.div
          className="cp-heading-block"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="cp-heading">
            CAREER PATHWAY
          </motion.h2>

          <motion.p variants={fadeUp} className="cp-subheading">
            LCP Progression Map
          </motion.p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="cp-desktop hidden lg:block">

          <svg className="cp-svg" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="glowLine" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ✨ Animated Path */}
            <motion.path
              d="M -50 450 C 300 450, 450 350, 600 250 C 750 150, 900 150, 1050 150"
              fill="none"
              stroke="url(#glowLine)"
              strokeWidth="10"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="cp-path"
            />
          </svg>

          {/* Pills */}
          <motion.div
            className="cp-pill cp-pill--entry"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            LCP Entry
          </motion.div>

          <motion.div
            className="cp-pill cp-pill--elite"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            Elite
          </motion.div>

          {/* Nodes */}
          {[1, 2, 3, 4].map((n, i) => (
            <motion.div
              key={n}
              className={`cp-node cp-node--${n}`}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.3 }}
            >
              <motion.div
                className="cp-dot"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>

              <div className={`cp-connector ${n % 2 === 0 ? 'cp-connector--down' : 'cp-connector--up'}`}></div>

              <motion.div
                className={`cp-card ${n % 2 === 0 ? 'cp-card--below' : 'cp-card--above'}`}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <h3 className="cp-card-title">{steps[i].title}</h3>
                <div className="cp-card-row">
                  <div className="cp-bullet"></div>
                  <p className="cp-card-desc">{steps[i].desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}

        </div>

        {/* Mobile Timeline */}
        <motion.div
          className="cp-mobile flex lg:hidden"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="cp-mobile-item"
              variants={fadeUp}
            >
              <motion.div
                className="cp-mobile-dot"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>

              <h3 className="cp-mobile-title">{step.title}</h3>

              <div className="cp-card-row">
                <div className="cp-bullet"></div>
                <p className="cp-card-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CareerPathway;
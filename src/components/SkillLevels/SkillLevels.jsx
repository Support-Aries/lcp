import './SkillLevels.css';
import React from 'react';
import { motion } from "framer-motion";
import { Zap, Wrench, Settings, Star } from 'lucide-react';

const SkillLevels = () => {

  const levels = [
    {
      level: "Level 1",
      title: "Helper",
      description: "Basic tasks under supervision",
      icon: <Zap size={24} />,
      colorKey: "blue"
    },
    {
      level: "Level 2",
      title: "Skilled Worker",
      description: "Independent execution",
      icon: <Wrench size={24} />,
      colorKey: "emerald"
    },
    {
      level: "Level 3",
      title: "Advanced",
      description: "Complex task capability",
      icon: <Settings size={24} />,
      colorKey: "amber"
    },
    {
      level: "Level 4",
      title: "Specialist",
      description: "Expert-level execution",
      icon: <Star size={24} />,
      colorKey: "rose"
    }
  ];

  // 🔹 stagger container
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
      transition: { duration: 0.7 }
    }
  };

  return (
    <section id="levels" className="sl-section">
      <div className="container-custom">

        {/* Intro */}
        <motion.div
          className="sl-intro"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="heading-md sl-heading">
            Progressive Skill Levels
          </motion.h2>

          <motion.p variants={fadeUp} className="sl-subtext">
            A clear, four-tier career pathway that motivates workers to improve and gives employers predictable capability.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="sl-grid sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {levels.map((level, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              className={`sl-card sl-card--${level.colorKey} group`}
              whileHover={{ y: -10, scale: 1.03, rotateX: 3, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* 🌊 Background blob animation */}
              <motion.div
                className="sl-card-blob"
                animate={{
                  x: [0, 10, -10, 0],
                  y: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>

              {/* 💥 Icon */}
              <motion.div
                className="sl-icon-wrap"
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                {level.icon}
              </motion.div>

              <div className="sl-level-label">{level.level}</div>
              <h3 className="sl-card-title">{level.title}</h3>
              <p className="sl-card-desc">{level.description}</p>

              {/* 🔵 Progress dots */}
              <div className="sl-dots">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`sl-dot ${i <= index ? 'sl-dot--active' : 'sl-dot--inactive'}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: i * 0.15,
                      type: "spring",
                      stiffness: 200
                    }}
                  ></motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillLevels;
import './InvestmentLogic.css';
import React from 'react';
import { motion } from "framer-motion";
import { IndianRupee } from 'lucide-react';

const InvestmentLogic = () => {

  const logics = [
    { cost: "₹1,000", comparator: "Less than 1 day rework" },
    { cost: "₹1,000", comparator: "Less than 1 HR interview" },
    { cost: "₹1,000", comparator: "Less than 1 safety incident" },
  ];

  // 🔹 container stagger
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 }
    }
  };

  // 🔹 smooth fade up (mobile-safe)
  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // 🔹 card animation (no X movement)
  const cardAnim = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="il-section">
      <div className="container-custom">

        <div className="il-grid lg:grid-cols-2">

          {/* Left Intro */}
          <motion.div
            className="il-intro"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="il-heading text-3xl md:text-5xl">
              The Investment Logic
            </h2>

            <p className="il-subtext">
              Certifying your workforce is not an expense. It's an investment with immediate, measurable returns.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className="il-cards"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {logics.map((logic, index) => (
              <motion.div
                key={index}
                variants={cardAnim}
                className="il-card"
                whileHover={{ y: -8, scale: 1.02, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 180, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >

                {/* Left */}
                <div className="il-card-left">

                  {/* 💥 Icon */}
                  <motion.div
                    className="il-icon-wrap"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 12,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <IndianRupee size={24} strokeWidth={2.5} />
                  </motion.div>

                  <span className="il-cost">{logic.cost}</span>
                </div>

                {/* Right */}
                <motion.div
                  className="il-comparator"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="il-is-label hidden sm:inline">is</span>
                  {logic.comparator}
                </motion.div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InvestmentLogic;
import './Industries.css';
import React from 'react';
import { motion } from "framer-motion";
import { Building2, Ship, Factory, Building, Hotel, HeartPulse } from 'lucide-react';

const Industries = () => {

  const industries = [
    {
      name: "Construction & EPC",
      desc: "End-to-end certification for heavy construction workforces.",
      icon: <Building2 size={22} />
    },
    {
      name: "Shipyards",
      desc: "Validating specialized skills for maritime vessel construction.",
      icon: <Ship size={22} />
    },
    {
      name: "Industrial Plants",
      desc: "Ensuring compliance and safety across manufacturing facilities.",
      icon: <Factory size={22} />
    },
    {
      name: "Facility Management",
      desc: "Standardizing service quality for large-scale operations.",
      icon: <Building size={22} />
    },
    {
      name: "Hospitality",
      desc: "Verifying operational excellence in customer-facing roles.",
      icon: <Hotel size={22} />
    },
    {
      name: "Healthcare",
      desc: "Maintaining rigorous standards for support and technical staff.",
      icon: <HeartPulse size={22} />
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
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="ind-section">
      <div className="container-custom">

        {/* Intro */}
        <motion.div
          className="ind-intro"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="ind-heading text-3xl md:text-5xl">
            Industries We Serve
          </motion.h2>

          <motion.p variants={fadeUp} className="ind-subtext">
            Certification frameworks adapted for the specific demands of diverse, heavy-duty sectors.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="ind-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {industries.map((ind, index) => {
            const isHighlighted = index === 1;

            return (
              <motion.div
                key={index}
                variants={cardAnim}
                className={`ind-card ${isHighlighted ? 'ind-card--dark' : 'ind-card--light'}`}
                whileHover={{ y: -10, scale: 1.03, rotateX: 3, rotateY: -3 }}
                transition={{ type: "spring", stiffness: 180, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >

                {/* 💥 Icon */}
                <motion.div
                  className="ind-icon-wrap"
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  animate={
                    isHighlighted
                      ? { y: [0, -6, 0] } // subtle floating for highlight
                      : {}
                  }
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                    repeat: isHighlighted ? Infinity : 0,
                    duration: 2
                  }}
                >
                  {ind.icon}
                </motion.div>

                <h3 className="ind-card-title">{ind.name}</h3>

                <p
                  className={`ind-card-desc ${
                    isHighlighted ? 'ind-card-desc--dark' : 'ind-card-desc--light'
                  }`}
                >
                  {ind.desc}
                </p>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Industries;
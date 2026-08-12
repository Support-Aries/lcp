import './Hero.css';
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import bannerVideo from '../../assets/videos/banner-video.mp4';
import Header from "../../container/Header/Header";

const Hero = () => {

  // 🔹 Container stagger
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // 🔹 Fade + slide up
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
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
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  return (
    <div className="hero-wrapper sm:p-4">

      <section className="hero-section">
        <Header />

        {/* 🎥 Background Video */}
        <motion.div 
          className="hero-video-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <video autoPlay loop muted playsInline className="hero-video">
            <source src={bannerVideo} type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
        </motion.div>

        <div className="container-custom hero-content mt-10 md:mt-20">
          <motion.div 
            className="hero-grid lg:grid-cols-12"
            variants={container}
            initial="hidden"
            animate="show"
          >

            {/* Left Content */}
            <div className="lg:col-span-7">

              <motion.div variants={fadeUp} className="hero-badge">
                <span className="hero-badge-tag">Labour Certification Program</span>
                <span className="hero-badge-link">
                  LCP<ArrowRight size={14} />
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeUp}
                className="hero-heading text-4xl md:text-6xl lg:text-[4.5rem]"
              >
                Employer-Driven Workforce Skill Validation
              </motion.h1>

              <motion.p 
                variants={fadeUp}
                className="hero-subtext text-lg md:text-xl"
              >
                Convert undocumented experience into verified skill — improving productivity, safety, and workforce stability.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeUp}
                className="hero-ctas flex-col sm:flex-row"
              >
                <motion.a 
                  href="https://wa.me/918714408777"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hero-btn hero-btn--primary w-full sm:w-auto group flex items-center justify-center"
                >
                  <span>Request Briefing</span>
                  <ArrowRight size={18} strokeWidth={2.5} className="hero-btn-arrow" />
                </motion.a>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hero-btn hero-btn--ghost w-full sm:w-auto group"
                >
                  <Download size={18} strokeWidth={2.5} className="hero-btn-download" />
                  <span>Download Brochure</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Card */}
            <div className="hero-card-col hidden lg:flex lg:col-span-5">
              <motion.div 
                variants={cardAnim}
                className="hero-card verification-card"
                whileHover={{ y: -8 }}
              >
                <div className="verification-icon-box">
                  <ShieldCheck size={32} strokeWidth={2} className="text-white" />
                  <div className="ping-ring"></div>
                </div>

                <div className="hero-card-text">
                  <div className="verification-status flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Status:
                    </span>
                    <span className="text-sm font-bold text-green-600 flex items-center gap-1">
                      Standard Approved <CheckCircle2 size={16} strokeWidth={2.5} />
                    </span>
                  </div>

                  <p className="hero-card-desc font-bold text-slate-900 text-lg mt-1 mb-1 leading-tight">
                    10,000+ Workers Certified
                  </p>

                  <p className="hero-card-desc text-slate-500 text-sm mt-1 leading-relaxed">
                    Empowering the workforce with globally recognized safety and compliance standards.
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 🔄 Circular Badge */}
      <motion.div 
        className="hero-circular-badge hidden sm:flex group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.svg 
          viewBox="0 0 100 100" 
          className="hero-circular-svg"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          <path id="circlePath" fill="none"
            d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
          />
          <text className="hero-circular-text">
            <textPath href="#circlePath">
              GET IN TOUCH • GET IN TOUCH •
            </textPath>
          </text>
        </motion.svg>

        <motion.div 
          className="hero-circular-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={32} className="hero-arrow-icon" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Hero;
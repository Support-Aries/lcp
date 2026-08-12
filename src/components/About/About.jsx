import './About.css';
import { useState, useEffect, useRef } from "react";
import abtImg from "../../assets/images/about/about.jpg"

const checkItems = [
  {
    title: "Structured Competency Validation",
    desc: "Maps workers based on real workplace performance and evaluates them through supervisor-driven assessment — level by level.",
  },
  {
    title: "Certified Professional Identity",
    desc: "All certifications are issued digitally through AIMRI Indivarsity, creating long-term career visibility and a permanent professional identity.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Workers Certified" },
  { value: "50+", label: "Industries Covered" },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section"
    >
      {/* Decorative background shape */}
      <div className="about-bg-shape" />
      {/* Accent corner teal shape (mimics reference) */}
      <div className="about-accent-corner" />

      <div className="about-container">
        <div className="about-content-wrap">

          {/* ── LEFT: Image block ── */}
          <div
            className="about-image-wrap"
            style={{
              transition: "opacity 0.8s ease, transform 0.8s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
            }}
          >
            {/* Main image frame with diagonal accent */}
            <div className="about-image-inner">
              {/* Teal diagonal accent behind image */}
              <div className="about-diagonal-dark" />
              <div className="about-diagonal-orange" />

              {/* Image placeholder (replace src with real image) */}
              <div className="about-img-box">
                <div className="about-img-frame">
                  <div className="text-center opacity-80 w-full h-full">
                    <img className="about-img-img" src={abtImg} alt="" />
                  </div>
                </div>
              </div>

            </div>

            {/* Mini stats row below image on mobile / tablet */}
            <div className="about-stats-mobile">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-bold about-stat-value">
                    {s.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider about-stat-label">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div
            className="about-text-wrap"
            style={{
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
            }}
          >
            {/* Label */}
            <div className="about-subtitle-wrap">
              <span className="about-subtitle-line" />
              <span className="about-subtitle-text">
                ABOUT LCP
              </span>
            </div>

            {/* Heading */}
            <h2 className="about-heading">
              What is the {" "}
              <span className="about-highlight">Labour Certification Program?</span>
            </h2>

            {/* Body paragraphs */}
            <div className="about-body-text">
              <p>
                The Labour Certification Program (LCP) is an employer-driven skill validation system designed to recognize the real skills of experienced workers.<br />
                Most companies rely heavily on experienced labour but lack structured documentation of worker capabilities.<br />
                LCP solves this by converting practical experience into documented skill certification.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import './Header.css';
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logo from '../../assets/images/logo/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="hd-nav md:px-12">
        <div className="hd-bar">
          {/* Logo */}
          <div className="hd-logo-wrap">
            <img src={logo} alt="LCP Logo" className="hd-logo" />
          </div>

          {/* Desktop Navigation Group */}
          <div className="hd-desktop-group hidden lg:flex">
            <div className="hd-links-pill">
              <a href="#about" className="hd-link">About Us</a>
              <a href="#challenge" className="hd-link">The Challenge</a>
              <a href="#how-it-works" className="hd-link">How It Works</a>
              <a href="#levels" className="hd-link">Skill Levels</a>
              <a href="#benefits" className="hd-link">Benefits</a>
              <a href="#contact" className="hd-link">Contact Us</a>
            </div>
          </div>

          {/* Mobile Nav Actions */}
          <div className="hd-mobile-actions flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="hd-hamburger"
            >
              <span className="hd-bar-line"></span>
              <span className="hd-bar-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="hd-overlay md:hidden">
          <div className="hd-drawer">
            <div className="hd-drawer-head">
              <div className="hd-drawer-logo-wrap">
                <img src={logo} alt="LCP Logo" className="hd-drawer-logo" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="hd-close-btn"
              >
                <X size={20} className="hd-close-icon" />
              </button>
            </div>

            <div className="hd-drawer-links">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hd-drawer-link">About Us</a>
              <a href="#challenge" onClick={() => setIsMobileMenuOpen(false)} className="hd-drawer-link">The Challenge</a>
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="hd-drawer-link">How It Works</a>
              <a href="#levels" onClick={() => setIsMobileMenuOpen(false)} className="hd-drawer-link">Skill Levels</a>
              <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)} className="hd-drawer-link">Benefits</a>
            </div>

            <div className="hd-drawer-footer">
              <button className="hd-contact-btn" onClick={() => { window.location.href='#contact'; setIsMobileMenuOpen(false); }}>Contact Us</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
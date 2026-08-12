import './Footer.css';
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/images/logo/logo.png';

const Footer = () => {
  return (
    <footer className="ft-footer">
      <div className="container-custom">
        <div className="ft-grid md:grid-cols-2 lg:grid-cols-3">

          <div className="ft-brand lg:col-span-1">
            <div className="ft-logo-wrap">
              <img src={logo} alt="LCP Logo" className="ft-logo" />
            </div>
            <p className="ft-tagline">
              Transforming traditional labour into a disciplined, professionally certified workforce aligned with global standards.
            </p>
          </div>

          <div>
            <h4 className="ft-col-heading">Contact Us</h4>
            <ul className="ft-contact-list">
              <li className="ft-contact-item ft-contact-item--top">
                <MapPin size={20} className="ft-contact-icon" />
                <span>1st Floor, BCG Residency Towers, Seaport - Airport Rd,<br />opp. CSEZ, Kakkanad, Kochi, Kerala 682037</span>
              </li>
              <li className="ft-contact-item">
                <Phone size={20} className="ft-contact-icon" />
                <span>+91 87144 08777</span>
              </li>
              <li className="ft-contact-item">
                <Mail size={20} className="ft-contact-icon" />
                <span>LCP@aimri.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="ft-col-heading">Follow Us</h4>
            <div className="ft-socials">
              <a href="https://www.instagram.com/labourcertificationprogram/" target="_blank" rel="noopener noreferrer" className="ft-social-btn" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://www.facebook.com/share/1FnYZ1c1Tp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="ft-social-btn" aria-label="Facebook"><FaFacebookF size={20} /></a>
              <a href="https://www.linkedin.com/company/labour-certification-program/" target="_blank" rel="noopener noreferrer" className="ft-social-btn" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </div>

        <div className="ft-bottom flex-col md:flex-row">
          <p style={{ textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} Labour Certification Program. All rights reserved. | Designed and developed by <a href="https://ariesesolutions.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Aries e-Solutions</a>
          </p>
          <div className="ft-legal-links">
            <a href="#" className="ft-legal-link">Privacy Policy</a>
            <a href="#" className="ft-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
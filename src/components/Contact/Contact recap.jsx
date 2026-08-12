import React from 'react';
import './Contact.css';
import { motion } from "framer-motion";
import { FaHeadset, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaLinkedinIn } from 'react-icons/fa';

const RECAPTCHA_SITE_KEY = '6LdxY8wsAAAAAM6rfPyiRtcSM61xnASf0KTGVxgg';
const RECAPTCHA_ACTION = 'contact_form';
const RECAPTCHA_SCRIPT_ID = 'recaptcha-enterprise-script';

const loadRecaptchaEnterprise = () => {
  if (window.grecaptcha?.enterprise) {
    return Promise.resolve(window.grecaptcha.enterprise);
  }

  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById(RECAPTCHA_SCRIPT_ID);

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.grecaptcha.enterprise), { once: true });
      existingScript.addEventListener('error', reject, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.grecaptcha.enterprise);
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const Contact = () => {
  const [formData, setFormData] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    country_code: '+971',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = React.useState({});
  const [recaptchaToken, setRecaptchaToken] = React.useState('');
  const [submitStatus, setSubmitStatus] = React.useState({ loading: false, success: false, message: '' });

  React.useEffect(() => {
    loadRecaptchaEnterprise().catch(() => {
      setErrors((currentErrors) => ({
        ...currentErrors,
        recaptcha: 'Unable to load reCAPTCHA. Please try again later.'
      }));
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if(errors[e.target.name]) {
        setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const clearRecaptchaToken = () => {
    setRecaptchaToken('');
  };

  const getRecaptchaToken = async () => {
    const enterprise = await loadRecaptchaEnterprise();

    return new Promise((resolve, reject) => {
      enterprise.ready(() => {
        enterprise
          .execute(RECAPTCHA_SITE_KEY, { action: RECAPTCHA_ACTION })
          .then(resolve)
          .catch(reject);
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearRecaptchaToken();

    let newErrors = {};
    if(!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if(!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if(!formData.email.trim()) {
        newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        newErrors.email = "Invalid email address";
    }
    if(!formData.phone.trim()) {
        newErrors.phone = "Phone is required";
    } else if (!/^[0-9+-\s]{7,15}$/.test(formData.phone)) {
        newErrors.phone = "Invalid phone number";
    }

    if(Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    setSubmitStatus({ loading: true, success: false, message: '' });

    try {
        const token = await getRecaptchaToken();
        setRecaptchaToken(token);

        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });
        formDataToSend.append('g-recaptcha-response', token);
        formDataToSend.append('recaptcha_token', token);
        formDataToSend.append('recaptcha_action', RECAPTCHA_ACTION);

        const response = await fetch("https://labourcertificationprogram.com/contact-action.php", {
            method: "POST",
            body: formDataToSend
        });

        const data = await response.json();

        if (data.status === "1" || data.status === 1) {
            setSubmitStatus({ loading: false, success: true, message: 'Message sent successfully!' });
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                country_code: '+971',
                phone: '',
                message: ''
            });
            clearRecaptchaToken();
            setTimeout(() => setSubmitStatus({ loading: false, success: false, message: '' }), 5000);
        } else {
            setSubmitStatus({ loading: false, success: false, message: data.message || 'Something went wrong. Please try again.' });
            clearRecaptchaToken();
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus({ loading: false, success: false, message: 'Failed to send message. Please try again later.' });
        setErrors((currentErrors) => ({
          ...currentErrors,
          recaptcha: 'Unable to verify reCAPTCHA. Please try again.'
        }));
        clearRecaptchaToken();
    }
  };

  // 🔹 stagger container
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 }
    }
  };

  // 🔹 fade up
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // 🔹 slide left/right
  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Title */}
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us
        </motion.h2>

        <div className="contact-card-wrapper">

          {/* LEFT SIDE - Form */}
          <motion.div
            className="contact-form-side"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3 variants={fadeUp} className="contact-subtitle">
              Send us a message
            </motion.h3>

            <motion.p variants={fadeUp} className="contact-desc">
              Do you have a question? A complaint? Or need any help to choose the right product from LCP. Feel free to contact us.
            </motion.p>

            <motion.form
              className="contact-form"
              action="https://labourcertificationprogram.com/contact-action.php"
              method="POST"
              variants={container}
              onSubmit={handleSubmit}
              noValidate
            >

              <div className="contact-row">
                <motion.div variants={fadeUp} className="contact-group">
                  <label>First Name <span style={{ color: 'var(--primary)' }}>*</span></label>
                  <input type="text" name="first_name" className="contact-input" placeholder="Enter your first name" value={formData.first_name} onChange={handleChange} />
                  {errors.first_name && <span className="error-text" style={{color: 'red', fontSize: '0.85rem', marginTop: '0.25rem'}}>{errors.first_name}</span>}
                </motion.div>

                <motion.div variants={fadeUp} className="contact-group">
                  <label>Last Name <span style={{ color: 'var(--primary)' }}>*</span></label>
                  <input type="text" name="last_name" className="contact-input" placeholder="Enter your Last name" value={formData.last_name} onChange={handleChange} />
                  {errors.last_name && <span className="error-text" style={{color: 'red', fontSize: '0.85rem', marginTop: '0.25rem'}}>{errors.last_name}</span>}
                </motion.div>
              </div>

              <div className="contact-row">
                <motion.div variants={fadeUp} className="contact-group">
                  <label>Email <span style={{ color: 'var(--primary)' }}>*</span></label>
                  <input type="email" name="email" className="contact-input" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                  {errors.email && <span className="error-text" style={{color: 'red', fontSize: '0.85rem', marginTop: '0.25rem'}}>{errors.email}</span>}
                </motion.div>

                <motion.div variants={fadeUp} className="contact-group">
                  <label>Contact Details <span style={{ color: 'var(--primary)' }}>*</span></label>
                  <div className="contact-phone-wrapper">
                    <select name="country_code" className="contact-phone-select" value={formData.country_code} onChange={handleChange}>
                      <option value="+971">+971</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                    </select>
                    <input type="tel" name="phone" className="contact-phone-input" placeholder="Enter your contact number" value={formData.phone} onChange={handleChange} />
                  </div>
                  {errors.phone && <span className="error-text" style={{color: 'red', fontSize: '0.85rem', marginTop: '0.25rem'}}>{errors.phone}</span>}
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="contact-group">
                <label>Message</label>
                <textarea name="message" className="contact-input contact-textarea" placeholder="Enter your message" value={formData.message} onChange={handleChange}></textarea>
              </motion.div>

              <div className="contact-recaptcha-field" aria-live="polite">
                <input type="hidden" name="recaptcha_action" value={RECAPTCHA_ACTION} />
                <input type="hidden" name="recaptcha_token" value={recaptchaToken} readOnly />
                <p className="contact-recaptcha-note">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
                {errors.recaptcha && <span className="error-text recaptcha-error-text">{errors.recaptcha}</span>}
              </div>

              <motion.div
                variants={fadeUp}
                className="contact-submit-wrapper"
              >
                <motion.button
                  type="submit"
                  className="contact-submit-btn"
                  whileHover={!submitStatus.loading ? { scale: 1.05 } : {}}
                  whileTap={!submitStatus.loading ? { scale: 0.95 } : {}}
                  disabled={submitStatus.loading}
                  style={{ opacity: submitStatus.loading ? 0.7 : 1, cursor: submitStatus.loading ? 'not-allowed' : 'pointer' }}
                >
                  {submitStatus.loading ? 'Sending...' : 'Send a Message'}
                </motion.button>
                {submitStatus.message && (
                  <div className={`contact-submit-message ${submitStatus.success ? 'success' : 'error'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </motion.div>

            </motion.form>
          </motion.div>

          {/* RIGHT SIDE - Info Panel */}
          <motion.div
            className="contact-info-panel"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            animate={{ y: [0, -6, 0] }} // subtle floating
            transition={{ duration: 4, repeat: Infinity }}
          >

            <h3 className="contact-info-title">
              Hi! We are always here to help you.
            </h3>

            <div className="contact-info-blocks">

              {[
                { icon: <FaHeadset size={20} />, label: "Hotline:", value: "+91 87144 08777" },
                { icon: <FaWhatsapp size={20} />, label: "SMS / Whatsapp", value: "+91 87144 08777" },
                { icon: <FaEnvelope size={20} />, label: "Email:", value: "LCP@aimri.in" },
                {
                  icon: <FaMapMarkerAlt size={20} />,
                  label: "Location:",
                  value: `1st Floor, BCG Residency Towers,
                    Seaport - Airport Rd, opp. CSEZ,
                    Kakkanad, Kochi, Kerala 682037`
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="contact-info-block"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <motion.div
                    className="contact-info-icon"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>

                  <div className="contact-info-text-group">
                    <span className="contact-info-label">{item.label}</span>
                    <span className="contact-info-value">{item.value}</span>
                  </div>
                </motion.div>
              ))}

            </div>

            {/* Social */}
            <div className="contact-social-section">
              <h4 className="contact-social-title">Connect with us</h4>

              <div className="contact-social-links">
                {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="contact-social-link"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

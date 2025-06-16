import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Profile', to: '/profile' },
    { label: 'Settings', to: '/settings' },
  ];

  const contactInfo = [
    { icon: faEnvelope, text: 'support@myapp.com' },
    { icon: faPhone, text: '+1 (555) 123-4567' },
    { icon: faMapMarkerAlt, text: '123 App Street, Tech City' },
  ];

  const socialLinks = [
    { icon: faTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: faFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: faLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="footer-link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            {contactInfo.map((info, index) => (
              <li key={index} className="footer-contact-item">
                <FontAwesomeIcon icon={info.icon} className="footer-icon" />
                <span>{info.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
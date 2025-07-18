import React from 'react';
import './Footer.css'; // Optional for extra styles if needed

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm text-gray-300">
          {/* Column 1 */}
          <div>
            <h3 className="footer-heading">Lift Media</h3>
            <ul className="footer-list">
              <li>Pricing</li>
              <li>Updates</li>
              <li>Beta</li>
              <li>Newsletter</li>
              <li>Collaborations</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="footer-heading">Product</h3>
            <ul className="footer-list">
              <li>Business</li>
              <li>Designers</li>
              <li>Classrooms</li>
              <li>Newcomers</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="footer-heading">Learning</h3>
            <ul className="footer-list">
              <li>Learn Hub</li>
              <li>Manuals</li>
              <li>Tutorials</li>
              <li>Communities</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-list">
              <li>Tutorials</li>
              <li>Editorials</li>
              <li>Product</li>
              <li>Newsroom</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="footer-heading">About</h3>
            <ul className="footer-list">
              <li>Company</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="footer-logo-section">
          <img
            src="/logo.svg"
            alt="Lift Logo"
            className="h-10 mx-auto mb-4"
          />
          <p className="text-gray-400 text-sm">© 2020 Lift Media. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="footer-social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fas fa-phone"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

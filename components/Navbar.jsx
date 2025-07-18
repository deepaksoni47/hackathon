// components/Navbar.jsx

'use client';
import Link from 'next/link';
import { useState } from 'react';
import './Navbar.css'; // Importing CSS file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Features', href: '/features' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          🚀 HackathonApp
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="navbar-link">
              {item.label}
            </Link>
          ))}
          <Link href="/login">
            <button className="navbar-login-btn">Login</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="navbar-menu mobile-menu">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="navbar-link">
              {item.label}
            </Link>
          ))}
          <Link href="/login">
            <button className="navbar-login-btn full-width">Login</button>
          </Link>
        </div>
      )}
    </nav>
  );
}

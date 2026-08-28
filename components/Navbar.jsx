"use client";

import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Arjumand's PTV Salon"
        >
          <span className="logo-main">
            ARJUMAND&apos;S
          </span>

          <span className="logo-sub">
            PTV SALON
          </span>
        </a>


        {/* Navigation */}

        <nav
          className={`navbar-links ${
            menuOpen ? "active" : ""
          }`}
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          {/* Single Appointment Button */}

          <a
            href="#appointment"
            className="navbar-appointment"
            onClick={closeMenu}
          >
            <span>BOOK</span>
            APPOINTMENT
            <b>↗</b>
          </a>
        </nav>


        {/* Mobile Menu Button */}

        <button
          type="button"
          className={`navbar-toggle ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}
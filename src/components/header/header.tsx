"use client";

import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import "./header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header id="page-header" role="banner">
      <div id="skip-link">
        <a href="#about">Skip to Main Content</a>
      </div>
      <nav aria-label="Main navigation">
        <button
          id="menu-button"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>
          {isMenuOpen ? <IoMdClose aria-hidden="true" /> : <IoMdMenu aria-hidden="true" />}
        </button>
        <div id="primary-navigation" className={isMenuOpen ? "nav-links open" : "nav-links"}>
          <a className="nav-item" href="#about" onClick={closeMenu}>
            Home
          </a>
          <a className="nav-item" href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a className="nav-item" href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a className="nav-item" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

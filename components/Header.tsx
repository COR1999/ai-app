"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Clean Name */}
          <Link href="/" className="flex items-center group">
            <div className="text-left">
              <h1 className="text-2xl sm:text-3xl font-bold transition-all duration-300 group-hover:scale-105 text-primary">
                Cian O'Rourke
              </h1>
              <p className="text-sm sm:text-base font-medium text-text-secondary">
                Full Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="font-medium transition-colors duration-300 relative group text-text-primary hover:text-primary"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/projects"
              className="font-medium transition-colors duration-300 relative group text-text-primary hover:text-primary"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/skills"
              className="font-medium transition-colors duration-300 relative group text-text-primary hover:text-primary"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="font-medium transition-colors duration-300 relative group text-text-primary hover:text-primary"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="font-medium transition-colors duration-300 relative group text-text-primary hover:text-primary"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60 pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-3 pt-4 border-t border-neutral/30">
            <Link
              href="/"
              className="font-medium py-2 px-4 rounded-lg transition-all duration-300 text-text-primary hover:text-primary hover:bg-neutral/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="font-medium py-2 px-4 rounded-lg transition-all duration-300 text-text-primary hover:text-primary hover:bg-neutral/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="font-medium py-2 px-4 rounded-lg transition-all duration-300 text-text-primary hover:text-primary hover:bg-neutral/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/about"
              className="font-medium py-2 px-4 rounded-lg transition-all duration-300 text-text-primary hover:text-primary hover:bg-neutral/10"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-medium py-2 px-4 rounded-lg transition-all duration-300 text-text-primary hover:text-primary hover:bg-neutral/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
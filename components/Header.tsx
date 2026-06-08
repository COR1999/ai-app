/**
 * HEADER COMPONENT
 * 
 * Main navigation component that provides:
 * - Responsive navigation across all device sizes
 * - Desktop horizontal menu with hover animations
 * - Mobile hamburger menu with smooth slide animations
 * - Sticky positioning for persistent navigation
 * - Personal branding with name and title
 * - Custom color scheme integration using Tailwind
 * 
 * Features:
 * - Full width header that stretches across screen
 * - Logo section with name and professional title
 * - Desktop navigation with underline hover effects
 * - Mobile menu with animated hamburger icon
 * - Automatic menu closing when links are clicked
 * - Responsive padding and typography
 */

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { navigationItems } from '@/constants/navigation';
import { PERSONAL_INFO } from '@/constants/personal-info';

const Header: React.FC = () => {
  /**
   * STATE MANAGEMENT
   * Controls the visibility of the mobile navigation menu
   * - false: Menu is closed (default state)
   * - true: Menu is open and visible
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * MOBILE MENU TOGGLE FUNCTION
   * Toggles the mobile menu between open and closed states
   * Used by the hamburger button to show/hide navigation
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 w-full">
      {/* HEADER CONTENT CONTAINER */}
      {/* Responsive padding: tight on mobile, wider on larger screens */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* MAIN HEADER LAYOUT */}
        {/* Flexbox layout: logo on left, navigation on right */}
        {/* Responsive padding: smaller on mobile for space efficiency */}
        <div className="flex justify-between items-center py-3 sm:py-4">
          
          {/* LOGO/BRAND SECTION */}
          {/* Clickable logo that links to homepage */}
          {/* Group hover effect makes entire logo area interactive */}
          <Link href="/" className="flex items-center group">
            <div className="text-left">
              {/* MAIN NAME/TITLE */}
              {/* Responsive text sizing: smaller on mobile, larger on desktop */}
              {/* Hover effect: slight scale increase for interactivity */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-300 group-hover:scale-105 text-primary">
                {PERSONAL_INFO.name}
              </h1>
              {/* PROFESSIONAL SUBTITLE */}
              {/* Shows role/title below name */}
              {/* Responsive sizing and muted color for hierarchy */}
              <p className="text-xs sm:text-sm lg:text-base font-medium text-text-secondary">
                {PERSONAL_INFO.title}
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION MENU */}
          {/* Hidden on mobile (md:flex), visible on medium screens and up */}
          {/* Horizontal layout with consistent spacing */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium transition-colors duration-300 relative group text-text-primary hover:text-primary"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
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
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-3 pt-4 border-t border-neutral/30">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium py-2 px-4 rounded-lg transition-all duration-300 text-text-primary hover:text-primary hover:bg-neutral/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
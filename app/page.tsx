/**
 * HOMEPAGE COMPONENT
 * 
 * This is the main landing page that introduces visitors to the portfolio.
 * Features a centered hero layout with gradient background, personal introduction,
 * current role highlight, call-to-action buttons, stats, and scroll indicator.
 */

"use client";
import Link from 'next/link';

export default function HomePage() {
  return (
    // Main container with full screen height and gradient background
    <div className="min-h-screen bg-gradient-to-br from-background-secondary via-white to-accent-light flex items-center justify-center">
      
      {/* Content wrapper with responsive container and centered text */}
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* WELCOME SECTION - Main hero content */}
        <div className="mb-8">
          
          {/* Main headline with large text and gradient accent */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-primary">
            Welcome to My 
            {/* Portfolio text with gradient effect using text-transparent and bg-clip-text */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Portfolio
            </span>
          </h1>
          
          {/* Personal introduction section */}
          <div className="max-w-2xl mx-auto mb-8">
            {/* Name introduction with highlighted name */}
            <p className="text-2xl mb-4 text-text-primary">
              Hi, I&apos;m <span className="font-semibold text-primary">Cian O&apos;Rourke</span>
            </p>
            {/* Professional description */}
            <p className="text-lg leading-relaxed text-text-secondary">
              Full Stack Developer passionate about creating exceptional web experiences. 
              Currently building innovative solutions with modern technologies and frameworks.
            </p>
          </div>

          {/* CURRENT ROLE CARD - Highlighted information card */}
          <div className="backdrop-blur-sm rounded-xl p-6 shadow-lg border mb-8 max-w-lg mx-auto bg-background-card border-neutral/30">
            
            {/* Status indicator with animated pulse dot */}
            <div className="flex items-center justify-center mb-3">
              <div className="w-3 h-3 rounded-full mr-3 animate-pulse bg-secondary"></div>
              <span className="text-sm font-medium uppercase tracking-wide text-text-light">Current Role</span>
            </div>
            
            {/* Job title */}
            <h2 className="text-xl font-bold text-primary">
              Full Stack Developer
            </h2>
            
            {/* Job description */}
            <p className="mt-2 text-text-secondary">
              Specializing in React, Next.js, and modern web technologies
            </p>
          </div>

          {/* CALL-TO-ACTION BUTTONS - Primary navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            {/* Primary CTA - View Projects (filled button with gradient) */}
            <Link
              href="/projects"
              className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-gunmetal"
            >
              View My Projects
            </Link>
            
            {/* Secondary CTA - About Page (outlined button) */}
            <Link
              href="/about"
              className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Learn More About Me
            </Link>
          </div>
        </div>

        {/* QUICK STATS SECTION - Achievement highlights in grid layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          
          {/* Stat 1: Technologies */}
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-secondary">5+</div>
            <div className="text-text-light">Technologies Mastered</div>
          </div>
          
          {/* Stat 2: Countries */}
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-secondary">3+</div>
            <div className="text-text-light">Countries Worked In</div>
          </div>
          
          {/* Stat 3: Passion (infinity symbol) */}
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-secondary">∞</div>
            <div className="text-text-light">Passion for Learning</div>
          </div>
        </div>

        {/* SCROLL INDICATOR - Animated indicator encouraging exploration */}
        <div className="mt-16">
          <div className="flex flex-col items-center">
            
            {/* "Explore More" text */}
            <span className="text-sm mb-2 text-text-light">Explore More</span>
            
            {/* Mouse scroll indicator with animated dot */}
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
              <div className="w-1 h-3 rounded-full mt-2 animate-bounce bg-accent"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}



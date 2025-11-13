/**
 * ABOUT PAGE COMPONENT
 * 
 * Comprehensive about page featuring:
 * - Hero section with personal introduction and visual elements
 * - Timeline showcasing journey from culinary arts to software development
 * - Skills intersection section comparing kitchen vs coding skills
 * - Personal interests and current projects
 * - Call-to-action section for collaboration
 */

"use client";

import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    // Main page container with light background
    <div className="min-h-screen bg-background-secondary">
      {/* HERO SECTION - Split layout with text content and visual elements */}
      <section className="py-8 sm:py-12 lg:py-20 relative overflow-hidden">
        
        {/* Subtle gradient background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-secondary via-white to-accent-light opacity-60"></div>
        
        {/* Main content container */}
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          
          {/* Two-column grid layout for desktop, stacked on mobile */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* LEFT COLUMN - Text Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              
              {/* Introduction section with greeting badge */}
              <div className="space-y-3 sm:space-y-4">
                
                {/* Greeting badge with emoji and friendly message */}
                <div className="inline-block">
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                    👋 Nice to meet you
                  </span>
                </div>
                
                {/* Main heading with gradient name effect */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                  I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Cian O&apos;Rourke</span>
                </h1>
                
                {/* Personal introduction paragraph */}
                <p className="text-base sm:text-lg lg:text-xl text-text-primary leading-relaxed">
                  A qualified Full Stack Developer with a Diploma in Software Development from Code Institute. 
                  I&apos;m a versatile, task-oriented individual who enjoys working within a team to achieve challenging objectives. 
                  Having trained as a chef and barman in award-winning Dublin restaurants, I bring unique skills in stress management, 
                  team organization, and working under tight deadlines to the world of software development.
                </p>
              </div>
              
              {/* QUICK STATS - Three-column achievement highlights */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 py-4 sm:py-6 lg:py-8">
                
                {/* Stat 1: Years of coding experience */}
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">5+</div>
                  <div className="text-text-secondary text-xs sm:text-sm">Years Coding</div>
                </div>
                
                {/* Stat 2: International experience */}
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">3+</div>
                  <div className="text-text-secondary text-xs sm:text-sm">Countries</div>
                </div>
                
                {/* Stat 3: Passion indicator */}
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">∞</div>
                  <div className="text-text-secondary text-xs sm:text-sm">Passion</div>
                </div>
              </div>
              
              {/* CALL-TO-ACTION BUTTONS - Primary and secondary actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                
                {/* Primary button - View work (filled gradient button) */}
                <button className="bg-gradient-to-r from-primary to-primary-light text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  View My Work
                </button>
                
                {/* Secondary button - Contact (outlined button) */}
                <button className="border-2 border-secondary text-secondary px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-secondary hover:text-white transition-all duration-300 text-sm sm:text-base">
                  Get In Touch
                </button>
              </div>
            </div>
            
            {/* RIGHT COLUMN - Visual Elements */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                
                {/* MAIN PROFILE CIRCLE - Large circular element with gradient background */}
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-secondary via-accent to-neutral relative overflow-hidden shadow-2xl mx-auto">
                  
                  {/* Profile photo with overlay */}
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    <Image
                      src="/images/about/cianheadshotNew.jpg"
                      alt="Cian O'Rourke - Full Stack Developer and Chef"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    
                    {/* Overlay with title and subtitle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end justify-center pb-6">
                      <div className="text-center text-white">
                        <div className="text-lg font-semibold">Developer</div>
                        <div className="text-sm opacity-90">& Chef</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* FLOATING SKILL CARDS - Small cards positioned around the main circle */}
                
                {/* React skill card (top-right) */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-neutral/20">
                  <div className="text-2xl">⚛️</div>
                  <div className="text-xs text-text-secondary mt-1">React</div>
                </div>
                
                {/* Chef skill card (bottom-left) */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-neutral/20">
                  <div className="text-2xl">👨‍🍳</div>
                  <div className="text-xs text-text-secondary mt-1">Chef</div>
                </div>
                
                {/* Rocket icon (middle-right) */}
                <div className="absolute top-1/2 -right-8 bg-white p-3 rounded-xl shadow-lg border border-neutral/20">
                  <div className="text-xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE SECTION - Visual timeline showing career progression */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          
          {/* Section header with title and description */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">My Journey</h2>
            <p className="text-base sm:text-lg lg:text-xl text-text-primary max-w-2xl mx-auto">
              From professional kitchens to coding bootcamps, every experience has shaped my approach to development
            </p>
          </div>
          
          {/* Mobile: Simple cards, Desktop: Timeline */}
          <div className="block sm:hidden space-y-4">
            {/* Mobile Cards Layout */}
            <div className="bg-secondary/10 p-4 rounded-xl border border-secondary/20">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">👨‍🍳</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary">Professional Kitchen</h3>
                  <p className="text-xs text-secondary font-medium">2021-2025</p>
                </div>
              </div>
              <p className="text-xs text-text-primary">Award-winning Dublin restaurants - managed teams and high-pressure environments.</p>
            </div>
            
            <div className="bg-accent/10 p-4 rounded-xl border border-accent/20">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">🎓</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary">Software Development</h3>
                  <p className="text-xs text-accent font-medium">2019-2020</p>
                </div>
              </div>
              <p className="text-xs text-text-primary">Code Institute diploma with focus on full-stack development and problem-solving.</p>
            </div>
            
            <div className="bg-neutral/10 p-4 rounded-xl border border-neutral/20">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-neutral rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">💻</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary">Dual Career Path</h3>
                  <p className="text-xs text-neutral font-medium">2021-2025</p>
                </div>
              </div>
              <p className="text-xs text-text-primary">Maintained coding skills through private projects while working as a professional chef.</p>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden sm:block relative">
            
            {/* VERTICAL TIMELINE LINE - Centered on desktop */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-secondary via-accent to-neutral"></div>
            
            {/* TIMELINE ITEMS - Desktop alternating layout */}
            <div className="space-y-8 lg:space-y-12">
              
              {/* TIMELINE ITEM 1 - Professional Kitchen Experience */}
              <div className="relative">
                
                {/* Mobile: Left aligned, Desktop: Right aligned */}
                <div className="ml-12 sm:w-1/2 sm:pr-8 sm:text-right sm:ml-auto">
                  <div className="bg-secondary/10 p-4 sm:p-6 lg:p-8 rounded-xl border border-secondary/20">
                    
                    {/* Title with icon */}
                    <div className="flex justify-end items-center mb-4">
                      <h3 className="text-2xl font-bold text-primary mr-4">Professional Kitchen Experience</h3>
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-xl">👨‍🍳</span>
                      </div>
                    </div>
                    
                    {/* Date label */}
                    <div className="text-sm font-semibold text-secondary mb-2">2021-2025</div>
                    {/* Description */}
                    <p className="text-text-primary">
                      Trained as chef and barman in award-winning Dublin restaurants Crudo and Achara. 
                      Managed kitchen teams, supply orders, and delivered high-quality results under tight deadlines.
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot - centered on the timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Empty space on the right */}
                <div className="w-1/2 pl-8"></div>
              </div>
              
              {/* Item 2 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-accent/10 p-8 rounded-xl border border-accent/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                        <span className="text-xl">🎓</span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary">Software Development Diploma</h3>
                    </div>
                    {/* Date label */}
                    <div className="text-sm font-semibold text-accent mb-2">2019-2020</div>
                    <p className="text-text-primary">
                      Completed Diploma in Software Development at Code Institute during Covid. 
                      Gained broad skills in technical, problem-solving and communications domains through four focused projects.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-neutral/10 p-8 rounded-xl border border-neutral/20">
                    <div className="flex justify-end items-center mb-4">
                      <h3 className="text-2xl font-bold text-primary mr-4">Culinary to Code</h3>
                      <div className="w-12 h-12 bg-neutral rounded-full flex items-center justify-center">
                        <span className="text-xl">💻</span>
                      </div>
                    </div>
                    {/* Date label */}
                    <div className="text-sm font-semibold text-neutral mb-2">2021-2025</div>
                    <p className="text-text-primary">
                      After completing my diploma during Covid when few organisations were hiring junior developers, 
                      I gained invaluable experience in award-winning restaurants while staying passionate about my software career.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neutral rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS INTERSECTION SECTION - Comparing culinary skills to coding skills */}
      <section className="py-20 bg-gradient-to-br from-background-secondary to-accent/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Where Culinary Meets Code</h2>
            <p className="text-xl text-text-primary max-w-3xl mx-auto">
              The skills I learned in professional kitchens translate perfectly to software development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-secondary">From the Kitchen</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Stress Management</h4>
                    <p className="text-text-secondary">Managing kitchen teams and multiple orders during dinner rush in award-winning restaurants taught me to handle tight deadlines and complex requirements effectively.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Attention to Detail</h4>
                    <p className="text-text-secondary">Every garnish matters in plating, just like every semicolon matters in code.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Team Organization</h4>
                    <p className="text-text-secondary">Running kitchen teams in professional environments taught me to organize teams effectively, delegate tasks, and ensure seamless collaboration under pressure.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-accent">To the Code</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Agile Development</h4>
                    <p className="text-text-secondary">Quick iterations, rapid problem-solving, and delivering quality under tight timelines.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Clean Code</h4>
                    <p className="text-text-secondary">Writing maintainable, readable code with the same precision I brought to food presentation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">👥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Cross-functional Teams</h4>
                    <p className="text-text-secondary">Working effectively with designers, product managers, and stakeholders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL INTERESTS SECTION - Beyond professional work */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 sm:mb-8">Beyond the Screen</h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base lg:text-lg text-text-primary leading-relaxed">
                  After completing my software development diploma, I continued to work on small private projects 
                  while working full-time as a chef. This dual approach allowed me to maintain and grow my 
                  technical skills while gaining invaluable experience in high-pressure professional environments.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-text-primary leading-relaxed">
                  When I&apos;m not crafting code, you&apos;ll find me experimenting with new recipes, 
                  exploring local food markets, or planning my next culinary adventure. 
                  Whether I&apos;m debugging a complex algorithm or perfecting a new dish, 
                  I approach every challenge with curiosity, creativity, and persistence.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-4 sm:p-6 lg:p-8 rounded-2xl">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="text-3xl sm:text-4xl">🐟</div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary">Current Obsession</h3>
                  <p className="text-sm sm:text-base text-text-secondary">
                    I love working with fish and learning about all the different ways 
                    you can use fish and fish butchery techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
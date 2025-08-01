"use client";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-secondary via-white to-accent-light flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-primary">
            Welcome to My 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Portfolio
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-2xl mb-4 text-text-primary">
              Hi, I'm <span className="font-semibold text-primary">Cian O'Rourke</span>
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              Full Stack Developer passionate about creating exceptional web experiences. 
              Currently building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Current Role */}
          <div className="backdrop-blur-sm rounded-xl p-6 shadow-lg border mb-8 max-w-lg mx-auto bg-background-card border-neutral/30">
            <div className="flex items-center justify-center mb-3">
              <div className="w-3 h-3 rounded-full mr-3 animate-pulse bg-secondary"></div>
              <span className="text-sm font-medium uppercase tracking-wide text-text-light">Current Role</span>
            </div>
            <h2 className="text-xl font-bold text-primary">
              Full Stack Developer
            </h2>
            <p className="mt-2 text-text-secondary">
              Specializing in React, Next.js, and modern web technologies
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-gunmetal"
            >
              View My Projects
            </Link>
            
            <Link
              href="/about"
              className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Learn More About Me
            </Link>
          </div>
        </div>

        {/* Optional: Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-secondary">5+</div>
            <div className="text-text-light">Technologies Mastered</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-secondary">3+</div>
            <div className="text-text-light">Countries Worked In</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-secondary">∞</div>
            <div className="text-text-light">Passion for Learning</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 text-text-light">Explore More</span>
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
              <div className="w-1 h-3 rounded-full mt-2 animate-bounce bg-accent"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}



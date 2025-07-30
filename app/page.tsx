 "use client" 
import Image from "next/image"
import { ReactNode } from 'react'
import Footer from "@/components/Footer"
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center" style={{
      background: 'linear-gradient(135deg, #f8f5f7 0%, #ffffff 50%, #f5f0f3 100%)'
    }}>
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: '#2e6171' }}>
            Welcome to My 
            <span className="block text-transparent bg-clip-text" style={{
              background: 'linear-gradient(135deg, #2e6171, #b79fad)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text'
            }}>
              Portfolio
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-2xl mb-4" style={{ color: '#556f7a' }}>
              Hi, I'm <span className="font-semibold" style={{ color: '#2e6171' }}>Cian O'Rourke</span>
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#798086' }}>
              Full Stack Developer passionate about creating exceptional web experiences. 
              Currently building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Current Role */}
          <div className="backdrop-blur-sm rounded-xl p-6 shadow-lg border mb-8 max-w-lg mx-auto" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgba(183, 159, 173, 0.3)'
          }}>
            <div className="flex items-center justify-center mb-3">
              <div className="w-3 h-3 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#b79fad' }}></div>
              <span className="text-sm font-medium uppercase tracking-wide" style={{ color: '#798086' }}>Current Role</span>
            </div>
            <h2 className="text-xl font-bold" style={{ color: '#2e6171' }}>
              Full Stack Developer
            </h2>
            <p className="mt-2" style={{ color: '#556f7a' }}>
              Specializing in React, Next.js, and modern web technologies
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #2e6171, #556f7a)',
                ':hover': {
                  background: 'linear-gradient(135deg, #1f4a56, #445862)'
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1f4a56, #445862)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #2e6171, #556f7a)';
              }}
            >
              View My Projects
            </Link>
            
            <Link
              href="/about"
              className="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300"
              style={{
                borderColor: '#2e6171',
                color: '#2e6171'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2e6171';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#2e6171';
              }}
            >
              Learn More About Me
            </Link>
          </div>
        </div>

        {/* Optional: Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#b79fad' }}>5+</div>
            <div style={{ color: '#798086' }}>Technologies Mastered</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#b79fad' }}>3+</div>
            <div style={{ color: '#798086' }}>Countries Worked In</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#b79fad' }}>∞</div>
            <div style={{ color: '#798086' }}>Passion for Learning</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2" style={{ color: '#798086' }}>Explore More</span>
            <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#b79fad' }}>
              <div className="w-1 h-3 rounded-full mt-2 animate-bounce" style={{ backgroundColor: '#b79fad' }}></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


